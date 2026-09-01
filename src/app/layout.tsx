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
  title: "Srivathsa Enterprises | Signage, Interior Works & Real Estate Bangalore",
  description:
    "Srivathsa Enterprises provides signage manufacturing, interior project works and real estate services in Bangalore.",
  keywords: [
    "Signage Manufacturing Bangalore",
    "3D LED Stainless Steel Letters",
    "Turnkey Interior Works Bangalore",
    "Commercial Office Fit-outs",
    "Real Estate Bangalore",
    "Commercial Property Advisory",
    "Converted Land Plots Bangalore",
    "Safety Traffic Night Glow Signage",
  ],
  authors: [{ name: COMPANY_INFO.ceo.name }],
  creator: COMPANY_INFO.name,
  openGraph: {
    title: "Srivathsa Enterprises | Signage, Interior Works & Real Estate Bangalore",
    description:
      "Complete business solutions for signage manufacturing, interior project execution and real estate requirements in Bangalore.",
    url: "https://srivathsaenterprises.com",
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
