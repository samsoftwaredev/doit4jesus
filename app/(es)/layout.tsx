import type { ReactNode } from 'react';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import { ThemeRegistry } from '@/theme/ThemeRegistry';
import { siteFont } from '@/theme/font';
import '../globals.css';

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <html lang="es" className={siteFont.variable}><body><AnalyticsProvider><ThemeRegistry>{children}</ThemeRegistry></AnalyticsProvider></body></html>;
}
