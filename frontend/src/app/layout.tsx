import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIRTYCLOTHS Laundry | Professional Laundry Service in Midigama, Ahangama & Weligama",
  description:
    "DIRTYCLOTHS Laundry - Professional laundry service in Midigama, Ahangama, and Weligama, Sri Lanka. Reliable, affordable, high-quality laundry services for your clothes.",
  keywords: [
    "DirtyCloths",
    "Laundry Service",
    "Dry Cleaning",
    "Clothes Washing",
    "laundry midigama",
    "laundry ahangama",
    "laundry weligama",
    "laundry sri lanka",
    "best laundry service",
    "laundry service near me",
    "professional laundry midigama",
    "laundry cleaning ahangama",
    "laundry cleaning weligama",
  ],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "DIRTYCLOTHS Laundry | Midigama, Ahangama & Weligama",
    description: "Professional laundry services in Midigama, Ahangama & Weligama.",
    type: "website",
    url: "https://dirtyclothslaundry-midigama.netlify.app/",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DIRTYCLOTHS Laundry",
              description: "Professional laundry service in Midigama, Ahangama, and Weligama",
              url: "https://dirtyclothslaundry-midigama.netlify.app/",
              telephone: "+94721634671",
              areaServed: [
                {
                  "@type": "Place",
                  name: "Midigama"
                },
                {
                  "@type": "Place",
                  name: "Ahangama"
                },
                {
                  "@type": "Place",
                  name: "Weligama"
                }
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Amuwatta koratuwa",
                addressLocality: "Midigama",
                addressRegion: "Sri Lanka",
                postalCode: "80650",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

