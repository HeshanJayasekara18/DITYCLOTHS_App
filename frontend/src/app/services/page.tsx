import type { Metadata } from 'next';
import Services from './ServicesPage';

export const metadata: Metadata = {
  title: 'Laundry Prices & Services',
  description:
    'Wash, sun-dry and fold for Rs 700/kg with no minimum. Ready in 24–48 hours, express within 24 hours at the same price, free ironing on request. Midigama, Sri Lanka.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <Services />;
}
