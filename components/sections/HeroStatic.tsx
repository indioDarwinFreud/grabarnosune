"use client";

import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config";
import { useEffect, useState, useId } from "react";

interface RollerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    primary?: boolean;
    className?: string;
}

// Componente de Botón Pintado con Rodillo usando filtros SVG dinámicos
function RollerButton({ children, primary = true, className = "", ...props }: RollerButtonProps) {
    const uid = useId();
    const filterId = `roller-stroke-${uid}-${primary ? 'pri' : 'sec'}`;
    return (
        <button
            className={`relative py-2.5 px-6 font-black text-xs tracking-widest uppercase transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] group flex items-center justify-center gap-2 select-none ${primary ? "text-white" : "text-[#71007A]"
                } ${className}`}
            {...props}
        >
            <svg className={`absolute inset-0 w-full h-full -z-10 pointer-events-none ${primary ? "text-[#71007A]" : "text-[#71007A]"}`} preserveAspectRatio="none">
                <defs>
                    <filter id={filterId}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
                {primary ? (
                    <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="6" fill="currentColor" filter={`url(#${filterId})`} className="transition-all duration-300 group-hover:text-[#55005C]" />
                ) : (
                    <rect x="3" y="3" width="calc(100% - 6px)" height="calc(100% - 6px)" rx="6" fill="none" stroke="currentColor" strokeWidth="3" filter={`url(#${filterId})`} className="transition-all duration-300 group-hover:bg-[#71007A]/5" />
                )}
            </svg>
            <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        </button>
    );
}

export default function HeroStatic() {
    const [scrolled, setScrolled] = useState(false);
    const heroUid = useId();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center py-12 md:py-20 overflow-hidden"

        >
            {/* Capa de fondo decorativa: Rastro de rodillo de prueba en el borde derecho (look imprenta) */}
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-primary/[0.01] border-l border-primary/5 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grabar nos une palabra repetida textura.png')] bg-repeat-y bg-contain opacity-[0.03]" />
            </div>

            {/* Iluminación radial suave de fondo */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#71007A]/5 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#71007A]/3 blur-[100px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

                {/* ── LADO IZQUIERDO: Logo Integrado con Efecto Sello ── */}
                <div
                    className={`w-full lg:w-3/5 flex items-center justify-center transition-all duration-700 ease-in-out ${scrolled
                            ? "opacity-0 scale-90 -translate-y-6 pointer-events-none"
                            : "opacity-100 scale-100 translate-y-0"
                        }`}
                >
                    <div className="relative group select-none w-full flex items-center justify-center">
                        {/* Mancha/Splash de pintura púrpura artística detrás del logotipo */}
                        <svg className="absolute inset-0 w-full h-full text-[#71007A]/5 pointer-events-none -z-10 scale-110" viewBox="0 0 100 50" preserveAspectRatio="none">
                            <defs>
                                <filter id={`splash-${heroUid}`}>
                                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
                                </filter>
                            </defs>
                            <path d="M10,25 C20,10 40,5 60,12 C80,18 90,30 85,42 C80,48 50,45 30,48 C15,50 5,40 10,25 Z" fill="currentColor" filter={`url(#splash-${heroUid})`} />
                        </svg>

                        {/* Logotipo principal */}
                        <Image
                            src={siteConfig.logo.main}
                            alt={`Logo ${siteConfig.name}`}
                            width={1200}
                            height={600}
                            priority
                            className="relative w-full h-auto drop-shadow-[0_4px_24px_rgba(113,0,122,0.18)] mix-blend-multiply transition-transform duration-500 hover:scale-[1.04]"
                        />
                    </div>
                </div>

                {/* ── LADO DERECHO: Textos y Botones con Estilo Pintura ── */}
                <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left gap-2 md:gap-3">

                    {/* Tag de categoría artesanal */}
                  <FadeIn delay={0.1} direction="left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#71007A]/5 border border-[#71007A]/15 rounded-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#71007A]" />
                            <span className="text-[#71007A] font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                                Productos para sublimar listos para personalizar
                            </span>
                        </div>
                    </FadeIn>

                    {/* Título Principal */}
                    <FadeIn delay={0.2} direction="left">
                        <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-brizel text-gray-900 leading-[1.1] uppercase tracking-wide">
                            Insumos para{" "}
                            <span className="relative inline-block text-gray-600 whitespace-nowrap">
                                estampar y grabar
                                {/* Línea subrayada pintada a mano */}
                                <svg className="absolute -bottom-1 left-0 w-full h-2 text-gray-600" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <defs>
                                        <filter id={`underline-${heroUid}`}>
                                            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                                        </filter>
                                    </defs>
                                    <path d="M2,5 Q50,2 98,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" filter={`url(#underline-${heroUid})`} />
                                </svg>
                            </span>{" "}
                           
                        </h1>
                    </FadeIn>

                    {/* Descripción corta */}
                    <FadeIn delay={0.4} direction="left">
                        <p className="text-sm md:text-base text-gray-700 leading-snug font-medium max-w-lg">
                            {siteConfig.description}
                        </p>
                    </FadeIn>

                    {/* Separador de composición */}
                    <div className="w-16 h-[1.5px] bg-[#71007A]/15 rounded-full hidden lg:block" />

                    {/* Botones de acción pintados */}
                    <FadeIn delay={0.6} direction="left" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <RollerButton primary={true} className="w-full sm:w-auto min-w-[220px]">
                                CONSULTAR PRODUCTO
                            </RollerButton>
                        </Link>
                        <Link href="/products" className="w-full sm:w-auto">
                            <RollerButton primary={false} className="w-full sm:w-auto min-w-[200px]">
                                VER CATÁLOGO
                            </RollerButton>
                        </Link>
                    </FadeIn>
                </div>

            </div>
        </div>
    );
}
