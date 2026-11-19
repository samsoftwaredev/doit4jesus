'use client';

import { useSyncExternalStore } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { PageIntro } from '../molecules/PageIntro';
import { PublicPageShell } from '../templates/PublicPageShell';
import { appUrl, type Locale } from '@/content/site';

const copy = {
  en: {
    eyebrow: 'You are invited',
    title: 'A friend invited you to DoIt4Jesus',
    lead: 'Pray together, grow in faith, and encourage one another. Open the invite in the app to become friends right away.',
    openApp: 'Open in the app',
    openWeb: 'Continue on the web',
    invalid: 'This invite link looks incomplete. Ask your friend to share it again.',
  },
  es: {
    eyebrow: 'Estás invitado',
    title: 'Un amigo te invitó a DoIt4Jesus',
    lead: 'Oren juntos, crezcan en la fe y anímense mutuamente. Abre la invitación en la aplicación para ser amigos de inmediato.',
    openApp: 'Abrir en la aplicación',
    openWeb: 'Continuar en la web',
    invalid: 'Este enlace de invitación parece incompleto. Pide a tu amigo que lo comparta de nuevo.',
  },
} as const;

const CODE_PATTERN = /^[A-Za-z0-9_-]{12,64}$/u;

/** Reads the invite code from the last URL segment, because the static export serves one page for every code. */
function readCode(): string | null {
  const segment = window.location.pathname.split('/').filter(Boolean).pop() ?? '';
  return CODE_PATTERN.test(segment) ? segment : null;
}

/** The URL never changes while this page is mounted, so there is nothing to subscribe to. */
function subscribeToNothing(): () => void {
  return () => undefined;
}

/** Landing page for shared friend-invite links; the app handles the invite itself when it is installed. */
export function InvitePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  // The server snapshot is undefined, so nothing is shown until the browser URL can be read.
  const code = useSyncExternalStore(subscribeToNothing, readCode, () => undefined);

  return (
    <PublicPageShell locale={locale} page="home">
      <PageIntro eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <Container maxWidth="sm">
        {code === null ? <Typography role="alert">{t.invalid}</Typography> : null}
        {code ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 8 }}>
            <Button href={`doit4jesus://invite/${code}`} size="large" variant="contained">
              {t.openApp}
            </Button>
            <Button href={`${appUrl}/invite/${code}`} size="large" variant="outlined">
              {t.openWeb}
            </Button>
          </Box>
        ) : null}
      </Container>
    </PublicPageShell>
  );
}
