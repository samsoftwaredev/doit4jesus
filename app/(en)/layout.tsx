import type { ReactNode } from 'react';
import { ThemeRegistry } from '@/theme/ThemeRegistry';
import '../globals.css';

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><ThemeRegistry>{children}</ThemeRegistry></body></html>;
}
