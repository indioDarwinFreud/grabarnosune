"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Ruler, BookOpen } from "lucide-react";
import { siteConfig } from "@/config";
import type { Product, ProductVariant } from "@/types";

interface ProductCardProps {
    product: Product;
    onImageClick?: (image: string) => void;
    onGuideClick?: (slug: string) => void;
}

/**
 * ProductCard — Tarjeta de producto unificada
 * Se utiliza tanto en la Home (BestSellers) como en el catálogo (/products).
 * Centraliza el diseño, colores y lógica de contacto por WhatsApp.
 */
export default function ProductCard({ product, onImageClick, onGuideClick }: ProductCardProps) {
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

    // Propiedades dinámicas basadas en la variante seleccionada
    const displayImage = selectedVariant ? selectedVariant.image : product.image;
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
            {/* Contenedor de Imagen */}
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
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay de Zoom (solo visible si hay onImageClick) */}
                {onImageClick && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <div className="flex items-center gap-2 text-white font-bold text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <Ruler size={16} /> Ver Detalle
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
                    className="text-sm mb-6 mt-2 flex-grow leading-relaxed font-medium"
                    style={{ color: siteConfig.theme.textColors.cardBody }}
                >
                    {product.description}
                </p>

                {/* Variaciones de color */}
                {product.variants && product.variants.length > 0 && (
                    <div className="mb-6" onClick={(e) => e.stopPropagation()}>
                        <span
                            className="text-xs font-bold uppercase tracking-wider block mb-2"
                            style={{ color: siteConfig.theme.textColors.cardMuted }}
                        >
                            Color: <span className="font-black" style={{ color: siteConfig.theme.primaryColor }}>{selectedVariant ? selectedVariant.colorName : "Todos"}</span>
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                            {/* Opción por defecto (Todos) */}
                            <button
                                onClick={() => setSelectedVariant(null)}
                                className={`w-7 h-7 rounded-full transition-all duration-300 relative ${
                                    selectedVariant === null
                                        ? "ring-2 ring-primary ring-offset-2 scale-110"
                                        : "hover:scale-105 opacity-80 hover:opacity-100"
                                }`}
                                style={{
                                    background: "conic-gradient(from 0deg, #ef4444, #eab308, #22c55e, #3b82f6, #a855f7, #ef4444)",
                                    outline: "none"
                                }}
                                title="Ver todos los colores"
                                type="button"
                            />

                            {/* Variantes individuales */}
                            {product.variants.map((variant, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedVariant(variant)}
                                    className={`w-7 h-7 rounded-full transition-all duration-300 border border-gray-300/50 relative ${
                                        selectedVariant === variant
                                            ? "ring-2 ring-primary ring-offset-2 scale-110"
                                            : "hover:scale-105 opacity-80 hover:opacity-100"
                                    }`}
                                    style={{
                                        background: variant.colorCode,
                                        outline: "none"
                                    }}
                                    title={variant.colorName}
                                    type="button"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer de Tarjeta / Botón */}
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
                                e.currentTarget.style.color = '#ffffff'; // Blanco para contraste sobre el primario oscuro
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
