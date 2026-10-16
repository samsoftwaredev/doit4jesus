import { LegalPage } from '@/components/pages/LegalPage';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('en', 'terms');
export default function Page() { return <LegalPage locale="en" page="terms" />; }
