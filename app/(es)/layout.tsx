import type { ReactNode } from 'react';
import { ThemeRegistry } from '@/theme/ThemeRegistry';
import { siteFont } from '@/theme/font';
import '../globals.css';

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <html lang="es" className={siteFont.variable}><body><ThemeRegistry>{children}</ThemeRegistry></body></html>;
}
