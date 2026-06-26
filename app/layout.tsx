import { siteConfig } from "@/config";

import type { Metadata } from "next";
import { Urbanist, Outfit, Montserrat } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImperiaEditorProvider from "@/components/providers/ImperiaEditorProvider";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const cinzel = Outfit({
  subsets: ["latin"],
  variable: "--font-cinzel",
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
  const isPurpleCraft = siteConfig.activeTheme === "PURPLE_CRAFT";
  
  return (
    <html lang="es">
      <body
        className={`font-sans ${urbanist.variable} ${cinzel.variable} ${montserrat.variable} relative min-h-screen`}
        style={{
          // CSS Variables del tema (colores, tipografía)
          "--primary-color": siteConfig.theme.primaryColor,
          "--primary-hover": siteConfig.theme.primaryHover,
          "--radius": siteConfig.theme.radius,
          "--font-size-base": siteConfig.typography.sizeBase,
          "--font-size-lg": siteConfig.typography.sizeLg,
          "--font-size-xl": siteConfig.typography.sizeXl,
          backgroundColor: siteConfig.theme.backgroundColor,
        } as React.CSSProperties}
      >
        {/* Capa de fondo 1: Color sólido de fondo */}
        <div 
          className="fixed inset-0 -z-50 pointer-events-none"
          style={{ backgroundColor: siteConfig.theme.backgroundColor }}
        />

        {/* Capa de fondo 2: Textura de rodillo con opacidad controlada para perfecta legibilidad */}
        {siteConfig.theme.backgroundImage && (
          <div 
            className="fixed inset-0 -z-40 pointer-events-none transition-opacity duration-300"
            style={{
              backgroundImage: `url("${siteConfig.theme.backgroundImage}")`,
              backgroundSize: siteConfig.theme.backgroundImageSize ?? "auto",
              backgroundRepeat: siteConfig.theme.backgroundImageRepeat ?? "repeat",
              backgroundAttachment: "fixed",
              opacity: isPurpleCraft ? 0.07 : 0.15, // 7% para el rodillo de Grabar Nos Une para que los textos sean legibles, 15% para otros temas
              mixBlendMode: isPurpleCraft ? "multiply" : "normal",
            }}
          />
        )}

        <ImperiaEditorProvider>
          <Navbar />
          <Header />
          {children}
          <Footer />
        </ImperiaEditorProvider>
      </body>
    </html>
  );
}
