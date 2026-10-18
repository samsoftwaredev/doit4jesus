import { AboutRosarySection } from '../organisms/AboutRosarySection';
import { AppFeatureSection } from '../organisms/AppFeatureSection';
import { BeyondRosarySection } from '../organisms/BeyondRosarySection';
import { FinalCTA } from '../organisms/FinalCTA';
import { HeroSection } from '../organisms/HeroSection';
import { PowerfulWeaponSection } from '../organisms/PowerfulWeaponSection';
import { RosaryBenefitsSection } from '../organisms/RosaryBenefitsSection';
import { PublicPageShell } from '../templates/PublicPageShell';
import { content, pathFor, siteUrl, type Locale } from '@/content/site';

export function HomePage({ locale }: { locale: Locale }) {
  const structuredData = locale === 'en'
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'DoIt4Jesus',
        alternateName: ['Do It for Jesus', 'DoIt4Jesus Catholic App'],
        url: siteUrl,
        inLanguage: 'en-US',
        description: content.en.home.description,
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: content.es.home.title,
        url: `${siteUrl}${pathFor('es', 'home')}`,
        inLanguage: 'es-ES',
        description: content.es.home.description,
        isPartOf: { '@type': 'WebSite', name: 'DoIt4Jesus', url: siteUrl },
      };

  return (
    <PublicPageShell locale={locale} page="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HeroSection locale={locale} />
      <AppFeatureSection locale={locale} />
      <PowerfulWeaponSection locale={locale} />
      <div className="rosary-gradient">
        <AboutRosarySection locale={locale} />
        <RosaryBenefitsSection locale={locale} />
      </div>
      <FinalCTA locale={locale} />
      <BeyondRosarySection locale={locale} />
    </PublicPageShell>
  );
}
