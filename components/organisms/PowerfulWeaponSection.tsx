import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { content, type Locale } from '@/content/site';

export function PowerfulWeaponSection({ locale }: { locale: Locale }) {
  const t = content[locale].home;
  return (
    <section className="weapon-section" aria-labelledby="weapon-title">
      <Container maxWidth="lg" className="weapon-grid">
        <Box className="weapon-copy">
          <Typography id="weapon-title" component="h2" variant="h2">{t.weaponTitle}</Typography>
          <Typography>{t.weaponBody}</Typography>
        </Box>
        <Box className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/x1tH_zQ-Cz0"
            title={t.videoTitle}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Box>
      </Container>
    </section>
  );
}
