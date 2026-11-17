import type { Metadata } from 'next';
import Contact from './ContactPage';

export const metadata: Metadata = {
  title: 'Location, Hours & Contact',
  description:
    'Find DIRTYCLOTHS Laundry at Amuwatta Koratuwa, Midigama. Open every day 6 AM – 12 AM. Call or WhatsApp +94 72 1634 671.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <Contact />;
}
