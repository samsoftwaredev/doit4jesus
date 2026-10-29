import { LegalPage } from '@/components/pages/LegalPage';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('es', 'guidelines');
export default function Page() { return <LegalPage locale="es" page="guidelines" />; }
