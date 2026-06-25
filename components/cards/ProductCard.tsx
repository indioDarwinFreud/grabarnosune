"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Ruler } from "lucide-react";
import { siteConfig } from "@/config";
import type { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    /** Delay para la animación FadeIn (opcional) */
    delay?: number;
    /** Función para manejar el click en la imagen (ej: zoom modal) */
    onImageClick?: (image: string) => void;
}

/**
 * ProductCard — Tarjeta de producto unificada
 * Se utiliza tanto en la Home (BestSellers) como en el catálogo (/products).
 * Centraliza el diseño, colores y lógica de contacto por WhatsApp.
 */
export default function ProductCard({ product, onImageClick }: ProductCardProps) {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=Hola, me interesa el producto: ${encodeURIComponent(product.title)}`;

    return (
        <Card
            className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-500 group shadow-md hover:shadow-lg flex flex-col h-full hover:-translate-y-2 cursor-pointer relative backdrop-blur-md"
            style={{
                backgroundColor: siteConfig.theme.backgroundCard,
                backgroundImage: `url(${siteConfig.theme.cardImage})`,
                backgroundSize: siteConfig.theme.cardImage.startsWith('data:') ? 'auto' : 'cover',
                backgroundRepeat: 'repeat',
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Contenedor de Imagen */}
            <div
                className="h-64 relative overflow-hidden bg-neutral-200 group/img"
                onClick={() => onImageClick?.(product.image)}
            >
                {/* Sombra interna suave */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-10 pointer-events-none" />

                <Image
                    src={product.image}
                    alt={product.title}
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

                {/* Badge de Precio */}
                {product.price && (
                    <div className="absolute top-4 right-4 z-20">
                        <span
                            className="text-neutral-900 text-xs font-black px-3 py-1.5 rounded-full shadow-lg tracking-wide bg-white/95 border border-primary/30"
                        >
                            {product.price}
                        </span>
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
                    {product.location && (
                        <p
                            className="text-xs font-semibold uppercase tracking-widest mt-1"
                            style={{ color: siteConfig.theme.textColors.cardMuted }}
                        >
                            {product.location}
                        </p>
                    )}
                </div>

                <p
                    className="text-sm mb-6 flex-grow leading-relaxed font-medium"
                    style={{ color: siteConfig.theme.textColors.cardBody }}
                >
                    {product.description}
                </p>

                {/* Footer de Tarjeta / Botón */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                    >
                        <Button
                            className="w-full transition-all duration-300 h-12 font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
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
                </div>
            </div>
        </Card>
    );
}
