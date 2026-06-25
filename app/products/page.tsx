"use client"

import { useState, Suspense, useMemo } from "react";
import { productsData } from "@/data";
import { Search as SearchIcon, X } from "lucide-react";
import Image from "next/image";

import { useSearchParams } from "next/navigation";
import FadeIn from "@/components/ui/FadeIn";
import ProductCard from "@/components/cards/ProductCard";

function ProductsContent() {
    useSearchParams(); // Mantener para compatibilidad con Suspense boundary
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("Todas");

    const categories = useMemo(() => {
        const cats = [...new Set(productsData.map(p => p.category).filter(Boolean) as string[])];
        return ["Todas", ...cats];
    }, []);

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "Todas" || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

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
                            />
                        </FadeIn>
                    ))}
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
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary">Cargando productos...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
