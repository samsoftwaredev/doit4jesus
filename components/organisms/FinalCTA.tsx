import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { content, signupUrl, type Locale } from '@/content/site';

export function FinalCTA({ locale }: { locale: Locale }) {
  const t = content[locale].home;
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <Container maxWidth="md">
        <Typography id="final-cta-title" component="h2" variant="h2">{t.ctaTitle}</Typography>
        <Button href={signupUrl} variant="contained" color="primary" data-analytics-event="signup_handoff" data-analytics-id="home_final_signup" data-analytics-placement="home_final_cta" data-analytics-target="signup">{t.ctaButton}</Button>
      </Container>
    </section>
  );
}
