import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { legalDocument } from '@/content/legal';
import { content, pathFor, type Locale } from '@/content/site';
import { PageIntro } from '../molecules/PageIntro';
import { PublicPageShell } from '../templates/PublicPageShell';

export function LegalPage({ locale, page }: { locale: Locale; page: 'terms' | 'privacy' }) {
  const document = legalDocument(locale, page);
  const t = content[locale].legal;
  return (
    <PublicPageShell locale={locale} page={page}>
      <PageIntro eyebrow={locale === 'en' ? 'DoIt4Jesus' : 'DoIt4Jesus · Borrador'} title={document.title} lead={document.introduction} />
      <Container maxWidth="md" className="legal-content">
        {locale === 'es' && <Box className="translation-notice" role="note"><Typography>{t.draft} <Link href={pathFor('en', page)}>{page === 'terms' ? 'English Terms of Service' : 'English Privacy Policy'}</Link>.</Typography></Box>}
        {page === 'privacy' && <Typography className="effective-date">{t.effective}</Typography>}
        {document.sections.map((section) => (
          <Box component="section" className="legal-section" key={section.heading}>
            <Typography component="h2" variant="h4">{section.heading}</Typography>
            {section.paragraphs?.map((paragraph) => <Typography key={paragraph}>{paragraph}</Typography>)}
            {section.bullets && <Box component="ul">{section.bullets.map((bullet) => <li key={bullet}><Typography>{bullet}</Typography></li>)}</Box>}
            {page === 'terms' && section.heading.startsWith('6.') && <Link href={pathFor(locale, 'privacy')}>{locale === 'en' ? 'Read the Privacy Policy' : 'Lee la Política de privacidad'}</Link>}
            {page === 'privacy' && section.heading.startsWith('3.1.') && <a href="https://support.google.com/a/answer/7281227?hl=en" target="_blank" rel="noopener noreferrer">{locale === 'en' ? 'Google Account Help' : 'Ayuda de la cuenta de Google'}</a>}
            {page === 'privacy' && section.heading.startsWith('3.7.') && <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">{locale === 'en' ? 'Google Privacy Policy' : 'Política de Privacidad de Google'}</a>}
          </Box>
        ))}
        {document.closing && <Typography className="legal-closing">{document.closing}</Typography>}
        <Typography className="legal-contact">{t.contact} <a href="mailto:admin@doit4jesus.com" data-analytics-event="contact_click" data-analytics-id="legal_contact" data-analytics-placement="legal_footer" data-analytics-target="support_email">admin@doit4jesus.com</a>.</Typography>
      </Container>
    </PublicPageShell>
  );
}
