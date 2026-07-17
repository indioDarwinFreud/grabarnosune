interface ThemeConfig {
    primaryColor: string;
    primaryHover: string;
    backgroundMain: string;
    backgroundColor: string;
    backgroundCard: string;
    backgroundFooter: string;
    backgroundImage?: string;
    backgroundImageSize?: string;
    backgroundImageRepeat?: string;
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
    name: "Grabar Nos Une",
    shortName: "GrabarNosUne",
    description: "Vendemos insumos para sublimación, grabado y personalización: tazas de cerámica y polímero, remeras, buzos, camperas, gorras trucker, artículos de bazar, regalos y mucho más. Todo listo para que personalices con tu estilo.",

    typography: {
        fontBody: "Urbanist",
        fontHeading: "Outfit",
        fontAlt: "Montserrat",
        sizeBase: "14px",
        sizeLg: "18px",
        sizeXl: "20px",
    },

    themes: {
        SILVER_PREMIUM: {
            primaryColor: "#C0C0C0",
            primaryHover: "#9CA3AF",
            backgroundMain: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
            backgroundColor: "#111827",
            backgroundCard: "rgba(31, 41, 55, 0.7)",
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
            cardImage: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='22' cy='22' r='1'/%3E%3C/g%3E%3C/svg%3E"
        },

        PURPLE_CRAFT: {
            primaryColor: "#71007A",
            primaryHover: "#55005C",
            backgroundMain: "#FAF9FB",
            backgroundColor: "#FAF9FB",
            backgroundCard: "rgba(255, 255, 255, 0.85)",
            backgroundFooter: "#1A0A1D",
            radius: "1rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#FAF9FB",
                secondaryLight: "#71007A",
                cardTitle: "#220025",
                cardBody: "#534255",
                cardMuted: "#88748C"
            },
            backgroundImage: "/textura para fondo.png",
            backgroundImageSize: "400px",
            backgroundImageRepeat: "repeat",
            cardImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
        },

        ELECTRIC_BLUE: {
            primaryColor: "#00E5FF",
            primaryHover: "#00B8D4",
            backgroundMain: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
            backgroundColor: "#020617",
            backgroundCard: "rgba(15, 23, 42, 0.75)",
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
            cardImage: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300E5FF' stroke-opacity='0.15' stroke-width='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2-h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        }
    },

    activeTheme: "PURPLE_CRAFT" as const,

    get theme() {
        return this.themes[this.activeTheme];
    },

    logo: {
        main: "/logo con nombre.png",
        icon: "/logo con nombre.png",
    },

    seo: {
        keywords: ["sublimacion", "insumos para sublimar", "regalos personalizados", "grabar nos une", "tazas personalizadas", "Mendoza", "las heras"],
        author: "Grabar Nos Une",
        ogImage: "/logo con nombre.png",
    },

    contact: {
        email: "daianayamil7@hotmail.com",
        phone: "+5492616572658",
        whatsappText: "¡Hola Daiana! Vengo desde su página web y me gustaría consultar por insumos y personalizados.",
        location: "Chacabuco 99 - Ciudad - Mendoza (Esquina Rioja)",
        mapsLink: "https://www.google.com/maps/place/32%C2%B052'39.4%22S+68%C2%B050'05.9%22W/@-32.8776109,-68.8356077,19z/data=!3m1!4b1!4m4!3m3!8m2!3d-32.877612!4d-68.834964"
    },

    socials: {
        instagram: "https://www.instagram.com/grabarnosuneinsumos/",
        instagramHandle: "@grabarnosune",
        facebook: "https://www.facebook.com/grabar.nos.une",
        facebookHandle: "/grabarnosune",
    },

    businessHours: [
        { day: "Lunes a Viernes", hours: "8:30 - 12:00 / 15:00 - 18:00" },
        { day: "Sábados", hours: "10:00 - 13:00" },
    ]
};
