import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { COMPANY_INFO } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srivathsagroup.in"),
  title: {
    default: "Srivathsa Group | Signage, Interior Works & Real Estate Bangalore",
    template: "%s | Srivathsa Group",
  },
  description:
    "Srivathsa Group provides top-rated 3D LED signage manufacturing, turnkey commercial office interior works, and real estate advisory services in Bangalore.",
  keywords: [
    "Signage Manufacturing Bangalore",
    "Signboard Manufacturer Near Me",
    "3D LED Stainless Steel Letters",
    "Acrylic Signage Board Maker Bangalore",
    "Turnkey Interior Works Bangalore",
    "Commercial Office Fit-outs Bangalore",
    "Real Estate Advisory Bangalore",
    "Commercial Property Advisory",
    "Converted Land Plots Bangalore",
    "Safety Traffic Night Glow Signage",
    "Srivathsa Enterprises",
    "Srivathsa Group Bangalore",
  ],
  authors: [{ name: COMPANY_INFO.ceo.name }],
  creator: COMPANY_INFO.name,
  alternates: {
    canonical: "https://srivathsagroup.in",
  },
  openGraph: {
    title: "Srivathsa Group | Signage, Interior Works & Real Estate Bangalore",
    description:
      "Complete business solutions for signage manufacturing, turnkey interior project execution, and real estate requirements in Bangalore.",
    url: "https://srivathsagroup.in",
    siteName: COMPANY_INFO.name,
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "UCDr_zm-0nNe92-A7OJu1wWO_cFk48T1_VK-9g4OlkQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    founder: COMPANY_INFO.ceo.name,
    telephone: COMPANY_INFO.contact.phone,
    email: COMPANY_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      postalCode: "560075",
      addressCountry: "IN",
    },
    areaServed: "Bangalore, Karnataka, India",
    makesOffer: COMPANY_INFO.verticals.map((v) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: v.title,
        description: v.description,
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-red selection:text-white font-sans">
        <Header />
        <main className="flex-1 bg-slate-50">{children}</main>
        <Footer />
        <MobileBottomBar />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
