import type { Metadata } from 'next';
import { pathFor, siteUrl, type Locale, type Page } from './site';

const copy = {
  en: {
    home: { title: 'Pray the Rosary Together | DoIt4Jesus', description: 'Build a daily Rosary habit with guided prayer, challenges, progress, and a community growing together in faith.' },
    about: { title: 'About DoIt4Jesus | Our Rosary Prayer Mission', description: 'Learn why DoIt4Jesus brings people together through Rosary prayer, faith, and community.' },
    terms: { title: 'Terms of Service | DoIt4Jesus', description: 'Read the terms that govern use of the DoIt4Jesus Rosary app and community.' },
    privacy: { title: 'Privacy Policy | DoIt4Jesus', description: 'Learn how DoIt4Jesus collects, uses, protects, and shares personal information.' },
  },
  es: {
    home: { title: 'Reza el Rosario en comunidad | DoIt4Jesus', description: 'Haz del Rosario un hábito diario con oración guiada, desafíos, seguimiento de tu progreso y una comunidad de fe.' },
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
