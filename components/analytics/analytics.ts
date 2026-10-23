import type { Locale } from '@/content/site';

export const ANALYTICS_CONSENT_KEY = 'doit4jesus.analytics-consent';
export const ANALYTICS_CONSENT_VERSION = 1;
export const ANALYTICS_CONSENT_DURATION_MS = 365 * 24 * 60 * 60 * 1000;

export type AnalyticsConsent = 'granted' | 'denied';
export type AnalyticsPageType = 'home' | 'feature_hub' | 'seo_landing' | 'about' | 'legal' | 'not_found';

export type AnalyticsEventName =
  | 'signup_handoff'
  | 'login_handoff'
  | 'app_open_handoff'
  | 'navigation_click'
  | 'language_switch'
  | 'related_content_click'
  | 'faq_open'
  | 'social_click'
  | 'contact_click'
  | 'not_found_recovery';

export type AnalyticsPageContext = {
  content_language: Locale;
  page_id: string;
  page_type: AnalyticsPageType;
};

type StoredConsent = {
  choice: AnalyticsConsent;
  expiresAt: number;
  version: number;
};

const discoveryPages = new Set([
  'catholic-prayer-app',
  'gamified-rosary-app',
  'rosary-tracker-app',
  'examination-of-conscience-app',
]);

export function isValidMeasurementId(value: string | undefined): value is string {
  return typeof value === 'string' && /^G-[A-Z0-9]+$/i.test(value.trim());
}

export function analyticsContextForPathname(pathname: string): AnalyticsPageContext {
  const normalizedPath = `/${pathname.split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, '')}`;
  const content_language: Locale = normalizedPath === '/es' || normalizedPath.startsWith('/es/') ? 'es' : 'en';
  const localizedPath = content_language === 'es' ? normalizedPath.replace(/^\/es(?=\/|$)/, '') || '/' : normalizedPath;
  const pageId = localizedPath.replace(/^\//, '') || 'home';

  if (pageId === 'home') return { content_language, page_id: 'home', page_type: 'home' };
  if (pageId === 'features') return { content_language, page_id: pageId, page_type: 'feature_hub' };
  if (pageId === 'about') return { content_language, page_id: pageId, page_type: 'about' };
  if (pageId === 'terms-of-service' || pageId === 'privacy-policy') {
    return { content_language, page_id: pageId, page_type: 'legal' };
  }
  if (discoveryPages.has(pageId)) return { content_language, page_id: pageId, page_type: 'seo_landing' };

  return { content_language, page_id: 'not_found', page_type: 'not_found' };
}

export function readStoredConsent(storage: Pick<Storage, 'getItem' | 'removeItem'>, now = Date.now()): AnalyticsConsent | null {
  try {
    const rawValue = storage.getItem(ANALYTICS_CONSENT_KEY);
    if (!rawValue) return null;

    const value = JSON.parse(rawValue) as Partial<StoredConsent>;
    const isChoiceValid = value.choice === 'granted' || value.choice === 'denied';
    if (!isChoiceValid || value.version !== ANALYTICS_CONSENT_VERSION || typeof value.expiresAt !== 'number' || value.expiresAt <= now) {
      storage.removeItem(ANALYTICS_CONSENT_KEY);
      return null;
    }

    return value.choice as AnalyticsConsent;
  } catch {
    storage.removeItem(ANALYTICS_CONSENT_KEY);
    return null;
  }
}

export function writeStoredConsent(storage: Pick<Storage, 'setItem'>, choice: AnalyticsConsent, now = Date.now()) {
  const value: StoredConsent = {
    choice,
    expiresAt: now + ANALYTICS_CONSENT_DURATION_MS,
    version: ANALYTICS_CONSENT_VERSION,
  };

  try {
    storage.setItem(ANALYTICS_CONSENT_KEY, JSON.stringify(value));
  } catch {
    // Analytics consent still applies for the current page when storage is unavailable.
  }
}

export function clearAnalyticsCookies(documentRef: Pick<Document, 'cookie'>, hostname = '') {
  const cookieNames = documentRef.cookie
    .split(';')
    .map((cookie) => cookie.split('=', 1)[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));
  const domains = Array.from(new Set(['', hostname, '.doitforjesus.com']));

  for (const name of cookieNames) {
    for (const domain of domains) {
      documentRef.cookie = `${name}=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`;
    }
  }
}

export function reachedProgressThresholds(progress: number, sent: ReadonlySet<number>): number[] {
  return [25, 50, 75].filter((threshold) => progress >= threshold && !sent.has(threshold));
}

export function eventParametersForElement(element: HTMLElement, pathname: string) {
  return {
    ...analyticsContextForPathname(pathname),
    interaction_id: element.dataset.analyticsId ?? 'unknown',
    placement: element.dataset.analyticsPlacement ?? 'unknown',
    target_id: element.dataset.analyticsTarget ?? 'unknown',
  };
}
