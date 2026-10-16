import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Brand } from '../atoms/Brand';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { LanguageSelector } from '../molecules/LanguageSelector';
import { appUrl, content, pathFor, resourcesUrl, type Locale, type Page } from '@/content/site';

export function SiteHeader({ locale, page }: { locale: Locale; page: Page }) {
  const t = content[locale].nav;
  const whyHref = `${pathFor(locale, 'home')}#why-pray-rosary`;
  return (
    <Box component="header" className={`site-header${page === 'home' ? ' site-header-overlay' : ''}`}>
      <Container maxWidth="lg" className="header-inner">
        <Brand href={pathFor(locale, 'home')} inverse label={locale === 'en' ? 'DoIt4Jesus home' : 'Inicio de DoIt4Jesus'} />
        <Box component="nav" aria-label={locale === 'en' ? 'Main navigation' : 'Navegación principal'} className="main-nav">
          <Link href={pathFor(locale, 'about')}>{t.about}</Link>
          <Link href={pathFor('en', 'features')}>{t.features}</Link>
          <a href={resourcesUrl}>{t.resources}</a>
          <Link href={whyHref}>{t.why}</Link>
          <a href={appUrl}>{t.login}</a>
        </Box>
        <Box className="header-actions">
          <ThemeToggle locale={locale} />
          <LanguageSelector locale={locale} page={page} />
          <details className="mobile-menu">
            <summary aria-label={t.menu} title={t.menu}><span aria-hidden="true" className="hamburger-lines"><i /><i /><i /></span></summary>
            <nav aria-label={locale === 'en' ? 'Mobile navigation' : 'Navegación móvil'}>
              <Link href={pathFor(locale, 'about')}>{t.about}</Link>
              <Link href={pathFor('en', 'features')}>{t.features}</Link>
              <a href={resourcesUrl}>{t.resources}</a>
              <Link href={whyHref}>{t.why}</Link>
              <a href={appUrl}>{t.login}</a>
            </nav>
          </details>
        </Box>
      </Container>
    </Box>
  );
}
