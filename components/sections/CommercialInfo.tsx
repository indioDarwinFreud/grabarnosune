import FadeIn from "@/components/ui/FadeIn";
import { Truck, ShieldCheck, MapPin } from "lucide-react";
import { siteConfig } from "@/config";

export default function CommercialInfo() {
    return (
        <section 
            className="w-full max-w-7xl mx-auto px-4 mt-32 mb-16"
            data-imperia-id="CommercialInfo__section__0"
            data-imperia-path="components/sections/CommercialInfo.tsx"
        >
            {/* Banner de Cupones */}
            <FadeIn>
                <div 
                    className="relative rounded-3xl p-8 md:p-12 mb-16 overflow-hidden shadow-2xl border border-primary/20 backdrop-blur-md"
                    style={{
                        backgroundColor: siteConfig.theme.backgroundCard,
                        backgroundImage: `url(${siteConfig.theme.cardImage})`,
                        backgroundSize: 'cover',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0" />
                    
                    <div className="relative z-10 max-w-2xl flex flex-col justify-center">
                        <span className="text-primary font-black uppercase tracking-widest text-xs mb-3 block">Descuentos Exclusivos</span>
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                            Cupones de Ahorro <br /> <span className="text-primary">¡Más comprás, más ahorrás!</span>
                        </h3>
                        <p className="text-neutral-300 font-medium mb-8 leading-relaxed">
                            Llevá tus proyectos al siguiente nivel. Aplicamos descuentos automáticos para compras mayoristas en insumos de sublimación.
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                                <p className="text-primary font-black text-xl">5% OFF</p>
                                <p className="text-neutral-400 text-xs mt-1">Superando $100.000</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                                <p className="text-primary font-black text-xl">10% OFF</p>
                                <p className="text-neutral-400 text-xs mt-1">Superando $200.000</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                                <p className="text-primary font-black text-xl">Consultar</p>
                                <p className="text-neutral-400 text-xs mt-1">Por compras mayores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Grilla de Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Beneficio 1 */}
                <FadeIn delay={0.1} direction="up">
                    <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm h-full hover:border-primary/20 transition-colors">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                            <Truck size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-black text-white mb-2">Envíos a Todo el País</h4>
                            <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                                Despachamos tu pedido por Correo Argentino, Andreani o encomiendas con embalaje reforzado y seguro.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Beneficio 2 */}
                <FadeIn delay={0.2} direction="up">
                    <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm h-full hover:border-primary/20 transition-colors">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-black text-white mb-2">Compra Transparente</h4>
                            <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                                Abona de forma simple mediante transferencia bancaria protegida o efectivo en el punto de entrega.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Beneficio 3 */}
                <FadeIn delay={0.3} direction="up">
                    <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm h-full hover:border-primary/20 transition-colors">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-black text-white mb-2">Retiro en Mendoza</h4>
                            <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                                Coordiná previamente y retirá tus insumos en nuestro punto de entrega exclusivo en Las Heras / Mendoza.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
