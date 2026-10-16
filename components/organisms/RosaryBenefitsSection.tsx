import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BenefitCard } from '../molecules/BenefitCard';
import { content, type Locale } from '@/content/site';

export function RosaryBenefitsSection({ locale }: { locale: Locale }) {
  const t = content[locale].home;
  return (
    <section id="why-pray-rosary" className="benefits-section" aria-labelledby="benefits-title">
      <Container maxWidth="lg">
        <Typography id="benefits-title" component="h2" variant="h2">{t.whyTitle}</Typography>
        <Box className="benefit-grid">
          {t.benefits.map((benefit) => <BenefitCard key={benefit.number} {...benefit} />)}
        </Box>
      </Container>
    </section>
  );
}
