import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Inter, Imperial_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-serif" })
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: "400", variable: "--font-imperial-script" })

export const metadata: Metadata = {
  title: "Kenneth & Nomay Wedding | June 24, 2026 | Tagaytay",
  description:
    "Join us in celebrating the wedding of Kenneth & Nomay on June 24, 2026 in Tagaytay — ceremony at Our Lady of Lourdes Parish and reception at Infinity Tagaytay Events Place. A joyful day of love, faith, and celebration.",
  keywords:
    "Kenneth and Nomay wedding, June 24 2026 wedding, Our Lady of Lourdes Parish Tagaytay, Infinity Tagaytay Events Place, Tagaytay wedding, wedding invitation website",
  authors: [
    { name: "Kenneth" },
    { name: "Nomay" },
  ],
  creator: "Kenneth and Nomay",
  publisher: "Kenneth and Nomay",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://kenneth-and-nomay-wedding.vercel.app/"),
  alternates: {
    canonical: "https://kenneth-and-nomay-wedding.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Kenneth & Nomay Wedding | June 24, 2026",
    description:
      "Celebrate with Kenneth & Nomay on June 24, 2026 in Tagaytay — ceremony at Our Lady of Lourdes Parish and reception at Infinity Tagaytay Events Place.",
    url: "https://kenneth-and-nomay-wedding.vercel.app/",
    siteName: "Kenneth & Nomay Wedding",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://kenneth-and-nomay-wedding.vercel.app/Couple_img/image.png",
        width: 1200,
        height: 630,
        alt: "Kenneth & Nomay Wedding Invitation - June 24, 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth & Nomay Wedding | June 24, 2026",
    description:
      "Join us in celebrating the wedding of Kenneth & Nomay on June 24, 2026 in Tagaytay — ceremony at Our Lady of Lourdes Parish and reception at Infinity Tagaytay Events Place.",
    images: ["https://kenneth-and-nomay-wedding.vercel.app/Couple_img/image.png"],
    creator: "@kennethandnomay",
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
  verification: {
    google: "your-google-site-verification",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Kenneth & Nomay Wedding",
      startDate: "2026-06-24T14:30:00+08:00",
      endDate: "2026-06-24T22:00:00+08:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: [
        {
          "@type": "Place",
          name: "Our Lady of Lourdes Parish",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tagaytay",
            addressCountry: "PH",
          },
        },
        {
          "@type": "Place",
          name: "Infinity Tagaytay Events Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tagaytay",
            addressCountry: "PH",
          },
        },
      ],
      image: ["https://kenneth-and-nomay-wedding.vercel.app/Couple_img/image.png"],
      description:
        "Join us in celebrating the wedding of Kenneth & Nomay on June 24, 2026 in Tagaytay — ceremony at Our Lady of Lourdes Parish and reception at Infinity Tagaytay Events Place. A joyful day of love, faith, and celebration.",
      organizer: {
        "@type": "Person",
        name: "Kenneth & Nomay",
      },
      offers: {
        "@type": "Offer",
        url: "https://kenneth-and-nomay-wedding.vercel.app/",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "PHP",
      },
      eventHashtag: "#KennethAndNomayWedding",
    }),
    "image": "https://kenneth-and-nomay-wedding.vercel.app/Couple_img/image.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#8EA58B" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=WindSong:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/mobile-background/DSCF2614-min.jpg" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/desktop-background/DSCF2444-min.jpg" media="(min-width: 768px)" />
      </head>
      <body className={`${inter.variable} ${greatVibes.variable} ${imperialScript.variable} font-inter antialiased text-foreground`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
