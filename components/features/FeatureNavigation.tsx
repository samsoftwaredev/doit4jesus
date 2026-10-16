import Container from '@mui/material/Container';
import { featureCategories } from '@/data/features';

export function FeatureNavigation() {
  return <nav className="feature-navigation" id="feature-navigation" aria-label="Feature categories">
    <Container maxWidth="lg" className="feature-navigation-inner">
      <span>Explore the app</span>
      <div className="feature-navigation-scroll">
        {featureCategories.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
      </div>
    </Container>
  </nav>;
}
