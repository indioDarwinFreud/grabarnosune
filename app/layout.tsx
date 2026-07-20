import { siteConfig } from "@/config";

import type { Metadata } from "next";
import { Urbanist, Outfit, Montserrat } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: siteConfig.seo.author }],
  keywords: siteConfig.seo.keywords,
  openGraph: {
    images: [{ url: siteConfig.seo.ogImage }],
  },
  icons: {
    icon: siteConfig.logo.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`font-sans ${urbanist.variable} ${outfit.variable} ${montserrat.variable} relative min-h-screen`}
        style={{
          "--primary-color": siteConfig.theme.primaryColor,
          "--primary-hover": siteConfig.theme.primaryHover,
          "--radius": siteConfig.theme.radius,
          "--card-bg": siteConfig.theme.backgroundCard,
          "--card-title": siteConfig.theme.textColors.cardTitle,
          "--card-body": siteConfig.theme.textColors.cardBody,
          "--card-muted": siteConfig.theme.textColors.cardMuted,
          "--footer-bg": siteConfig.theme.backgroundFooter,
          "--font-size-base": siteConfig.typography.sizeBase,
          "--font-size-lg": siteConfig.typography.sizeLg,
          "--font-size-xl": siteConfig.typography.sizeXl,
          backgroundColor: siteConfig.theme.backgroundColor,
        } as React.CSSProperties}
      >
        <div 
          className="fixed inset-0 -z-50 pointer-events-none"
          style={{ backgroundColor: siteConfig.theme.backgroundColor }}
        />

        {siteConfig.theme.backgroundImage && (
          <div 
            className="fixed inset-0 -z-40 pointer-events-none transition-opacity duration-300"
            style={{
              backgroundImage: `url("${siteConfig.theme.backgroundImage}")`,
              backgroundSize: siteConfig.theme.backgroundImageSize ?? "auto",
              backgroundRepeat: siteConfig.theme.backgroundImageRepeat ?? "repeat",
              backgroundAttachment: "fixed",
              opacity: 0.07,
              mixBlendMode: "multiply",
            }}
          />
        )}

          <Navbar />
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
