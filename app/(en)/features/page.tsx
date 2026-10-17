import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FeatureCategory } from '@/components/features/FeatureCategory';
import { FeatureNavigation } from '@/components/features/FeatureNavigation';
import { AppPreviewTour } from '@/components/features/AppPreviewTour';
import { FeaturesCTA } from '@/components/features/FeaturesCTA';
import { FeaturesFAQ } from '@/components/features/FeaturesFAQ';
import { FeaturesHero } from '@/components/features/FeaturesHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { PublicPageShell } from '@/components/templates/PublicPageShell';
import { pageMetadata } from '@/content/metadata';
import { appUrl, siteUrl } from '@/content/site';
import { publishedFeatureCategories, featureFaq } from '@/data/features';

export const metadata: Metadata = pageMetadata('en', 'features');

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: featureFaq.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
};

const appSchema = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: 'DoIt4Jesus', applicationCategory: 'LifestyleApplication',
  description: 'A Catholic prayer app for guided Rosary prayer, daily Mass Scripture, prayer tracking, spiritual reflection, progress, and community.',
  url: siteUrl,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Features', item: `${siteUrl}/features` },
  ],
};

export default function FeaturesPage() {
  return <PublicPageShell locale="en" page="features">
    <JsonLd data={faqSchema} /><JsonLd data={appSchema} /><JsonLd data={breadcrumbSchema} />
    <FeaturesHero />
    <FeatureNavigation />
    <AppPreviewTour />
    {publishedFeatureCategories.map((category, index) => <div key={category.id}>
      {index === 4 && <FeaturesCTA />}
      <FeatureCategory category={category} index={index} />
    </div>)}
    <section className="features-difference" aria-labelledby="features-difference-title">
      <Container maxWidth="lg">
        <div className="features-difference-heading"><span className="features-kicker">The whole journey</span><Typography component="h2" variant="h2" id="features-difference-title">More Than a Rosary Counter</Typography><p>A Rosary counter can help you keep track. DoIt4Jesus goes further by placing prayer beside Scripture, reflection, meaningful progress, and Catholic community—without pretending an app can replace a sacramental life.</p></div>
        <div className="features-difference-grid">
          <div className="features-difference-card"><span>One important beginning</span><h3>A simple Rosary tracker</h3><ul><li>Record completed Rosaries</li><li>Notice prayer consistency</li><li>Return to the mysteries</li></ul></div>
          <div className="features-difference-card features-difference-card-highlight"><span>A wider Catholic rhythm</span><h3>DoIt4Jesus</h3><ul><li>Pray the guided Rosary</li><li>Read daily Catholic Mass Scripture</li><li>Reflect with an examination of conscience</li><li>Track prayer and Scripture habits</li><li>See XP, levels, milestones, and badges</li><li>Connect with friends and shared prayer</li><li>Find encouragement in community activity</li></ul></div>
        </div>
        <p className="features-difference-note">Looking for more reading? Visit our <a href={`${appUrl}resources`}>Catholic resources</a>, learn <Link href="/about">about our mission</Link>, or review how we approach personal information in our <Link href="/privacy-policy">privacy policy</Link>.</p>
      </Container>
    </section>
    <section className="features-rhythm" aria-labelledby="features-rhythm-title">
      <Container maxWidth="lg">
        <div className="features-rhythm-heading"><span className="features-kicker">A rhythm for ordinary days</span><Typography component="h2" variant="h2" id="features-rhythm-title">How DoIt4Jesus Can Fit Into Your Day</Typography><p>You do not need to complete every activity. The app is a companion for small acts of faithfulness, not another list of demands.</p></div>
        <div className="features-rhythm-grid">
          <article><span>01</span><h3>Begin with prayer</h3><p>Open today’s Rosary and spend time with one of the mysteries of Christ. If you are beginning again after a break, start where you are. A daily streak may encourage you, but the invitation to pray remains whether the streak is one day or one hundred.</p></article>
          <article><span>02</span><h3>Listen to the Word</h3><p>Read the day’s Catholic Mass readings and notice the liturgical season. Give yourself time to sit with a passage instead of treating completion as a task. The reading marker can help you remember that you returned; it cannot tell you what God has done in your heart.</p></article>
          <article><span>03</span><h3>Carry it into life</h3><p>Reflect honestly with an examination of conscience, encourage a friend, or take an intention to Mass. Then put the phone away. Catholic habits grow through the Sacraments, relationships, service, and prayer when no one is watching.</p></article>
        </div>
      </Container>
    </section>
    <FeaturesFAQ />
    <FeaturesCTA final />
  </PublicPageShell>;
}
