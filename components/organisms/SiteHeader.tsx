import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Brand } from '../atoms/Brand';
import { appUrl, content, pathFor, type Locale, type Page } from '@/content/site';

export function SiteHeader({ locale, page }: { locale: Locale; page: Page }) {
  const t = content[locale].nav;
  const other: Locale = locale === 'en' ? 'es' : 'en';
  return (
    <Box component="header" className="site-header">
      <Container maxWidth="lg" className="header-inner">
        <Brand href={pathFor(locale, 'home')} label={locale === 'en' ? 'DoIt4Jesus home' : 'Inicio de DoIt4Jesus'} />
        <Box component="nav" aria-label={locale === 'en' ? 'Main navigation' : 'Navegación principal'} className="main-nav">
          <Link href={pathFor(locale, 'home')}>{t.home}</Link>
          <Link href={`${pathFor(locale, 'home')}#features`}>{t.features}</Link>
          <Link href={pathFor(locale, 'about')}>{t.about}</Link>
        </Box>
        <Box className="header-actions">
          <Link className="language-link" href={pathFor(other, page)} hrefLang={other} lang={other} aria-label={locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}>{t.language}</Link>
          <a className="login-link" href={appUrl}>{t.login}</a>
          <Button href={appUrl} variant="contained" color="primary" size="small" className="header-cta">{t.signup}</Button>
        </Box>
      </Container>
    </Box>
  );
}
