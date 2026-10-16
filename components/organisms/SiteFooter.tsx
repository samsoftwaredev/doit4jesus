import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Brand } from '../atoms/Brand';
import { appUrl, content, pathFor, type Locale } from '@/content/site';

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <Box component="footer" className="site-footer">
      <Container maxWidth="lg" className="footer-grid">
        <Box className="footer-brand">
          <Brand href={pathFor(locale, 'home')} label={locale === 'en' ? 'DoIt4Jesus home' : 'Inicio de DoIt4Jesus'} />
          <Typography>{t.footer.tagline}</Typography>
        </Box>
        <Box component="nav" aria-label={t.footer.pages} className="footer-links">
          <Typography component="h2">{t.footer.pages}</Typography>
          <Link href={pathFor(locale, 'home')}>{t.nav.home}</Link>
          <Link href={pathFor(locale, 'about')}>{t.nav.about}</Link>
          <a href={appUrl}>{t.nav.app}</a>
          <a href={appUrl}>{t.nav.login}</a>
          <a href={appUrl}>{t.nav.signup}</a>
        </Box>
        <Box component="nav" aria-label={t.footer.legal} className="footer-links">
          <Typography component="h2">{t.footer.legal}</Typography>
          <Link href={pathFor(locale, 'terms')}>{locale === 'en' ? 'Terms of Service' : 'Términos de servicio'}</Link>
          <Link href={pathFor(locale, 'privacy')}>{locale === 'en' ? 'Privacy Policy' : 'Política de privacidad'}</Link>
          <a href="mailto:admin@doit4jesus.com">admin@doit4jesus.com</a>
        </Box>
      </Container>
      <Container maxWidth="lg" className="footer-bottom">
        <Typography variant="body2">© {new Date().getFullYear()} DoIt4Jesus. {t.footer.rights}</Typography>
      </Container>
    </Box>
  );
}
