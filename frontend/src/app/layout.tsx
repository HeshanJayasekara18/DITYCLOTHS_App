import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./common/Navbar";
import Footerpart from "./common/Footerpart";
import WhatsAppButton from "./common/WhatsAppButton";
import { business, siteUrl } from "./common/business";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f351e",
};

const defaultDescription =
  "Wash, sun-dry and fold laundry in Midigama for Rs 700/kg. Clothes are naturally sun-dried in a clean area away from roadside dust. Open daily 6 AM – 12 AM.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Laundry Service in Midigama | DIRTYCLOTHS",
    template: "%s | DIRTYCLOTHS Laundry",
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: "DIRTYCLOTHS Laundry | Sun-Dried Laundry in Midigama",
    description: defaultDescription,
    type: "website",
    url: "/",
    siteName: "DIRTYCLOTHS Laundry",
    locale: "en_US",
    images: [{ url: "/images/hero.jpg", width: 1280, height: 1600, alt: "Fresh laundry drying on a line in the sunshine" }],
  },
  robots: { index: true, follow: true },
};

// Local business structured data. Every fact here is also visible on the site.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  "@id": `${siteUrl}/#business`,
  name: business.name,
  url: `${siteUrl}/`,
  description:
    "Wash, sun-dry and fold laundry service for travelers and surfers in Midigama, Sri Lanka. Clothes are naturally sun-dried in a clean area away from roadside dust.",
  image: `${siteUrl}/images/hero.jpg`,
  telephone: business.phone,
  email: business.email,
  priceRange: "LKR 700 per kg",
  paymentAccepted: "Cash",
  currenciesAccepted: "LKR",
  hasMap: business.mapUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
  ],
  areaServed: ["Midigama", "Ahangama", "Weligama"].map((name) => ({ "@type": "Place", name })),
  makesOffer: [
    {
      "@type": "Offer",
      name: "Wash, sun-dry and fold",
      description: "Ready in 24–48 hours. No minimum weight.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: business.pricePerKg,
        priceCurrency: "LKR",
        unitText: "kg",
      },
    },
    { "@type": "Offer", name: "Express service", description: "Ready within 24 hours at the same price per kg." },
    { "@type": "Offer", name: "Ironing", description: "Free on request." },
    { "@type": "Offer", name: "Baby and sensitive-skin care", description: "Gentle hypoallergenic detergent on request." },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body id="top">
        <Navbar />
        {children}
        <Footerpart />
        <WhatsAppButton />
      </body>
    </html>
  );
}
