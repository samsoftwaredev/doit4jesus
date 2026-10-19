import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { AppPreviewTour } from '@/components/features/AppPreviewTour';
import { FeatureCategory } from '@/components/features/FeatureCategory';
import { FeatureNavigation } from '@/components/features/FeatureNavigation';
import { FeaturesCTA } from '@/components/features/FeaturesCTA';
import { FeaturesFAQ } from '@/components/features/FeaturesFAQ';
import { FeaturesHero } from '@/components/features/FeaturesHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { PublicPageShell } from '@/components/templates/PublicPageShell';
import { pathFor, siteUrl, type Locale } from '@/content/site';
import { featureFaq, publishedFeatureCategories } from '@/data/features';
import { featureFaqEs, publishedFeatureCategoriesEs } from '@/data/features.es';

const copy = {
  en: {
    whole: 'The whole journey', more: 'More Than a Rosary Counter',
    difference: 'A Rosary counter can help you keep track. DoIt4Jesus goes further by placing prayer beside Scripture, reflection, meaningful progress, and Catholic community—without pretending an app can replace a sacramental life.',
    beginning: 'One important beginning', tracker: 'A simple Rosary tracker', trackerItems: ['Record completed Rosaries', 'Notice prayer consistency', 'Return to the mysteries'],
    wider: 'A wider Catholic rhythm', appItems: ['Pray the guided Rosary', 'Read daily Catholic Mass Scripture', 'Reflect with an examination of conscience', 'Track prayer and Scripture habits', 'See XP, levels, milestones, and badges', 'Connect with friends and shared prayer', 'Find encouragement in community activity'],
    noteBefore: 'Learn', about: 'about our mission', noteMiddle: 'or review how we approach personal information in our', privacy: 'privacy policy',
    rhythm: 'A rhythm for ordinary days', fit: 'How DoIt4Jesus Can Fit Into Your Day', fitLead: 'You do not need to complete every activity. The app is a companion for small acts of faithfulness, not another list of demands.',
    days: [
      { title: 'Begin with prayer', body: 'Open today’s Rosary and spend time with one of the mysteries of Christ. If you are beginning again after a break, start where you are. A daily streak may encourage you, but the invitation to pray remains whether the streak is one day or one hundred.' },
      { title: 'Listen to the Word', body: 'Read the day’s Catholic Mass readings and notice the liturgical season. Give yourself time to sit with a passage instead of treating completion as a task. The reading marker can help you remember that you returned; it cannot tell you what God has done in your heart.' },
      { title: 'Carry it into life', body: 'Reflect honestly with an examination of conscience, encourage a friend, or take an intention to Mass. Then put the phone away. Catholic habits grow through the Sacraments, relationships, service, and prayer when no one is watching.' },
    ],
    appDescription: 'A Catholic prayer app for guided Rosary prayer, daily Mass Scripture, prayer tracking, spiritual reflection, progress, and community.', home: 'Home', features: 'Features', language: 'en-US',
  },
  es: {
    whole: 'El camino completo', more: 'Más que un contador de Rosarios',
    difference: 'Un contador puede ayudarte a llevar un registro. DoIt4Jesus va más allá al unir la oración con la Escritura, la reflexión, un progreso con sentido y la comunidad católica, sin pretender que una aplicación sustituya la vida sacramental.',
    beginning: 'Un comienzo importante', tracker: 'Un seguimiento sencillo del Rosario', trackerItems: ['Registrar Rosarios terminados', 'Reconocer la constancia', 'Volver a los misterios'],
    wider: 'Un ritmo católico más amplio', appItems: ['Rezar el Rosario guiado', 'Leer la Escritura diaria de la Misa', 'Reflexionar con un examen de conciencia', 'Seguir hábitos de oración y lectura', 'Ver XP, niveles, logros e insignias', 'Conectar con amigos y oración compartida', 'Encontrar ánimo en la comunidad'],
    noteBefore: 'Conoce', about: 'nuestra misión', noteMiddle: 'o revisa cómo tratamos la información personal en nuestra', privacy: 'política de privacidad',
    rhythm: 'Un ritmo para los días ordinarios', fit: 'Cómo puede acompañarte DoIt4Jesus durante el día', fitLead: 'No necesitas terminar cada actividad. La aplicación acompaña pequeños actos de fidelidad; no es otra lista de exigencias.',
    days: [
      { title: 'Comienza con la oración', body: 'Abre el Rosario de hoy y dedica tiempo a uno de los misterios de Cristo. Si vuelves después de una pausa, comienza donde estás. Una racha puede animarte, pero la invitación a orar permanece sin importar el número.' },
      { title: 'Escucha la Palabra', body: 'Lee las lecturas de la Misa y reconoce el tiempo litúrgico. Permanece con un pasaje en lugar de tratarlo como una tarea. La marca de lectura recuerda que volviste; no puede decir qué hizo Dios en tu corazón.' },
      { title: 'Llévalo a la vida', body: 'Reflexiona con un examen de conciencia, anima a un amigo o lleva una intención a Misa. Después, guarda el teléfono. Los hábitos católicos crecen en los Sacramentos, las relaciones, el servicio y la oración que nadie ve.' },
    ],
    appDescription: 'Una aplicación católica con Rosario guiado, Escritura diaria de la Misa, seguimiento, reflexión espiritual, progreso y comunidad.', home: 'Inicio', features: 'Funciones', language: 'es-ES',
  },
} as const;

export function FeaturesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const categories = locale === 'es' ? publishedFeatureCategoriesEs : publishedFeatureCategories;
  const faq = locale === 'es' ? featureFaqEs : featureFaq;
  const featuresUrl = `${siteUrl}${pathFor(locale, 'features')}`;
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  const appSchema = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'DoIt4Jesus', applicationCategory: 'LifestyleApplication', description: t.appDescription, url: siteUrl, inLanguage: t.language };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: t.home, item: `${siteUrl}${pathFor(locale, 'home')}` }, { '@type': 'ListItem', position: 2, name: t.features, item: featuresUrl }] };

  return <PublicPageShell locale={locale} page="features">
    <JsonLd data={faqSchema} /><JsonLd data={appSchema} /><JsonLd data={breadcrumbSchema} />
    <FeaturesHero locale={locale} />
    <FeatureNavigation locale={locale} />
    <AppPreviewTour locale={locale} />
    {categories.map((category, index) => <div key={category.id}>
      {index === 4 && <FeaturesCTA locale={locale} />}
      <FeatureCategory category={category} index={index} />
    </div>)}
    <section className="features-difference" aria-labelledby="features-difference-title">
      <Container maxWidth="lg">
        <div className="features-difference-heading"><span className="features-kicker">{t.whole}</span><Typography component="h2" variant="h2" id="features-difference-title">{t.more}</Typography><p>{t.difference}</p></div>
        <div className="features-difference-grid">
          <div className="features-difference-card"><span>{t.beginning}</span><h3>{t.tracker}</h3><ul>{t.trackerItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="features-difference-card features-difference-card-highlight"><span>{t.wider}</span><h3>DoIt4Jesus</h3><ul>{t.appItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <p className="features-difference-note">{t.noteBefore} <Link href={pathFor(locale, 'about')}>{t.about}</Link>, {t.noteMiddle} <Link href={pathFor(locale, 'privacy')}>{t.privacy}</Link>.</p>
      </Container>
    </section>
    <section className="features-rhythm" aria-labelledby="features-rhythm-title">
      <Container maxWidth="lg">
        <div className="features-rhythm-heading"><span className="features-kicker">{t.rhythm}</span><Typography component="h2" variant="h2" id="features-rhythm-title">{t.fit}</Typography><p>{t.fitLead}</p></div>
        <div className="features-rhythm-grid">{t.days.map((day, index) => <article key={day.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{day.title}</h3><p>{day.body}</p></article>)}</div>
      </Container>
    </section>
    <FeaturesFAQ locale={locale} />
    <FeaturesCTA final locale={locale} />
  </PublicPageShell>;
}
