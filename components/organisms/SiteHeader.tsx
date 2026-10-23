import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Brand } from '../atoms/Brand';
import { LanguageSelector } from '../molecules/LanguageSelector';
import { content, loginUrl, pathFor, type Locale, type Page } from '@/content/site';

export function SiteHeader({ locale, page }: { locale: Locale; page: Page }) {
  const t = content[locale].nav;
  const whyHref = `${pathFor(locale, 'home')}#why-pray-rosary`;
  return (
    <Box component="header" className={`site-header${page === 'home' ? ' site-header-overlay' : ''}`}>
      <Container maxWidth="lg" className="header-inner">
        <Brand href={pathFor(locale, 'home')} inverse label={locale === 'en' ? 'DoIt4Jesus home' : 'Inicio de DoIt4Jesus'} />
        <Box component="nav" aria-label={locale === 'en' ? 'Main navigation' : 'Navegación principal'} className="main-nav">
          <Link href={pathFor(locale, 'about')} data-analytics-event="navigation_click" data-analytics-id="header_about" data-analytics-placement="header_desktop" data-analytics-target="about">{t.about}</Link>
          <Link href={pathFor(locale, 'features')} data-analytics-event="navigation_click" data-analytics-id="header_features" data-analytics-placement="header_desktop" data-analytics-target="features">{t.features}</Link>
          <Link href={whyHref} data-analytics-event="navigation_click" data-analytics-id="header_why_rosary" data-analytics-placement="header_desktop" data-analytics-target="why_pray_rosary">{t.why}</Link>
          <a href={loginUrl} data-analytics-event="login_handoff" data-analytics-id="header_login" data-analytics-placement="header_desktop" data-analytics-target="login">{t.login}</a>
        </Box>
        <Box className="header-actions">
          <LanguageSelector locale={locale} page={page} />
          <details className="mobile-menu">
            <summary aria-label={t.menu} title={t.menu}><span aria-hidden="true" className="hamburger-lines"><i /><i /><i /></span></summary>
            <nav aria-label={locale === 'en' ? 'Mobile navigation' : 'Navegación móvil'}>
              <Link href={pathFor(locale, 'about')} data-analytics-event="navigation_click" data-analytics-id="mobile_about" data-analytics-placement="header_mobile" data-analytics-target="about">{t.about}</Link>
              <Link href={pathFor(locale, 'features')} data-analytics-event="navigation_click" data-analytics-id="mobile_features" data-analytics-placement="header_mobile" data-analytics-target="features">{t.features}</Link>
              <Link href={whyHref} data-analytics-event="navigation_click" data-analytics-id="mobile_why_rosary" data-analytics-placement="header_mobile" data-analytics-target="why_pray_rosary">{t.why}</Link>
              <a href={loginUrl} data-analytics-event="login_handoff" data-analytics-id="mobile_login" data-analytics-placement="header_mobile" data-analytics-target="login">{t.login}</a>
            </nav>
          </details>
        </Box>
      </Container>
    </Box>
  );
}
