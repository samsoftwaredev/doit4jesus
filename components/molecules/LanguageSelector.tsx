import Link from 'next/link';
import { content, pathFor, type Locale, type Page } from '@/content/site';

export function LanguageSelector({ locale, page }: { locale: Locale; page: Page }) {
  const title = locale === 'en' ? 'Select language' : 'Seleccionar idioma';
  return (
    <details className="language-selector">
      <summary aria-label={title} title={title}>
        <span aria-hidden="true">{locale === 'en' ? '🇺🇸' : '🇪🇸'}</span>
        <span className="language-name">{content[locale].nav.language}</span>
        <span className="chevron" aria-hidden="true">⌄</span>
      </summary>
      <div className="language-options">
        <Link href={pathFor('en', page)} hrefLang="en" lang="en"><span aria-hidden="true">🇺🇸</span> English</Link>
        <Link href={pathFor('es', page)} hrefLang="es" lang="es"><span aria-hidden="true">🇪🇸</span> Español</Link>
      </div>
    </details>
  );
}
