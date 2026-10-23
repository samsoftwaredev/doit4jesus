import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FeatureCard } from '../molecules/FeatureCard';
import { content, type Locale } from '@/content/site';

export function AppFeatureSection({ locale }: { locale: Locale }) {
  const t = content[locale].home;
  return (
    <section id="features" className="app-features-section" aria-labelledby="features-title">
      <Container maxWidth="lg">
        <Typography id="features-title" component="h2" variant="h2">{t.featuresTitle}</Typography>
        <Box className="feature-grid">
          {t.features.map((feature, index) => <FeatureCard key={feature.title} {...feature} analyticsId={`home_feature_${index + 1}`} href={locale === 'es' ? `/es${feature.href}` : feature.href} />)}
        </Box>
      </Container>
    </section>
  );
}
