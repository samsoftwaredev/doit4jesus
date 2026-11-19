import type { Metadata } from 'next';
import { InvitePage } from '@/components/pages/InvitePage';

export const metadata: Metadata = {
  title: 'Estás invitado | DoIt4Jesus',
  robots: { index: false, follow: false },
};
export default function Page() { return <InvitePage locale="es" />; }
