import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { RosaryDecoration } from './RosaryDecoration';
import { content, type Locale } from '@/content/site';

export function AboutRosarySection({ locale }: { locale: Locale }) {
  const t = content[locale].home;
  return (
    <section className="about-rosary-section" aria-labelledby="about-rosary-title">
      <RosaryDecoration />
      <Container maxWidth="lg">
        <Box className="about-rosary-copy">
          <Typography id="about-rosary-title" component="h2" variant="h2">{t.aboutTitle}</Typography>
          <Typography>{t.aboutBody}</Typography>
        </Box>
      </Container>
    </section>
  );
}
