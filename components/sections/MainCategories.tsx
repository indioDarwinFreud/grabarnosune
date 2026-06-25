import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { GraduationCap, Coffee, Sparkles, Shirt, Layers, Key, Flame, Percent } from "lucide-react";

interface CategoryItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string; // Clase CSS para glow/borde
    bgClass: string; // Color de fondo semi-transparente pastel para el look
    textColor: string;
}

const categories: CategoryItem[] = [
    {
        id: 1,
        title: "Artículos Escolares",
        description: "Etiquetas, tazas plásticas y más...",
        icon: <GraduationCap size={28} className="text-pink-400 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-pink-500/30 group-hover:border-pink-400 shadow-pink-500/10 hover:shadow-pink-500/20",
        bgClass: "bg-pink-950/20 hover:bg-pink-900/30",
        textColor: "text-pink-200"
    },
    {
        id: 2,
        title: "Tazas de Cerámica",
        description: "Línea Orca AAA e importadas",
        icon: <Coffee size={28} className="text-orange-400 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-orange-500/30 group-hover:border-orange-400 shadow-orange-500/10 hover:shadow-orange-500/20",
        bgClass: "bg-orange-950/20 hover:bg-orange-900/30",
        textColor: "text-orange-200"
    },
    {
        id: 3,
        title: "Insumos Estrella",
        description: "Papel secado rápido y tintas AQ",
        icon: <Sparkles size={28} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-purple-500/30 group-hover:border-purple-400 shadow-purple-500/10 hover:shadow-purple-500/20",
        bgClass: "bg-purple-950/20 hover:bg-purple-900/30",
        textColor: "text-purple-200"
    },
    {
        id: 4,
        title: "Remeras & Textiles",
        description: "Spun, modal y gorras de red",
        icon: <Shirt size={28} className="text-teal-400 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-teal-500/30 group-hover:border-teal-400 shadow-teal-500/10 hover:shadow-teal-500/20",
        bgClass: "bg-teal-950/20 hover:bg-teal-900/30",
        textColor: "text-teal-200"
    },
    {
        id: 5,
        title: "Polímeros Sublimables",
        description: "Mates, polímero y plásticos",
        icon: <Layers size={28} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-emerald-500/30 group-hover:border-emerald-400 shadow-emerald-500/10 hover:shadow-emerald-500/20",
        bgClass: "bg-emerald-950/20 hover:bg-emerald-900/30",
        textColor: "text-emerald-200"
    },
    {
        id: 6,
        title: "Llaveros y Regalos",
        description: "Detalles que marcan la diferencia",
        icon: <Key size={28} className="text-sky-400 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-sky-500/30 group-hover:border-sky-400 shadow-sky-500/10 hover:shadow-sky-500/20",
        bgClass: "bg-sky-950/20 hover:bg-sky-900/30",
        textColor: "text-sky-200"
    },
    {
        id: 7,
        title: "Grabados & Especiales",
        description: "Tallados de alta precisión",
        icon: <Flame size={28} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-amber-500/30 group-hover:border-amber-400 shadow-amber-500/10 hover:shadow-amber-500/20",
        bgClass: "bg-amber-950/20 hover:bg-amber-900/30",
        textColor: "text-amber-200"
    },
    {
        id: 8,
        title: "Ofertas & Outlet",
        description: "Combos con descuento especial",
        icon: <Percent size={28} className="text-rose-400 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-rose-500/30 group-hover:border-rose-400 shadow-rose-500/10 hover:shadow-rose-500/20",
        bgClass: "bg-rose-950/20 hover:bg-rose-900/30",
        textColor: "text-rose-200"
    }
];

export default function MainCategories() {
    return (
        <section 
            className="w-full max-w-7xl mx-auto px-4 mt-20"
            data-imperia-id="MainCategories__section__0"
            data-imperia-path="components/sections/MainCategories.tsx"
        >
            <FadeIn>
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-white drop-shadow-sm">
                        Lo Más <span className="text-primary">Buscado</span>
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base font-medium text-center max-w-md">
                        Explorá nuestras categorías principales de insumos y personalizados destacados.
                    </p>
                    <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {categories.map((cat, index) => (
                    <FadeIn key={cat.id} delay={index * 0.05} direction="up" className="h-full">
                        <Link href="/products" className="block h-full group">
                            <div className={`h-full p-5 md:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between backdrop-blur-md shadow-md ${cat.color} ${cat.bgClass}`}>
                                <div className="mb-4">
                                    {cat.icon}
                                </div>
                                <div>
                                    <h3 className={`text-base md:text-lg font-black ${cat.textColor} mb-1 group-hover:translate-x-1 transition-transform duration-300`}>
                                        {cat.title}
                                    </h3>
                                    <p className="text-xs text-neutral-400 font-medium">
                                        {cat.description}
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
