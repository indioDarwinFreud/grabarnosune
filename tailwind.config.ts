import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ------------------------------------------------------------------
      // Tipografías
      // Las variables CSS son inyectadas por next/font en app/layout.tsx.
      // Los nombres de clase Tailwind son: font-body, font-display, font-alt
      // ------------------------------------------------------------------
      fontFamily: {
        body: ["var(--font-urbanist)", "sans-serif"], // Texto general
        display: ["var(--font-outfit)", "sans-serif"], // Logo y títulos de alto impacto (Outfit)
        alt: ["var(--font-montserrat)", "sans-serif"], // Títulos modernos/geométricos
        brizel: ["'Brizel'", "sans-serif"],             // Tipografía de marca artesanal
      },
      // ------------------------------------------------------------------
      // Colores del Sistema
      // El color `primary` y `primaryHover` se actualizan desde config.ts.
      // ------------------------------------------------------------------
      colors: {
        primary: "var(--primary-color, #c0c0c0)",
        primaryHover: "var(--primary-hover, #e0e0e0)",
        card: {
          bg: "var(--card-bg, rgba(255,255,255,0.85))",
          title: "var(--card-title, #220025)",
          body: "var(--card-body, #534255)",
          muted: "var(--card-muted, #88748C)",
        },


      },
      // ------------------------------------------------------------------
      // Gradientes predefinidos
      // ------------------------------------------------------------------
      fontSize: {
        "6.5xl": ["4rem", { lineHeight: "1.1" }],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
} satisfies Config;
