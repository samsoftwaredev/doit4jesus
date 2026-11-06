import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { PageIntro } from '../molecules/PageIntro';
import { PublicPageShell } from '../templates/PublicPageShell';
import { JsonLd } from '../seo/JsonLd';
import { appUrl, content, pathFor, siteUrl, type Locale } from '@/content/site';

export function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale].about;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DoIt4Jesus',
    legalName: 'INRI Paint & Wall LLC',
    url: siteUrl,
    email: 'admin@doit4jesus.com',
    inLanguage: locale === 'en' ? 'en-US' : 'es-ES',
    description: t.lead,
  };
  return (
    <PublicPageShell locale={locale} page="about">
      <JsonLd data={organizationSchema} />
      <PageIntro eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <Container maxWidth="lg" className="about-grid">
        <Box className="about-art"><Image src="/assets/mary-praying.jpeg" alt={locale === 'en' ? 'Illustration of Mary in prayer' : 'Ilustración de María en oración'} width={650} height={720} /></Box>
        <Box className="about-content">
          <Typography component="h2" variant="h3">{t.storyTitle}</Typography>
          <Typography>{t.story}</Typography>
          <Typography component="h2" variant="h3">{t.operatorTitle}</Typography>
          <Typography>{t.operatorBody}</Typography>
          <Typography component="h2" variant="h3">{t.editorialTitle}</Typography>
          <Typography>{t.editorialBody}</Typography>
          <Typography component="h2" variant="h3">{t.valuesTitle}</Typography>
          <Box component="ul" className="values-list">{t.values.map((value) => <li key={value}>{value}</li>)}</Box>
          <Typography component="h2" variant="h3">{t.forTitle}</Typography>
          <Typography>{t.forBody}</Typography>
          <Typography component="h2" variant="h3">{t.contactTitle}</Typography>
          <Typography>{t.contactBody}</Typography>
          <Box className="about-policy-links">
            <a href="mailto:admin@doit4jesus.com">admin@doit4jesus.com</a>
            <Link href={pathFor(locale, 'terms')}>{content[locale].footer.terms}</Link>
            <Link href={pathFor(locale, 'privacy')}>{content[locale].footer.privacy}</Link>
            <Link href={pathFor(locale, 'guidelines')}>{content[locale].footer.guidelines}</Link>
          </Box>
          <Button href={appUrl} variant="contained" color="primary" data-analytics-event="app_open_handoff" data-analytics-id="about_join_prayer" data-analytics-placement="about_content" data-analytics-target="app_home">{t.cta}</Button>
        </Box>
      </Container>
    </PublicPageShell>
  );
}
