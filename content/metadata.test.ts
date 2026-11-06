import { pageMetadata } from './metadata';
import { seoPageMetadata } from './seo-pages';
import { siteUrl } from './site';

describe('localized metadata', () => {
  it('uses the approved homepage search intent without duplicating localized copy', () => {
    const english = pageMetadata('en', 'home');
    const spanish = pageMetadata('es', 'home');

    expect(english.title).toBe('Catholic Prayer & Rosary App | DoIt4Jesus');
    expect(english.description).toContain('guided Rosary mysteries');
    expect(spanish.title).toBe('Aplicación católica de oración y Rosario | DoIt4Jesus');
    expect(spanish.description).not.toBe(english.description);
  });

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

  it('indexes both official Community Guidelines versions with reciprocal alternates', () => {
    const metadata = pageMetadata('es', 'guidelines');

    expect(metadata.title).toBe('Normas de la comunidad | DoIt4Jesus');
    expect(metadata.robots).toEqual({ index: true, follow: true });
    expect(metadata.alternates).toEqual({
      canonical: `${siteUrl}/es/community-guidelines`,
      languages: {
        'en-US': `${siteUrl}/community-guidelines`,
        'es-ES': `${siteUrl}/es/community-guidelines`,
        'x-default': `${siteUrl}/community-guidelines`,
      },
    });
  });
});
