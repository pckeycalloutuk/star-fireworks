import type { Metadata } from "next";
import "@/styles/globals.css";
import { displayFont, bodyFont } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Schema, organizationSchema, localBusinessSchema } from "@/lib/schema";
import { site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} designs and fires award-winning professional firework and drone displays across the UK. Weddings, corporate events, Bonfire Night and more. Fully insured, BPA-trained crews.`,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    "firework displays",
    "wedding fireworks",
    "professional pyrotechnics UK",
    "drone light shows",
    "Bonfire Night displays",
    "pyromusicals",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-night">
        <Schema data={[organizationSchema(), localBusinessSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-night"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
