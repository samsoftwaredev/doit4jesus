import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Brand({ href = '/', label = 'DoIt4Jesus home' }: { href?: string; label?: string }) {
  return (
    <Link href={href} className="brand" aria-label={label}>
      <Box className="brand-mark" aria-hidden="true"><span>✝</span></Box>
      <Typography component="span" className="brand-name">DoIt4Jesus</Typography>
    </Link>
  );
}
