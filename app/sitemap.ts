import type { MetadataRoute } from 'next';
import { pathFor, siteUrl, type Locale, type Page } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: [Locale, Page][] = [
    ['en', 'home'], ['es', 'home'], ['en', 'about'], ['es', 'about'], ['en', 'terms'], ['en', 'privacy'],
  ];
  return routes.map(([locale, page]) => ({
    url: `${siteUrl}${pathFor(locale, page)}`,
    changeFrequency: page === 'home' ? 'monthly' : 'yearly',
    priority: page === 'home' ? 1 : page === 'about' ? 0.7 : 0.3,
  }));
}
