"use client"

import { useState, Suspense, useMemo, useEffect } from "react";
import { productsData, blogPosts } from "@/data";
import { Search as SearchIcon, X } from "lucide-react";
import Image from "next/image";

import { useSearchParams } from "next/navigation";
import FadeIn from "@/components/ui/FadeIn";
import ProductCard from "@/components/cards/ProductCard";
import GuideModal from "@/components/ui/GuideModal";
import type { BlogPost } from "@/types";

function ProductsContent() {
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("Todas");
    const [activeGuide, setActiveGuide] = useState<BlogPost | null>(null);

    const categories = useMemo(() => {
        const cats = [...new Set(productsData.map(p => p.category).filter(Boolean) as string[])];
        return ["Todas", ...cats];
    }, []);

    const queryCategory = searchParams.get("category");
    const querySearch = searchParams.get("search");

    useEffect(() => {
        if (queryCategory) {
            const matchedCat = categories.find(c => c.toLowerCase() === queryCategory.toLowerCase());
            if (matchedCat) {
                setActiveCategory(matchedCat);
            }
        } else {
            setActiveCategory("Todas");
        }
        if (querySearch !== null) {
            setSearchTerm(querySearch);
        } else {
            setSearchTerm("");
        }
    }, [queryCategory, querySearch, categories]);

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             (product.location && product.location.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = activeCategory === "Todas" || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const handleGuideClick = (slug: string) => {
        const guide = blogPosts.find(p => p.slug === slug) ?? null;
        setActiveGuide(guide);
    };

    return (
        <div className="min-h-screen relative">
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
                <FadeIn direction="down">
                    <div className="text-center mb-12 relative z-10 py-8">
                        <h1 className="text-5xl md:text-7xl font-brizel uppercase tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-gray-900 to-primary drop-shadow-sm">
                            Nuestros Productos
                        </h1>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto drop-shadow-sm font-sans">
                            Explorá nuestro catálogo de insumos para sublimación y regalos personalizados.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-2xl mx-auto p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-md">
                        <div className="flex-1 relative group">
                            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-hover:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Buscar insumos o personalizados..."
                                className="w-full bg-transparent border-none rounded-xl py-4 pl-12 pr-4 text-gray-900 focus:outline-none placeholder:text-gray-500 font-sans"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Filtros por categoría */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                                    activeCategory === cat
                                        ? "bg-primary text-white border-primary shadow-md"
                                        : "bg-white/60 text-gray-700 border-gray-200 hover:border-primary/50 hover:text-primary"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <FadeIn key={product.id} delay={index * 0.1} direction="up" className="h-full">
                            <ProductCard
                                product={product}
                                onImageClick={setSelectedImage}
                                onGuideClick={handleGuideClick}
                            />
                        </FadeIn>
                    ))}
                </div>

                {/* Section: Guías de Talles y Medidas */}
                <div className="mt-24 border-t border-gray-200/60 pt-16">
                    <FadeIn>
                        <div className="flex flex-col items-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-brizel text-center mb-4 text-gray-900 drop-shadow-sm uppercase tracking-wide">
                                Guías de <span className="text-primary">Talles & Medidas</span>
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base font-medium text-center max-w-md">
                                Hacé clic en cualquiera de nuestras fichas de medidas y telas para verlas en alta definición.
                            </p>
                            <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infoGuides.map((guide, idx) => (
                            <FadeIn key={guide.id} delay={idx * 0.05} direction="up" className="h-full">
                                <div 
                                    className="p-5 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-[0_10px_25px_rgba(113,0,122,0.04)] transition-all duration-300 flex flex-col justify-between group cursor-pointer bg-white/70 backdrop-blur-md"
                                    onClick={() => setSelectedImage(guide.image)}
                                >
                                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 bg-neutral-50/50 border border-gray-100 flex items-center justify-center p-2">
                                        <div className="relative w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500">
                                            <Image
                                                src={guide.image}
                                                alt={guide.title}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <span className="absolute top-2 left-2 bg-primary/10 text-primary text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                            {guide.category}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-gray-900 group-hover:text-primary transition-colors mb-1">
                                            {guide.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                                            {guide.description}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 transition-all duration-300 animate-in fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full h-full max-h-[90vh] flex items-center justify-center">
                        <button
                            className="absolute top-2 right-2 md:-top-12 md:right-0 z-50 p-2 bg-black/50 md:bg-transparent rounded-full md:rounded-none text-white md:text-white/50 hover:text-white hover:bg-black/70 md:hover:bg-transparent transition-all backdrop-blur-sm md:backdrop-blur-none"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Vista Previa"
                            fill
                            className="object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}

            {/* Guide Modal — opens from ProductCard "Ver Guía de Uso" button */}
            {activeGuide && (
                <GuideModal
                    guide={activeGuide}
                    onClose={() => setActiveGuide(null)}
                />
            )}
        </div>
    );
}

interface InfoGuide {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
}

const infoGuides: InfoGuide[] = [
    {
        id: 1,
        title: "Guía de Medidas (Remeras)",
        description: "Cómo medir una remera para elegir el talle correcto sin errores.",
        image: "/ComoTomarMedidasRemeras.png",
        category: "Talles"
    },
    {
        id: 2,
        title: "Tipos de Telas y Estampado",
        description: "Diferencias entre Spun y Modal para sublimar y personalizar.",
        image: "/TiposDeRemeras.png",
        category: "Telas"
    },
    {
        id: 3,
        title: "Catálogo e Hilados Textil",
        description: "Detalles y opciones de remeras listas para personalizar.",
        image: "/CatalogoRemeras.png",
        category: "Confección"
    },
    {
        id: 4,
        title: "Detalles de Cuello Estándar",
        description: "Información de costuras, hilados y tapacosturas de remeras.",
        image: "/TipoRemeraSublimarCuelloEstandar.png",
        category: "Calidad"
    },
    {
        id: 5,
        title: "Ficha de Telas para Sublimar",
        description: "Especificaciones de peso y composición de nuestras telas de remera.",
        image: "/TipoRemeraParaSublimar.png",
        category: "Materiales"
    },
    {
        id: 6,
        title: "Horarios y Ubicación de Retiro",
        description: "Consultá la dirección exacta del local y horarios de atención.",
        image: "/horario.png",
        category: "Contacto"
    }
];

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary">Cargando productos...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
