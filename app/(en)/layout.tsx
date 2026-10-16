import type { ReactNode } from 'react';
import { ThemeRegistry } from '@/theme/ThemeRegistry';
import { siteFont } from '@/theme/font';
import '../globals.css';

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className={siteFont.variable}><body><ThemeRegistry>{children}</ThemeRegistry></body></html>;
}
