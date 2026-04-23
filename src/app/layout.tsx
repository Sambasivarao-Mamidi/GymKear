import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://gymkear.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#01100c",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GymKear - Premium Fitness Center | Best Gym in NYC",
    template: "%s | GymKear",
  },
  description: "Transform your life at GymKear - NYC's premier fitness center. Expert personal trainers, state-of-the-art equipment, group classes, and wellness programs. Join today!",
  keywords: [
    "gym",
    "fitness",
    "fitness center",
    "gym near me",
    "personal training",
    "group fitness classes",
    "nutrition planning",
    "wellness program",
    "health club",
    "workout",
    "bodybuilding",
    "strength training",
    "cardio",
    "NYC gym",
    "GymKear",
  ],
  authors: [{ name: "GymKear" }],
  creator: "GymKear",
  publisher: "GymKear",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "GymKear",
    title: "GymKear - Premium Fitness Center | Best Gym in NYC",
    description: "Transform your life at GymKear - NYC's premier fitness center. Expert personal trainers, state-of-the-art equipment, group classes, and wellness programs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GymKear - Premium Fitness Center",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymKear - Premium Fitness Center | Best Gym in NYC",
    description: "Transform your life at GymKear - NYC's premier fitness center. Expert personal trainers, state-of-the-art equipment, and group classes.",
    images: ["/og-image.jpg"],
    creator: "@gymkear",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FitnessCenter",
    name: "GymKear",
    description: "NYC's premier fitness center with expert trainers, state-of-the-art equipment, and comprehensive wellness programs.",
    url: siteUrl,
    telephone: "+1-555-123-4567",
    email: "hello@gymkear.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Fitness Street",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10036",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.758896,
      longitude: -73.985130,
    },
    openingHours: [
      "Mo-Fr 05:00-22:00",
      "Sa-Su 07:00-20:00",
    ],
    priceRange: "$$",
    image: `${siteUrl}/og-image.jpg`,
    sameAs: [
      "https://facebook.com/gymkear",
      "https://instagram.com/gymkear",
      "https://twitter.com/gymkear",
      "https://youtube.com/gymkear",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}