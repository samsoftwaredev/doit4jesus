import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { appUrl, signupUrl } from '@/content/site';
import { pathFor, type Locale } from '@/content/site';

const copy = {
  en: { finalKicker: 'Begin again today', midKicker: 'A daily invitation', finalTitle: 'Grow Closer to God, One Day at a Time.', midTitle: 'Ready to Build Better Catholic Habits?', finalBody: 'Pray. Read Scripture. Build discipline. Encourage others. Take your faith beyond the screen.', midBody: 'Start with one Rosary, one reading, or one quiet moment of reflection. Let a small faithful choice become a habit.', started: 'Get Started', journey: 'Start Your Journey', about: 'Learn About DoIt4Jesus' },
  es: { finalKicker: 'Comienza de nuevo hoy', midKicker: 'Una invitación diaria', finalTitle: 'Acércate más a Dios, un día a la vez.', midTitle: '¿Listo para cultivar mejores hábitos católicos?', finalBody: 'Ora. Lee la Escritura. Cultiva la disciplina. Anima a otros. Lleva tu fe más allá de la pantalla.', midBody: 'Comienza con un Rosario, una lectura o un momento sereno de reflexión. Deja que una pequeña decisión fiel se vuelva un hábito.', started: 'Comienza ahora', journey: 'Comienza tu camino', about: 'Conoce DoIt4Jesus' },
} as const;

export function FeaturesCTA({ final = false, locale = 'en' }: { final?: boolean; locale?: Locale }) {
  const t = copy[locale];
  return <section className={`features-cta ${final ? 'features-cta-final' : 'features-cta-mid'}`} aria-labelledby={final ? 'features-final-title' : 'features-mid-title'}>
    <Container maxWidth="lg">
      <span className="features-kicker">{final ? t.finalKicker : t.midKicker}</span>
      <Typography component="h2" variant="h2" id={final ? 'features-final-title' : 'features-mid-title'}>{final ? t.finalTitle : t.midTitle}</Typography>
      <p>{final ? t.finalBody : t.midBody}</p>
      <div className="features-cta-actions"><Button href={final ? signupUrl : appUrl} variant="contained" color="primary" size="large">{final ? t.started : t.journey}</Button>{final && <Button href={pathFor(locale, 'about')} variant="outlined" size="large">{t.about}</Button>}</div>
    </Container>
  </section>;
}
