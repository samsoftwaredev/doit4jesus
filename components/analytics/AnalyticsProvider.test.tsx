import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import { ANALYTICS_CONSENT_KEY, writeStoredConsent } from './analytics';
import { AnalyticsPreferencesButton, AnalyticsProvider } from './AnalyticsProvider';

const mockSendGAEvent = jest.fn();
const mockUsePathname = jest.fn(() => '/');
type TestMetric = { id: string; name: 'TTFB' | 'FCP' | 'LCP' | 'CLS' | 'INP'; value: number };
let reportWebVitals: ((metric: TestMetric) => void) | undefined;

jest.mock('@next/third-parties/google', () => ({
  GoogleAnalytics: ({ gaId }: { gaId: string }) => <div data-testid="google-analytics" data-ga-id={gaId} />,
  sendGAEvent: (...args: unknown[]) => mockSendGAEvent(...args),
}));
jest.mock('next/navigation', () => ({ usePathname: () => mockUsePathname() }));
jest.mock('next/web-vitals', () => ({ useReportWebVitals: (callback: (metric: TestMetric) => void) => { reportWebVitals = callback; } }));

describe('AnalyticsProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.localStorage.clear();
    delete window.dataLayer;
    mockUsePathname.mockReturnValue('/');
    reportWebVitals = undefined;
    window.requestAnimationFrame = jest.fn(() => 1);
    window.cancelAnimationFrame = jest.fn();
  });

  it('renders no analytics or consent UI without a production measurement ID', async () => {
    render(<AnalyticsProvider measurementId=""><p>Page</p></AnalyticsProvider>);

    await waitFor(() => expect(screen.getByText('Page')).toBeInTheDocument());
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByTestId('google-analytics')).not.toBeInTheDocument();
  });

  it('blocks GA until the visitor explicitly accepts analytics', async () => {
    render(<AnalyticsProvider measurementId="G-TEST123"><p>Page</p></AnalyticsProvider>);

    expect(await screen.findByRole('dialog', { name: 'Your analytics choice' })).toBeInTheDocument();
    expect(screen.queryByTestId('google-analytics')).not.toBeInTheDocument();
    expect(window.dataLayer?.map((item) => Array.from(item as ArrayLike<unknown>))).toEqual(expect.arrayContaining([
      ['consent', 'default', expect.objectContaining({ analytics_storage: 'denied', ad_storage: 'denied' })],
    ]));

    fireEvent.click(screen.getByRole('button', { name: 'Accept analytics' }));

    expect(await screen.findByTestId('google-analytics')).toHaveAttribute('data-ga-id', 'G-TEST123');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem(ANALYTICS_CONSENT_KEY) ?? '{}').choice).toBe('granted');
    expect(window.dataLayer?.map((item) => Array.from(item as ArrayLike<unknown>))).toEqual(expect.arrayContaining([
      ['consent', 'update', expect.objectContaining({ analytics_storage: 'granted', ad_storage: 'denied' })],
    ]));
  });

  it('persists rejection without loading Google Analytics', async () => {
    render(<AnalyticsProvider measurementId="G-TEST123"><p>Page</p></AnalyticsProvider>);

    fireEvent.click(await screen.findByRole('button', { name: 'Reject analytics' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByTestId('google-analytics')).not.toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem(ANALYTICS_CONSENT_KEY) ?? '{}').choice).toBe('denied');
  });

  it('restores a saved decision and exposes localized preferences', async () => {
    writeStoredConsent(window.localStorage, 'denied');
    mockUsePathname.mockReturnValue('/es/features');

    render(
      <AnalyticsProvider measurementId="G-TEST123">
        <AnalyticsPreferencesButton />
      </AnalyticsProvider>,
    );

    const preferences = await screen.findByRole('button', { name: 'Preferencias de analítica' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(preferences);
    expect(screen.getByRole('dialog', { name: 'Preferencias de analítica' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Lee la Política de privacidad' })).toHaveAttribute('href', '/es/privacy-policy');
  });

  it('withdraws saved consent, clears GA cookies, and unmounts analytics', async () => {
    writeStoredConsent(window.localStorage, 'granted');
    document.cookie = '_ga=client-id; path=/';

    render(
      <AnalyticsProvider measurementId="G-TEST123">
        <AnalyticsPreferencesButton />
      </AnalyticsProvider>,
    );

    expect(await screen.findByTestId('google-analytics')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Analytics preferences' }));
    jest.useFakeTimers();
    fireEvent.click(screen.getByRole('button', { name: 'Reject analytics' }));

    expect(screen.queryByTestId('google-analytics')).not.toBeInTheDocument();
    expect(document.cookie).not.toContain('_ga=');
    expect(JSON.parse(window.localStorage.getItem(ANALYTICS_CONSENT_KEY) ?? '{}').choice).toBe('denied');
    expect(jest.getTimerCount()).toBe(1);
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('dispatches stable click and Web Vital events only after consent', async () => {
    render(
      <AnalyticsProvider measurementId="G-TEST123">
        <a href="https://app.doitforjesus.com/sign-up" onClick={(event) => event.preventDefault()} data-analytics-event="signup_handoff" data-analytics-id="home_hero_signup" data-analytics-placement="home_hero" data-analytics-target="signup">Join</a>
      </AnalyticsProvider>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'Join' }));
    expect(mockSendGAEvent).not.toHaveBeenCalled();

    fireEvent.click(await screen.findByRole('button', { name: 'Accept analytics' }));
    fireEvent.click(screen.getByRole('link', { name: 'Join' }));

    expect(mockSendGAEvent).toHaveBeenCalledWith('event', 'signup_handoff', {
      content_language: 'en',
      interaction_id: 'home_hero_signup',
      page_id: 'home',
      page_type: 'home',
      placement: 'home_hero',
      target_id: 'signup',
    });

    act(() => reportWebVitals?.({ id: 'vital-1', name: 'LCP', value: 1234 }));
    expect(mockSendGAEvent).toHaveBeenCalledWith('event', 'web_vital', expect.objectContaining({
      metric_id: 'vital-1',
      metric_name: 'LCP',
      metric_value: 1234,
      page_id: 'home',
    }));
  });

  it('reports an FAQ only when it is opened', async () => {
    render(
      <AnalyticsProvider measurementId="G-TEST123">
        <details>
          <summary data-analytics-event="faq_open" data-analytics-id="features_faq_1" data-analytics-placement="features_faq" data-analytics-target="faq_1">Question</summary>
          <p>Answer</p>
        </details>
      </AnalyticsProvider>,
    );

    fireEvent.click(await screen.findByRole('button', { name: 'Accept analytics' }));
    mockSendGAEvent.mockClear();
    const summary = screen.getByText('Question');
    fireEvent.click(summary);
    fireEvent.click(summary);

    expect(mockSendGAEvent).toHaveBeenCalledTimes(1);
    expect(mockSendGAEvent).toHaveBeenCalledWith('event', 'faq_open', expect.objectContaining({
      interaction_id: 'features_faq_1',
      placement: 'features_faq',
      target_id: 'faq_1',
    }));
  });

  it('dispatches each content-progress threshold once per route', async () => {
    let scheduledFrame: FrameRequestCallback | undefined;
    window.requestAnimationFrame = jest.fn((callback: FrameRequestCallback) => {
      scheduledFrame = callback;
      return 1;
    });
    Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: 2000 });
    Object.defineProperty(document.body, 'scrollHeight', { configurable: true, value: 2000 });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 500 });
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 600 });

    render(<AnalyticsProvider measurementId="G-TEST123"><p>Long page</p></AnalyticsProvider>);
    fireEvent.click(await screen.findByRole('button', { name: 'Accept analytics' }));
    await screen.findByTestId('google-analytics');
    mockSendGAEvent.mockClear();

    act(() => scheduledFrame?.(0));
    fireEvent.scroll(window);
    act(() => scheduledFrame?.(1));

    const progressEvents = mockSendGAEvent.mock.calls.filter((call) => call[1] === 'content_progress');
    expect(progressEvents).toEqual([
      ['event', 'content_progress', expect.objectContaining({ progress_percent: 25, page_id: 'home' })],
      ['event', 'content_progress', expect.objectContaining({ progress_percent: 50, page_id: 'home' })],
    ]);
  });
});
