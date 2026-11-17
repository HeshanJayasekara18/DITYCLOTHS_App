import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import PageHero from '../common/PageHero';
import CtaBand from '../common/CtaBand';
import { images } from '../common/images';
import { business } from '../common/business';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers about DIRTYCLOTHS Laundry in Midigama: price (Rs 700/kg), opening hours (6 AM – 12 AM daily), 24–48 hour turnaround, sun-drying, express, ironing and payment.',
  alternates: { canonical: '/faq' },
};

// Plain-text answers are used for both the visible page and the FAQPage structured data,
// so the two always match.
const faqs = [
  {
    q: 'Where is DIRTYCLOTHS Laundry located?',
    a: `We are at ${business.addressDisplay}. Travelers staying in nearby Ahangama and Weligama can also bring their laundry to our Midigama shop.`,
  },
  {
    q: 'What are your opening hours?',
    a: 'The shop is open every day from 6 AM to 12 AM (midnight). You can call or WhatsApp us during the same hours.',
  },
  {
    q: 'How much does laundry cost?',
    a: 'Our wash, sun-dry and fold service costs Rs 700 per kg. There is no minimum weight. For example, 5 kg costs Rs 3,500.',
  },
  {
    q: 'What is included in the price?',
    a: 'Washing with eco-friendly detergent (we never use bleach), drying and neat folding. Ironing is free on request.',
  },
  {
    q: 'How long does it take?',
    a: 'Normal orders are ready in 24–48 hours. Need it sooner? Ask for express and your laundry is ready within 24 hours, at the same price.',
  },
  {
    q: 'Do you dry clothes in the sun?',
    a: 'Yes. We dry clothes naturally in the sun, in a quiet, green area away from the dust and traffic of the main road. On rainy days we use covered drying or a dryer, depending on the weather and the fabric, so drying can take a little longer.',
  },
  {
    q: 'Do you have detergent for sensitive skin or baby clothes?',
    a: 'Yes. Tell us when you drop off and we will wash your clothes, or your baby’s clothes, with a gentle hypoallergenic detergent suitable for sensitive skin.',
  },
  {
    q: 'Do you offer pick-up or delivery?',
    a: 'Most customers drop off and collect at the shop. Pick-up and delivery may be possible nearby. Message us on WhatsApp to check.',
  },
  {
    q: 'How can I pay?',
    a: 'We accept cash in Sri Lankan rupees (LKR).',
  },
  {
    q: 'Who can use DIRTYCLOTHS?',
    a: 'Our laundry service is for tourists and travelers visiting Midigama, Ahangama and Weligama, including surfers and backpackers.',
  },
  {
    q: 'How do I contact you?',
    a: `Call or WhatsApp ${business.phoneDisplay}, or email ${business.email}. We reply every day between 6 AM and 12 AM.`,
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FaqPage() {
  return (
    <div className="bg-sand">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Quick answers about prices, opening hours, sun-drying and how our Midigama laundry works."
        image={images.serviceSun}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ul className="flex flex-col gap-4">
            {faqs.map(({ q, a }, i) => (
              <li key={q}>
                <details
                  className="group rounded-3xl bg-white p-5 shadow-soft ring-1 ring-forest-900/5 sm:p-6"
                  open={i < 3}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                    <h2>{q}</h2>
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-forest-800 transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-moss">{a}</p>
                </details>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm text-moss">
            Still have a question?{' '}
            <Link href="/contact" className="font-semibold text-forest-800 underline underline-offset-4">
              Contact us
            </Link>{' '}
            or see our{' '}
            <Link href="/services" className="font-semibold text-forest-800 underline underline-offset-4">
              services and prices
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Ready to drop off your laundry?"
        description="Open every day, 6 AM – 12 AM. Message us on WhatsApp with any question."
        primary={{ label: 'Message us on WhatsApp', href: business.whatsapp }}
        secondary={{ label: 'Get directions', href: business.mapUrl }}
      />
    </div>
  );
}
