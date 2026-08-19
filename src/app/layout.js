import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://digikampaign.com"),
  title: {
    default: "DigiKampaign | Social Media Management & Digital Growth Agency",
    template: "%s | DigiKampaign",
  },
  description:
    "DigiKampaign is a premier social media management, organic reach, content creation, and SEO growth agency helping brands scale audience engagement and digital footprint.",
  keywords: [
    "DigiKampaign",
    "Social Media Management",
    "Social Media Agency",
    "Content Creation",
    "Digital Marketing Agency",
    "Organic Social Reach",
    "SEO Services",
    "Search Engine Optimization",
    "Web Development Agency",
    "Brand Engagement Strategy",
  ],
  authors: [{ name: "DigiKampaign", url: "https://digikampaign.com" }],
  creator: "DigiKampaign",
  publisher: "DigiKampaign",
  openGraph: {
    title: "DigiKampaign | Social Media Management & Digital Growth Agency",
    description:
      "Accelerate brand reach, social engagement, viral content creation, and search engine visibility with DigiKampaign.",
    url: "https://digikampaign.com",
    siteName: "DigiKampaign",
    images: [
      {
        url: "https://digikampaign.com/logo.png",
        width: 2000,
        height: 2000,
        alt: "DigiKampaign Digital Growth & Social Media Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiKampaign | Social Media Management & Digital Growth Agency",
    description:
      "Accelerate brand reach, social engagement, viral content creation, and search engine visibility with DigiKampaign.",
    images: ["https://digikampaign.com/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://digikampaign.com",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MarketingAgency", "ProfessionalService"],
  name: "DigiKampaign",
  alternateName: ["DigiKampaign", "DigiKampaign Agency"],
  url: "https://digikampaign.com",
  logo: "https://digikampaign.com/logo.png",
  image: "https://digikampaign.com/logo.png",
  description:
    "DigiKampaign is a premier digital marketing agency specializing in social media handling, organic reach expansion, audience engagement strategies, viral content production, SEO, and full-stack web development.",
  knowsAbout: [
    "Social Media Management",
    "Social Media Marketing",
    "Audience Engagement & Growth",
    "Content Strategy & Creation",
    "Short-Form Video Production (Reels/Shorts)",
    "Search Engine Optimization (SEO)",
    "Digital Marketing Strategy",
    "Full-Stack Web Development",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing & Social Media Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Management & Strategy",
          description: "End-to-end multi-platform social media account management, posting, and growth execution.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Creation & Reels Production",
          description: "Viral short-form scripts, carousel designs, graphic production, and visual storytelling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Digital Search Marketing",
          description: "Technical, local, and content-driven Search Engine Optimization to drive organic website traffic.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & Digital Engineering",
          description: "High-performance website development, custom web applications, and landing page conversion optimization.",
        },
      },
    ],
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DigiKampaign",
  alternateName: ["DigiKampaign", "DigiKampaign Agency"],
  url: "https://digikampaign.com",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning prevents false warnings from browser extensions
    // (e.g. password managers, dark-mode tools) that inject attributes on <html>.
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/assets/extracted/asset-50dca57f.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/extracted/asset-5d618c46.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/extracted/asset-8a24f395.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

