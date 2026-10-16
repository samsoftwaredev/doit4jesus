import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <Typography component="p" className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{children}</Typography>;
}
