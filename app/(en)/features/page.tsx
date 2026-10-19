import { FeaturesPage } from '@/components/pages/FeaturesPage';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('en', 'features');

export default function Page() {
  return <FeaturesPage locale="en" />;
}
