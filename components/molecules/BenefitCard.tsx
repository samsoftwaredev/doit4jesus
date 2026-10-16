import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function BenefitCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <Box component="article" className="benefit-card">
      <span className="benefit-number" aria-hidden="true">{number}</span>
      <Typography component="h3" variant="h4">{title}</Typography>
      <Typography>{body}</Typography>
    </Box>
  );
}
