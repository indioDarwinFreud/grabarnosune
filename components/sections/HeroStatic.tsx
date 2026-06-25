import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { siteConfig } from "@/config";
import { NeonButton } from "@/components/ui/NeonButton";

/**
 * HeroStatic — Sección Hero principal de la Home
 * Muestra el nombre del sitio, descripción y un botón de CTA a /contact.
 * Reemplaza al antiguo HeroCarousel para una carga más rápida y limpia.
 *
 * Datos: `siteConfig.name` y `siteConfig.description` de config.ts.
 */
export default function HeroStatic() {

    return (
        <div 
            className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-transparent"
            data-imperia-id="HeroStatic__container__0"
            data-imperia-path="components/sections/HeroStatic.tsx"
        >
            {/* The global background gradient now handles the overall color */}

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
                <FadeIn delay={0.2} direction="up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-[#C0C0C0] drop-shadow-sm">
                        Bienvenidos a {siteConfig.name}
                    </h1>
                </FadeIn>



                <FadeIn delay={0.4} direction="up">
                    <p className="text-lg md:text-2xl text-neutral-300 mb-12 font-medium racking-wide">
                        {siteConfig.description}
                    </p>
                </FadeIn>

                <FadeIn delay={0.6} direction="up" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/contact" className="w-full sm:w-auto">
                        <NeonButton className="py-4">
                            CONSULTAR PRODUCTO
                        </NeonButton>
                    </Link>
                </FadeIn>
            </div>


        </div>
    );
}
