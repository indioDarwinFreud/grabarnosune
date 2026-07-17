/**
 * ============================================================
 * DATA.TSX — Datos del Sitio
 * ============================================================
 * Este es el segundo archivo clave para personalizar el sitio
 * (junto con config.ts).
 *
 * GUÍA RÁPIDA:
 *   • Para agregar un producto  → editá `productsData`
 *   • Para agregar un testimonio → editá `testimonialsData`
 *   • Para cambiar el menú     → editá `itemsNavbar`
 *
 * Los íconos se importan de lucide-react. Para ver la lista
 * completa de íconos disponibles: https://lucide.dev/icons/
 * ============================================================
 */

import { HomeIcon, Store, Users, Mail, MapPin, Facebook, Instagram, Phone } from "lucide-react";
import { siteConfig } from "./config";
import type { NavItem, Product, Testimonial, ContactItem, BusinessHour, BlogPost } from "./types";

// ============================================================
// MENÚ DE NAVEGACIÓN
// ============================================================
export const itemsNavbar: NavItem[] = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Productos",
        icon: <Store size={25} strokeWidth={1} />,
        link: "/products",
    },
    {
        id: 3,
        title: "Quiénes Somos",
        icon: <Users size={25} strokeWidth={1} />,
        link: "/about",
    },
    {
        id: 4,
        title: "Contacto",
        icon: <Mail size={25} strokeWidth={1} />,
        link: "/contact",
    },
];

// ============================================================
// PRODUCTOS DEL CATÁLOGO
// ============================================================
// ✏️ CÓMO AGREGAR UN PRODUCTO:
//   1. Copiá uno de los bloques de abajo.
//   2. Cambiale el `id` (debe ser único y numérico).
//   3. Reemplazá title, location, description, image y category.
//   4. Subí la imagen a la carpeta /public y ponés la ruta aquí
//      (ej: "/mi-producto.jpg").
//   5. El botón "WhatsApp" se arma automáticamente con el nombre
//      del producto y el teléfono de config.ts.
// ============================================================
export const productsData: Product[] = [
    {
        id: 1,
        title: "Papel de Sublimación A4 Premium",
        location: "Insumos - Secado Rápido",
        description: "Hojas de alta transferencia y secado instantáneo. Garantizan una nitidez de imagen del 99% para estampar en telas y tazas.",
        image: "/product/papel_sublimacion.png",
        category: "Insumos",
        stock: 35,
        website: "/contact",
        price: "Consultar",
    },
    {
        id: 2,
        title: "Taza de Cerámica Nacional AAA",
        location: "Sustratos - Tazas Clásicas",
        description: "Taza de cerámica extra blanca con el recubrimiento polimérico original. Brillo duradero y resistente al microondas.",
        image: "/product/taza_orca.png",
        category: "Sustratos",
        stock: 30,
        website: "/contact",
        price: 3100,
        guideSlug: "guia-sublimar-tazas-ceramica",
    },
    {
        id: 3,
        title: "Kit de Tintas de Sublimación AQ x4",
        location: "Tintas - Alta Densidad",
        description: "Set de 4 tintas CMYK (100ml c/u). Colores intensos, negros puros y fórmula fluida que cuida y protege tus cabezales.",
        image: "/product/tintas_sublimacion.png",
        category: "Insumos",
        stock: 12,
        website: "/contact",
        price: "Consultar",
    },
    {
        id: 4,
        title: "Remera Spun Adulto",
        location: "Textiles - Spun Premium",
        description: "Remera blanca de spun (100% poliéster tacto algodón). Costuras reforzadas, ideal para sublimación de alta definición.",
        image: "/product/RemeraBlancaSpun.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 5900,
    },
    {
        id: 5,
        title: "Remera Spun Niño",
        location: "Textiles - Spun Premium",
        description: "Remera infantil blanca de spun. Suave al tacto y lista para sublimar con colores vivos y duraderos.",
        image: "/product/RemeraBlancaSpun.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 2900,
    },
    {
        id: 6,
        title: "Remera Manga Corta Adulto Algodón",
        location: "Textiles - Algodón Peinado",
        description: "Remera de algodón 100% peinado premium, de tacto extra suave. Ideal para vinilo textil, bordado o estampado directo.",
        image: "/product/RemeraBlanca.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 8200,
        variants: [
            {
                colorName: "Blanco",
                colorCode: "#ffffff",
                image: "/product/RemeraBlanca.png",
            },
            {
                colorName: "Negro",
                colorCode: "#000000",
                image: "/product/RemeraNegra.png",
            }
        ]
    },
    {
        id: 7,
        title: "Remera Manga Corta Niño Algodón",
        location: "Textiles - Algodón Peinado",
        description: "Remera infantil de algodón 100% peinado. Confección reforzada y cuello resistente para resistir el uso diario.",
        image: "/product/RemeraBlanca.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 5400,
    },
    {
        id: 8,
        title: "Remera Algodón Talle Especial",
        location: "Textiles - Algodón Peinado",
        description: "Remera de algodón peinado en talles especiales. Excelente caída, calce cómodo y costuras reforzadas.",
        image: "/product/RemeraBlanca.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 9650,
    },
    {
        id: 9,
        title: "Gorra Trucker Adulto",
        location: "Gorras - Accesorios",
        description: "Gorra trucker para adulto con frente espumado blanco y red de color. Hebilla regulable trasera. Excelente terminación.",
        image: "/product/GorrasTodosColores.png",
        category: "Textiles",
        stock: 45,
        website: "/contact",
        price: 3750,
        variants: [
            {
                colorName: "Gris Oscura",
                colorCode: "#374151",
                image: "/product/GorraGrisOscura.png",
            },
            {
                colorName: "Verde y Gris",
                colorCode: "linear-gradient(135deg, #15803d 50%, #9ca3af 50%)",
                image: "/product/GorraVerdeMediaGris.png",
            },
        ],
    },
    {
        id: 10,
        title: "Gorra Trucker Niño",
        location: "Gorras - Accesorios",
        description: "Gorra trucker infantil con frente espumado ideal para sublimar y personalizar. Red semirrígida y broche regulable.",
        image: "/product/GorrasTodosColores.png",
        category: "Textiles",
        stock: 25,
        website: "/contact",
        price: 3550,
    },
    {
        id: 11,
        title: "Gorra Prelavada Gastada",
        location: "Gorras - Accesorios",
        description: "Gorra de gabardina prelavada con efecto gastado vintage. Hebilla metálica regulable. Calidad premium y estilo informal.",
        image: "/product/TipoDeGorras.jpeg",
        category: "Textiles",
        stock: 15,
        website: "/contact",
        price: 5800,
    },
    {
        id: 12,
        title: "Buzo Cuello Redondo",
        location: "Textiles - Abrigo",
        description: "Buzo clásico de cuello redondo en frisa premium. Ideal para bordado y vinilo textil directo. Puños y cintura con elastano.",
        image: "/product/BuzoNegro.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 21000,
    },
    {
        id: 13,
        title: "Buzo Canguro con Capucha",
        location: "Textiles - Abrigo",
        description: "Buzo de abrigo con capucha y bolsillo frontal. Confeccionado en frisa de alta calidad, muy abrigado y de tacto suave.",
        image: "/product/BuzoNegro.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 23000,
    },
    {
        id: 14,
        title: "Campera de Algodón con Cierre",
        location: "Textiles - Abrigo",
        description: "Campera de abrigo en frisa de algodón con capucha ajustable, cierre metálico reforzado y bolsillos laterales.",
        image: "/product/BuzoNegro.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 24490,
    },
    {
        id: 15,
        title: "Taza de Cerámica Color Interior",
        location: "Sustratos - Tazas Importadas",
        description: "Taza de cerámica importada con asa y fondo de color. Recubrimiento AAA de alto brillo para sublimación.",
        image: "/product/TazaRoza.jpeg",
        category: "Sustratos",
        stock: 20,
        website: "/contact",
        price: 3900,
        guideSlug: "guia-sublimar-tazas-ceramica",
    },
    {
        id: 16,
        title: "Taza de Polímero (Plástica)",
        location: "Sustratos - Tazas Plásticas",
        description: "Taza plástica de polímero irrompible. Ideal para escuelas, jardines de infantes y eventos infantiles.",
        image: "/product/TazaEjemplo.jpeg",
        category: "Sustratos",
        stock: 50,
        website: "/contact",
        price: 1650,
    },
    {
        id: 17,
        title: "Taza Mimo con Diseño",
        location: "Sustratos - Tazas Especiales",
        description: "Taza de diseño especial (ej. gatito) con relieve y asa decorativa. Calidad premium y presentación tierna.",
        image: "/product/TazaGatito.jpeg",
        category: "Sustratos",
        stock: 8,
        website: "/contact",
        price: 2700,
    },
    {
        id: 18,
        title: "Taza de Polímero Sublimate",
        location: "Sustratos - Colección Intensos",
        description: "Taza plástica de polímero premium importado. Mayor brillo, resistencia a golpes y un hermoso acabado con interior de color.",
        image: "/product/Sublimate1.jpeg",
        category: "Sustratos",
        stock: 15,
        website: "/contact",
        price: 4400,
        guideSlug: "guia-sublimar-tazas-ceramica",
        variants: [
            {
                colorName: "Aqua Marine",
                colorCode: "#00a896",
                image: "/product/Sublimate1.jpeg",
            },
            {
                colorName: "Naranja Otoñal",
                colorCode: "#e76f51",
                image: "/product/Sublimate2.jpeg",
            },
            {
                colorName: "Mora Púrpura",
                colorCode: "#7209b7",
                image: "/product/Sublimate3.jpeg",
            },
            {
                colorName: "Amarillo Toscano",
                colorCode: "#f9c74f",
                image: "/product/Sublimate4.jpeg",
            },
            {
                colorName: "Verde Manzana",
                colorCode: "#90be6d",
                image: "/product/Sublimate5.jpeg",
            },
            {
                colorName: "Fucsia Glam",
                colorCode: "#f72585",
                image: "/product/Sublimate6.jpeg",
            }
        ]
    },
    {
        id: 19,
        title: "Yerbera y Azucarera Workat",
        location: "Regalos - Set de Mate",
        description: "Set metálico Workat compuesto por yerbera y azucarera. Práctico pico vertedor plástico de alta resistencia.",
        image: "/product/MateGeneral.jpeg",
        category: "Regalos",
        stock: 10,
        website: "/contact",
        price: 8900,
    },
    {
        id: 20,
        title: "Cuchillo de Mesa / Bazar",
        location: "Bazar - Utensilios",
        description: "Cuchillo de mesa de acero inoxidable con excelente filo. Apto para grabado y personalización en bazar.",
        image: "/product/Llavero.jpeg",
        category: "Regalos",
        stock: null,
        website: "/contact",
        price: 365,
    },
    {
        id: 21,
        title: "Tenedor de Mesa / Bazar",
        location: "Bazar - Utensilios",
        description: "Tenedor de acero inoxidable pulido espejo. Ideal para complementar juegos de cubiertos grabados.",
        image: "/product/Llavero.jpeg",
        category: "Regalos",
        stock: null,
        website: "/contact",
        price: 365,
    },
    {
        id: 22,
        title: "Cuchara de Mesa / Bazar",
        location: "Bazar - Utensilios",
        description: "Cuchara sopera de acero inoxidable de diseño tradicional y elegante, apta para grabado y personalización.",
        image: "/product/Llavero.jpeg",
        category: "Regalos",
        stock: null,
        website: "/contact",
        price: 365,
    },
    {
        id: 23,
        title: "Papel Holofan Inkjet Estrellita",
        location: "Insumos - Holográficos",
        description: "Papel autoadhesivo holográfico premium con efecto estrellita transparente. Apto para impresiones familiares de inyección de tinta.",
        image: "/product/PapelHolofan.jpeg",
        category: "Insumos",
        stock: 20,
        website: "/contact",
        price: "Consultar",
        guideSlug: "efectos-brillantes-papel-holofan",
    },
    {
        id: 24,
        title: "Winky Paper Termocontraíble",
        location: "Insumos - Manualidades",
        description: "Hojas plásticas A4 termocontraíbles. Imprimí, cortá, aplicá calor y mirá cómo se reduce un 60% para crear pines y llaveros rígidos.",
        image: "/product/WinkiPaper.jpeg",
        category: "Insumos",
        stock: 25,
        website: "/contact",
        price: "Consultar",
        guideSlug: "manual-uso-winky-paper",
    },
    {
        id: 25,
        title: "Vaso Cristal con Glitter 450ml",
        location: "Bazar - Souvenirs",
        description: "Vaso de acrílico cristal con glitter flotante en sus paredes dobles. Tapa y sorbete rígido de color. Estándar: $1.190 / Personalizado: $1.790.",
        image: "/product/VasoCristal.jpeg",
        category: "Regalos",
        stock: 40,
        website: "/contact",
        price: 1190,
        variants: [
            {
                colorName: "Sin Personalizar",
                colorCode: "#e2e8f0",
                image: "/product/VasoCristal.jpeg",
                price: 1190
            },
            {
                colorName: "Personalizado",
                colorCode: "linear-gradient(135deg, #71007A 50%, #e2e8f0 50%)",
                image: "/product/VasoCristal.jpeg",
                price: 1790
            }
        ]
    },
    {
        id: 26,
        title: "Vaso Argentina Tapa Pelota",
        location: "Bazar - Souvenirs",
        description: "Vaso de 400cc celeste y blanco con tapa en forma de pelota de fútbol y sorbete rígido. Ideal para eventos deportivos.",
        image: "/product/VasoArgentina.jpeg",
        category: "Regalos",
        stock: 30,
        website: "/contact",
        price: "Consultar",
    },
    {
        id: 27,
        title: "Vaso Milkshake 380cc",
        location: "Bazar - Souvenirs",
        description: "Vaso Milk Shake plástico de 380cc con tapa tipo domo y sorbete. Disponible en colores pasteles.",
        image: "/product/VasoMilk380.jpeg",
        category: "Regalos",
        stock: 50,
        website: "/contact",
        price: 890,
    },
    {
        id: 28,
        title: "Vaso Milkshake 330cc",
        location: "Bazar - Souvenirs",
        description: "Vaso Milk Shake plástico rígido de 330cc con tapa a rosca y sorbete. Ideal para sorpresas y cumples infantiles.",
        image: "/product/VasoMilk330.jpeg",
        category: "Regalos",
        stock: 60,
        website: "/contact",
        price: 990,
    },
    {
        id: 29,
        title: "Valijita Plástica Mediana Souvenir",
        location: "Bazar - Souvenirs",
        description: "Valijita plástica de 14x10x4.5 cm en colores surtidos. Ideal para souvenir o sorpresitas de cumpleaños infantiles.",
        image: "/product/ValijaMediana.jpeg",
        category: "Regalos",
        stock: 80,
        website: "/contact",
        price: 1490,
    }
];

// ============================================================
// TESTIMONIOS DE CLIENTES
// ============================================================
// ✏️ CÓMO AGREGAR UN TESTIMONIO:
//   1. Copiá un bloque, cambiá el id, name, role, initials y content.
//   2. Las iniciales (initials) son las 2 primeras letras del nombre
//      (ej: "Elena Martínez" → "EM").
// ============================================================
export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Gisela B.",
        role: "Diseñadora Gráfica & Emprendedora",
        initials: "GB",
        content: "El papel de secado rápido es una maravilla. Los colores se transfieren con una fidelidad del 100%. Además, la atención de Daiana es excelente.",
    },
    {
        id: 2,
        name: "Lucas R.",
        role: "Propietario de Estampados Mendoza",
        initials: "LR",
        content: "Excelente calidad de tazas y tintas. Compramos al por mayor para nuestro taller de sublimados y la consistencia en el color es impecable.",
    },
];

// ============================================================
// DATOS DE CONTACTO (generados desde config.ts)
// ============================================================
// ⚠️ No edites este bloque directamente.
//    Para cambiar el teléfono, email, ubicación o redes sociales,
//    modificá config.ts → secciones contact y socials.
// ============================================================
export const contactData: ContactItem[] = [
    {
        id: 1,
        icon: Mail,
        title: "Email",
        description: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
    },
    {
        id: 2,
        icon: Phone,
        title: "Teléfono",
        description: siteConfig.contact.phone,
        href: `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=${encodeURIComponent(siteConfig.contact.whatsappText)}`,
    },
    {
        id: 3,
        icon: MapPin,
        title: "Ubicación",
        description: siteConfig.contact.location,
        href: siteConfig.contact.mapsLink,
    },
    {
        id: 4,
        icon: Facebook,
        title: "Facebook",
        description: siteConfig.socials.facebookHandle,
        href: siteConfig.socials.facebook,
    },
    {
        id: 5,
        icon: Instagram,
        title: "Instagram",
        description: siteConfig.socials.instagramHandle,
        href: siteConfig.socials.instagram,
    },
];

// ============================================================
// HORARIOS DE ATENCIÓN (generados desde config.ts)
// ============================================================
// ⚠️ Para cambiar los horarios, modificá config.ts → businessHours.
// ============================================================
export const businessHours: BusinessHour[] = siteConfig.businessHours;

// ============================================================
// BLOG — Consejos y guías para sublimadores
// ============================================================
export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Manual de Uso: Winky Paper Termocontraíble",
        excerpt: "Paso a paso para crear pines, llaveros y accesorios rígidos increíbles con papel Winky y calor.",
        image: "/product/WinkiPaper.jpeg",
        slug: "manual-uso-winky-paper",
        category: "Manualidades",
        readTime: "4 min",
        steps: [
            "Imprimí tu diseño favorito directamente sobre el papel Winky con tu impresora de inyección de tinta (inkjet).",
            "Una vez impreso el diseño, dejá secar unos minutos y procurá no tocar la cara impresa para evitar rayones.",
            "Cortá la figura con tijera siguiendo el contorno, recordando que el papel se encogerá cerca de un 60%.",
            "Si querés hacer un llavero o colgante, realizá la perforación para la argolla antes de aplicar calor.",
            "Colocá la pieza en un horno precalentado a 150-160°C. Verás que la pieza se arruga y dobla; es parte del proceso normal.",
            "Cuando la pieza vuelva a quedar completamente plana y de tamaño reducido, es momento de retirarla del horno.",
            "Al retirar del horno, aplicale presión inmediata con una superficie plana (como un rodillo o libro) para que quede liso."
        ],
        tips: [
            "El encogimiento del papel es disparejo; depende de la temperatura y el calor que reciba dentro del horno.",
            "Al contraerse, los colores se contraen con la imagen, quedando con mayor intensidad. Usá colores menos saturados.",
            "Agregá laca UV o barniz brillante sobre la cara impresa una vez fría para una mayor protección y brillo."
        ],
        infographicImage: "/product/ConsejosDeUsoParaReemplazarEnTutoriales.jpeg"
    },
    {
        id: 2,
        title: "Efecto Estrellita: Diseños con Papel Holofan",
        excerpt: "Cómo usar tramas autoadhesivas holográficas brillantes para crear stickers impermeables con efectos visuales deslumbrantes.",
        image: "/product/PapelHolofan.jpeg",
        slug: "efectos-brillantes-papel-holofan",
        category: "Insumos",
        readTime: "3 min",
        steps: [
            "Seleccioná la trama holográfica que prefieras. El efecto estrellita transparente es ideal para dar toques mágicos.",
            "Imprimí tu diseño con una impresora inkjet tradicional configurada en alta calidad fotográfica.",
            "Dejá secar la impresión durante unos minutos para que las tintas y el pegamento se estabilicen por completo.",
            "Cortá las figuras con tijera o plotter. El papel cuenta con base plástica y es altamente resistente al troquelado."
        ],
        tips: [
            "Con el nuevo pegamento extra fuerte 'ultraglue', asegurás una adhesión duradera en cualquier superficie lisa.",
            "El material es impermeable y resistente a salpicaduras, lo que lo hace ideal para personalizar termos, botellas y notebooks.",
            "La base de plástico y resistencia del material evita desgarros y protege tus diseños a todo color."
        ],
        infographicImage: "/product/SacarInfoParaInicio.jpeg"
    },
    {
        id: 3,
        title: "Guía definitiva para sublimar en tazas de cerámica",
        excerpt: "Temperatura, tiempo y presión ideales para lograr estampados nítidos y duraderos en tazas Orca y de cerámica estándar.",
        image: "/product/taza_orca.png",
        slug: "guia-sublimar-tazas-ceramica",
        category: "Tutoriales",
        readTime: "4 min",
        steps: [
            "Imprimí el diseño en modo espejo sobre papel de sublimación de secado rápido con tintas premium.",
            "Pegá el diseño firmemente a la taza de cerámica utilizando cinta térmica para evitar movimientos durante el prensado.",
            "Precalentá tu máquina de tazas a 180°C (356°F) y ajustá la presión a media-alta.",
            "Insertá la taza y realizá el prensado continuo durante 180 segundos.",
            "Retirá la taza con cuidado y quitá el papel inmediatamente para prevenir el efecto fantasma (ghosting)."
        ],
        tips: [
            "Limpiá siempre la taza con alcohol isopropílico y un paño que no suelte pelusa antes de aplicar el papel. Cualquier partícula de grasa o polvo se hornea en el esmalte y genera motas antiestéticas.",
            "Ajustá bien la presión de la resistencia de la prensa: tiene que hacer contacto firme y parejo sin deformar la cerámica. Si la zona cerca del asa sale pálida, sumá 15-30 segundos o mejorá el ajuste en ese sector.",
            "Usá cinta térmica de buena adherencia: dos tiras verticales (de arriba a abajo) más una en el solape. Evitá que la cinta entre en el área de la imagen para prevenir el ghosting (doble contorno).",
            "No sumerjas la taza en agua fría apenas sale de la prensa — el choque térmico puede generar microfisuras en el esmalte. Dejala enfriar al aire libre sobre una rejilla.",
            "Si trabajás con tazas cónicas, cortá el papel en forma de trapezoide (más angosto de un lado) para que asiente sin pliegues ni canales verticales que arruinen la estampación."
        ]
    }
];
