import { pageMetadata } from './metadata';
import { seoPageMetadata } from './seo-pages';
import { siteUrl } from './site';

describe('localized metadata', () => {
  it('provides Spanish feature metadata with reciprocal language alternates', () => {
    const metadata = pageMetadata('es', 'features');

    expect(metadata.title).toBe('Funciones de DoIt4Jesus | Oración y Rosario');
    expect(metadata.alternates).toEqual({
      canonical: `${siteUrl}/es/features`,
      languages: {
        'en-US': `${siteUrl}/features`,
        'es-ES': `${siteUrl}/es/features`,
        'x-default': `${siteUrl}/features`,
      },
    });
    expect(metadata.openGraph).toMatchObject({ locale: 'es_ES', url: `${siteUrl}/es/features` });
  });

  it('localizes SEO landing metadata and its canonical URL', () => {
    const metadata = seoPageMetadata('rosary-tracker-app', 'es');

    expect(metadata.title).toBe('Seguimiento del Rosario y rachas de oración | DoIt4Jesus');
    expect(metadata.alternates).toMatchObject({
      canonical: `${siteUrl}/es/rosary-tracker-app`,
      languages: {
        'en-US': `${siteUrl}/rosary-tracker-app`,
        'es-ES': `${siteUrl}/es/rosary-tracker-app`,
      },
    });
    expect(metadata.openGraph).toMatchObject({ locale: 'es_ES', url: `${siteUrl}/es/rosary-tracker-app` });
  });
});
