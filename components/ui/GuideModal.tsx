"use client"

import { useEffect } from "react";
import Image from "next/image";
import { X, Check, HelpCircle, FileText } from "lucide-react";
import { siteConfig } from "@/config";
import type { BlogPost } from "@/types";

interface GuideModalProps {
    guide: BlogPost;
    onClose: () => void;
}

export default function GuideModal({ guide, onClose }: GuideModalProps) {
    useEffect(() => {
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

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 backdrop-blur-md p-4 md:p-6 transition-all duration-300 animate-in fade-in"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto overscroll-contain rounded-3xl shadow-2xl border flex flex-col animate-in zoom-in-95 duration-200"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 backdrop-blur-md z-10 px-6 py-4 border-b flex items-center justify-between"
                    style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}>
                    <div className="flex items-center gap-3">
                        <FileText className="text-primary" size={24} />
                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                            {guide.category}
                        </span>
                    </div>
                    <button
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                        onClick={onClose}
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-8">
                    <div>
                        <h3 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3"
                            style={{ color: 'var(--card-title)' }}>
                            {guide.title}
                        </h3>
                        <p className="text-base leading-relaxed" style={{ color: 'var(--card-body)' }}>
                            {guide.excerpt}
                        </p>
                    </div>

                    {/* Main Grid: Steps & Visuals */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Steps List */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-2">
                                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                Paso a Paso
                            </h4>
                            {guide.steps && guide.steps.length > 0 ? (
                                <ol className="space-y-4">
                                    {guide.steps.map((step, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-extrabold">
                                                {idx + 1}
                                            </span>
                                            <p className="text-sm md:text-base pt-0.5 leading-relaxed font-sans"
                                                style={{ color: 'var(--card-body)' }}>
                                                {step}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                <p className="text-gray-500 text-sm italic">Cargando instrucciones...</p>
                            )}
                        </div>

                        {/* Media / Infographics */}
                        <div className="space-y-6">
                            {guide.infographicImage ? (
                                <div className="space-y-3">
                        <h4 className="text-lg font-bold flex items-center gap-2 border-b pb-2"
                            style={{ color: 'var(--card-title)', borderColor: 'var(--card-muted)' }}>
                                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                        Guía Visual
                                    </h4>
                                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-neutral-50 group">
                                        <Image
                                            src={guide.infographicImage}
                                            alt="Infografía del tutorial"
                                            fill
                                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-102"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 text-center italic font-sans">
                                        * Guardá esta imagen o hacé captura para tenerla a mano en tu taller.
                                    </p>
                                </div>
                            ) : (
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-neutral-100">
                                    <Image
                                        src={guide.image}
                                        alt={guide.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            )}

                            {/* Tips Box */}
                            {guide.tips && guide.tips.length > 0 && (
                                <div className="p-5 rounded-2xl border border-primary/10 space-y-3"
                                    style={{ backgroundColor: 'color-mix(in srgb, var(--card-bg), transparent 50%)' }}>
                                    <h5 className="text-sm font-bold text-primary flex items-center gap-2 uppercase tracking-wider">
                                        <HelpCircle size={16} />
                                        Tips & Recomendaciones
                                    </h5>
                                    <ul className="space-y-2">
                                        {guide.tips.map((tip, idx) => (
                                            <li key={idx} className="flex gap-2 items-start text-xs md:text-sm text-gray-600 font-sans">
                                                <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer / Call to action */}
                <div className="sticky bottom-0 px-6 py-5 pb-24 md:pb-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}>
                    <span className="text-xs font-sans" style={{ color: 'var(--card-muted)' }}>
                        ¿Dudas sobre los materiales? Te asesoramos por WhatsApp.
                    </span>
                    <a
                        href={`https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=${encodeURIComponent(
                            `Hola, estuve viendo la guía de "${guide.title}" en la web y quería consultarles sobre los materiales.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold text-center transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Consultar por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
