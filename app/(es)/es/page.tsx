import { HomePage } from '@/components/pages/HomePage';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('es', 'home');
export default function Page() { return <HomePage locale="es" />; }
