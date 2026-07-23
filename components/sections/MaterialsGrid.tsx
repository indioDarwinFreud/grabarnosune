import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config";

interface MaterialItem {
    id: number;
    title: string;
    description: string;
    image: string;
    badge: string;
    href: string;
}

const materials: MaterialItem[] = [
    {
        id: 1,
        title: "Cerámica",
        description: "Tazas de cerámica extra blanca Orca AAA, tazones y productos de vajilla con recubrimiento polimérico de alto brillo.",
        image: "/Ceramica.jpeg",
        badge: "Vajilla & Tazas",
        href: "/products?category=Cer%C3%A1mica"
    },
    {
        id: 2,
        title: "Textil",
        description: "Remeras de algodón peinado, spun, modal, gorras trucker y prendas listas para sublimación, DTF o vinilo.",
        image: "/Textil.jpeg",
        badge: "Prendas & Accesorios",
        href: "/products?category=Textil"
    },
    {
        id: 3,
        title: "Polímero",
        description: "Mates, tazas y artículos plásticos irrompibles con recubrimiento de polímero brillante de alta calidad para sublimar.",
        image: "/POLIMERO.png",
        badge: "Alta Resistencia",
        href: "/products?category=Pol%C3%ADmero"
    },
    {
        id: 4,
        title: "Insumos para Estampar",
        description: "Tintas CMYK importadas de alta densidad, aerosol activador Sublimate, cintas térmicas y consumibles de taller.",
        image: "/INSUMOS DE TRABAJO.png",
        badge: "Consumibles",
        href: "/products?category=Insumos+para+estampar"
    },
    {
        id: 5,
        title: "Cartón",
        description: "Cajas de presentación, packagings reforzados y rompecabezas listos para sublimar tu marca o foto favorita.",
        image: "/CARTON.png",
        badge: "Packaging",
        href: "/products?category=Cart%C3%B3n"
    },
    {
        id: 6,
        title: "Papeles Especiales",
        description: "Hojas de sublimación premium, papeles autoadhesivos holográficos y láminas plásticas termocontraíbles.",
        image: "/PAPELES ESPECIALES.png",
        badge: "Insumos Estrella",
        href: "/products?category=Papeles+especiales"
    },
    {
        id: 7,
        title: "Plástico",
        description: "Vasos milkshake, cubiertos personalizables BPA free y souvenirs en plásticos rígidos de múltiples colores.",
        image: "/PLASTICO.png",
        badge: "Bazar & Souvenirs",
        href: "/products?category=Pl%C3%A1stico"
    },
    {
        id: 8,
        title: "Madera",
        description: "Placas de madera MDF, posavasos, cuadros y objetos personalizables con acabado natural listos para estampar.",
        image: "/MADERA.png",
        badge: "MDF & Arte",
        href: "/products?category=Madera"
    }
];

export default function MaterialsGrid() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 mt-20">
            <FadeIn>
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-brizel text-center mb-4 text-gray-900 drop-shadow-sm uppercase tracking-wide">
                        Materiales & <span className="text-primary">Insumos</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base font-medium text-center max-w-md">
                        Personalizamos e imprimimos sobre una amplia gama de soportes para garantizar un acabado profesional.
                    </p>
                    <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {materials.map((mat, index) => (
                    <FadeIn key={mat.id} delay={index * 0.05} direction="up" className="h-full">
                        <Link href={mat.href} className="h-full block group">
                            <div
                                className="h-full p-6 rounded-3xl border border-gray-200/60 shadow-sm hover:shadow-[0_15px_30px_rgba(113,0,122,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden relative cursor-pointer"
                                style={{ backgroundColor: siteConfig.theme.backgroundCard }}
                            >
                                {/* Decorative Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity pointer-events-none"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                                        backgroundSize: '20px 20px'
                                    }}
                                />

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {mat.badge}
                                        </span>
                                        <span className="text-primary/40 group-hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider">
                                            Ver →
                                        </span>
                                    </div>

                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-50/50 border border-gray-100 flex items-center justify-center p-4">
                                        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                                            <Image
                                                src={mat.image}
                                                alt={mat.title}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {mat.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                        {mat.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
