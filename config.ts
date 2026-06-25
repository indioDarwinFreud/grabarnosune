/**
 * ============================================================
 * PLANTILLA PRODUCTO — Configuración Global del Cliente
 * ============================================================
 * Este es el archivo principal de personalización.
 * Todos los colores, tipografías, textos SEO, datos de contacto
 * y redes sociales se configuran aquí y se propagan
 * automáticamente por toda la aplicación.
 *
 * Para adaptar el sitio a un nuevo cliente, solo necesitás
 * modificar este archivo y data.tsx.
 * ============================================================
 */

export interface ThemeConfig {
    primaryColor: string;
    primaryHover: string;
    backgroundMain: string;
    backgroundColor: string;
    backgroundCard: string;
    backgroundFooter: string;
    backgroundImage: string;
    cardImage: string;
    radius: string;
    navbarStyle: "nucleus";
    textColors: {
        primaryLight: string;
        secondaryLight: string;
        cardTitle: string;
        cardBody: string;
        cardMuted: string;
    };
}

export const siteConfig = {
    // ---------------------------------------------------------------------------
    // 1. Identidad de Marca Principal
    //    → Cambiá name, shortName y description para el nombre del negocio.
    // ---------------------------------------------------------------------------
    name: "Grabar Nos Une",
    shortName: "GrabarNosUne",
    description: "Insumos para sublimar y regalos personalizados premium. Creamos recuerdos que perduran en el tiempo.",
    url: "https://grabarnosune.com.ar",

    // ---------------------------------------------------------------------------
    // 2. Tipografía del Sitio
    //    → Para cambiar la fuente de títulos o cuerpo, modificá los valores aquí.
    //    → Las opciones válidas son fuentes de Google Fonts (next/font/google).
    //    → IMPORTANTE: Si cambiás la fuente, también debés actualizarla en
    //      app/layout.tsx en las importaciones de next/font.
    // ---------------------------------------------------------------------------
    typography: {
        fontBody: "Urbanist",    // Fuente del cuerpo, párrafos y navegación
        fontHeading: "Outfit",      // Fuente de logos y títulos de alto impacto
        fontAlt: "Montserrat",  // Fuente alternativa para títulos modernos/geométricos

        // Escala de tamaños de texto base
        // Estos valores se inyectan como CSS variables (--font-size-base, --font-size-lg, --font-size-xl)
        sizeBase: "14px",  // Tamaño de párrafo estándar
        sizeLg: "18px",  // Tamaño de texto grande (subtítulos pequeños)
        sizeXl: "20px",  // Tamaño de texto extra-grande
    },

    // ---------------------------------------------------------------------------
    // 3. Biblioteca de Temas (Themes)
    //    → Podés alternar entre temas cambiando la propiedad 'activeTheme' más abajo.
    //    → Cada tema controla colores, fondos y textos de manera armonizada.
    // ---------------------------------------------------------------------------
    themes: {
        // TEMA 1: SILVER PREMIUM (Minimalista y metálico)
        SILVER_PREMIUM: {
            primaryColor: "#C0C0C0",
            primaryHover: "#9CA3AF",
            backgroundMain: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
            backgroundColor: "#111827", // Base sólida para blending
            backgroundCard: "rgba(31, 41, 55, 0.7)", // Gris oscuro semitransparente
            backgroundFooter: "#111827",
            radius: "0.75rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#F3F4F6",
                secondaryLight: "#C0C0C0",
                cardTitle: "#FFFFFF",
                cardBody: "#D1D5DB",
                cardMuted: "#9CA3AF"
            },
            backgroundImage: "/assets/backgrounds/silver_bg.png",
            // Textura técnica limpia de puntos para evitar marcas de agua IA
            cardImage: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='22' cy='22' r='1'/%3E%3C/g%3E%3C/svg%3E"
        },

        PURPLE_CRAFT: {
            primaryColor: "#71007A", // Púrpura oscuro oficial del manual
            primaryHover: "#55005C", // Púrpura más oscuro para hover
            backgroundMain: "#FAF9FB", // Fondo claro y limpio estilo lino/papel de algodón
            backgroundColor: "#FAF9FB", // Base sólida
            backgroundCard: "rgba(255, 255, 255, 0.85)", // Tarjetas blancas con sutil transparencia y glassmorphic blur
            backgroundFooter: "#1A0A1D", // Footer oscuro profundo para anclaje visual y elegancia
            radius: "1rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#FAF9FB", // Textos claros para el footer oscuro
                secondaryLight: "#71007A", // Acentos principales en púrpura
                cardTitle: "#220025", // Títulos en púrpura ultra oscuro
                cardBody: "#534255", // Cuerpo de texto en gris púrpura elegante
                cardMuted: "#88748C" // Subtítulos o notas
            },
            // Patrón SVG repetitivo que simula las pasadas y marcas de un rodillo de grabado artesanal
            backgroundImage: "data:image/svg+xml,%3Csvg width='360' height='360' viewBox='0 0 360 360' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2371007A' fill-opacity='0.015'%3E%3Cpath d='M30,0 C25,60 35,120 28,180 C32,240 26,300 31,360 L45,360 C40,300 46,240 42,180 C49,120 39,60 44,0 Z'/%3E%3Cpath d='M160,0 C156,80 164,160 158,240 C162,280 157,320 161,360 L176,360 C172,320 177,280 173,240 C179,160 171,80 175,0 Z'/%3E%3Cpath d='M290,0 C285,100 295,200 288,300 L303,300 C310,200 300,100 305,0 Z'/%3E%3Cpath d='M0,80 Q90,75 180,85 T360,80 L360,88 Q270,93 180,83 T0,88 Z'/%3E%3Cpath d='M0,260 Q90,255 180,265 T360,260 L360,268 Q270,273 180,263 T0,268 Z'/%3E%3Ccircle cx='100' cy='50' r='1.5'/%3E%3Ccircle cx='220' cy='210' r='2'/%3E%3Ccircle cx='80' cy='310' r='1'/%3E%3Ccircle cx='320' cy='120' r='1.8'/%3E%3C/g%3E%3C/svg%3E",
            // Textura granulada de papel de algodón rústico
            cardImage: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.44 0 0 0 0 0.0 0 0 0 0 0.48 0 0 0 0.012 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperNoise)'/%3E%3C/svg%3E"
        },

        // TEMA 3: ELECTRIC BLUE (Tecnológico - Azul y Cyan)
        ELECTRIC_BLUE: {
            primaryColor: "#00E5FF", // Cyan Eléctrico
            primaryHover: "#00B8D4",
            backgroundMain: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
            backgroundColor: "#020617", // Base sólida para blending
            backgroundCard: "rgba(15, 23, 42, 0.75)", // Azul profundo semitransparente
            backgroundFooter: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
            radius: "0.5rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#F8FAFC",
                secondaryLight: "#00E5FF",
                cardTitle: "#FFFFFF",
                cardBody: "#E2E8F0",
                cardMuted: "#94A3B8"
            },
            backgroundImage: "/assets/backgrounds/blue_bg.png",
            // Textura de rejilla técnica cian para el tema Blue
            cardImage: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300E5FF' stroke-opacity='0.15' stroke-width='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2-h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        }
    },

    // ESTO ELIGE EL TEMA ACTIVO
    // Podés cambiarlo a: "SILVER_PREMIUM", "PURPLE_CRAFT" o "ELECTRIC_BLUE"
    activeTheme: "PURPLE_CRAFT" as const,

    get theme() {
        return this.themes[this.activeTheme];
    },

    // ---------------------------------------------------------------------------
    // 4. Sistema de Logos e Iconografía
    //    → Reemplazá los archivos en /public/ y actualizá las rutas aquí.
    // ---------------------------------------------------------------------------
    logo: {
        main: "/assets/logo.png", // Logo del Navbar y Footer (SVG o PNG recomendado)
        icon: "/favicon.ico",     // Favicon del navegador
    },

    // ---------------------------------------------------------------------------
    // 5. Configuración SEO (Search Engine Optimization)
    //    → Define cómo se ve el sitio en Google y al compartir en redes.
    // ---------------------------------------------------------------------------
    seo: {
        keywords: ["sublimacion", "insumos para sublimar", "regalos personalizados", "grabar nos une", "tazas personalizadas", "Mendoza", "las heras"],
        author: "Grabar Nos Une",
        ogImage: "/assets/logo.png", // Imagen que aparece al compartir en WhatsApp/Facebook (1200x630px ideal)
    },

    // ---------------------------------------------------------------------------
    // 6. Datos de Contacto y Venta
    //    → El teléfono se usa para generar el link de WhatsApp automáticamente.
    //    → Formato del phone: +[CódigoPaís][CódigoÁrea][Número] sin espacios.
    // ---------------------------------------------------------------------------
    contact: {
        email: "daianayamil7@hotmail.com",
        phone: "+5492616572658",    // De la tarjeta de presentación
        whatsappText: "¡Hola Daiana! Vengo desde su página web y me gustaría consultar por insumos y personalizados.",
        location: "B° Las Compuertas, Las Heras, Mendoza",
        mapsLink: "https://maps.google.com/?q=Las+Heras,Mendoza,Argentina"
    },

    // ---------------------------------------------------------------------------
    // 7. Redes Sociales
    //    → Usá la URL completa del perfil. El "handle" es solo para mostrar en pantalla.
    //    → Para agregar TikTok u otras redes, agregar la propiedad aquí y
    //      luego incluirla en data.tsx dentro de contactData.
    // ---------------------------------------------------------------------------
    socials: {
        instagram: "https://www.instagram.com/grabarnosune/",
        instagramHandle: "@grabarnosune",

        facebook: "https://www.facebook.com/grabar.nos.une",
        facebookHandle: "/grabarnosune",
    },

    // ---------------------------------------------------------------------------
    // 8. Horarios de Atención (aparecen en el Footer)
    //    → Podés agregar o quitar filas según los días del cliente.
    // ---------------------------------------------------------------------------
    businessHours: [
        { day: "Lunes a Viernes", hours: "9:00 - 13:00 / 17:00 - 20:00" },
        { day: "Sábados", hours: "9:00 - 13:00" },
    ]
};
