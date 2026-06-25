import { Card } from "@/components/ui/card";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config";

/**
 * CategoryBanners — Bloques visuales de navegación por colecciones
 * Muestra 2 banners grandes tipo "categoría" que enlazan a /products
 */
export default function CategoryBanners() {
    return (
        <div 
            className="w-full max-w-7xl mx-auto px-4 mt-20"
            data-imperia-id="CategoryBanners__container__0"
            data-imperia-path="components/sections/CategoryBanners.tsx"
        >
            <FadeIn>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900 drop-shadow-sm">
                        Nuestras <span className="text-primary">Líneas de Trabajo</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary rounded-full"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Categoría 1: Papeles e Insumos */}
                <FadeIn delay={0.2} direction="up" className="lg:col-span-2 h-full">
                    <Link href="/products">
                        <Card
                            className="relative overflow-hidden group h-64 md:h-80 transition-all duration-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-xl border-primary/20 backdrop-blur-md"
                            style={{
                                backgroundColor: siteConfig.theme.backgroundCard,
                                backgroundImage: `url(${siteConfig.theme.cardImage})`,
                                backgroundSize: 'cover',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            <img
                                src="/assets/banner_papeles.png"
                                alt="Insumos para sublimación"
                                className="absolute right-0 top-0 w-full md:w-1/2 h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 md:opacity-85"
                                style={{ maskImage: "linear-gradient(to right, transparent, black 80%)" }}
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 w-full md:w-2/3 bg-gradient-to-t from-white via-white/80 to-transparent md:bg-none">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="text-primary text-xs font-bold tracking-wider uppercase mb-1 block">Alta Transferencia</span>
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">Insumos para Sublimación</h3>
                                        <p className="text-gray-600 font-medium max-w-sm hidden md:block">Papeles de secado rápido, tintas importadas AQ de alta densidad y consumibles profesionales para tu taller.</p>
                                    </div>
                                    <div
                                        className="p-3 rounded-full shadow-md group-hover:scale-110 transition-transform hidden md:block border border-gray-200 bg-white"
                                    >
                                        <ArrowUpRight className="text-primary" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </FadeIn>

                {/* Categoría 2: Sustratos e Importados */}
                <FadeIn delay={0.4} direction="up" className="h-full">
                    <Link href="/products">
                        <Card
                            className="relative overflow-hidden group h-64 md:h-80 transition-all duration-500 rounded-2xl cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-primary/20 backdrop-blur-md"
                            style={{
                                backgroundColor: siteConfig.theme.backgroundCard,
                                backgroundImage: `url(${siteConfig.theme.cardImage})`,
                                backgroundSize: 'cover',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            <img
                                src="/assets/banner_sustratos.png"
                                alt="Sustratos e importados"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="text-primary text-xs font-bold tracking-wider uppercase mb-1 block">Listos para Estampar</span>
                                        <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">Tazas & Sustratos</h3>
                                        <p className="text-purple-200 text-sm font-medium hidden md:block mb-1">Cerámica Orca AAA, gorras trucker, textiles y polímeros de alta resistencia.</p>
                                    </div>
                                    <div
                                        className="p-2 rounded-full border border-white/10 group-hover:opacity-80 transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                        style={{ background: siteConfig.theme.backgroundMain }}
                                    >
                                        <ArrowUpRight className="text-white group-hover:text-white w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </FadeIn>
            </div>
        </div>
    );
}
