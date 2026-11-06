import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { ArticleDraft } from '@/content/article-drafts';
import { pathFor } from '@/content/site';

const relatedLabels = {
  en: {
    features: 'Explore all features', privacy: 'Privacy Policy',
    'catholic-prayer-app': 'Catholic prayer app', 'gamified-rosary-app': 'Gamified Rosary app',
    'rosary-tracker-app': 'Rosary tracker', 'examination-of-conscience-app': 'Examination of conscience app',
  },
  es: {
    features: 'Explora todas las funciones', privacy: 'Política de privacidad',
    'catholic-prayer-app': 'Aplicación de oración católica', 'gamified-rosary-app': 'Aplicación del Rosario con motivación',
    'rosary-tracker-app': 'Seguimiento del Rosario', 'examination-of-conscience-app': 'Aplicación de examen de conciencia',
  },
} as const;

export function EducationalArticle({ article }: { article: ArticleDraft }) {
  const isEnglish = article.locale === 'en';
  return (
    <article className="educational-article">
      <Container maxWidth="md">
        <p className="article-review-notice" role="status">
          {isEnglish ? 'Unpublished draft — human editorial and theological approval required.' : 'Borrador sin publicar — requiere aprobación humana editorial y teológica.'}
        </p>
        <header className="article-header">
          <span className="eyebrow">{article.eyebrow}</span>
          <Typography component="h1" variant="h1">{article.title}</Typography>
          <Typography component="p" className="page-lead">{article.introduction}</Typography>
          <dl className="article-dates">
            <div><dt>{isEnglish ? 'Published' : 'Publicado'}</dt><dd>{article.publicationDate ?? (isEnglish ? 'Not published' : 'Sin publicar')}</dd></div>
            <div><dt>{isEnglish ? 'Last reviewed' : 'Última revisión'}</dt><dd>{article.reviewDate ?? (isEnglish ? 'Pending' : 'Pendiente')}</dd></div>
          </dl>
        </header>
        <div className="article-body">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <Typography component="h2" variant="h2">{section.heading}</Typography>
              {section.paragraphs?.map((paragraph) => <Typography component="p" key={paragraph}>{paragraph}</Typography>)}
              {section.items && <Box component="ul">{section.items.map((item) => <li key={item}>{item}</li>)}</Box>}
            </section>
          ))}
        </div>
        <section className="article-sources" aria-labelledby="article-sources-title">
          <Typography component="h2" variant="h2" id="article-sources-title">{isEnglish ? 'Sources and further reading' : 'Fuentes y lecturas adicionales'}</Typography>
          <ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a> — {source.publisher}{source.note ? ` (${source.note})` : ''}</li>)}</ul>
        </section>
        <nav className="article-related" aria-label={isEnglish ? 'Related DoIt4Jesus pages' : 'Páginas relacionadas de DoIt4Jesus'}>
          {article.relatedPages.map((page) => <Link href={pathFor(article.locale, page)} key={page}>{relatedLabels[article.locale][page as keyof typeof relatedLabels[typeof article.locale]] ?? page.replaceAll('-', ' ')}</Link>)}
        </nav>
      </Container>
    </article>
  );
}
