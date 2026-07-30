"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Ruler, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config";
import type { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    onImageClick?: (image: string) => void;
    onGuideClick?: (slug: string) => void;
}

export default function ProductCard({ product, onImageClick, onGuideClick }: ProductCardProps) {
    const [selectedVariantIndex, setSelectedVariantIndex] = useState<number | null>(null);

    // Construir galería de imágenes (Imagen principal + Imágenes de variantes sin duplicados)
    const galleryImages = [
        product.image,
        ...(product.variants?.map((v) => v.image).filter((img) => img !== product.image) || []),
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
        setSelectedVariantIndex(null);
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
        setSelectedVariantIndex(null);
    };

    const selectedVariant = selectedVariantIndex !== null && product.variants ? product.variants[selectedVariantIndex] : null;

    const displayImage = selectedVariant ? selectedVariant.image : galleryImages[currentImageIndex];
    const displayTitle = selectedVariant ? `${product.title} (${selectedVariant.colorName})` : product.title;
    const displayPrice = selectedVariant && selectedVariant.price !== undefined && selectedVariant.price !== null ? selectedVariant.price : product.price;

    const displayPriceText = displayPrice 
        ? ` ($${typeof displayPrice === 'number' ? displayPrice.toLocaleString('es-AR') : displayPrice})` 
        : '';

    const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=Hola, me interesa el producto: ${encodeURIComponent(displayTitle + displayPriceText)}`;

    return (
        <Card
            className="overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 group shadow-sm hover:shadow-[0_20px_45px_rgba(113,0,122,0.08)] flex flex-col h-full hover:-translate-y-2 cursor-pointer relative backdrop-blur-md rounded-2xl"
            style={{
                backgroundColor: siteConfig.theme.backgroundCard,
                backgroundImage: `url("${siteConfig.theme.cardImage}")`,
                backgroundSize: siteConfig.theme.cardImage.startsWith('data:') ? 'auto' : 'cover',
                backgroundRepeat: 'repeat',
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Contenedor de Imagen con Flechas de Navegación */}
            <div
                className="h-64 relative overflow-hidden bg-neutral-200 group/img"
                onClick={() => onImageClick?.(displayImage)}
            >
                {/* Sombra interna suave */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-10 pointer-events-none" />

                <Image
                    src={displayImage}
                    alt={displayTitle}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Flechas de navegación (si hay más de 1 imagen) */}
                {galleryImages.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all duration-200 shadow-md border border-white/20 hover:scale-110"
                            title="Imagen anterior"
                            type="button"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all duration-200 shadow-md border border-white/20 hover:scale-110"
                            title="Siguiente imagen"
                            type="button"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Indicador de fotos (Puntos/Dots) */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                            {galleryImages.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`block rounded-full transition-all duration-300 ${
                                        (selectedVariantIndex === null && currentImageIndex === idx) ||
                                        (selectedVariantIndex !== null && product.variants?.[selectedVariantIndex]?.image === galleryImages[idx])
                                            ? "w-4 h-1.5 bg-white"
                                            : "w-1.5 h-1.5 bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Overlay de Zoom (solo visible si hay onImageClick y en hover sobre la foto) */}
                {onImageClick && (
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none">
                        <div className="flex items-center gap-2 text-white font-bold text-xs bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
                            <Ruler size={14} /> Ampliar Imagen
                        </div>
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-grow relative z-20">
                <div className="mb-2">
                    <h3
                        className="text-xl font-bold transition-colors"
                        style={{ color: siteConfig.theme.textColors.cardTitle }}
                    >
                        {product.title}
                    </h3>
                    <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                        {product.location && (
                            <p
                                className="text-xs font-semibold uppercase tracking-widest"
                                style={{ color: siteConfig.theme.textColors.cardMuted }}
                            >
                                {product.location}
                            </p>
                        )}
                        {displayPrice && (
                            <span
                                className="text-lg font-black tracking-tight"
                                style={{ color: siteConfig.theme.primaryColor }}
                            >
                                {typeof displayPrice === 'number'
                                    ? `$${displayPrice.toLocaleString('es-AR')}`
                                    : displayPrice}
                            </span>
                        )}
                    </div>
                </div>

                <p
                    className="text-sm mb-5 mt-2 flex-grow leading-relaxed font-medium"
                    style={{ color: siteConfig.theme.textColors.cardBody }}
                >
                    {product.description}
                </p>

                {/* Selección de Variantes elegante / limpia */}
                {product.variants && product.variants.length > 0 && (
                    <div className="mb-5 pt-3 border-t border-gray-100/80" onClick={(e) => e.stopPropagation()}>
                        <span
                            className="text-xs font-bold uppercase tracking-wider block mb-2.5"
                            style={{ color: siteConfig.theme.textColors.cardMuted }}
                        >
                            Opción / Variante:
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {/* Botón Principal (Todas/Ver todo) */}
                            <button
                                onClick={() => {
                                    setSelectedVariantIndex(null);
                                    setCurrentImageIndex(0);
                                }}
                                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 border ${
                                    selectedVariantIndex === null
                                        ? "bg-primary text-white border-primary shadow-sm"
                                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                                }`}
                                type="button"
                            >
                                Principal
                            </button>

                            {/* Opciones por variantes */}
                            {product.variants.map((variant, idx) => {
                                const isSelected = selectedVariantIndex === idx;
                                const isColorCode = variant.colorCode?.startsWith('#');

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setSelectedVariantIndex(idx);
                                            const imgIdx = galleryImages.indexOf(variant.image);
                                            if (imgIdx !== -1) setCurrentImageIndex(imgIdx);
                                        }}
                                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 border ${
                                            isSelected
                                                ? "bg-primary text-white border-primary shadow-sm"
                                                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                        }`}
                                        type="button"
                                    >
                                        {isColorCode && (
                                            <span
                                                className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                                                style={{ backgroundColor: variant.colorCode }}
                                            />
                                        )}
                                        <span>{variant.colorName}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Footer de Tarjeta / Botón WhatsApp */}
                <div className="mt-auto pt-4 border-t border-gray-100 space-y-2">
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                    >
                        <Button
                            className="w-full transition-all duration-300 h-11 font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                            style={{
                                background: siteConfig.theme.backgroundMain,
                                color: siteConfig.theme.primaryColor,
                                border: `1px solid ${siteConfig.theme.primaryColor}30`,
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = siteConfig.theme.primaryColor;
                                e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = siteConfig.theme.backgroundMain;
                                e.currentTarget.style.color = siteConfig.theme.primaryColor;
                            }}
                        >
                            <MessageCircle size={18} />
                            Pedir por WhatsApp
                        </Button>
                    </Link>

                    {product.guideSlug && onGuideClick && (
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                onGuideClick(product.guideSlug!);
                            }}
                            className="w-full transition-all duration-300 h-10 text-xs font-bold flex items-center justify-center gap-2 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary border border-primary/15 hover:border-primary/30"
                            type="button"
                        >
                            <BookOpen size={14} />
                            Ver Guía de Uso / Tutorial
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
}
