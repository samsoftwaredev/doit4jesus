import type { Metadata } from 'next';
import { pathFor, siteUrl, type Locale, type Page } from './site';

const copy = {
  en: {
    home: { title: 'The Rosary Gamified | DoIt4Jesus Rosary App', description: 'Pray the Rosary with guidance, challenges, community, and milestones. Level up in faith with the DoIt4Jesus Catholic prayer app.' },
    about: { title: 'About DoIt4Jesus | Our Rosary Prayer Mission', description: 'Learn why DoIt4Jesus brings people together through Rosary prayer, faith, and community.' },
    terms: { title: 'Terms of Service | DoIt4Jesus', description: 'Read the terms that govern use of the DoIt4Jesus Rosary app and community.' },
    privacy: { title: 'Privacy Policy | DoIt4Jesus', description: 'Learn how DoIt4Jesus collects, uses, protects, and shares personal information.' },
  },
  es: {
    home: { title: 'El Rosario hecho juego | DoIt4Jesus', description: 'Reza el Rosario con guía, desafíos, comunidad y logros. Avanza en la fe con la aplicación católica DoIt4Jesus.' },
    about: { title: 'Acerca de DoIt4Jesus | Nuestra misión', description: 'Conoce por qué DoIt4Jesus reúne a las personas a través del Rosario, la fe y la comunidad.' },
    terms: { title: 'Términos de servicio | DoIt4Jesus', description: 'Borrador de la traducción al español de los términos de servicio de DoIt4Jesus.' },
    privacy: { title: 'Política de privacidad | DoIt4Jesus', description: 'Borrador de la traducción al español de la política de privacidad de DoIt4Jesus.' },
  },
} as const;

export function pageMetadata(locale: Locale, page: Page): Metadata {
  const { title, description } = copy[locale][page];
  const url = `${siteUrl}${pathFor(locale, page)}`;
  const isDraft = locale === 'es' && (page === 'terms' || page === 'privacy');
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
      ...(page === 'home' || page === 'about' ? { languages: { 'en-US': `${siteUrl}${pathFor('en', page)}`, 'es-ES': `${siteUrl}${pathFor('es', page)}`, 'x-default': `${siteUrl}${pathFor('en', page)}` } } : {}),
    },
    robots: isDraft ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { type: 'website', siteName: 'DoIt4Jesus', locale: locale === 'en' ? 'en_US' : 'es_ES', url, title, description, images: [{ url: `${siteUrl}/og-image.jpg`, width: 512, height: 512, alt: 'DoIt4Jesus' }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/og-image.jpg`] },
  };
}
