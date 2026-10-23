import {
  ANALYTICS_CONSENT_DURATION_MS,
  ANALYTICS_CONSENT_KEY,
  ANALYTICS_CONSENT_VERSION,
  analyticsContextForPathname,
  clearAnalyticsCookies,
  isValidMeasurementId,
  reachedProgressThresholds,
  readStoredConsent,
  writeStoredConsent,
} from './analytics';
import { pathFor, type Locale, type Page } from '@/content/site';

const classifiedRoutes: Array<[Locale, Page, string]> = (['en', 'es'] as const).flatMap((locale) => ([
  ['home', 'home'],
  ['features', 'feature_hub'],
  ['about', 'about'],
  ['terms', 'legal'],
  ['privacy', 'legal'],
  ['catholic-prayer-app', 'seo_landing'],
  ['gamified-rosary-app', 'seo_landing'],
  ['rosary-tracker-app', 'seo_landing'],
  ['examination-of-conscience-app', 'seo_landing'],
] as Array<[Page, string]>).map(([page, pageType]): [Locale, Page, string] => [locale, page, pageType]));

describe('analytics utilities', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.cookie = '_ga=; Max-Age=0; path=/';
    document.cookie = '_ga_TEST=; Max-Age=0; path=/';
  });

  it.each(classifiedRoutes)('classifies the %s %s route', (locale, page, pageType) => {
    const expectedPageId = page === 'home' ? 'home' : pathFor('en', page).slice(1);
    expect(analyticsContextForPathname(pathFor(locale, page))).toEqual({ content_language: locale, page_id: expectedPageId, page_type: pageType });
  });

  it.each([
    ['/missing-page?email=private@example.com', 'en'],
    ['/es/ruta-perdida#secreto', 'es'],
  ])('classifies an unknown %s without exposing the requested path', (pathname, language) => {
    expect(analyticsContextForPathname(pathname)).toEqual({ content_language: language, page_id: 'not_found', page_type: 'not_found' });
  });

  it('validates GA4 measurement IDs', () => {
    expect(isValidMeasurementId('G-ABC123')).toBe(true);
    expect(isValidMeasurementId(' G-ABC123 ')).toBe(true);
    expect(isValidMeasurementId(undefined)).toBe(false);
    expect(isValidMeasurementId('GTM-ABC123')).toBe(false);
  });

  it('stores a versioned decision for twelve months', () => {
    writeStoredConsent(window.localStorage, 'granted', 1_000);

    expect(readStoredConsent(window.localStorage, 1_000 + ANALYTICS_CONSENT_DURATION_MS - 1)).toBe('granted');
    expect(JSON.parse(window.localStorage.getItem(ANALYTICS_CONSENT_KEY) ?? '{}')).toEqual({
      choice: 'granted',
      expiresAt: 1_000 + ANALYTICS_CONSENT_DURATION_MS,
      version: ANALYTICS_CONSENT_VERSION,
    });
  });

  it('removes expired, malformed, and old-version decisions', () => {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, JSON.stringify({ choice: 'granted', expiresAt: 999, version: ANALYTICS_CONSENT_VERSION }));
    expect(readStoredConsent(window.localStorage, 1_000)).toBeNull();
    expect(window.localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBeNull();

    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, '{bad json');
    expect(readStoredConsent(window.localStorage)).toBeNull();

    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, JSON.stringify({ choice: 'denied', expiresAt: Date.now() + 1000, version: 0 }));
    expect(readStoredConsent(window.localStorage)).toBeNull();
  });

  it('removes available Google Analytics cookies', () => {
    document.cookie = '_ga=client-id; path=/';
    document.cookie = '_ga_TEST=session-id; path=/';
    document.cookie = 'necessary=value; path=/';

    clearAnalyticsCookies(document, window.location.hostname);

    expect(document.cookie).not.toContain('_ga=');
    expect(document.cookie).not.toContain('_ga_TEST=');
    expect(document.cookie).toContain('necessary=value');
  });

  it('returns each content-progress threshold only once', () => {
    expect(reachedProgressThresholds(62, new Set())).toEqual([25, 50]);
    expect(reachedProgressThresholds(100, new Set([25, 50]))).toEqual([75]);
    expect(reachedProgressThresholds(10, new Set())).toEqual([]);
  });
});
