import { LegalPage } from '@/components/pages/LegalPage';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('en', 'privacy');
export default function Page() { return <LegalPage locale="en" page="privacy" />; }
