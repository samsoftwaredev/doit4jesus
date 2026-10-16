import type { ReactNode } from 'react';
import { ThemeRegistry } from '@/theme/ThemeRegistry';
import '../globals.css';

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <html lang="es"><body><ThemeRegistry>{children}</ThemeRegistry></body></html>;
}
