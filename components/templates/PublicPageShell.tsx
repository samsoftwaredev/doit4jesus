import type { ReactNode } from 'react';
import { SiteHeader } from '../organisms/SiteHeader';
import { SiteFooter } from '../organisms/SiteFooter';
import type { Locale, Page } from '@/content/site';

export function PublicPageShell({ locale, page, children }: { locale: Locale; page: Page; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">{locale === 'en' ? 'Skip to content' : 'Saltar al contenido'}</a>
      <SiteHeader locale={locale} page={page} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} />
    </>
  );
}
