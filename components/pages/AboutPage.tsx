import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { PageIntro } from '../molecules/PageIntro';
import { PublicPageShell } from '../templates/PublicPageShell';
import { appUrl, content, type Locale } from '@/content/site';

export function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale].about;
  return (
    <PublicPageShell locale={locale} page="about">
      <PageIntro eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <Container maxWidth="lg" className="about-grid">
        <Box className="about-art"><Image src="/assets/mary-praying.jpeg" alt={locale === 'en' ? 'Illustration of Mary in prayer' : 'Ilustración de María en oración'} width={650} height={720} /></Box>
        <Box className="about-content">
          <Typography component="h2" variant="h3">{t.storyTitle}</Typography>
          <Typography>{t.story}</Typography>
          <Typography component="h2" variant="h3">{t.valuesTitle}</Typography>
          <Box component="ul" className="values-list">{t.values.map((value) => <li key={value}>{value}</li>)}</Box>
          <Typography component="h2" variant="h3">{t.forTitle}</Typography>
          <Typography>{t.forBody}</Typography>
          <Button href={appUrl} variant="contained" color="primary" data-analytics-event="app_open_handoff" data-analytics-id="about_join_prayer" data-analytics-placement="about_content" data-analytics-target="app_home">{t.cta}</Button>
        </Box>
      </Container>
    </PublicPageShell>
  );
}
