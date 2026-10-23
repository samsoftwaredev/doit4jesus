import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FeatureIcon } from '@/components/features/FeatureIcon';
import { content, pathFor, type Locale } from '@/content/site';

const featureScreens = {
  scripture: { src: '/assets/app-prayer.webp', width: 614, height: 4330 },
  conscience: { src: '/assets/app-home.webp', width: 614, height: 5430 },
  resources: { src: '/assets/app-prayer.webp', width: 614, height: 4330 },
  progress: { src: '/assets/app-home.webp', width: 614, height: 5430 },
  community: { src: '/assets/app-community.webp', width: 614, height: 2632 },
  global: { src: '/assets/app-prayer.webp', width: 614, height: 4330 },
} as const;

export function BeyondRosarySection({ locale }: { locale: Locale }) {
  const t = content[locale].home.beyondRosary;
  const localizedHref = (href: string) => locale === 'es' ? `/es${href}` : href;

  return (
    <section className="beyond-rosary-section" aria-labelledby="beyond-rosary-title">
      <Container maxWidth="lg">
        <div className="beyond-rosary-heading">
          <Typography component="p" className="eyebrow">{t.eyebrow}</Typography>
          <Typography id="beyond-rosary-title" component="h2" variant="h2">{t.title}</Typography>
          <Typography>{t.introduction}</Typography>
        </div>

        <div className="beyond-rosary-grid">
          {t.features.map((feature) => {
            const screen = featureScreens[feature.screen];

            return (
              <article className="beyond-rosary-card" key={feature.title}>
                <div className={`beyond-rosary-visual beyond-rosary-visual-${feature.screen}`}>
                  <Image
                    src={screen.src}
                    alt={feature.alt}
                    width={screen.width}
                    height={screen.height}
                    sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 900px) 45vw, 380px"
                  />
                </div>
                <div className="beyond-rosary-card-copy">
                  <span className="beyond-rosary-icon"><FeatureIcon name={feature.icon} /></span>
                  <Typography component="h3" variant="h3"><Link href={localizedHref(feature.href)} data-analytics-event="related_content_click" data-analytics-id={`beyond_${feature.screen}_title`} data-analytics-placement="home_beyond_rosary" data-analytics-target={feature.screen}>{feature.title}</Link></Typography>
                  <Typography>{feature.body}</Typography>
                  <Link href={localizedHref(feature.href)} className="beyond-rosary-card-link" data-analytics-event="related_content_click" data-analytics-id={`beyond_${feature.screen}_link`} data-analytics-placement="home_beyond_rosary" data-analytics-target={feature.screen}>{locale === 'en' ? 'Learn more' : 'Conoce más'} <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="beyond-rosary-action">
          <Button href={pathFor(locale, 'features')} variant="outlined" color="primary" size="large" data-analytics-event="navigation_click" data-analytics-id="beyond_all_features" data-analytics-placement="home_beyond_rosary" data-analytics-target="features">
            {t.link} <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
