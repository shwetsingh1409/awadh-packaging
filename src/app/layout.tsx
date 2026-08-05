import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { company } from "@/lib/company";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Corrugated Boxes & Paper Packaging`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Awadh Packaging",
    "corrugated boxes",
    "corrugated sheets",
    "paper packaging",
    "Ayodhya packaging manufacturer",
    "3 ply boxes",
    "5 ply boxes",
    "7 ply boxes",
    "custom corrugated packaging",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Premium Packaging. Trusted Quality.`,
    description: company.description,
    images: [
      {
        url: "/images/gallery/01-factory-exterior-entrance.jpg",
        width: 1200,
        height: 900,
        alt: "Awadh Packaging factory exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.description,
    images: ["/images/gallery/01-factory-exterior-entrance.jpg"],
  },
  icons: {
    icon: "/images/brand/awadh-packaging-logo.jpg",
    apple: "/images/brand/awadh-packaging-logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  email: company.email,
  telephone: company.phones[0],
  foundingDate: String(company.yearEstablished),
  taxID: company.gstin,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}, ${company.address.line3}`,
    addressLocality: company.address.city,
    postalCode: company.address.pincode,
    addressRegion: company.address.state,
    addressCountry: "IN",
  },
  description: company.description,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: company.name,
  image: `${siteUrl}/og-image.svg`,
  url: siteUrl,
  telephone: company.phones[0],
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    postalCode: company.address.pincode,
    addressRegion: company.address.state,
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  areaServed: "IN",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, localBusinessJsonLd]),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
