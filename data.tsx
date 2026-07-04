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
        image: "/assets/productos/papel_sublimacion.png",
        category: "Insumos",
        price: "$8.500",
        stock: 35,
        website: "/contact",
    },
    {
        id: 2,
        title: "Taza de Cerámica Importada Orca AAA",
        location: "Sustratos - Calidad Premium",
        description: "Taza de cerámica extra blanca con el recubrimiento polimérico Orca original. Brillo duradero y resistente al microondas.",
        image: "/assets/productos/taza_orca.png",
        category: "Sustratos",
        price: "$4.500",
        stock: 3,
        website: "/contact",
    },
    {
        id: 3,
        title: "Kit de Tintas de Sublimación AQ x4",
        location: "Tintas - Alta Densidad",
        description: "Set de 4 tintas CMYK (100ml c/u). Colores intensos, negros puros y fórmula fluida que cuida y protege tus cabezales.",
        image: "/assets/productos/tintas_sublimacion.png",
        category: "Insumos",
        price: "$22.000",
        stock: 12,
        website: "/contact",
    },
    {
        id: 4,
        title: "Remeras de Spun Premium",
        location: "Textiles - Aptas Sublimación",
        description: "Remeras blancas tacto algodón de poliéster 100%. Costuras reforzadas de cuello a hombro, listas para estampar full color.",
        image: "/assets/grabar_about.png",
        category: "Textiles",
        price: "$6.200",
        stock: null,
        website: "/contact",
    },
    {
        id: 5,
        title: "Gorras Trucker Sublimables",
        location: "Gorras y Accesorios",
        description: "Gorras con frente espumado blanco y red de colores variados. Hebilla regulable trasera. Acabado textil de alta calidad.",
        image: "/product/GorrasTodosColores.png",
        category: "Textiles",
        price: "$3.500",
        stock: 30,
        website: "/contact",
    },
    {
        id: 6,
        title: "Kit Escolar Infantil Personalizado",
        location: "Regalos - Vuelta al Cole",
        description: "Incluye taza plástica escolar irrompible, cantimplora deportiva y juego de etiquetas autoadhesivas impermeables.",
        image: "/assets/banner_papeles.png",
        category: "Regalos",
        price: "$14.500",
        stock: 8,
        website: "/contact",
    },
    {
        id: 7,
        title: "Gorra Trucker Gris Oscura",
        location: "Gorras y Accesorios",
        description: "Gorra trucker lisa de excelente calidad con frente espumado gris y red al tono. Ideal para personalizar y sublimar.",
        image: "/product/GorraGrisOscura.png",
        category: "Textiles",
        price: "$4.000",
        stock: 12,
        website: "/contact",
    },
    {
        id: 8,
        title: "Gorra Trucker Verde y Gris",
        location: "Gorras y Accesorios",
        description: "Gorra trucker bicolor con frente verde oliva y red gris. Costuras reforzadas y ajuste regulable de alta resistencia.",
        image: "/product/GorraVerdeMediaGris.png",
        category: "Textiles",
        price: "$4.000",
        stock: 10,
        website: "/contact",
    },
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
        title: "Guía definitiva para sublimar en tazas de cerámica",
        excerpt: "Temperatura, tiempo y presión ideales para lograr estampados nítidos y duraderos en tazas Orca y de cerámica estándar.",
        image: "/assets/productos/taza_orca.png",
        slug: "guia-sublimar-tazas-ceramica",
        category: "Tutoriales",
        readTime: "4 min",
    },
    {
        id: 2,
        title: "Cómo elegir el papel de sublimación correcto",
        excerpt: "Secado rápido vs secado instantáneo: diferencias clave, compatibilidad con tintas y cuál conviene según tu volumen de producción.",
        image: "/assets/productos/papel_sublimacion.png",
        slug: "elegir-papel-sublimacion",
        category: "Insumos",
        readTime: "3 min",
    },
    {
        id: 3,
        title: "Tips para estampar remeras de poliéster sin manchas",
        excerpt: "Evitá fantasmas, sombras y manchas amarillas con estos consejos prácticos de prensado, enfundado y enfriado.",
        image: "/assets/grabar_about.png",
        slug: "tips-remeras-poliester",
        category: "Tutoriales",
        readTime: "5 min",
    },
];
