import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Eyebrow } from '../atoms/Eyebrow';
import { FeatureCard } from '../molecules/FeatureCard';
import { PublicPageShell } from '../templates/PublicPageShell';
import { appUrl, content, pathFor, siteUrl, type Locale } from '@/content/site';

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale].home;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DoIt4Jesus',
    url: `${siteUrl}${pathFor(locale, 'home')}`,
    inLanguage: locale === 'en' ? 'en-US' : 'es-ES',
    description: t.description,
  };
  return (
    <PublicPageShell locale={locale} page="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="hero" aria-labelledby="hero-title">
        <Container maxWidth="lg" className="hero-grid">
          <Box className="hero-copy">
            <Eyebrow light>{t.eyebrow}</Eyebrow>
            <Typography id="hero-title" component="h1" variant="h1">{t.title}</Typography>
            <Typography className="hero-description">{t.description}</Typography>
            <Box className="hero-actions">
              <Button href={appUrl} variant="contained" color="secondary" size="large">{t.primary}</Button>
              <Link href="#journey" className="text-cta">{t.secondary}<span aria-hidden="true"> ↗</span></Link>
            </Box>
          </Box>
          <Box className="hero-visual" aria-label={locale === 'en' ? 'Illustration of a prayer journey in the app' : 'Ilustración de un camino de oración en la aplicación'}>
            <div className="halo halo-one" aria-hidden="true" />
            <div className="halo halo-two" aria-hidden="true" />
            <div className="phone-shell" aria-hidden="true">
              <div className="phone-notch" />
              <div className="phone-screen">
                <span className="phone-sun">✦</span>
                <span className="phone-eyebrow">DoIt4Jesus</span>
                <strong>{locale === 'en' ? 'A moment for prayer' : 'Un momento para rezar'}</strong>
                <div className="rosary-ring"><span>✝</span></div>
                <span className="phone-caption">{locale === 'en' ? 'The Holy Rosary' : 'El Santo Rosario'}</span>
                <div className="phone-pill">{locale === 'en' ? 'Begin' : 'Comenzar'}</div>
              </div>
            </div>
            <div className="hero-float hero-float-top" aria-hidden="true"><span>✦</span>{t.heroNote}</div>
            <div className="hero-float hero-float-bottom" aria-hidden="true"><span>✧</span>{locale === 'en' ? 'Pray • Grow • Connect' : 'Reza • Crece • Conecta'}</div>
          </Box>
        </Container>
        <div className="hero-bottom-wave" aria-hidden="true" />
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <Container maxWidth="md" className="intro-inner">
          <Eyebrow>{t.introEyebrow}</Eyebrow>
          <Typography id="intro-title" component="h2" variant="h2">{t.introTitle}</Typography>
          <Typography>{t.introBody}</Typography>
        </Container>
      </section>

      <section id="features" className="features-section" aria-labelledby="features-title">
        <Container maxWidth="lg">
          <Box className="section-heading">
            <Eyebrow>{t.featuresEyebrow}</Eyebrow>
            <Typography id="features-title" component="h2" variant="h2">{t.featuresTitle}</Typography>
          </Box>
          <Box className="feature-grid">
            {t.features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
          </Box>
        </Container>
      </section>

      <section id="journey" className="journey-section" aria-labelledby="journey-title">
        <Container maxWidth="lg" className="journey-grid">
          <Box className="journey-intro">
            <Eyebrow>{t.journeyEyebrow}</Eyebrow>
            <Typography id="journey-title" component="h2" variant="h2">{t.journeyTitle}</Typography>
            <Typography>{t.journeyBody}</Typography>
            <Button href={appUrl} variant="outlined" color="primary">{t.primary}</Button>
          </Box>
          <Box className="steps-list">
            {t.journeySteps.map((step) => (
              <Box component="article" className="journey-step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <Box><Typography component="h3" variant="h4">{step.title}</Typography><Typography>{step.body}</Typography></Box>
              </Box>
            ))}
          </Box>
        </Container>
      </section>

      <section className="community-section" aria-labelledby="community-title">
        <Container maxWidth="lg" className="community-grid">
          <Box className="community-art">
            <div className="community-art-frame"><Image src="/assets/mary-praying.jpeg" width={600} height={650} alt={locale === 'en' ? 'Illustration of Mary in prayer' : 'Ilustración de María en oración'} /></div>
            <Image className="rosary-overlay" src="/assets/rosary.svg" width={240} height={240} alt="" aria-hidden="true" />
          </Box>
          <Box className="community-copy">
            <Eyebrow>{t.communityEyebrow}</Eyebrow>
            <Typography id="community-title" component="h2" variant="h2">{t.communityTitle}</Typography>
            <Typography>{t.communityBody}</Typography>
            <Link href={pathFor(locale, 'about')} className="dark-text-cta">{locale === 'en' ? 'Read our story' : 'Conoce nuestra historia'} <span aria-hidden="true">↗</span></Link>
          </Box>
        </Container>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <Container maxWidth="md">
          <span className="cta-cross" aria-hidden="true">✝</span>
          <Typography id="final-cta-title" component="h2" variant="h2">{t.ctaTitle}</Typography>
          <Typography>{t.ctaBody}</Typography>
          <Button href={appUrl} variant="contained" color="secondary" size="large">{t.ctaButton}</Button>
        </Container>
      </section>
    </PublicPageShell>
  );
}
