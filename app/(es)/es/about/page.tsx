import { AboutPage } from '@/components/pages/AboutPage';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('es', 'about');
export default function Page() { return <AboutPage locale="es" />; }
