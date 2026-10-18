import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { JsonLd } from '@/components/seo/JsonLd';
import { PublicPageShell } from '@/components/templates/PublicPageShell';
import { seoPagePath, seoPages, type SeoPageSlug } from '@/content/seo-pages';
import { appUrl, signupUrl, siteUrl } from '@/content/site';

const screens = {
  home: { src: '/assets/app-home.webp', width: 614, height: 5430, focus: '59%' },
  prayer: { src: '/assets/app-prayer.webp', width: 614, height: 4330, focus: '32%' },
  rosary: { src: '/assets/app-rosary.webp', width: 614, height: 1343, focus: '20%' },
} as const;

export function SearchLandingPage({ slug }: { slug: SeoPageSlug }) {
  const page = seoPages[slug];
  const screen = screens[page.screen];
  const pageUrl = `${siteUrl}${seoPagePath(slug)}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url: pageUrl,
      inLanguage: 'en-US',
      isPartOf: { '@type': 'WebSite', name: 'DoIt4Jesus', url: siteUrl },
      about: { '@type': 'SoftwareApplication', name: 'DoIt4Jesus', applicationCategory: 'LifestyleApplication', url: siteUrl },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: page.title, item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  return (
    <PublicPageShell locale="en" page="features">
      {schema.map((data, index) => <JsonLd data={data} key={index} />)}

      <section className="search-landing-hero" aria-labelledby="search-landing-title">
        <Container maxWidth="lg" className="search-landing-hero-inner">
          <div className="search-landing-hero-copy">
            <span className="features-kicker">{page.kicker}</span>
            <Typography component="h1" variant="h1" id="search-landing-title">{page.title}</Typography>
            <Typography component="p">{page.lead}</Typography>
            <div className="search-landing-actions">
              <Button href={appUrl} variant="contained" color="primary" size="large">Open DoIt4Jesus</Button>
              <Button href="/features" variant="outlined" color="primary" size="large">Explore all features</Button>
            </div>
          </div>
          <div className="search-landing-screen" style={{ '--screen-focus': screen.focus } as React.CSSProperties}>
            <Image src={screen.src} alt={page.imageAlt} width={screen.width} height={screen.height} sizes="(max-width: 700px) 88vw, 430px" priority />
          </div>
        </Container>
      </section>

      <section className="search-landing-intro" aria-labelledby="search-intro-title">
        <Container maxWidth="md">
          <Typography component="h2" variant="h2" id="search-intro-title">{page.introductionTitle}</Typography>
          {page.introduction.map((paragraph) => <Typography component="p" key={paragraph}>{paragraph}</Typography>)}
        </Container>
      </section>

      <section className="search-landing-highlights" aria-labelledby="search-highlights-title">
        <Container maxWidth="lg">
          <header className="search-landing-section-heading">
            <span className="features-kicker">Inside DoIt4Jesus</span>
            <Typography component="h2" variant="h2" id="search-highlights-title">Features That Support the Practice</Typography>
          </header>
          <div className="search-landing-highlight-grid">
            {page.highlights.map((highlight, index) => (
              <article key={highlight.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Typography component="h3" variant="h3">{highlight.title}</Typography>
                <Typography component="p">{highlight.body}</Typography>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="search-landing-steps" aria-labelledby="search-steps-title">
        <Container maxWidth="lg">
          <header className="search-landing-section-heading">
            <span className="features-kicker">A practical rhythm</span>
            <Typography component="h2" variant="h2" id="search-steps-title">{page.stepsTitle}</Typography>
          </header>
          <div className="search-landing-step-grid">
            {page.steps.map((step, index) => (
              <article key={step.title}>
                <span>{index + 1}</span>
                <div><Typography component="h3" variant="h3">{step.title}</Typography><Typography component="p">{step.body}</Typography></div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="search-landing-perspective" aria-labelledby="search-perspective-title">
        <Container maxWidth="md">
          <Typography component="h2" variant="h2" id="search-perspective-title">{page.perspectiveTitle}</Typography>
          <Typography component="p">{page.perspective}</Typography>
        </Container>
      </section>

      <section className="search-landing-faq" aria-labelledby="search-faq-title">
        <Container maxWidth="md">
          <header className="search-landing-section-heading">
            <span className="features-kicker">Common questions</span>
            <Typography component="h2" variant="h2" id="search-faq-title">What to Know Before You Begin</Typography>
          </header>
          <div className="search-landing-faq-list">
            {page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><Typography component="p">{faq.answer}</Typography></details>)}
          </div>
        </Container>
      </section>

      <section className="search-landing-related" aria-labelledby="search-related-title">
        <Container maxWidth="lg">
          <header className="search-landing-section-heading">
            <span className="features-kicker">Continue exploring</span>
            <Typography component="h2" variant="h2" id="search-related-title">Related DoIt4Jesus Guides</Typography>
          </header>
          <div className="search-landing-related-grid">
            {page.related.map((relatedSlug) => {
              const related = seoPages[relatedSlug];
              return <Link href={seoPagePath(relatedSlug)} key={relatedSlug}><span>{related.kicker}</span><strong>{related.title}</strong><small>Learn more <span aria-hidden="true">→</span></small></Link>;
            })}
          </div>
        </Container>
      </section>

      <section className="search-landing-cta" aria-labelledby="search-cta-title">
        <Container maxWidth="md">
          <span className="features-kicker">Do it for Jesus, every day</span>
          <Typography component="h2" variant="h2" id="search-cta-title">Begin With One Faithful Choice</Typography>
          <Typography component="p">Pray the Rosary, read today’s Scripture, reflect honestly, and take what you receive into the rest of your life.</Typography>
          <Button href={signupUrl} variant="contained" color="primary" size="large">Get started</Button>
        </Container>
      </section>
    </PublicPageShell>
  );
}
