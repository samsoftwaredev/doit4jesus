import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { content, signupUrl, type Locale } from '@/content/site';

export function HeroSection({ locale }: { locale: Locale }) {
  const t = content[locale].home;
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container maxWidth="lg" className="hero-inner">
        <Typography component="p" className="hero-brand-line">{t.brandLine}</Typography>
        <Typography id="hero-title" component="h1" variant="h1">{t.title}</Typography>
        <Typography className="hero-subtitle">{t.description}</Typography>
        <Button href={signupUrl} variant="contained" color="primary" size="large" className="hero-cta">{t.primary}</Button>
        <Box className="hero-product">
          <Image
            src="/assets/phone-hand.svg"
            alt={locale === 'en' ? 'Hand holding a phone with the DoIt4Jesus Rosary app' : 'Una mano sostiene un teléfono con la aplicación del Rosario DoIt4Jesus'}
            width={735}
            height={943}
            priority
            className="phone-hand-image"
          />
        </Box>
      </Container>
    </section>
  );
}
