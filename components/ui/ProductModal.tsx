"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, MessageCircle, Tag, FileDown } from "lucide-react";
import { siteConfig } from "@/config";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const [mounted, setMounted] = useState(false);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState<number | null>(null);

    // Gallery images: main image + unique variant images
    const galleryImages = [
        product.image,
        ...(product.variants?.map((v) => v.image).filter((img) => img !== product.image) || []),
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Mount state and Lock body scroll
    useEffect(() => {
        setMounted(true);
        const scrollY = window.scrollY;
        const body = document.body;
        const originalOverflow = body.style.overflow;
        const originalPosition = body.style.position;
        const originalTop = body.style.top;
        const originalWidth = body.style.width;
        const originalHeight = body.style.height;

        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.width = "100%";
        body.style.height = "100%";

        return () => {
            body.style.overflow = originalOverflow;
            body.style.position = originalPosition;
            body.style.top = originalTop;
            body.style.width = originalWidth;
            body.style.height = originalHeight;
            window.scrollTo(0, scrollY);
        };
    }, []);

    const selectedVariant =
        selectedVariantIndex !== null && product.variants ? product.variants[selectedVariantIndex] : null;

    const displayImage = selectedVariant ? selectedVariant.image : galleryImages[currentImageIndex];
    const displayTitle = selectedVariant ? `${product.title} (${selectedVariant.colorName})` : product.title;
    const displayPrice =
        selectedVariant && selectedVariant.price !== undefined && selectedVariant.price !== null
            ? selectedVariant.price
            : product.price;

    const displayPriceText = displayPrice
        ? ` ($${typeof displayPrice === "number" ? displayPrice.toLocaleString("es-AR") : displayPrice})`
        : "";

    const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=Hola, me interesa el producto: ${encodeURIComponent(displayTitle + displayPriceText)}`;

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
        setSelectedVariantIndex(null);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
        setSelectedVariantIndex(null);
    };

    const isDiagram =
        displayImage.toLowerCase().includes("acero") ||
        displayImage.toLowerCase().includes("especificacion") ||
        displayImage.toLowerCase().includes("placa") ||
        displayImage.toLowerCase().includes("tabla") ||
        displayImage.toLowerCase().includes("medidas");

    if (!mounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 md:p-6 transition-all duration-300 animate-in fade-in"
            onClick={onClose}
        >
            <div
                className="relative max-w-5xl w-full max-h-[92vh] overflow-hidden rounded-3xl shadow-2xl border flex flex-col md:flex-row animate-in zoom-in-95 duration-200"
                style={{
                    backgroundColor: "var(--card-bg, #ffffff)",
                    borderColor: "var(--card-muted, rgba(0,0,0,0.1))",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón de Cierre */}
                <button
                    className="absolute top-3 right-3 z-40 p-2 text-gray-600 hover:text-gray-900 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-md transition-all duration-200 border border-black/10"
                    onClick={onClose}
                    title="Cerrar"
                    type="button"
                >
                    <X size={22} />
                </button>

                {/* COLUMNA IZQUIERDA: Visor de Imagen y Galería */}
                <div className="w-full md:w-1/2 bg-neutral-100/90 flex flex-col justify-between p-4 md:p-6 relative border-b md:border-b-0 md:border-r border-gray-200/70 shrink-0">
                    {/* Badge */}
                    {product.badge && (
                        <div className="absolute top-4 left-4 z-20 pointer-events-none">
                            <span 
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black text-white shadow-md uppercase tracking-wider"
                                style={{ backgroundColor: siteConfig.theme.primaryColor }}
                            >
                                <Tag size={12} className="text-purple-200 shrink-0" />
                                {product.badge}
                            </span>
                        </div>
                    )}

                    {/* Imagen Principal */}
                    <div className="relative w-full h-56 sm:h-72 md:h-[420px] flex items-center justify-center rounded-2xl overflow-hidden bg-white shadow-inner border border-gray-100">
                        <Image
                            src={displayImage}
                            alt={displayTitle}
                            fill
                            className={`transition-all duration-500 ${
                                isDiagram ? "object-contain p-2" : "object-contain p-4"
                            }`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />

                        {/* Flechas de navegación */}
                        {galleryImages.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all shadow-md hover:scale-110"
                                    title="Imagen anterior"
                                    type="button"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all shadow-md hover:scale-110"
                                    title="Siguiente imagen"
                                    type="button"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Miniaturas de la galería */}
                    {galleryImages.length > 1 && (
                        <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 max-w-full custom-scrollbar">
                            {galleryImages.map((img, idx) => {
                                const isCurrent = displayImage === img;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            const variantIndex = product.variants?.findIndex((v) => v.image === img);
                                            if (variantIndex !== undefined && variantIndex !== -1) {
                                                setSelectedVariantIndex(variantIndex);
                                            } else {
                                                setSelectedVariantIndex(null);
                                                setCurrentImageIndex(idx);
                                            }
                                        }}
                                        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-200 bg-white ${
                                            isCurrent
                                                ? "border-primary shadow-md scale-105"
                                                : "border-gray-200 opacity-70 hover:opacity-100"
                                        }`}
                                        style={isCurrent ? { borderColor: siteConfig.theme.primaryColor } : undefined}
                                        type="button"
                                    >
                                        <Image
                                            src={img}
                                            alt={`Foto ${idx + 1}`}
                                            fill
                                            className="object-contain p-1"
                                            sizes="60px"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* COLUMNA DERECHA: Datos, Variantes y Ficha Técnica Completa */}
                <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[92vh] custom-scrollbar pb-6">
                    {/* Categoría / Subtítulo */}
                    {product.location && (
                        <span 
                            className="text-xs font-bold uppercase tracking-widest mb-1"
                            style={{ color: siteConfig.theme.primaryColor }}
                        >
                            {product.location}
                        </span>
                    )}

                    {/* Título Principal */}
                    <h2
                        className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2"
                        style={{ color: "var(--card-title, #111827)" }}
                    >
                        {product.title}
                    </h2>

                    {/* Precio */}
                    {displayPrice && (
                        <div className="flex items-baseline gap-2 mb-4">
                            <span 
                                className="text-3xl font-black"
                                style={{ color: siteConfig.theme.primaryColor }}
                            >
                                {typeof displayPrice === "number"
                                    ? `$${displayPrice.toLocaleString("es-AR")}`
                                    : displayPrice}
                            </span>
                            <span className="text-xs text-gray-500 font-semibold">Precio por unidad</span>
                        </div>
                    )}

                    {/* Selector de Variantes / Colores */}
                    {product.variants && product.variants.length > 0 && (
                        <div className="mb-5 pb-4 border-b border-gray-200/60">
                            <label
                                className="block text-xs font-extrabold uppercase tracking-wider mb-2.5"
                                style={{ color: "var(--card-title, #111827)" }}
                            >
                                Seleccionar Color / Opción:
                            </label>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => {
                                        setSelectedVariantIndex(null);
                                        setCurrentImageIndex(0);
                                    }}
                                    className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 border ${
                                        selectedVariantIndex === null
                                            ? "text-white shadow-sm"
                                            : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                                    }`}
                                    style={
                                        selectedVariantIndex === null
                                            ? { backgroundColor: siteConfig.theme.primaryColor, borderColor: siteConfig.theme.primaryColor }
                                            : undefined
                                    }
                                    type="button"
                                >
                                    Principal
                                </button>
                                {product.variants.map((v, idx) => {
                                    const isSelected = selectedVariantIndex === idx;
                                    const isColorCode = v.colorCode?.startsWith("#");

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedVariantIndex(idx)}
                                            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 border ${
                                                isSelected
                                                    ? "text-white shadow-sm scale-105"
                                                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                                            }`}
                                            style={
                                                isSelected
                                                    ? { backgroundColor: siteConfig.theme.primaryColor, borderColor: siteConfig.theme.primaryColor }
                                                    : undefined
                                            }
                                            type="button"
                                        >
                                            {isColorCode && (
                                                <span
                                                    className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                                                    style={{ backgroundColor: v.colorCode }}
                                                />
                                            )}
                                            <span>{v.colorName}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Descripción y Ficha Técnica Detallada */}
                    <div className="space-y-4 flex-grow mb-6">
                        {/* Resumen */}
                        {product.description && (
                            <p
                                className="text-sm font-medium leading-relaxed"
                                style={{ color: "var(--card-body, #374151)" }}
                            >
                                {product.description}
                            </p>
                        )}

                        {/* Detalles / Ficha Técnica Extendida */}
                        {product.details && (
                            <div
                                className="p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium bg-neutral-50/80 border-gray-200/70 text-gray-700 shadow-sm"
                            >
                                {product.details}
                            </div>
                        )}

                        {/* Plantillas y Archivos Descargables */}
                        {product.downloadableTemplates && product.downloadableTemplates.length > 0 && (
                            <div className="p-4 rounded-2xl border bg-purple-50/60 border-purple-200/80 shadow-sm">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div 
                                        className="w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                                        style={{ backgroundColor: siteConfig.theme.primaryColor }}
                                    >
                                        <FileDown size={17} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs sm:text-sm font-extrabold text-gray-900">
                                            Plantillas de Diseño Descargables
                                        </h4>
                                        <p className="text-[11px] text-gray-500 font-medium">
                                            Descargá los archivos PDF listos para imprimir y estampar
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {product.downloadableTemplates.map((template, idx) => (
                                        <a
                                            key={idx}
                                            href={template.fileUrl}
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white hover:bg-purple-100/50 border border-purple-200/70 text-xs font-bold text-gray-800 transition-all duration-200 group shadow-2xs hover:border-purple-300"
                                        >
                                            <span className="truncate group-hover:text-purple-900">{template.title}</span>
                                            <span
                                                className="p-1.5 rounded-lg bg-purple-50 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors shrink-0"
                                                title="Descargar PDF"
                                            >
                                                <FileDown size={14} />
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Botón WhatsApp de Acción Directa (Color Lila/Púrpura de la Marca) */}
                    <div className="sticky bottom-0 pt-3 bg-gradient-to-t from-white via-white to-transparent pb-1">
                        <Link
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block"
                        >
                            <Button
                                className="w-full h-12 text-sm sm:text-base font-bold flex items-center justify-center gap-2 rounded-2xl shadow-lg hover:shadow-xl transition-all !text-white border border-white/20 hover:opacity-95"
                                style={{
                                    backgroundColor: siteConfig.theme.primaryColor,
                                    color: '#ffffff',
                                }}
                            >
                                <MessageCircle size={20} className="text-white" />
                                Consultar / Pedir por WhatsApp
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
