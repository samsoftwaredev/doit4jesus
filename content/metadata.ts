import type { Metadata } from 'next';
import { pathFor, siteUrl, type CorePage, type Locale } from './site';

const copy = {
  en: {
    home: { title: 'Do It for Jesus Every Day | DoIt4Jesus Catholic App', description: 'Do it for Jesus every day with guided Rosary prayer, daily Catholic Scripture, reflection, progress, and community in the DoIt4Jesus app.' },
    features: { title: 'DoIt4Jesus Features | Catholic Prayer, Rosary & Faith App', description: 'Explore Catholic prayer, Rosary tracking, daily Scripture, spiritual growth, achievements, friends, and community features in the DoIt4Jesus faith app.' },
    about: { title: 'About DoIt4Jesus | Our Rosary Prayer Mission', description: 'Learn why DoIt4Jesus brings people together through Rosary prayer, faith, and community.' },
    terms: { title: 'Terms of Service | DoIt4Jesus', description: 'Read the terms that govern use of the DoIt4Jesus Rosary app and community.' },
    privacy: { title: 'Privacy Policy | DoIt4Jesus', description: 'Learn how DoIt4Jesus collects, uses, protects, and shares personal information.' },
    guidelines: { title: 'Community Guidelines | DoIt4Jesus', description: 'Read the safety, conduct, content, and event rules for the DoIt4Jesus prayer community.' },
  },
  es: {
    home: { title: 'Hazlo por Jesús cada día | DoIt4Jesus', description: 'Hazlo por Jesús cada día con el Rosario guiado, la Sagrada Escritura, la reflexión, el progreso y la comunidad católica.' },
    features: { title: 'Funciones de DoIt4Jesus | Oración y Rosario', description: 'Descubre las funciones de oración, Rosario, Escritura, progreso y comunidad de DoIt4Jesus.' },
    about: { title: 'Acerca de DoIt4Jesus | Nuestra misión', description: 'Conoce por qué DoIt4Jesus reúne a las personas a través del Rosario, la fe y la comunidad.' },
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
    openGraph: { type: 'website', siteName: 'DoIt4Jesus', locale: locale === 'en' ? 'en_US' : 'es_ES', url, title, description, images: [{ url: `${siteUrl}/og-image.jpg`, width: 512, height: 512, alt: 'DoIt4Jesus' }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/og-image.jpg`] },
  };
}
