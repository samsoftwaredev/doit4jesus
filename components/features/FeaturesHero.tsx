import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppScreen } from '@/components/atoms/AppScreen';
import { signupUrl } from '@/content/site';

export function FeaturesHero() {
  return <section className="features-hero" aria-labelledby="features-title">
    <Container maxWidth="lg" className="features-hero-inner">
      <div className="features-hero-copy">
        <p className="features-kicker">DoIt4Jesus features</p>
        <Typography component="h1" variant="h1" id="features-title">Everything You Need to Grow in Your Catholic Faith</Typography>
        <Typography className="features-hero-lead">DoIt4Jesus brings Rosary prayer, daily Scripture, spiritual reflection, community, and faith-based progression together in one Catholic app. Build a steadier relationship with God, one day at a time.</Typography>
        <div className="features-hero-actions">
          <Button href={signupUrl} variant="contained" color="primary" size="large">Get Started</Button>
          <Button href="#feature-navigation" variant="outlined" size="large" className="features-outline-button">Explore Features</Button>
        </div>
        <p className="features-hero-note">Prayer is the purpose. Progress is here to help you keep going.</p>
      </div>
      <div className="features-hero-art">
        <div className="features-app-device features-app-device-secondary">
          <AppScreen screen="rosary" sizes="(max-width: 700px) 35vw, 220px" />
        </div>
        <div className="features-app-device features-app-device-main">
          <AppScreen screen="home" sizes="(max-width: 700px) 58vw, 350px" priority />
        </div>
        <div className="features-app-label" aria-hidden="true"><span>Actual app</span><strong>Your prayer journey, at a glance</strong></div>
      </div>
    </Container>
  </section>;
}
