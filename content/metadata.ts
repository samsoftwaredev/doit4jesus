import type { Metadata } from 'next';
import { pathFor, siteUrl, type CorePage, type Locale } from './site';

const copy = {
  en: {
    home: { title: 'Catholic Prayer & Rosary App | DoIt4Jesus', description: 'Build a daily Catholic prayer habit with guided Rosary mysteries, daily Scripture, prayer tracking, and a supportive faith community. Explore DoIt4Jesus.' },
    features: { title: 'DoIt4Jesus Features | Catholic Prayer, Rosary & Faith App', description: 'Explore Catholic prayer, Rosary tracking, daily Scripture, spiritual growth, achievements, friends, and community features in the DoIt4Jesus faith app.' },
    about: { title: 'Our Story | DoIt4Jesus Catholic Rosary App', description: 'Discover how the Eucharist, the 2020 pandemic, and a love of gaming inspired DoIt4Jesus, a Catholic app for building a joyful daily Rosary habit.' },
    terms: { title: 'Terms of Service | DoIt4Jesus', description: 'Read the terms that govern use of the DoIt4Jesus Rosary app and community.' },
    privacy: { title: 'Privacy Policy | DoIt4Jesus', description: 'Learn how DoIt4Jesus collects, uses, protects, and shares personal information.' },
    guidelines: { title: 'Community Guidelines | DoIt4Jesus', description: 'Read the safety, conduct, content, and event rules for the DoIt4Jesus prayer community.' },
  },
  es: {
    home: { title: 'Aplicación católica de oración y Rosario | DoIt4Jesus', description: 'Crea un hábito diario de oración católica con el Rosario guiado, la Escritura diaria, el seguimiento de oración y una comunidad de fe.' },
    features: { title: 'Funciones de DoIt4Jesus | Oración y Rosario', description: 'Descubre las funciones de oración, Rosario, Escritura, progreso y comunidad de DoIt4Jesus.' },
    about: { title: 'Nuestra historia | Aplicación del Rosario DoIt4Jesus', description: 'Descubre cómo la Eucaristía, la pandemia de 2020 y el gusto por los videojuegos inspiraron DoIt4Jesus para cultivar el hábito diario del Rosario.' },
    terms: { title: 'Términos de servicio | DoIt4Jesus', description: 'Lee los términos oficiales que rigen la aplicación y la comunidad de DoIt4Jesus.' },
    privacy: { title: 'Política de privacidad | DoIt4Jesus', description: 'Conoce cómo DoIt4Jesus recopila, usa, protege y comparte datos personales.' },
    guidelines: { title: 'Normas de la comunidad | DoIt4Jesus', description: 'Lee las normas de seguridad, conducta, contenido y eventos de la comunidad de oración DoIt4Jesus.' },
  },
} as const;

export function pageMetadata(locale: Locale, page: CorePage): Metadata {
  const { title, description } = copy[locale][page];
  const url = `${siteUrl}${pathFor(locale, page)}`;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
      languages: { 'en-US': `${siteUrl}${pathFor('en', page)}`, 'es-ES': `${siteUrl}${pathFor('es', page)}`, 'x-default': `${siteUrl}${pathFor('en', page)}` },
    },
    robots: { index: true, follow: true },
    openGraph: { type: 'website', siteName: 'DoIt4Jesus', locale: locale === 'en' ? 'en_US' : 'es_ES', url, title, description, images: [{ url: `${siteUrl}/og-image.jpg`, width: 512, height: 512, alt: locale === 'en' ? 'DoIt4Jesus Catholic prayer app' : 'Aplicación católica de oración DoIt4Jesus' }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/og-image.jpg`] },
  };
}
