import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIRTYCLOTHS Laundry | Professional Laundry Service",
  description:
    "DIRTYCLOTHS Laundry offers reliable, affordable, and high-quality laundry services. Clean clothes, fresh feel, trusted service.",
  keywords: [
    "DirtyCloths",
    "Laundry Service",
    "Dry Cleaning",
    "Clothes Washing",
    "laundry midigama",
    "laundry sri lanka",
    "best laundry service",
  ],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "DIRTYCLOTHS Laundry | Professional Laundry Service",
    description: "Reliable, affordable, and high-quality laundry services.",
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
              description: "Professional laundry service",
              url: "https://dirtyclothslaundry-midigama.netlify.app/",
              telephone: "+94721634671",
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
