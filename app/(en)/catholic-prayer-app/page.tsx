import { SearchLandingPage } from '@/components/pages/SearchLandingPage';
import { seoPageMetadata } from '@/content/seo-pages';

export const metadata = seoPageMetadata('catholic-prayer-app');

export default function Page() {
  return <SearchLandingPage slug="catholic-prayer-app" />;
}
