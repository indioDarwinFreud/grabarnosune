import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config";
import Image from "next/image";
import { Sparkles, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen relative bg-transparent">
            {/* Elementos decorativos de fondo muy sutiles */}
            <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-primary/3 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-36 pb-24">
                
                {/* Header Principal */}
                <FadeIn direction="down">
                    <div className="text-center mb-16 md:mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-md mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                                Conocenos más
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-brizel text-gray-900 drop-shadow-sm tracking-wide">
                            Quiénes Somos
                        </h1>
                        <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-4" />
                    </div>
                </FadeIn>

                {/* Contenido Split: Imagen a la izquierda, Texto y Pilares a la derecha */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    
                    {/* Columna Izquierda: Composición de imágenes artesanales */}
                    <div className="lg:col-span-5 flex justify-center items-center relative">
                        <FadeIn delay={0.2} direction="right" className="relative w-full max-w-[420px]">
                            {/* Imagen Principal: Taller/Personalizado */}
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-primary/10 bg-white/50 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-500 z-10">
                                <Image
                                    src="/assets/grabar_about.png"
                                    alt="Taller Grabar Nos Une"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>

                            {/* Imagen Secundaria: Taza Orca superpuesta, simulando un producto final listo */}
                            <div className="absolute -bottom-8 -right-6 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white rotate-[3deg] hover:rotate-0 transition-transform duration-500 z-20 hidden sm:block">
                                <Image
                                    src="/product/taza_orca.png"
                                    alt="Personalizados Taza Orca"
                                    fill
                                    className="object-cover"
                                    sizes="25vw"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Columna Derecha: Historia y Pilares */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <FadeIn delay={0.4} direction="left">
                            <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-primary/10 shadow-[0_15px_40px_rgba(113,0,122,0.03)]">
                                <h2 className="text-3xl md:text-4xl font-brizel text-gray-900 mb-6 tracking-wide">
                                    Nuestra Historia
                                </h2>
                                <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                                    <p>
                                        En <span className="text-primary font-bold">{siteConfig.name}</span>, fusionamos la pasión por el diseño creativo con insumos de sublimación de alta gama y regalos personalizados meticulosos. Nos especializamos en materializar ideas audaces.
                                    </p>
                                    <p>
                                        Desde insumos de alta transferencia para potenciar tu emprendimiento hasta grabados de alta precisión para ocasiones especiales, nuestro compromiso es ofrecerte calidad premium que resista el paso del tiempo.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Pilares de la marca */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FadeIn delay={0.5} direction="up">
                                <div className="p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-primary/5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-primary/5 text-primary rounded-xl">
                                        <Sparkles size={20} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm tracking-wide">Insumos Premium</h3>
                                    <p className="text-xs text-gray-600 font-medium">Papeles de alta transferencia y tintas AQ.</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.6} direction="up">
                                <div className="p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-primary/5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-primary/5 text-primary rounded-xl">
                                        <Heart size={20} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm tracking-wide">Hecho Con Amor</h3>
                                    <p className="text-xs text-gray-600 font-medium">Detalles cuidados y acabados de excelencia.</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.7} direction="up">
                                <div className="p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-primary/5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-primary/5 text-primary rounded-xl">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm tracking-wide">Garantía Real</h3>
                                    <p className="text-xs text-gray-600 font-medium">Materiales testeados para tu tranquilidad.</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
