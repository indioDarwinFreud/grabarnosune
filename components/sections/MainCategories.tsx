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
        icon: <GraduationCap size={28} className="text-pink-600 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-pink-200/50 group-hover:border-pink-400 shadow-pink-500/5 hover:shadow-pink-500/10",
        bgClass: "bg-pink-50/70 hover:bg-pink-100/80",
        textColor: "text-pink-950"
    },
    {
        id: 2,
        title: "Tazas de Cerámica",
        description: "Línea Orca AAA e importadas",
        icon: <Coffee size={28} className="text-orange-600 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-orange-200/50 group-hover:border-orange-400 shadow-orange-500/5 hover:shadow-orange-500/10",
        bgClass: "bg-orange-50/70 hover:bg-orange-100/80",
        textColor: "text-orange-950"
    },
    {
        id: 3,
        title: "Insumos Estrella",
        description: "Papel secado rápido y tintas AQ",
        icon: <Sparkles size={28} className="text-purple-600 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-purple-200/50 group-hover:border-purple-400 shadow-purple-500/5 hover:shadow-purple-500/10",
        bgClass: "bg-purple-50/70 hover:bg-purple-100/80",
        textColor: "text-purple-950"
    },
    {
        id: 4,
        title: "Remeras & Textiles",
        description: "Spun, modal y gorras de red",
        icon: <Shirt size={28} className="text-teal-600 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-teal-200/50 group-hover:border-teal-400 shadow-teal-500/5 hover:shadow-teal-500/10",
        bgClass: "bg-teal-50/70 hover:bg-teal-100/80",
        textColor: "text-teal-950"
    },
    {
        id: 5,
        title: "Polímeros Sublimables",
        description: "Mates, polímero y plásticos",
        icon: <Layers size={28} className="text-emerald-600 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-emerald-200/50 group-hover:border-emerald-400 shadow-emerald-500/5 hover:shadow-emerald-500/10",
        bgClass: "bg-emerald-50/70 hover:bg-emerald-100/80",
        textColor: "text-emerald-950"
    },
    {
        id: 6,
        title: "Llaveros y Regalos",
        description: "Detalles que marcan la diferencia",
        icon: <Key size={28} className="text-sky-600 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-sky-200/50 group-hover:border-sky-400 shadow-sky-500/5 hover:shadow-sky-500/10",
        bgClass: "bg-sky-50/70 hover:bg-sky-100/80",
        textColor: "text-sky-950"
    },
    {
        id: 7,
        title: "Grabados & Especiales",
        description: "Tallados de alta precisión",
        icon: <Flame size={28} className="text-amber-600 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-amber-200/50 group-hover:border-amber-400 shadow-amber-500/5 hover:shadow-amber-500/10",
        bgClass: "bg-amber-50/70 hover:bg-amber-100/80",
        textColor: "text-amber-950"
    },
    {
        id: 8,
        title: "Ofertas & Outlet",
        description: "Combos con descuento especial",
        icon: <Percent size={28} className="text-rose-600 group-hover:scale-110 transition-transform duration-300" />,
        color: "border-rose-200/50 group-hover:border-rose-400 shadow-rose-500/5 hover:shadow-rose-500/10",
        bgClass: "bg-rose-50/70 hover:bg-rose-100/80",
        textColor: "text-rose-950"
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
                    <h2 className="text-3xl md:text-5xl font-brizel text-center mb-4 text-gray-900 drop-shadow-sm uppercase tracking-wide">
                        Lo Más <span className="text-primary">Buscado</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base font-medium text-center max-w-md">
                        Explorá nuestras categorías principales de insumos y personalizados destacados.
                    </p>
                    <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {categories.map((cat, index) => (
                    <FadeIn key={cat.id} delay={index * 0.05} direction="up" className="h-full">
                        <Link href="/products" className="block h-full group">
                            <div className={`h-full p-5 md:p-6 rounded-2xl border transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-[0_12px_30px_rgba(113,0,122,0.06)] ${cat.color} ${cat.bgClass}`}>
                                <div className="mb-4">
                                    {cat.icon}
                                </div>
                                <div>
                                    <h3 className={`text-base md:text-lg font-black ${cat.textColor} mb-1 group-hover:translate-x-1 transition-transform duration-300`}>
                                        {cat.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 font-medium">
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
