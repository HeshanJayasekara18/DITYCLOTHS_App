import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { images, photoCredits, licenseUrls } from '../common/images';

export const metadata: Metadata = {
  title: 'Photo Credits',
  description: 'Credits and licenses for the photos used on the DIRTYCLOTHS Laundry website.',
  alternates: { canonical: '/credits' },
};

export default function Credits() {
  return (
    <div className="bg-sand pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <span className="eyebrow">Thank you</span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest-900 sm:text-5xl">
          Photo credits
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-forest-900/70">
          Some photos on this site were shared by photographers on Wikimedia Commons under Creative Commons
          licenses. Photos were resized and cropped to fit the layout.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {photoCredits.map((credit) => (
            <li key={credit.file} className="flex gap-4 rounded-3xl bg-white p-4 shadow-sm">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                <Image src={`/images/${credit.file}`} alt="" fill sizes="80px" className="object-cover" />
              </div>
              <div className="min-w-0 text-sm">
                <p className="eyebrow !text-[0.7rem]">{credit.usedFor}</p>
                <a
                  href={credit.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-start gap-1 font-semibold text-forest-900 hover:underline"
                >
                  {credit.title}
                  <ArrowUpRight size={14} className="mt-0.5 shrink-0" />
                </a>
                <p className="mt-1 text-forest-900/70">
                  by {credit.author} ·{' '}
                  <a
                    href={licenseUrls[credit.license]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-forest-900"
                  >
                    {credit.license}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-forest-900/60">
          Shop photos (such as the{' '}
          <a href={images.shopSign} className="underline">
            DIRTYCLOTHS sign
          </a>
          ) are our own.
        </p>
      </div>
    </div>
  );
}
