import { SearchLandingPage } from '@/components/pages/SearchLandingPage';
import { seoPageMetadata } from '@/content/seo-pages';

export const metadata = seoPageMetadata('examination-of-conscience-app', 'es');

export default function Page() {
  return <SearchLandingPage slug="examination-of-conscience-app" locale="es" />;
}
