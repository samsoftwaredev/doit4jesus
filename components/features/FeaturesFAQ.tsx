import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { featureFaq } from '@/data/features';

export function FeaturesFAQ() {
  return <section className="features-faq" aria-labelledby="features-faq-title">
    <Container maxWidth="lg" className="features-faq-inner">
      <div><span className="features-kicker">Good questions</span><Typography component="h2" variant="h2" id="features-faq-title">Questions About DoIt4Jesus</Typography><p>Clear answers about the app, Catholic practice, and what progress can—and cannot—mean.</p></div>
      <div className="features-faq-list">{featureFaq.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </Container>
  </section>;
}
