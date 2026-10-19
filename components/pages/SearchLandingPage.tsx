import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { JsonLd } from '@/components/seo/JsonLd';
import { PublicPageShell } from '@/components/templates/PublicPageShell';
import { seoPagePath, seoPages, type SeoPageSlug } from '@/content/seo-pages';
import { seoPagesEs } from '@/content/seo-pages.es';
import { appUrl, pathFor, signupUrl, siteUrl, type Locale } from '@/content/site';

const screens = {
  home: { src: '/assets/app-home.webp', width: 614, height: 5430, focus: '59%' },
  prayer: { src: '/assets/app-prayer.webp', width: 614, height: 4330, focus: '32%' },
  rosary: { src: '/assets/app-rosary.webp', width: 614, height: 1343, focus: '20%' },
} as const;

const labels = {
  en: {
    open: 'Open DoIt4Jesus', explore: 'Explore all features', inside: 'Inside DoIt4Jesus',
    support: 'Features That Support the Practice', rhythm: 'A practical rhythm', questions: 'Common questions',
    before: 'What to Know Before You Begin', continue: 'Continue exploring', related: 'Related DoIt4Jesus Guides',
    learn: 'Learn more', finalKicker: 'Do it for Jesus, every day', finalTitle: 'Begin With One Faithful Choice',
    finalBody: 'Pray the Rosary, read today’s Scripture, reflect honestly, and take what you receive into the rest of your life.',
    started: 'Get started', home: 'Home', language: 'en-US',
  },
  es: {
    open: 'Abrir DoIt4Jesus', explore: 'Explorar todas las funciones', inside: 'Dentro de DoIt4Jesus',
    support: 'Funciones que acompañan la práctica', rhythm: 'Un ritmo práctico', questions: 'Preguntas frecuentes',
    before: 'Lo que debes saber antes de comenzar', continue: 'Sigue explorando', related: 'Guías relacionadas de DoIt4Jesus',
    learn: 'Conoce más', finalKicker: 'Hazlo por Jesús, cada día', finalTitle: 'Comienza con una decisión fiel',
    finalBody: 'Reza el Rosario, lee la Escritura de hoy, reflexiona con sinceridad y lleva lo recibido al resto de tu vida.',
    started: 'Comienza ahora', home: 'Inicio', language: 'es-ES',
  },
} as const;

export function SearchLandingPage({ slug, locale = 'en' }: { slug: SeoPageSlug; locale?: Locale }) {
  const pages = locale === 'es' ? seoPagesEs : seoPages;
  const page = pages[slug];
  const t = labels[locale];
  const screen = screens[page.screen];
  const pageUrl = `${siteUrl}${seoPagePath(slug, locale)}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url: pageUrl,
      inLanguage: t.language,
      isPartOf: { '@type': 'WebSite', name: 'DoIt4Jesus', url: siteUrl },
      about: { '@type': 'SoftwareApplication', name: 'DoIt4Jesus', applicationCategory: 'LifestyleApplication', url: siteUrl },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.home, item: `${siteUrl}${pathFor(locale, 'home')}` },
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
    <PublicPageShell locale={locale} page={slug}>
      {schema.map((data, index) => <JsonLd data={data} key={index} />)}

      <section className="search-landing-hero" aria-labelledby="search-landing-title">
        <Container maxWidth="lg" className="search-landing-hero-inner">
          <div className="search-landing-hero-copy">
            <span className="features-kicker">{page.kicker}</span>
            <Typography component="h1" variant="h1" id="search-landing-title">{page.title}</Typography>
            <Typography component="p">{page.lead}</Typography>
            <div className="search-landing-actions">
              <Button href={appUrl} variant="contained" color="primary" size="large">{t.open}</Button>
              <Button href={pathFor(locale, 'features')} variant="outlined" color="primary" size="large">{t.explore}</Button>
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
            <span className="features-kicker">{t.inside}</span>
            <Typography component="h2" variant="h2" id="search-highlights-title">{t.support}</Typography>
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
            <span className="features-kicker">{t.rhythm}</span>
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
            <span className="features-kicker">{t.questions}</span>
            <Typography component="h2" variant="h2" id="search-faq-title">{t.before}</Typography>
          </header>
          <div className="search-landing-faq-list">
            {page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><Typography component="p">{faq.answer}</Typography></details>)}
          </div>
        </Container>
      </section>

      <section className="search-landing-related" aria-labelledby="search-related-title">
        <Container maxWidth="lg">
          <header className="search-landing-section-heading">
            <span className="features-kicker">{t.continue}</span>
            <Typography component="h2" variant="h2" id="search-related-title">{t.related}</Typography>
          </header>
          <div className="search-landing-related-grid">
            {page.related.map((relatedSlug) => {
              const related = pages[relatedSlug];
              return <Link href={seoPagePath(relatedSlug, locale)} key={relatedSlug}><span>{related.kicker}</span><strong>{related.title}</strong><small>{t.learn} <span aria-hidden="true">→</span></small></Link>;
            })}
          </div>
        </Container>
      </section>

      <section className="search-landing-cta" aria-labelledby="search-cta-title">
        <Container maxWidth="md">
          <span className="features-kicker">{t.finalKicker}</span>
          <Typography component="h2" variant="h2" id="search-cta-title">{t.finalTitle}</Typography>
          <Typography component="p">{t.finalBody}</Typography>
          <Button href={signupUrl} variant="contained" color="primary" size="large">{t.started}</Button>
        </Container>
      </section>
    </PublicPageShell>
  );
}
