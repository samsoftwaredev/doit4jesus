import type { MetadataRoute } from 'next';
import { pathFor, siteUrl, type Locale, type Page } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: [Locale, Page][] = [
    ['en', 'home'], ['es', 'home'], ['en', 'features'], ['es', 'features'], ['en', 'about'], ['es', 'about'], ['en', 'terms'], ['es', 'terms'], ['en', 'privacy'], ['es', 'privacy'],
  ];
  const coreRoutes: MetadataRoute.Sitemap = routes.map(([locale, page]) => ({
    url: `${siteUrl}${pathFor(locale, page)}`,
    changeFrequency: page === 'home' ? 'monthly' : 'yearly',
    priority: page === 'home' ? 1 : page === 'features' ? 0.9 : page === 'about' ? 0.7 : 0.2,
  }));

  const discoveryPages: Page[] = ['catholic-prayer-app', 'gamified-rosary-app', 'rosary-tracker-app', 'examination-of-conscience-app'];
  const discoveryRoutes: MetadataRoute.Sitemap = (['en', 'es'] as const).flatMap((locale) => discoveryPages.map((page) => ({
    url: `${siteUrl}${pathFor(locale, page)}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  })));

  return [...coreRoutes, ...discoveryRoutes];
}
