import sitemap from './sitemap';
import { siteUrl } from '@/content/site';

describe('sitemap', () => {
  it('includes English and Spanish URLs for every public content route', () => {
    const urls = sitemap().map(({ url }) => url);
    const pages = [
      '',
      '/features',
      '/about',
      '/terms-of-service',
      '/privacy-policy',
      '/catholic-prayer-app',
      '/gamified-rosary-app',
      '/rosary-tracker-app',
      '/examination-of-conscience-app',
    ];

    for (const page of pages) {
      expect(urls).toContain(`${siteUrl}${page || '/'}`);
      expect(urls).toContain(`${siteUrl}/es${page}`);
    }
  });
});
