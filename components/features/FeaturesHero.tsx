import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppScreen } from '@/components/atoms/AppScreen';
import { signupUrl } from '@/content/site';
import type { Locale } from '@/content/site';

const copy = {
  en: { kicker: 'DoIt4Jesus features', title: 'Everything You Need to Grow in Your Catholic Faith', lead: 'DoIt4Jesus brings Rosary prayer, daily Scripture, spiritual reflection, community, and faith-based progression together in one Catholic app. Build a steadier relationship with God, one day at a time.', started: 'Get Started', explore: 'Explore Features', note: 'Prayer is the purpose. Progress is here to help you keep going.', actual: 'Actual app', glance: 'Your prayer journey, at a glance' },
  es: { kicker: 'Funciones de DoIt4Jesus', title: 'Todo lo que necesitas para crecer en la fe católica', lead: 'DoIt4Jesus reúne el Rosario, la Escritura diaria, la reflexión espiritual, la comunidad y el progreso en una aplicación católica. Cultiva una relación más constante con Dios, un día a la vez.', started: 'Comienza ahora', explore: 'Explorar funciones', note: 'La oración es el propósito. El progreso te ayuda a perseverar.', actual: 'Aplicación real', glance: 'Tu camino de oración, de un vistazo' },
} as const;

export function FeaturesHero({ locale = 'en' }: { locale?: Locale }) {
  const t = copy[locale];
  return <section className="features-hero" aria-labelledby="features-title">
    <Container maxWidth="lg" className="features-hero-inner">
      <div className="features-hero-copy">
        <p className="features-kicker">{t.kicker}</p>
        <Typography component="h1" variant="h1" id="features-title">{t.title}</Typography>
        <Typography className="features-hero-lead">{t.lead}</Typography>
        <div className="features-hero-actions">
          <Button href={signupUrl} variant="contained" color="primary" size="large" data-analytics-event="signup_handoff" data-analytics-id="features_hero_signup" data-analytics-placement="features_hero" data-analytics-target="signup">{t.started}</Button>
          <Button href="#feature-navigation" variant="outlined" size="large" className="features-outline-button" data-analytics-event="navigation_click" data-analytics-id="features_hero_explore" data-analytics-placement="features_hero" data-analytics-target="feature_navigation">{t.explore}</Button>
        </div>
        <p className="features-hero-note">{t.note}</p>
      </div>
      <div className="features-hero-art">
        <div className="features-app-device features-app-device-secondary">
          <AppScreen screen="rosary" sizes="(max-width: 700px) 35vw, 220px" />
        </div>
        <div className="features-app-device features-app-device-main">
          <AppScreen screen="home" sizes="(max-width: 700px) 58vw, 350px" priority />
        </div>
        <div className="features-app-label" aria-hidden="true"><span>{t.actual}</span><strong>{t.glance}</strong></div>
      </div>
    </Container>
  </section>;
}
