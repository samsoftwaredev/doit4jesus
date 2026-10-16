import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Eyebrow } from '../atoms/Eyebrow';

export function PageIntro({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <Container maxWidth="lg" className="page-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Typography component="h1" variant="h1">{title}</Typography>
      {lead && <Typography className="page-lead">{lead}</Typography>}
    </Container>
  );
}
