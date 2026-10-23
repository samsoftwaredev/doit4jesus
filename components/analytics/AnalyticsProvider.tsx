'use client';

import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useReportWebVitals } from 'next/web-vitals';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { pathFor } from '@/content/site';
import {
  analyticsContextForPathname,
  clearAnalyticsCookies,
  eventParametersForElement,
  isValidMeasurementId,
  reachedProgressThresholds,
  readStoredConsent,
  writeStoredConsent,
  type AnalyticsConsent,
  type AnalyticsEventName,
} from './analytics';

type AnalyticsContextValue = {
  configured: boolean;
  openPreferences: () => void;
};

const AnalyticsContext = createContext<AnalyticsContextValue>({ configured: false, openPreferences: () => undefined });

const allowedEvents = new Set<AnalyticsEventName>([
  'signup_handoff',
  'login_handoff',
  'app_open_handoff',
  'navigation_click',
  'language_switch',
  'related_content_click',
  'faq_open',
  'social_click',
  'contact_click',
  'not_found_recovery',
]);

const copy = {
  en: {
    title: 'Your analytics choice',
    preferencesTitle: 'Analytics preferences',
    description: 'With your permission, we use Google Analytics to understand which pages help visitors and how the site performs. We do not load analytics until you accept.',
    currentGranted: 'Analytics is currently enabled. You can withdraw your permission at any time.',
    currentDenied: 'Analytics is currently disabled. You can enable it to help us improve the site.',
    accept: 'Accept analytics',
    reject: 'Reject analytics',
    privacy: 'Read the Privacy Policy',
  },
  es: {
    title: 'Tu elección de analítica',
    preferencesTitle: 'Preferencias de analítica',
    description: 'Con tu permiso, usamos Google Analytics para saber qué páginas ayudan a los visitantes y cómo funciona el sitio. No cargamos la analítica hasta que aceptes.',
    currentGranted: 'La analítica está activada. Puedes retirar tu permiso en cualquier momento.',
    currentDenied: 'La analítica está desactivada. Puedes activarla para ayudarnos a mejorar el sitio.',
    accept: 'Aceptar analítica',
    reject: 'Rechazar analítica',
    privacy: 'Lee la Política de privacidad',
  },
} as const;

function pushConsentCommand(command: 'default' | 'update', analyticsStorage: 'denied' | 'granted', includeWait = false) {
  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  gtag('consent', command, {
    ad_personalization: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    analytics_storage: analyticsStorage,
    ...(includeWait ? { wait_for_update: 500 } : {}),
  });
}

function AnalyticsEventTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-analytics-event]') : null;
      if (!target) return;

      const eventName = target.dataset.analyticsEvent as AnalyticsEventName | undefined;
      if (!eventName || !allowedEvents.has(eventName)) return;

      if (eventName === 'faq_open') {
        const details = target.closest('details');
        if (details?.open) return;
      }

      sendGAEvent('event', eventName, eventParametersForElement(target, window.location.pathname));
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const sent = new Set<number>();
    let frame = 0;
    const pageContext = analyticsContextForPathname(pathname);

    const measure = () => {
      frame = 0;
      const documentHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const viewportBottom = window.scrollY + window.innerHeight;
      const progress = documentHeight <= window.innerHeight ? 100 : Math.min(100, (viewportBottom / documentHeight) * 100);

      for (const threshold of reachedProgressThresholds(progress, sent)) {
        sent.add(threshold);
        sendGAEvent('event', 'content_progress', {
          ...pageContext,
          progress_percent: threshold,
          non_interaction: true,
        });
      }
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}

function WebVitalsTracker() {
  useReportWebVitals(useCallback((metric) => {
    if (!['TTFB', 'FCP', 'LCP', 'CLS', 'INP'].includes(metric.name)) return;
    sendGAEvent('event', 'web_vital', {
      ...analyticsContextForPathname(window.location.pathname),
      metric_id: metric.id,
      metric_name: metric.name,
      metric_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }, []));

  return null;
}

function ConsentDialog({ choice, locale, preferences, onAccept, onReject }: {
  choice: AnalyticsConsent | null;
  locale: 'en' | 'es';
  preferences: boolean;
  onAccept: () => void;
  onReject: () => void;
}) {
  const t = copy[locale];
  const description = preferences && choice
    ? choice === 'granted' ? t.currentGranted : t.currentDenied
    : t.description;

  return (
    <section className="analytics-consent" role="dialog" aria-modal="false" aria-labelledby="analytics-consent-title" aria-describedby="analytics-consent-description">
      <div className="analytics-consent-copy">
        <h2 id="analytics-consent-title">{preferences ? t.preferencesTitle : t.title}</h2>
        <p id="analytics-consent-description">{description}</p>
        <Link href={pathFor(locale, 'privacy')}>{t.privacy}</Link>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" onClick={onReject}>{t.reject}</button>
        <button type="button" onClick={onAccept}>{t.accept}</button>
      </div>
    </section>
  );
}

export function AnalyticsProvider({ children, measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID }: { children: ReactNode; measurementId?: string }) {
  const pathname = usePathname();
  const configured = isValidMeasurementId(measurementId);
  const locale = analyticsContextForPathname(pathname).content_language;
  const [choice, setChoice] = useState<AnalyticsConsent | null>(null);
  const [ready, setReady] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  /* Browser storage is an external consent source and can only be synchronized after hydration. */
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (!configured) {
      setReady(true);
      return;
    }

    const storedChoice = readStoredConsent(window.localStorage);
    pushConsentCommand('default', 'denied', true);
    if (storedChoice) pushConsentCommand('update', storedChoice);
    if (storedChoice !== 'granted') clearAnalyticsCookies(document, window.location.hostname);
    setChoice(storedChoice);
    setPreferencesOpen(storedChoice === null);
    setReady(true);
  }, [configured]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const accept = useCallback(() => {
    pushConsentCommand('update', 'granted');
    writeStoredConsent(window.localStorage, 'granted');
    setChoice('granted');
    setPreferencesOpen(false);
  }, []);

  const reject = useCallback(() => {
    const withdrawing = choice === 'granted';
    pushConsentCommand('update', 'denied');
    writeStoredConsent(window.localStorage, 'denied');
    clearAnalyticsCookies(document, window.location.hostname);
    setChoice('denied');
    setPreferencesOpen(false);
    if (withdrawing) window.setTimeout(() => window.location.reload(), 0);
  }, [choice]);

  const contextValue = useMemo<AnalyticsContextValue>(() => ({
    configured,
    openPreferences: () => setPreferencesOpen(true),
  }), [configured]);

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
      {configured && ready && preferencesOpen && <ConsentDialog choice={choice} locale={locale} preferences={choice !== null} onAccept={accept} onReject={reject} />}
      {configured && ready && choice === 'granted' && (
        <>
          <AnalyticsEventTracker />
          <WebVitalsTracker />
          <GoogleAnalytics gaId={measurementId.trim()} />
        </>
      )}
    </AnalyticsContext.Provider>
  );
}

export function AnalyticsPreferencesButton() {
  const { configured, openPreferences } = useContext(AnalyticsContext);
  const pathname = usePathname();
  if (!configured) return null;

  const locale = analyticsContextForPathname(pathname).content_language;
  return <button className="analytics-preferences-button" type="button" onClick={openPreferences}>{locale === 'en' ? 'Analytics preferences' : 'Preferencias de analítica'}</button>;
}
