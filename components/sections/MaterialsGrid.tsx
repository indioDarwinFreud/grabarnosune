import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { siteConfig } from "@/config";

interface MaterialItem {
    id: number;
    title: string;
    description: string;
    image: string;
    badge: string;
}

const materials: MaterialItem[] = [
    {
        id: 1,
        title: "Polímero",
        description: "Mates, tazas y artículos plásticos irrompibles con recubrimiento de polímero brillante de alta calidad para sublimar.",
        image: "/POLIMERO.png",
        badge: "Alta Resistencia"
    },
    {
        id: 2,
        title: "Plástico",
        description: "Vasos milkshake, botellitas deportivas y souvenirs en plásticos rígidos y duraderos de múltiples colores.",
        image: "/PLASTICO.png",
        badge: "Bazar & Eventos"
    },
    {
        id: 3,
        title: "Madera",
        description: "Tablas de asado, cubiertos y bazar gastronómico ideales para grabados láser permanentes y de alta definición.",
        image: "/MADERA.png",
        badge: "Grabados Láser"
    },
    {
        id: 4,
        title: "Cartón",
        description: "Cajas de presentación, packagings reforzados y rompecabezas listos para sublimar tu marca o foto favorita.",
        image: "/CARTON.png",
        badge: "Packaging"
    },
    {
        id: 5,
        title: "Papeles Especiales",
        description: "Hojas de sublimación premium, papeles autoadhesivos holográficos y láminas plásticas termocontraíbles.",
        image: "/PAPELES ESPECIALES.png",
        badge: "Insumos Estrella"
    },
    {
        id: 6,
        title: "Insumos de Trabajo",
        description: "Tintas CMYK importadas de alta densidad, aerosol activador Sublimate y herramientas esenciales de taller.",
        image: "/INSUMOS DE TRABAJO.png",
        badge: "Consumibles"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.map((mat, index) => (
                    <FadeIn key={mat.id} delay={index * 0.05} direction="up" className="h-full">
                        <div
                            className="h-full p-6 rounded-3xl border border-gray-200/60 shadow-sm hover:shadow-[0_15px_30px_rgba(113,0,122,0.05)] transition-all duration-500 flex flex-col justify-between group overflow-hidden relative"
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
                                </div>

                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-50/50 border border-gray-100 flex items-center justify-center p-4">
                                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                                        <Image
                                            src={mat.image}
                                            alt={mat.title}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 33vw"
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
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
