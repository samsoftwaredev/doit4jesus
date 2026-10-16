'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from 'react';
import { getTheme } from './theme';

type SiteThemeContextValue = { mode: 'light' | 'dark'; toggleTheme: () => void };
const SiteThemeContext = createContext<SiteThemeContextValue | null>(null);
const storageKey = 'doit4jesus-theme';
const changeEvent = 'doit4jesus-theme-change';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(changeEvent, callback);
  };
}

function getSnapshot(): 'light' | 'dark' {
  return window.localStorage.getItem(storageKey) === 'dark' ? 'dark' : 'light';
}

function getServerSnapshot(): 'light' { return 'light'; }

export function useSiteTheme() {
  const context = useContext(SiteThemeContext);
  if (!context) throw new Error('useSiteTheme must be used inside ThemeRegistry');
  return context;
}

export function ThemeRegistry({ children }: { children: ReactNode }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);
  const theme = useMemo(() => getTheme(mode), [mode]);
  const context = useMemo(() => ({
    mode,
    toggleTheme: () => {
      window.localStorage.setItem(storageKey, mode === 'light' ? 'dark' : 'light');
      window.dispatchEvent(new Event(changeEvent));
    },
  }), [mode]);
  return (
    <AppRouterCacheProvider>
      <SiteThemeContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </SiteThemeContext.Provider>
    </AppRouterCacheProvider>
  );
}
