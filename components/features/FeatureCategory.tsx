import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { FeatureCategory as Category } from '@/data/features';
import { FeatureCard } from './FeatureCard';

export function FeatureCategory({ category, index }: { category: Category; index: number }) {
  return <section id={category.id} className={`detail-feature-section detail-feature-section-${index % 2 ? 'tinted' : 'plain'}`} aria-labelledby={`${category.id}-title`}>
    <Container maxWidth="lg">
      <header className="detail-feature-heading">
        <span className="features-kicker">{String(index + 1).padStart(2, '0')} / {category.label}</span>
        <Typography component="h2" variant="h2" id={`${category.id}-title`}>{category.title}</Typography>
        <Typography component="p">{category.introduction}</Typography>
      </header>
      <div className="detail-feature-grid">{category.features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}</div>
      {category.closing && <p className="detail-feature-closing">{category.closing}</p>}
    </Container>
  </section>;
}
