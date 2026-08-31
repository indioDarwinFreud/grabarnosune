import { HomeIcon, Store, Users, Mail, MapPin, Facebook, Instagram, Phone } from "lucide-react";
import { siteConfig } from "./config";
import type { NavItem, Product, Testimonial, ContactItem, BusinessHour, BlogPost } from "./types";

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

export const productsData: Product[] = [
    {
        id: 1,
        title: "Papel de Sublimación Art-Jet",
        location: "Insumos - Secado Rápido (A3 / A4)",
        description: "Resma de papel de sublimación premium marca Art-Jet de 100g. Disponible en formatos A3 y A4. Máxima transferencia de color y secado extra rápido.",
        image: "/product/AgregarEnPlacaDePapelSublimar.jpeg",
        category: "Insumos",
        stock: 35,
        website: "/contact",
        price: "Consultar",
        variants: [
            {
                colorName: "Portada",
                colorCode: "#71007A",
                image: "/product/AgregarEnPlacaDePapelSublimar.jpeg",
            },
            {
                colorName: "Formato A3",
                colorCode: "#a855f7",
                image: "/product/PapelA3.jpeg",
            },
            {
                colorName: "Formato A4",
                colorCode: "#ec4899",
                image: "/product/PapelA4.jpeg",
            }
        ]
    },
    {
        id: 2,
        title: "Taza de Cerámica Nacional",
        location: "Cerámica - Nacional",
        description: "Taza de cerámica nacional extra blanca con recubrimiento polimérico. Brillo duradero y resistente al microondas. Ideal para sublimación de alta definición.",
        image: "/product/taza_orca.png",
        category: "Cerámica",
        stock: null,
        website: "/contact",
        price: 3100,
        guideSlug: "guia-sublimar-tazas-ceramica",
        variants: [
            {
                colorName: "Muestra Sublimada",
                colorCode: "#71007A",
                image: "/GrabarTaza.jpeg",
            }
        ]
    },
    {
        id: 66,
        title: "Taza Orca",
        location: "Cerámica - Taza Orca",
        description: "Taza Orca de cerámica extra blanca de alta calidad. Recubrimiento polimérico original de máxima nitidez, resistente al microondas y al lavavajillas.",
        image: "/product/taza_orca.png",
        category: "Cerámica",
        stock: 30,
        website: "/contact",
        price: 3500,
        guideSlug: "guia-sublimar-tazas-ceramica",
        variants: [
            {
                colorName: "Muestra Sublimada",
                colorCode: "#71007A",
                image: "/GrabarTaza.jpeg",
            }
        ]
    },
    {
        id: 67,
        title: "Taza AAA Premium",
        location: "Cerámica - Premium Importada",
        description: "Taza de cerámica importada triple AAA. La más alta calidad del mercado: superficie extra blanca y lisa, recubrimiento polimérico de máxima densidad y resultado de sublimación sin igual.",
        image: "/product/taza_orca.png",
        category: "Cerámica",
        stock: 30,
        website: "/contact",
        price: 3100,
        guideSlug: "guia-sublimar-tazas-ceramica",
        badge: "Triple AAA",
        variants: [
            {
                colorName: "Muestra Sublimada",
                colorCode: "#71007A",
                image: "/GrabarTaza.jpeg",
            }
        ]
    },
    {
        id: 3,
        title: "Tintas de Sublimación",
        location: "Tintas - Alta Densidad",
        description: "Colores intensos, negros puros y fórmula fluida que cuida y protege tus cabezales.",
        image: "/product/TintaSublimar.jpeg",
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
        variants: [
            {
                colorName: "Remera Blanca Spun",
                colorCode: "#ffffff",
                image: "/product/RemeraBlancaSpun.png",
            },
            {
                colorName: "Especificación Técnica Sublimación",
                colorCode: "#71007A",
                image: "/TipoRemeraParaSublimar.png",
            }
        ]
    },
    {
        id: 5,
        title: "Remera Spun Niño",
        location: "Textiles - Spun Premium",
        description: "Remera infantil blanca de spun. Suave al tacto y lista para sublimar con colores vivos y duraderos.",
        image: "/product/RemeraSpunNiño.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 2900,
    },
    {
        id: 6,
        title: "Remera Manga Corta Adulto Algodón",
        location: "Textiles - Algodón Peinado",
        description: "Remera de algodón 100% peinado premium con limpieza de cuello. Ideal para serigrafía, vinilo textil, DTG, DTF e impresión digital.",
        details: `Características:

100% Algodón

Con Limpieza De Cuello

Superficie fácil de trabajar y fibra media.

Mayor durabilidad y resistencia.

Tacto rústico, fuerte y un brillo que destaca.

Ideal para Serigrafía, Vinilo Textil, DTG, DTF e Impresión Digital.

Las medidas corresponden A LA PRENDA, están tomadas de frente, de lado a lado. No corresponde al contorno. 

Recuerde que todas las medidas pueden tener una variación de 2/3 centímetros debido a las máquinas de corte.

El ancho se mide de axila a axila. Justo de la costura de debajo de una manga a la otra. El largo se toma desde el borde del cuello hasta el bajo de la camiseta, intentando mantener la regla/metro lo más recta posible.

INSTRUCCIONES DE LAVADO:

Lavar a 30° máximo | No usar Lavandina | No centrifugar | Plancha a temp. Máx. 150° | Secar colgado | Lavar con colores similares | Lavar del revés.

Cuida tus prendas. Lávalas con agua fría o tibia utilizando el ciclo suave del lavarropas con un detergente para todo tipo de ropas. Utiliza un suavizante. Este paso es indispensable ya que acondiciona las fibras de las telas, suaviza al tacto y disminuye la estática. Además, alarga la vida útil de tus prendas.`,
        image: "/product/PeinadoTotoColores.jpeg",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 8400,
        variants: [
            {
                colorName: "Blanco",
                colorCode: "#ffffff",
                image: "/product/remera algodon peinado blanco.png",
            },
            {
                colorName: "Negro",
                colorCode: "#000000",
                image: "/product/remera algodon peinado negro.png",
            },
            {
                colorName: "Azul Francia",
                colorCode: "#0047ab",
                image: "/product/remera algodon peinado azul francia.png",
            },
            {
                colorName: "Celeste",
                colorCode: "#38bdf8",
                image: "/product/PeinadoCeleste.jpeg",
            },
            {
                colorName: "Lavanda",
                colorCode: "#b57edc",
                image: "/product/remera algodon peinado lavanda.png",
            },
            {
                colorName: "Amarillo",
                colorCode: "#facc15",
                image: "/product/remera algodon peinado amarillo.png",
            },
            {
                colorName: "Bordó",
                colorCode: "#800020",
                image: "/product/remera algodon peinado bordo.png",
            },
            {
                colorName: "Chocolate",
                colorCode: "#5c3a21",
                image: "/product/remera algodon peinado chocolate.png",
            },
            {
                colorName: "Naranja",
                colorCode: "#f97316",
                image: "/product/remera algodon peinado naranja.png",
            },
            {
                colorName: "Natural",
                colorCode: "#f5f5dc",
                image: "/product/remera algodon peinado natural.png",
            },
            {
                colorName: "Rojo",
                colorCode: "#dc2626",
                image: "/product/remera algodon peinado rojo.png",
            },
            {
                colorName: "Rosado",
                colorCode: "#f472b6",
                image: "/product/remera algodon peinado rosado.png",
            },
            {
                colorName: "Verde Benetton",
                colorCode: "#008f39",
                image: "/product/remera algodon peinado verde benetton.png",
            },
            {
                colorName: "Verde Inglés",
                colorCode: "#1e4620",
                image: "/product/remera algodon peinado verde ingles.png",
            },
            {
                colorName: "Verde Militar",
                colorCode: "#4b5320",
                image: "/product/remera algodon peinado verde militar.png",
            },
            {
                colorName: "Tabla de Talles Adultos",
                colorCode: "#71007A",
                image: "/product/TABLA DE TALLES ADULTOS UNISEX.png",
            }
        ]
    },
    {
        id: 7,
        title: "Remera Manga Corta Niño Algodón",
        location: "Textiles - Algodón Peinado 24.1",
        description: "Remera infantil de algodón 100% peinado 24.1 premium. Confección reinforced y cuello resistente para resistir el uso diario.",
        image: "/product/remera niño algodon peinado 24.1.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 6000,
        variants: [
            {
                colorName: "Blanco",
                colorCode: "#ffffff",
                image: "/product/remera niño algodon peinado 24.1.png",
            },
            {
                colorName: "Negro",
                colorCode: "#000000",
                image: "/product/remera niño algodon peinado 24.1 negro.png",
            }
        ]
    },
    {
        id: 8,
        title: "Remera Algodón Talle Especial",
        location: "Textiles - Algodón Peinado",
        description: "Remera de algodón peinado en talles especiales. Excelente caída, calce cómodo y costuras reforzadas.",
        image: "/product/RemeraTalleEspecial.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 9650,
        variants: [
            {
                colorName: "Tabla de Talles y Medidas",
                colorCode: "#22c55e",
                image: "/ComoTomarMedidasRemeras.png",
            },
            {
                colorName: "Catálogo de Confección",
                colorCode: "#a855f7",
                image: "/CatalogoRemeras.png",
            }
        ]
    },
    {
        id: 9,
        title: "Gorra Trucker Adulto",
        location: "Gorras - Accesorios",
        description: "Gorra trucker para adulto con frente espumado blanco y red de color. Hebilla regulable trasera. Excelente terminación.",
        image: "/product/TipoDeGorras.jpeg",
        category: "Textiles",
        stock: 45,
        website: "/contact",
        price: 3000,
    },
    {
        id: 10,
        title: "Gorra Trucker Niño",
        location: "Gorras - Accesorios",
        description: "Gorra trucker infantil con frente espumado ideal para sublimar y personalizar. Red semirrígida y broche regulable.",
        image: "/product/TipoDeGorras.jpeg",
        category: "Textiles",
        stock: 25,
        website: "/contact",
        price: 2800,
    },
    {
        id: 11,
        title: "Gorra Prelavada Gastada",
        location: "Gorras - Accesorios",
        description: "Gorra de gabardina prelavada con efecto gastado vintage. Hebilla metálica regulable. Calidad premium y estilo informal.",
        image: "/product/GorrasTodosColores.png",
        category: "Textiles",
        stock: 15,
        website: "/contact",
        price: 5800,
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
        id: 12,
        title: "Buzo Cuello Redondo",
        location: "Textiles - Abrigo",
        description: "Buzo clásico de cuello redondo en frisa premium. Ideal para bordado y vinilo textil directo. Puños y cintura con elastano.",
        image: "/product/BuzoNegro.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 21000,
        badge: "Liquidación Invierno -20%",
    },
    {
        id: 13,
        title: "Buzo Canguro con Capucha",
        location: "Textiles - Abrigo",
        description: "Buzo de abrigo con capucha y bolsillo frontal canguro. Confeccionado en frisa de alta calidad, muy abrigado y de tacto suave. Consultá disponibilidad de modelos con capucha.",
        image: "/product/buzo canguro con capucha frisa invisible.png",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 23000,
        badge: "Liquidación Invierno -20%",
    },
    {
        id: 14,
        title: "Campera Frisa Invisible",
        location: "Textiles - Abrigo Premium",
        description: "Campera de abrigo confeccionada en frisa invisible de algodón premium con capucha, cierre metálico reforzado y bolsillos frontales. Calidad superior y excelente terminación.",
        image: "/product/Camperafrizainvisible.jpeg",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 24490,
        badge: "Liquidación Invierno -20%",
    },

    {
        id: 16,
        title: "Taza de Polímero (Plástica)",
        location: "Polímero - Tazas Plásticas",
        description: "Taza plástica de polímero irrompible con base personalizable. Podés continuar el diseño por todo el cuerpo. Ideal para escuelas y cumpleaños infantiles, con encastre (no necesita conformador)",
        image: "/product/TazaPolimeroRecta.jpeg",
        category: "Polímero",
        stock: 50,
        website: "/contact",
        price: 1650,
    },
    {
        id: 17,
        title: "Taza Mimo (Polímero Kawaii)",
        location: "Polímero - Tazas Especiales",
        description: "Taza plástica de polímero con asa doble en forma de corazón y diseño kawaii (gatito o similar). Perfecta para regalo de cumpleaños o día de los enamorados. Muy instagrameable.",
        image: "/product/TazaGatito.jpeg",
        category: "Polímero",
        stock: 8,
        website: "/contact",
        price: 2700,
        variants: [
            {
                colorName: "Diseño Kawaii",
                colorCode: "#f472b6",
                image: "/product/TazaGatito.jpeg",
            },
            {
                colorName: "Rosa Asa Corazón",
                colorCode: "#ec4899",
                image: "/product/TazaRoza.jpeg",
            }
        ]
    },
    {
        id: 18,
        title: "Mate de Polímero Sublimate",
        location: "Polímero - Mates",
        description: "Mate plástico de polímero premium importado Sublimate. Incluye bombilla de acero inoxidable. Mayor brillo, resistencia a golpes y hermoso acabado con interior de color.",
        image: "/product/MateGeneral.jpeg",
        category: "Polímero",
        stock: 15,
        website: "/contact",
        price: 4400,
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
        id: 20,
        title: "Cuchillo de Polímero Personalizable",
        location: "Polímero - Utensilios (Libre de BPA)",
        description: "Cuchillo de polímero libre de BPA con acabado brillo espejo. Apto para sublimar y personalizar con diseños o nombres. Seguro para niños y de excelente calidad.",
        image: "/product/CUCHILLO.png",
        category: "Polímero",
        stock: null,
        website: "/contact",
        price: 365,
        variants: [
            {
                colorName: "Diseño Impreso",
                colorCode: "#374151",
                image: "/product/CUCHILLO.png",
            },
            {
                colorName: "Especificaciones BPA Free",
                colorCode: "#f472b6",
                image: "/product/especificacion CUCHILLO.png",
            },
            {
                colorName: "Set de Cubiertos",
                colorCode: "#10b981",
                image: "/product/PLACA PRINCIPAL CUBIERTOS 2.png",
            },
            {
                colorName: "Demostración de Uso",
                colorCode: "#f59e0b",
                image: "/product/PLACA PRINCIPAL CUBIERTOS.png",
            }
        ]
    },
    {
        id: 21,
        title: "Tenedor de Polímero Personalizable",
        location: "Polímero - Utensilios (Libre de BPA)",
        description: "Tenedor de polímero libre de BPA con acabado brillo espejo. Ideal para personalizar con nombres y estampados. Resistente y seguro para uso diario.",
        image: "/product/tenedor.png",
        category: "Polímero",
        stock: null,
        website: "/contact",
        price: 365,
        variants: [
            {
                colorName: "Diseño Impreso",
                colorCode: "#3b82f6",
                image: "/product/tenedor.png",
            },
            {
                colorName: "Especificaciones BPA Free",
                colorCode: "#f472b6",
                image: "/product/especificacion cubierto.png",
            },
            {
                colorName: "Set de Cubiertos",
                colorCode: "#10b981",
                image: "/product/PLACA PRINCIPAL CUBIERTOS 2.png",
            },
            {
                colorName: "Demostración de Uso",
                colorCode: "#f59e0b",
                image: "/product/PLACA PRINCIPAL CUBIERTOS.png",
            }
        ]
    },
    {
        id: 22,
        title: "Cuchara de Polímero Personalizable",
        location: "Polímero - Utensilios (Libre de BPA)",
        description: "Cuchara de polímero libre de BPA con acabado brillo espejo. Ideal para personalizar con diseños florales, infantiles o nombres.",
        image: "/product/cuchara.png",
        category: "Polímero",
        stock: null,
        website: "/contact",
        price: 365,
        variants: [
            {
                colorName: "Diseño Impreso",
                colorCode: "#d97706",
                image: "/product/cuchara.png",
            },
            {
                colorName: "Especificaciones BPA Free",
                colorCode: "#f472b6",
                image: "/product/especificacion cuchara.png",
            },
            {
                colorName: "Set de Cubiertos",
                colorCode: "#10b981",
                image: "/product/PLACA PRINCIPAL CUBIERTOS 2.png",
            },
            {
                colorName: "Demostración de Uso",
                colorCode: "#f59e0b",
                image: "/product/PLACA PRINCIPAL CUBIERTOS.png",
            }
        ]
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
        description: "Hojas plásticas A4 termocontraíbles. Imprimí tu diseño o ilustración, cortá, aplicá calor y en minutos tenés pines y llaveros rígidos, duros y brillantes (se reduce un 60%). Ideal para personalizaciones artesanales.",
        image: "/product/WinkiPaper.jpeg",
        category: "Insumos",
        stock: 25,
        website: "/contact",
        price: "Consultar",
        guideSlug: "manual-uso-winky-paper",
        variants: [
            {
                colorName: "Hojas A4 Termocontraíble",
                colorCode: "#a855f7",
                image: "/product/WinkiPaper.jpeg",
            },
            {
                colorName: "Ejemplo Llavero Terminado",
                colorCode: "#22c55e",
                image: "/product/Llavero.jpeg",
            }
        ]
    },
    {
        id: 26,
        title: "Vaso Argentina Tapa Pelota",
        location: "Bazar - Souvenirs",
        description: "Vaso de 400cc celeste y blanco con tapa en forma de pelota de fútbol y sorbete rígido. Ideal para eventos deportivos.",
        image: "/product/VasoArgentina.jpeg",
        category: "Plástico",
        stock: 30,
        website: "/contact",
        price: 1090,
    },
    {
        id: 27,
        title: "Vaso Milkshake 380cc",
        location: "Bazar - Souvenirs",
        description: "Vaso Milk Shake plástico de 380cc con tapa tipo domo y sorbete. Disponible en colores pasteles.",
        image: "/product/VasoMilk380.jpeg",
        category: "Plástico",
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
        category: "Plástico",
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
        category: "Plástico",
        stock: 80,
        website: "/contact",
        price: 1490,
        variants: [
            {
                colorName: "Vista General",
                colorCode: "#e879f9",
                image: "/product/ValijaMediana.jpeg",
            },
            {
                colorName: "Colores Disponibles",
                colorCode: "#f59e0b",
                image: "/product/valijita(VaComoSegundaPlacaDeValijitas).png",
            },
        ],
    },
    {
        id: 30,
        title: "Taza de Cerámica Glitter",
        location: "Cerámica - Tazas Especiales",
        description: "Taza de cerámica importada con un deslumbrante acabado de brillo glitter premium. Apta para microondas, ideal para diseños llamativos.",
        image: "/product/TazaGlitter.png",
        category: "Cerámica",
        stock: 15,
        website: "/contact",
        price: 5100,
    },
    {
        id: 31,
        title: "Taza de Cerámica Perlada",
        location: "Cerámica - Tazas Especiales",
        description: "Taza de cerámica con acabado perlado nacarado de alta calidad. Brillo satinado único y elegante. Disponible en colores pasteles metalizados.",
        image: "/product/TazaPerlada.png",
        category: "Cerámica",
        stock: 20,
        website: "/contact",
        price: 5100,
        variants: [
            {
                colorName: "Perla Rosa",
                colorCode: "#fbcfe8",
                image: "/product/TazaPerlada.png",
            },
            {
                colorName: "Ver Colores",
                colorCode: "linear-gradient(135deg, #a5b4fc 50%, #fbcfe8 50%)",
                image: "/product/TazaPerladaColoresDisponibles.png",
            }
        ]
    },
    {
        id: 48,
        title: "Taza Mágica de Cerámica",
        location: "Cerámica - Tazas Especiales",
        description: "Taza mágica de cerámica que revela tu diseño al agregar una bebida caliente. Ideal para regalos personalizados y sorpresas únicas. Apta para sublimación de alta calidad.",
        image: "/product/TazaMagicaCeramica.jpeg",
        category: "Cerámica",
        stock: 20,
        website: "/contact",
        price: 5100,
    },
    {
        id: 50,
        title: "Taza de Cerámica Interior Color Importada",
        location: "Cerámica - Tazas Importadas",
        description: "Taza de cerámica importada con interior y asa de color de alta intensidad. Acabado brillante de superficie lisa extra blanca, apta para sublimación en alta definición y microondas.",
        image: "/product/TazaInterirorColorImportada.jpeg",
        category: "Cerámica",
        stock: 30,
        website: "/contact",
        price: 3900,
    },
    {
        id: 32,
        title: "Botellita Souvenir con Sorbete",
        location: "Bazar - Infantil",
        description: "Botellita de vidrio tipo souvenir con tapa rosca de colores y sorbete incluido. Personalizable con etiqueta o sticker. Ideal para souvenirs de cumpleaños infantiles y primer año.",
        image: "/product/BotellitaConBombilla.jpeg",
        category: "Plástico",
        stock: 45,
        website: "/contact",
        price: 1950,
    },
    {
        id: 33,
        title: "Vaso de Café Térmico",
        location: "Polímero - Vasos Térmicos",
        description: "Vaso térmico estilo café en plástico personalizable para sublimar o estampar. Mantiene la temperatura con tapa segura.",
        image: "/product/VASO CAFE.png",
        category: "Polímero",
        stock: 30,
        website: "/contact",
        price: 4100,
    },
    {
        id: 34,
        title: "Jarro Térmico de Polímero",
        location: "Sustratos - Polímero",
        description: "Jarro térmico plástico de polímero importado para sublimar. Tapa hermética anti-derrames y excelente acabado brillante.",
        image: "/product/JARRO TERMICO.png",
        category: "Polímero",
        stock: 25,
        website: "/contact",
        price: 4400,
    },
    {
        id: 35,
        title: "Jarro Térmico con Pico",
        location: "Sustratos - Polímero",
        description: "Jarro térmico de polímero con tapa pico para mayor practicidad al beber. Superficie lista para sublimación de alta definición.",
        image: "/product/JARRO CON PICO.png",
        category: "Polímero",
        stock: 25,
        website: "/contact",
        price: 4600,
        variants: [
            {
                colorName: "Vista Principal",
                colorCode: "#71007A",
                image: "/product/JARRO CON PICO.png",
            },
            {
                colorName: "Tapa con Pico",
                colorCode: "#a855f7",
                image: "/product/jarro con pico 2.png",
            },
            {
                colorName: "Detalle de Pico",
                colorCode: "#ec4899",
                image: "/product/jarro con pico 3.png",
            }
        ]
    },
    {
        id: 36,
        title: "Jarro Osito con Asa",
        location: "Sustratos - Polímero Infantil",
        description: "Jarro infantil de polímero con tapa decorada con relieve de osito y asa ergonómica. Ideal para regalo escolar y souvenir.",
        image: "/product/jarro osito.png",
        category: "Polímero",
        stock: 20,
        website: "/contact",
        price: 4900,
        variants: [
            {
                colorName: "Blanco",
                colorCode: "#ffffff",
                image: "/product/jarro osito.png",
            },
            {
                colorName: "Celeste",
                colorCode: "#38bdf8",
                image: "/product/jarro osito color celeste.png",
            },
            {
                colorName: "Rosa",
                colorCode: "#f472b6",
                image: "/product/jarro osito color rosa.png",
            }
        ]
    },
    {
        id: 37,
        title: "Rompecabezas de Polímero 24 Piezas",
        location: "Polímero - Juegos y Regalos",
        description: "Rompecabezas de polímero blanco brillante de 24 piezas. Material rígido, irrompible y duradero, ideal para fotos familiares y regalos personalizados.",
        image: "/product/rompecabezas 24 piezas.png",
        category: "Polímero",
        stock: 30,
        website: "/contact",
        price: 5550,
    },
    {
        id: 40,
        title: "Rompecabezas de Polímero 16 Piezas",
        location: "Polímero - Juegos y Regalos",
        description: "Rompecabezas de polímero blanco brillante de 16 piezas. Excelente definición de estampado, ideal para niños, souvenirs y recuerdos.",
        image: "/product/rompecabezas 16 piezas.png",
        category: "Polímero",
        stock: 30,
        website: "/contact",
        price: 3900,
    },
    {
        id: 38,
        title: "Llavero de Polímero Rectangular",
        location: "Polímero - Souvenirs",
        description: "Llavero rectangular de polímero blanco rígido. Sublimable de ambos lados. Excelente acabado para recuerdos y promociones.",
        image: "/product/llavero rectangular.png",
        category: "Polímero",
        stock: 50,
        website: "/contact",
        price: 390,
    },
    {
        id: 39,
        title: "Buzo Cuello Redondo Frisado Peinado Calidad Premium",
        location: "Textiles - Algodón Peinado Premium",
        description: "Buzo cuello redondo de algodón peinado calidad premium con frisa invisible. Puños y cintura elastizados, confección superior ideal para estampado o vinilo textil.",
        image: "/product/BuzoCuelloRedondoFrisadoPeinadoDeAlgodonCalidadPremium.jpeg",
        category: "Textiles",
        stock: null,
        website: "/contact",
        price: 21000,
        badge: "Liquidación Invierno -20%",
    },
    {
        id: 41,
        title: "Llavero Hueso de Polímero",
        location: "Polímero - Souvenirs",
        description: "Llavero de polímero rígido con forma de hueso. Sublimable en ambas caras, ideal para identificación de mascotas o recuerdos personalizados.",
        image: "/product/hueso.png",
        category: "Polímero",
        stock: 50,
        website: "/contact",
        price: 390,
    },
    {
        id: 42,
        title: "Taza de Polímero Colección Pasteles",
        location: "Polímero - Tazas Especiales",
        description: "Taza plástica de polímero con acabado brillante en colores pasteles premium. Irrompible y muy resistente, ideal para uso infantil o diario.",
        image: "/product/coleccion pasteles.png",
        category: "Polímero",
        stock: 30,
        website: "/contact",
        price: 1650,
    },
    {
        id: 43,
        title: "Termo Sublimable",
        location: "Acero / Aluminio - Termos",
        description: "Termo de acero inoxidable con recubrimiento sublimable de alta resistencia. Conserva la temperatura de tus bebidas por horas y es resistente a golpes. Ideal para regalos personalizados.",
        image: "/product/termo sublimable.png",
        category: "Acero",
        stock: 15,
        website: "/contact",
        price: 12100,
    },
    {
        id: 44,
        title: "Burbujero",
        location: "Bazar - Souvenirs",
        description: "Burbujero personalizable ideal para souvenirs de cumpleaños y eventos infantiles. Liviano, colorido y muy popular entre los más chicos.",
        image: "/product/burbujeros.png",
        category: "Plástico",
        stock: 50,
        website: "/contact",
        price: 1490,
    },
    {
        id: 45,
        title: "Vaso Acrílico Glitter 350cc",
        location: "Bazar - Souvenirs",
        description: "Vaso CRISTAL 350cc con tapa y sorbete de color. Medida: 7,5x10,5 cm (diam x alto). Disponible en colores: rojo, verde, amarillo, celeste, azul, rosa, violeta, blanco, negro, naranja, rosa pastel, celeste pastel, verde pastel, lila, amarillo pastel, salmón. Transparente y Glitter (color de sorbete a elección, NO TRANSPARENTE). Ideal para fiestas, eventos, cumpleaños, souvenirs y bebidas frías.",
        image: "/product/vaso acrilico glitter 350 cc.png",
        category: "Plástico",
        stock: 40,
        website: "/contact",
        price: 1490,
        variants: [
            {
                colorName: "Tonos Pasteles y Transparente",
                colorCode: "#a5f3fc",
                image: "/product/vaso acrilico glitter 350 cc.png",
            },
            {
                colorName: "Tonos Intensos",
                colorCode: "#7c3aed",
                image: "/product/vaso acrilico glitter 350 cc colores intensos(SegundaPlaca).png",
            },
            {
                colorName: "Colores de Tapa Disponibles",
                colorCode: "linear-gradient(135deg, #ef4444 20%, #3b82f6 40%, #eab308 60%, #a855f7 80%)",
                image: "/product/COLORES DE TAPA DISPONIBLES VASOS GLITTER.jpeg",
            },
        ],
    },
    {
        id: 46,
        title: "Vaso de Fiesta",
        location: "Plástico - Eventos",
        description: "Vaso de fiesta ideal para eventos, cumpleaños y souvenirs. Disponible en dos medidas: 750 ml a $1.800 y 500 ml a $1.400.",
        image: "/product/VasoFiesta1.jpeg",
        category: "Plástico",
        stock: 50,
        website: "/contact",
        price: "$1.400 / $1.800",
        variants: [
            {
                colorName: "Vista 1",
                colorCode: "transparent",
                image: "/product/VasoFiesta1.jpeg",
            },
            {
                colorName: "Vista 2",
                colorCode: "transparent",
                image: "/product/VasoFiesta2.jpeg",
            },
        ],
    },
    {
        id: 47,
        title: "Lunchera Organizador Transparente",
        location: "Plástico - Organizadores",
        description: "Lunchera organizador transparente y más colores. Ideal para viandas, organización personal y souvenirs.",
        image: "/product/LUNCHERA1.png",
        category: "Plástico",
        stock: 40,
        website: "/contact",
        price: 2490,
        variants: [
            {
                colorName: "Vista 1",
                colorCode: "transparent",
                image: "/product/LUNCHERA1.png",
            },
            {
                colorName: "Vista 2",
                colorCode: "transparent",
                image: "/product/LUNCHERA2.png",
            },
        ],
    },
    {
        id: 49,
        title: "Medias Sublimables",
        location: "Textiles - Medias",
        description: "Medias sublimables para niños y adultos. Aptas para sublimación de alta definición, suaves y de gran durabilidad.",
        image: "/product/MediasArgMessi.jpeg",
        category: "Textiles",
        stock: 30,
        website: "/contact",
        price: 3500,
        variants: [
            {
                colorName: "Diseño Selección / Messi",
                colorCode: "#38bdf8",
                image: "/product/MediasArgMessi.jpeg",
            },
            {
                colorName: "Diseño Blanco y Negro",
                colorCode: "#000000",
                image: "/product/MediasBlancoNegro.jpeg",
            },
            {
                colorName: "Diseño Homero Simpson",
                colorCode: "#facc15",
                image: "/product/MediasHomero.jpeg",
            },
        ],
    },
    {
        id: 51,
        title: "Botella Térmica Lechera",
        location: "Acero / Aluminio - Botellas",
        description: "Botella térmica en forma de botella de leche con recubrimiento sublimable. Mantiene temperatura por horas, acabado metálico premium. Ideal para regalos personalizados únicos.",
        image: "/product/BotellaTermicaLechera.png",
        category: "Acero",
        stock: null,
        website: "/contact",
        price: 13500,
    },
    {
        id: 52,
        title: "Vaso Térmico de Silicona",
        location: "Polímero - Vasos Térmicos",
        description: "Vaso térmico de polímero con tapa de silicona personalizable. Ideal para mantener tus bebidas frías o calientes.",
        image: "/product/VasoTernicoSilicona.jpeg",
        category: "Polímero",
        stock: null,
        website: "/contact",
        price: 5090,
    },
    {
        id: 53,
        title: "Kit de Juego para Masas",
        location: "Plástico - Infantil / Souvenirs",
        description: "Kit de juego para masas. Incluye 3 accesorios surtidos en forma y color, 6 cortantes de 4.5 cm y 1 palo de amasar de 11 cm. Ideal para souvenirs infantiles y actividades creativas.",
        image: "/product/Kit de juego para Masas.jpeg",
        category: "Plástico",
        stock: 50,
        website: "/contact",
        price: 1590,
    },
    {
        id: 54,
        title: "Botella Plástica Caramañola 750cc",
        location: "Plástico - Deportivo",
        description: "Botella plástica caramañola estilo deportiva de 750cc. Disponible en llamativos colores fuertes y delicados tonos pasteles. Ideal para deportes, uso diario y personalización.",
        image: "/product/Botella plástica caramañola.jpeg",
        category: "Plástico",
        stock: 40,
        website: "/contact",
        price: 1549,
    },
    {
        id: 55,
        title: "Vaso con Tapa Rígida y Sorbete Color 473ml",
        location: "Plástico - Vasos & Souvenirs",
        description: "Vaso con tapa rígida y sorbete color, ideal para bebidas frías, jugos, licuados, smoothies, cafés fríos, frappés, eventos, souvenirs, combos personalizados y uso diario. Su diseño moderno y práctico lo convierte en una excelente opción para emprendimientos de personalización, regalería, cotillón, cafeterías y fiestas. Disponible en colores: Negro, Blanco y Natural traslúcido. Capacidad: 473ml.",
        image: "/product/VasoTapaRigida.jpeg",
        category: "Plástico",
        stock: 50,
        website: "/contact",
        price: 1400,
        variants: [
            {
                colorName: "Negro",
                colorCode: "#171717",
                image: "/product/VasoTapaRigida.jpeg",
            },
            {
                colorName: "Blanco",
                colorCode: "#ffffff",
                image: "/product/VasoTapaRigida.jpeg",
            },
            {
                colorName: "Natural Traslúcido",
                colorCode: "#e5e7eb",
                image: "/product/VasoTapaRigida.jpeg",
            },
        ],
    },
    {
        id: 56,
        title: "Vaso Glitter con Tapa Plana y Sorbete 330cc",
        location: "Plástico - Souvenirs & Eventos",
        description: "Vaso GLITTER con tapa plana y sorbete descartable transparente incluido. Capacidad 330cc (Medida: 8x13cm). Ideal para fiestas, eventos y souvenirs personalizados.",
        image: "/product/VasoGliter.jpeg",
        category: "Plástico",
        stock: 40,
        website: "/contact",
        price: 1290,
    },
    {
        id: 57,
        title: "Vaso de Plástico 300cc con Tapa Plana y Sorbete",
        location: "Plástico - Souvenirs & Eventos",
        description: "Vaso de plástico de 300cc con tapa plana y sorbete transparente incluido. Disponible en hermosa gama de colores pasteles. Ideal para souvenirs, candy bar y cumpleaños infantiles.",
        image: "/product/VasoPlasticoTapaPlanaSorbete.jpeg",
        category: "Plástico",
        stock: 50,
        website: "/contact",
        price: 1100,
    },
    {
        id: 58,
        title: "Vaso de Plástico con Pico Antiderrame 300cc",
        location: "Plástico - Infantil",
        description: "Vaso de plástico con pico antiderrames. Capacidad 300cc (Medida: 8x13cm). Disponible en variedad de colores pasteles y colores fuertes. Práctico y seguro para los más chicos.",
        image: "/product/VasoPlasticoPicoAntiaderente.jpeg",
        category: "Plástico",
        stock: 50,
        website: "/contact",
        price: 1100,
    },
    {
        id: 59,
        title: "Termo Botella Cordón 500ml",
        location: "Acero Inoxidable - Termos",
        description: "Termo botella de acero inoxidable con tapa a rosca y cordón de agarre. Capacidad 500 ml. Dimensiones: 25 cm de alto, 6 cm de base y 4,3 cm de diámetro de boca. Mantiene frío/calor por horas.",
        image: "/product/Termo Botella Cordon 500ml-1.jpeg",
        category: "Acero",
        stock: 25,
        website: "/contact",
        price: 13900,
        variants: [
            {
                colorName: "Vista General",
                colorCode: "#ffffff",
                image: "/product/Termo Botella Cordon 500ml-1.jpeg",
            },
            {
                colorName: "Medidas y Capacidad",
                colorCode: "#71007A",
                image: "/product/Termo Botella Cordon 500ml-2.jpeg",
            },
        ],
    },
    {
        id: 60,
        title: "Vaso Térmico con Tapa de Acrílico 500ml",
        location: "Acero Inoxidable - Vasos Térmicos",
        description: "Vaso térmico de acero inoxidable sublimable con capacidad de 500ml. Incluye tapa de acrílico transparente hermética, sorbete de acero inoxidable y cepillo limpiador.",
        image: "/product/VASO TERMICO TAPA ACRILICO 500ML.jpeg",
        category: "Acero",
        stock: 30,
        website: "/contact",
        price: 13100,
    },
    {
        id: 61,
        title: "Termo Botella con Tapa de Bambú 500ml",
        location: "Acero Inoxidable - Botellas Térmicas",
        description: "Botella térmica de acero inoxidable sublimable de 500ml. Tapa con detalle de madera/bambú y manija metálica abatible de transporte. Excelente retención térmica.",
        image: "/product/Termo Botella 500ml.jpeg",
        category: "Acero",
        stock: 25,
        website: "/contact",
        price: 13900,
    },
    {
        id: 62,
        title: "Termo Taza Térmico",
        location: "Acero Inoxidable - Termos",
        description: "Termo de acero inoxidable con tapa multifunción tipo taza con manija. Ideal para llevar café o infusiones calientes con máxima comodidad y aislamiento térmico.",
        image: "/product/Termo Taza Termico.jpeg",
        category: "Acero",
        stock: 20,
        website: "/contact",
        price: 12900,
    },
    {
        id: 63,
        title: "Termo Botella Digital Inteligente",
        location: "Acero Inoxidable - Termos Inteligentes",
        description: "Termo botella inteligente de acero inoxidable con sensor táctil y pantalla LED en la tapa que muestra la temperatura en tiempo real. Incluye filtro infusor de acero. Capacidad 500ml.",
        image: "/product/Termo Botella Digital Inteligente.jpeg",
        category: "Acero",
        stock: 30,
        website: "/contact",
        price: 11900,
    },
    {
        id: 64,
        title: "Botella Térmica Sublimable 500ml",
        location: "Acero Inoxidable - Botellas Térmicas",
        description: "Botella térmica sublimable de 500ml fabricada en acero inoxidable de doble pared. Mantiene bebidas frías o calientes durante todo el día. Acabado blanco brillante listo para estampar.",
        image: "/product/Botella Termica Sublimable 500ml.jpeg",
        category: "Acero",
        stock: 30,
        website: "/contact",
        price: 13500,
    },
    {
        id: 65,
        title: "Gorra de Gabardina",
        location: "Gorras - Gabardina",
        description: "Gorra de gabardina lisa 100% algodón de excelente calidad con visera curva y cierre metálico regulable. Ideal para bordado, transfer o estampados personalizados.",
        image: "/product/GORRA GABARDINA.jpeg",
        category: "Textiles",
        stock: 30,
        website: "/contact",
        price: 4800,
    },
];

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

export const businessHours: BusinessHour[] = siteConfig.businessHours;

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
        ]
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
    },
    {
        id: 4,
        title: "Guía de Confección: Cómo Elegir y Medir tus Remeras",
        excerpt: "Conocé las diferencias entre las telas Spun, Modal y Algodón peinado, y aprendé a tomar las medidas correctas para elegir tu talle sin errores.",
        image: "/TiposDeRemeras.png",
        slug: "guia-confeccion-medidas-remeras",
        category: "Textiles",
        readTime: "5 min",
        steps: [
            "Identificá el tipo de tela: Spun (100% poliéster tacto algodón) es perfecta para sublimar a todo color. Algodón peinado es ideal para vinilo textil, bordado o DTF.",
            "Colocá una remera que te calce cómoda sobre una superficie completamente plana sin arrugas ni estirarla.",
            "Medí el ancho de axila a axila (A) y el largo desde el punto más alto del hombro hasta el borde inferior (B).",
            "Compará estas medidas con nuestra tabla de talles (para adultos, niños o talles especiales) antes de hacer tu pedido para asegurar el calce ideal."
        ],
        tips: [
            "Las prendas sublimadas pueden tener una pequeña variación del 1-2% en su tamaño debido a la alta temperatura del estampado. Si estás entre dos talles, te aconsejamos elegir el más grande.",
            "Para sublimar sobre remeras de algodón peinado (que no contienen poliéster), es necesario aplicar previamente un aerosol activador como Sublimate o utilizar vinilos sublimables.",
            "Lava siempre las prendas de algodón o spun con agua fría y del revés para preservar la definición y colores del estampado por mucho más tiempo."
        ],
        infographicImage: "/ComoTomarMedidasRemeras.png"
    }
];
