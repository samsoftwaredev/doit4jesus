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
      '/community-guidelines',
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

  it('does not publish educational drafts before human approval', () => {
    const urls = sitemap().map(({ url }) => url);
    for (const slug of ['how-to-pray-the-rosary', 'rosary-mysteries-by-day', 'examination-of-conscience-guide', 'daily-catholic-prayers', 'daily-mass-readings']) {
      expect(urls).not.toContain(`${siteUrl}/${slug}`);
      expect(urls).not.toContain(`${siteUrl}/es/${slug}`);
    }
  });
});
