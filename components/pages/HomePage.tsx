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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DoIt4Jesus',
    url: `${siteUrl}${pathFor(locale, 'home')}`,
    inLanguage: locale === 'en' ? 'en-US' : 'es-ES',
    description: content[locale].home.description,
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
