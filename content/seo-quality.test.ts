import type { Metadata } from 'next';
import sitemap from '@/app/sitemap';
import { pageMetadata } from './metadata';
import { seoPageMetadata, type SeoPageSlug } from './seo-pages';
import { pathFor, publicPages, siteUrl, type CorePage, type Locale, type Page } from './site';

const seoPages = new Set<Page>(['catholic-prayer-app', 'gamified-rosary-app', 'rosary-tracker-app', 'examination-of-conscience-app']);

function metadataFor(locale: Locale, page: Page): Metadata {
  return seoPages.has(page)
    ? seoPageMetadata(page as SeoPageSlug, locale)
    : pageMetadata(locale, page as CorePage);
}

describe('SEO quality contract', () => {
  it('gives every public locale route unique, indexable, reciprocal metadata', () => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();

    for (const locale of ['en', 'es'] as const) {
      for (const page of publicPages) {
        const metadata = metadataFor(locale, page);
        const url = `${siteUrl}${pathFor(locale, page)}`;
        expect(typeof metadata.title).toBe('string');
        expect(typeof metadata.description).toBe('string');
        expect(titles.has(metadata.title as string)).toBe(false);
        expect(descriptions.has(metadata.description as string)).toBe(false);
        titles.add(metadata.title as string);
        descriptions.add(metadata.description as string);
        expect(metadata.robots).toEqual({ index: true, follow: true });
        expect(metadata.alternates).toEqual({
          canonical: url,
          languages: {
            'en-US': `${siteUrl}${pathFor('en', page)}`,
            'es-ES': `${siteUrl}${pathFor('es', page)}`,
            'x-default': `${siteUrl}${pathFor('en', page)}`,
          },
        });
        expect(metadata.openGraph).toMatchObject({ title: metadata.title, description: metadata.description, url });
        expect(metadata.twitter).toMatchObject({ title: metadata.title, description: metadata.description });
      }
    }
  });

  it('keeps the sitemap exactly aligned with the public localized route inventory', () => {
    const urls = sitemap().map((entry) => entry.url).sort();
    const expected = (['en', 'es'] as const).flatMap((locale) => publicPages.map((page) => `${siteUrl}${pathFor(locale, page)}`)).sort();
    expect(urls).toEqual(expected);
  });
});
