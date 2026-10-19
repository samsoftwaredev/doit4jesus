import Container from '@mui/material/Container';
import { featureCategories } from '@/data/features';
import { publishedFeatureCategoriesEs } from '@/data/features.es';
import type { Locale } from '@/content/site';

export function FeatureNavigation({ locale = 'en' }: { locale?: Locale }) {
  const categories = locale === 'es' ? publishedFeatureCategoriesEs : featureCategories;
  return <nav className="feature-navigation" id="feature-navigation" aria-label={locale === 'en' ? 'Feature categories' : 'Categorías de funciones'}>
    <Container maxWidth="lg" className="feature-navigation-inner">
      <span>{locale === 'en' ? 'Explore the app' : 'Explora la aplicación'}</span>
      <div className="feature-navigation-scroll">
        {categories.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
      </div>
    </Container>
  </nav>;
}
