import { FeaturesPage } from '@/components/pages/FeaturesPage';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('es', 'features');

export default function Page() {
  return <FeaturesPage locale="es" />;
}
