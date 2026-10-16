'use client';

import IconButton from '@mui/material/IconButton';
import { useSiteTheme } from '@/theme/ThemeRegistry';
import type { Locale } from '@/content/site';

export function ThemeToggle({ locale }: { locale: Locale }) {
  const { mode, toggleTheme } = useSiteTheme();
  const label = mode === 'light'
    ? locale === 'en' ? 'Switch to dark theme' : 'Cambiar al tema oscuro'
    : locale === 'en' ? 'Switch to light theme' : 'Cambiar al tema claro';
  return (
    <IconButton className="theme-toggle" color="inherit" onClick={toggleTheme} aria-label={label} title={label}>
      {mode === 'light' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.6 15.6A8.5 8.5 0 0 1 8.4 3.4 8.5 8.5 0 1 0 20.6 15.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
      )}
    </IconButton>
  );
}
