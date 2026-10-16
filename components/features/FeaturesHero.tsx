import Image from 'next/image';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { appUrl } from '@/content/site';

export function FeaturesHero() {
  return <section className="features-hero" aria-labelledby="features-title">
    <Container maxWidth="lg" className="features-hero-inner">
      <div className="features-hero-copy">
        <p className="features-kicker">DoIt4Jesus features</p>
        <Typography component="h1" variant="h1" id="features-title">Everything You Need to Grow in Your Catholic Faith</Typography>
        <Typography className="features-hero-lead">DoIt4Jesus brings Rosary prayer, daily Scripture, spiritual reflection, community, and faith-based progression together in one Catholic app. Build a steadier relationship with God, one day at a time.</Typography>
        <div className="features-hero-actions">
          <Button href={appUrl} variant="contained" color="primary" size="large">Get Started</Button>
          <Button href="#feature-navigation" variant="outlined" size="large" className="features-outline-button">Explore Features</Button>
        </div>
        <p className="features-hero-note">Prayer is the purpose. Progress is here to help you keep going.</p>
      </div>
      <div className="features-hero-art">
        <div className="hero-preview hero-preview-scripture" aria-hidden="true">
          <span>DAILY SCRIPTURE</span><strong>Today’s readings</strong><small>First Reading · Psalm · Gospel</small><i aria-hidden="true" />
        </div>
        <Image src="/assets/phone-hand.svg" alt="Hand holding a phone showing the DoIt4Jesus Catholic app" width={735} height={943} priority sizes="(max-width: 700px) 78vw, (max-width: 1100px) 40vw, 480px" className="features-phone" />
        <div className="hero-preview hero-preview-progress" aria-hidden="true">
          <span>PRAYER PROGRESS</span><strong>Keep showing up</strong><small>Rosary · Scripture · Community</small><i aria-hidden="true" />
        </div>
      </div>
    </Container>
  </section>;
}
