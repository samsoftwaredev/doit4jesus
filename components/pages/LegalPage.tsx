import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { legalDocument, type LegalPage as LegalPageName } from '@/content/legal';
import { content, pathFor, type Locale } from '@/content/site';
import { PageIntro } from '../molecules/PageIntro';
import { PublicPageShell } from '../templates/PublicPageShell';

export function LegalPage({ locale, page }: { locale: Locale; page: LegalPageName }) {
  const document = legalDocument(locale, page);
  const t = content[locale].legal;
  return (
    <PublicPageShell locale={locale} page={page}>
      <PageIntro eyebrow="DoIt4Jesus" title={document.title} lead={document.introduction} />
      <Container maxWidth="md" className="legal-content">
        <Typography className="effective-date">{document.effectiveDate}</Typography>
        {document.sections.map((section) => (
          <Box component="section" className="legal-section" key={section.heading}>
            <Typography component="h2" variant="h4">{section.heading}</Typography>
            {section.paragraphs?.map((paragraph) => <Typography key={paragraph}>{paragraph}</Typography>)}
            {section.bullets && <Box component="ul">{section.bullets.map((bullet) => <li key={bullet}><Typography>{bullet}</Typography></li>)}</Box>}
            {section.links?.map((link) => link.page
              ? <Link href={pathFor(locale, link.page)} key={link.label}>{link.label}</Link>
              : <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
          </Box>
        ))}
        <Typography className="legal-contact">{t.contact} <a href="mailto:admin@doit4jesus.com" data-analytics-event="contact_click" data-analytics-id="legal_contact" data-analytics-placement="legal_footer" data-analytics-target="support_email">admin@doit4jesus.com</a>.</Typography>
      </Container>
    </PublicPageShell>
  );
}
