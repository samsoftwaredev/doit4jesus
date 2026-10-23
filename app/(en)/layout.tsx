import type { ReactNode } from 'react';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import { ThemeRegistry } from '@/theme/ThemeRegistry';
import { siteFont } from '@/theme/font';
import '../globals.css';

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className={siteFont.variable}><body><AnalyticsProvider><ThemeRegistry>{children}</ThemeRegistry></AnalyticsProvider></body></html>;
}
