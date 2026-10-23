import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppScreen } from '@/components/atoms/AppScreen';
import type { Locale } from '@/content/site';

const previews = {
  en: [
  {
    href: '#progress',
    number: '01',
    title: 'Your prayer dashboard',
    body: 'See your Rosaries, streak, XP, level, and recent milestones together in one clear starting point.',
    screen: 'home' as const,
  },
  {
    href: '#prayer',
    number: '02',
    title: 'A garden shaped by prayer',
    body: 'Each completed Rosary plants a flower in your garden, while the worldwide count shows prayer beyond your own screen.',
    screen: 'garden' as const,
    secondaryScreen: 'global' as const,
  },
  {
    href: '#prayer',
    number: '03',
    title: 'The guided Rosary',
    body: 'Stay with the current mystery, its spiritual fruit, and every prayer without losing your place.',
    screen: 'rosary' as const,
  },
  {
    href: '#community',
    number: '04',
    title: 'Community leaderboards',
    body: 'Find friendly motivation through weekly and Rosary leaderboards built around shared participation.',
    screen: 'community' as const,
  },
  ],
  es: [
    { href: '#progress', number: '01', title: 'Tu panel de oración', body: 'Mira juntos tus Rosarios, racha, XP, nivel y logros recientes en un punto de partida claro.', screen: 'home' as const },
    { href: '#prayer', number: '02', title: 'Un jardín formado por la oración', body: 'Cada Rosario terminado planta una flor, mientras el conteo mundial muestra la oración más allá de tu pantalla.', screen: 'garden' as const, secondaryScreen: 'global' as const },
    { href: '#prayer', number: '03', title: 'El Rosario guiado', body: 'Permanece con el misterio actual, su fruto espiritual y cada oración sin perderte.', screen: 'rosary' as const },
    { href: '#community', number: '04', title: 'Clasificaciones comunitarias', body: 'Encuentra una motivación amistosa mediante clasificaciones semanales y del Rosario basadas en la participación.', screen: 'community' as const },
  ],
} as const;

export function AppPreviewTour({ locale = 'en' }: { locale?: Locale }) {
  const localizedPreviews = previews[locale];
  return (
    <section className="app-preview-tour" aria-labelledby="app-preview-title">
      <Container maxWidth="lg">
        <header className="app-preview-heading">
          <span className="features-kicker">{locale === 'en' ? 'See the real app' : 'Conoce la aplicación real'}</span>
          <Typography component="h2" variant="h2" id="app-preview-title">
            {locale === 'en' ? 'From Intention to Daily Practice' : 'De la intención a la práctica diaria'}
          </Typography>
          <p>{locale === 'en' ? 'Explore the actual DoIt4Jesus experience, then jump directly to the feature that matters to you.' : 'Explora la experiencia real de DoIt4Jesus y ve directamente a la función que más te importa.'}</p>
        </header>
        <div className="app-preview-grid">
          {localizedPreviews.map((preview) => (
            <a className="app-preview-card" href={preview.href} key={preview.title} data-analytics-event="navigation_click" data-analytics-id={`preview_${preview.number}`} data-analytics-placement="feature_preview" data-analytics-target={preview.screen}>
              <div className={`app-preview-visual${'secondaryScreen' in preview ? ' app-preview-visual-split' : ''}`}>
                <div className="app-preview-crop"><AppScreen screen={preview.screen} sizes="(max-width: 900px) 90vw, 560px" /></div>
                {'secondaryScreen' in preview && <div className="app-preview-crop"><AppScreen screen={preview.secondaryScreen} sizes="(max-width: 900px) 90vw, 560px" /></div>}
              </div>
              <div className="app-preview-copy">
                <span>{preview.number}</span>
                <h3>{preview.title}</h3>
                <p>{preview.body}</p>
                <strong>{locale === 'en' ? 'Explore this feature' : 'Explora esta función'} <span aria-hidden="true">↗</span></strong>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
