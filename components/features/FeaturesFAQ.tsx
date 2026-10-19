import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { featureFaq } from '@/data/features';
import { featureFaqEs } from '@/data/features.es';
import type { Locale } from '@/content/site';

export function FeaturesFAQ({ locale = 'en' }: { locale?: Locale }) {
  const faq = locale === 'es' ? featureFaqEs : featureFaq;
  return <section className="features-faq" aria-labelledby="features-faq-title">
    <Container maxWidth="lg" className="features-faq-inner">
      <div><span className="features-kicker">{locale === 'en' ? 'Good questions' : 'Buenas preguntas'}</span><Typography component="h2" variant="h2" id="features-faq-title">{locale === 'en' ? 'Questions About DoIt4Jesus' : 'Preguntas sobre DoIt4Jesus'}</Typography><p>{locale === 'en' ? 'Clear answers about the app, Catholic practice, and what progress can—and cannot—mean.' : 'Respuestas claras sobre la aplicación, la práctica católica y lo que el progreso puede —y no puede— significar.'}</p></div>
      <div className="features-faq-list">{faq.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </Container>
  </section>;
}
