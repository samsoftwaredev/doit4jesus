import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AnalyticsPreferencesButton } from '../analytics/AnalyticsProvider';
import { Brand } from '../atoms/Brand';
import { content, loginUrl, pathFor, type Locale } from '@/content/site';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/people/DoIt4Jesus/61579821511072/', icon: <path d="M14.2 21v-8.1h2.7l.4-3.2h-3.1v-2c0-.9.2-1.5 1.5-1.5h1.7V3.3c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2v2.4H8v3.2h2.8V21h3.4Z" fill="currentColor" /> },
  { label: 'Instagram', href: 'https://www.instagram.com/doitforjesuschristofnazareth/', icon: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.7" cy="6.4" r="1" fill="currentColor"/></> },
  { label: 'YouTube', href: 'https://www.youtube.com/@DoIt4Jesus', icon: <><rect x="2.5" y="5" width="19" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor"/></> },
] as const;

const seoLinks = {
  en: [
    { label: 'Catholic Prayer App', page: 'catholic-prayer-app' },
    { label: 'Gamified Rosary App', page: 'gamified-rosary-app' },
    { label: 'Rosary Tracker', page: 'rosary-tracker-app' },
    { label: 'Examination of Conscience', page: 'examination-of-conscience-app' },
  ],
  es: [
    { label: 'Aplicación de oración católica', page: 'catholic-prayer-app' },
    { label: 'Rosario con motivación', page: 'gamified-rosary-app' },
    { label: 'Seguimiento del Rosario', page: 'rosary-tracker-app' },
    { label: 'Examen de conciencia', page: 'examination-of-conscience-app' },
  ],
} as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <Box component="footer" className="site-footer">
      <Container maxWidth="lg" className="footer-inner">
        <Box className="footer-brand">
          <Brand href={pathFor(locale, 'home')} label={locale === 'en' ? 'DoIt4Jesus home' : 'Inicio de DoIt4Jesus'} />
        </Box>
        <Typography className="footer-copyright">© {new Date().getFullYear()} DoIt4Jesus. {t.footer.rights}</Typography>
        <Box component="nav" aria-label={locale === 'en' ? 'Social media' : 'Redes sociales'} className="social-links">
          {socialLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} title={item.label} data-analytics-event="social_click" data-analytics-id={`footer_social_${item.label.toLowerCase()}`} data-analytics-placement="footer_social" data-analytics-target={item.label.toLowerCase()}><svg viewBox="0 0 24 24" aria-hidden="true">{item.icon}</svg></a>)}
        </Box>
        <Box component="nav" aria-label={locale === 'en' ? 'Footer navigation' : 'Navegación del pie de página'} className="footer-links">
          <Link href={pathFor(locale, 'about')} data-analytics-event="navigation_click" data-analytics-id="footer_about" data-analytics-placement="footer" data-analytics-target="about">{t.nav.about}</Link>
          <Link href={pathFor(locale, 'features')} data-analytics-event="navigation_click" data-analytics-id="footer_features" data-analytics-placement="footer" data-analytics-target="features">{t.nav.features}</Link>
          <a href="mailto:admin@doit4jesus.com" data-analytics-event="contact_click" data-analytics-id="footer_contact" data-analytics-placement="footer" data-analytics-target="support_email">{t.footer.contact}</a>
          <Link href={pathFor(locale, 'terms')} data-analytics-event="navigation_click" data-analytics-id="footer_terms" data-analytics-placement="footer" data-analytics-target="terms">{t.footer.terms}</Link>
          <Link href={pathFor(locale, 'privacy')} data-analytics-event="navigation_click" data-analytics-id="footer_privacy" data-analytics-placement="footer" data-analytics-target="privacy">{t.footer.privacy}</Link>
          <AnalyticsPreferencesButton />
          <a href={loginUrl} data-analytics-event="login_handoff" data-analytics-id="footer_login" data-analytics-placement="footer" data-analytics-target="login">{t.nav.login}</a>
        </Box>
        <Box component="nav" aria-label={locale === 'en' ? 'Explore DoIt4Jesus guides' : 'Explora las guías de DoIt4Jesus'} className="footer-seo-links">
          <span>{locale === 'en' ? 'Explore the app' : 'Explora la aplicación'}</span>
          {seoLinks[locale].map((item) => <Link href={pathFor(locale, item.page)} key={item.page} data-analytics-event="related_content_click" data-analytics-id={`footer_guide_${item.page}`} data-analytics-placement="footer_guides" data-analytics-target={item.page}>{item.label}</Link>)}
        </Box>
      </Container>
    </Box>
  );
}
