import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <div 
            className="w-full max-w-7xl mx-auto px-4 py-20"
            data-imperia-id="AboutPreview__container__0"
            data-imperia-path="components/sections/AboutPreview.tsx"
        >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Image Section - Premium Glass Card */}
                <FadeIn delay={0.2} direction="right" className="w-full lg:w-1/2 relative">
                    <div
                        className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-primary/20 backdrop-blur-md"
                        style={{
                            backgroundColor: siteConfig.theme.backgroundCard,
                            backgroundImage: `url(${siteConfig.theme.cardImage})`,
                            backgroundSize: 'cover',
                            backgroundBlendMode: 'overlay'
                        }}
                    >
                        {/* Interactive overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
                        <img
                            src="/assets/grabar_about.png"
                            alt="Taller Grabar Nos Une"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Decorative Badge */}
                        <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md border border-gray-200 text-gray-900 p-4 rounded-xl shadow-lg">
                            <p className="font-black text-2xl text-primary">100%</p>
                            <p className="text-sm text-gray-700 font-medium">Garantía Creativa</p>
                        </div>
                    </div>
                    {/* Decorative back glow */}
                    <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />
                </FadeIn>

                {/* Text Content Section */}
                <FadeIn delay={0.4} direction="left" className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-primary" />
                        <p className="text-primary font-black tracking-widest uppercase text-sm">
                            El arte de personalizar
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 drop-shadow-md">
                        Creamos recuerdos que <br /> <span className="text-primary">perduran en el tiempo.</span>
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-lg">
                        En <span className="font-bold text-gray-950">{siteConfig.name}</span>, acompañamos a sublimadores y emprendedores creativos con insumos de primer nivel y soluciones de personalización uniques. Nuestra misión es potenciar tu pasión mediante herramientas confiables y terminaciones de excelencia.
                    </p>

                    <Link href="/about" className="group flex items-center gap-4 w-fit">
                        <span className="text-gray-900 font-bold text-lg group-hover:text-primary transition-colors">
                            Conocé nuestra historia
                        </span>
                        <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shadow-md group-hover:shadow-lg">
                            <ArrowRight className="text-primary group-hover:text-white transition-colors" />
                        </div>
                    </Link>
                </FadeIn>

            </div>
        </div>
    );
}
