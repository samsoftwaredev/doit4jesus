import { SearchLandingPage } from '@/components/pages/SearchLandingPage';
import { seoPageMetadata } from '@/content/seo-pages';

export const metadata = seoPageMetadata('rosary-tracker-app', 'es');

export default function Page() {
  return <SearchLandingPage slug="rosary-tracker-app" locale="es" />;
}
