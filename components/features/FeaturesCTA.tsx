import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { appUrl } from '@/content/site';

export function FeaturesCTA({ final = false }: { final?: boolean }) {
  return <section className={`features-cta ${final ? 'features-cta-final' : 'features-cta-mid'}`} aria-labelledby={final ? 'features-final-title' : 'features-mid-title'}>
    <Container maxWidth="lg">
      <span className="features-kicker">{final ? 'Begin again today' : 'A daily invitation'}</span>
      <Typography component="h2" variant="h2" id={final ? 'features-final-title' : 'features-mid-title'}>{final ? 'Grow Closer to God, One Day at a Time.' : 'Ready to Build Better Catholic Habits?'}</Typography>
      <p>{final ? 'Pray. Read Scripture. Build discipline. Encourage others. Take your faith beyond the screen.' : 'Start with one Rosary, one reading, or one quiet moment of reflection. Let a small faithful choice become a habit.'}</p>
      <div className="features-cta-actions"><Button href={appUrl} variant="contained" color="primary" size="large">{final ? 'Get Started' : 'Start Your Journey'}</Button>{final && <Button href="/about" variant="outlined" size="large">Learn About DoIt4Jesus</Button>}</div>
    </Container>
  </section>;
}
