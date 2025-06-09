import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO_CONFIG } from "@/lib/data";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://madu-kamii.vercel.app"),
  title: {
    default: SEO_CONFIG.title,
    template: "%s | Madu Kamii - Madu Hutan Jambi Premium",
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.author,
  robots: SEO_CONFIG.robots,

  // Canonical URL
  alternates: {
    canonical: SEO_CONFIG.canonical,
  },

  // Open Graph - Enhanced
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://madu-kamii.vercel.app",
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    siteName: "Madu Kamii",
    images: [
      {
        url: "/images/og-madu-kamii.jpg",
        width: 1200,
        height: 630,
        alt: "Madu Kamii - Madu Hutan Jambi Premium Asli",
      },
      {
        url: "/images/logo-madu-kami.png",
        width: 500,
        height: 500,
        alt: "Logo Madu Kamii",
      },
    ],
  },

  // Twitter Card - Enhanced
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: ["/images/og-madu-kamii.jpg"],
    creator: "@madu.kamii",
  },

  // Additional meta tags
  other: {
    "google-site-verification": SEO_CONFIG.googleSiteVerification,
    "msvalidate.01": "your-bing-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "facebook-domain-verification": "your-facebook-verification-code",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },

  // Category
  category: "food",
};

// Enhanced JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Madu Kamii",
  alternateName: ["Madu Kamii Jambi", "Madu Hutan Jambi"],
  description: "Madu hutan Jambi asli premium - madu hitam, kelulut, dan tualang murni 100%",
  url: "https://madu-kamii.vercel.app",
  telephone: "+6285267607261",
  email: "info@madu-kamii.com",
  image: "https://madu-kamii.vercel.app/images/logo-madu-kami.png",
  logo: "https://madu-kamii.vercel.app/images/logo-madu-kami.png",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Hutan Jambi No. 123",
    addressLocality: "Kota Jambi",
    addressRegion: "Jambi",
    postalCode: "36124",
    addressCountry: "ID",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.6101,
    longitude: 103.6131,
  },

  openingHours: ["Mo-Su 08:00-22:00"],
  priceRange: "Rp 100.000 - Rp 200.000",
  servesCuisine: "Indonesian",
  currenciesAccepted: "IDR",
  paymentAccepted: ["Cash", "Bank Transfer", "E-Wallet"],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produk Madu Kamii",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Madu Hitam Hutan Jambi Premium",
          description: "Madu hitam murni dari hutan tropis Jambi",
          brand: "Madu Kamii",
          category: "Madu Premium",
        },
        price: "120000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Madu Kelulut Hutan Jambi",
          description: "Madu kelulut asli dari lebah tanpa sengat",
          brand: "Madu Kamii",
          category: "Madu Premium",
        },
        price: "175000",
        priceCurrency: "IDR",
      },
    ],
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },

  sameAs: ["https://instagram.com/madu.kamii", "https://wa.me/6285267607261"],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+6285267607261",
    contactType: "Customer Service",
    availableLanguage: ["Indonesian"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Enhanced JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Favicon Links */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="4GXscRip8VKWl7_LgYijJQP6Me-Q8R9WjZNEnwqdRy0" />

        {/* Performance & SEO Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//instagram.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Additional SEO Meta */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LoadingSpinner />
        {children}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/6285267607261"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
          aria-label="Chat WhatsApp Madu Kamii"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687" />
          </svg>
        </a>
      </body>
    </html>
  );
}
