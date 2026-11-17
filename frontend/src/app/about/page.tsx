import type { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'DIRTYCLOTHS is a small laundry in Midigama, Sri Lanka, for travelers and surfers. We wash with eco-friendly detergents, never use bleach, and sun-dry clothes away from roadside dust.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return <AboutPage />;
}
