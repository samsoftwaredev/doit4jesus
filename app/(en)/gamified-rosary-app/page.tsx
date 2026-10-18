import { SearchLandingPage } from '@/components/pages/SearchLandingPage';
import { seoPageMetadata } from '@/content/seo-pages';

export const metadata = seoPageMetadata('gamified-rosary-app');

export default function Page() {
  return <SearchLandingPage slug="gamified-rosary-app" />;
}
