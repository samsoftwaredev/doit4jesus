import Typography from '@mui/material/Typography';
import type { Feature } from '@/data/features';
import { FeatureIcon } from './FeatureIcon';

export function FeatureCard({ feature }: { feature: Feature }) {
  return <article className="detail-feature-card">
    <span className="detail-feature-icon"><FeatureIcon name={feature.icon} /></span>
    <Typography component="h3" variant="h3">{feature.title}</Typography>
    <Typography component="p">{feature.description}</Typography>
    <ul>{feature.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
  </article>;
}
