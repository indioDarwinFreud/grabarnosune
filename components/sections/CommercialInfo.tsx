import FadeIn from "@/components/ui/FadeIn";
import { Truck, ShieldCheck, MapPin } from "lucide-react";

export default function CommercialInfo() {
    return (
        <section 
            className="w-full max-w-7xl mx-auto px-4 mt-32 mb-16"

        >
            {/* Banner de Cupones */}
            <FadeIn>
                <div 
                    className="relative rounded-3xl p-8 md:p-12 mb-16 overflow-hidden border border-primary/10 shadow-sm"
                    style={{ backgroundColor: 'var(--card-bg)' }}
                >
                    <div className="absolute inset-0 z-0"
                        style={{ background: `linear-gradient(to right, var(--card-bg), color-mix(in srgb, var(--card-bg) 75%, transparent), transparent)` }} />
                    
                    <div className="relative z-10 max-w-2xl flex flex-col justify-center">
                        <span className="text-primary font-black uppercase tracking-widest text-xs mb-3 block">Descuentos Exclusivos</span>
                        <h3 className="text-3xl md:text-5xl font-brizel mb-4 leading-tight uppercase tracking-wide"
                            style={{ color: 'var(--card-title)' }}>
                            Cupones de Ahorro <br /> <span className="text-primary">¡Más comprás, más ahorrás!</span>
                        </h3>
                        <p className="font-medium mb-8 leading-relaxed" style={{ color: 'var(--card-body)' }}>
                            Llevá tus proyectos al siguiente nivel. Aplicamos descuentos automáticos para compras mayoristas en insumos de sublimación.
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="border rounded-xl p-3 text-center shadow-sm"
                                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}>
                                <p className="text-primary font-black text-xl">5% OFF</p>
                                <p className="text-xs mt-1" style={{ color: 'var(--card-muted)' }}>Superando $100.000</p>
                            </div>
                            <div className="border rounded-xl p-3 text-center shadow-sm"
                                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}>
                                <p className="text-primary font-black text-xl">10% OFF</p>
                                <p className="text-xs mt-1" style={{ color: 'var(--card-muted)' }}>Superando $200.000</p>
                            </div>
                            <div className="border rounded-xl p-3 text-center col-span-2 sm:col-span-1 shadow-sm"
                                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}>
                                <p className="text-primary font-black text-xl">Consultar</p>
                                <p className="text-xs mt-1" style={{ color: 'var(--card-muted)' }}>Por compras mayores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Grilla de Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Beneficio 1 */}
                <FadeIn delay={0.1} direction="up">
                    <div className="flex gap-4 p-6 rounded-2xl border border-primary/5 hover:border-primary/20 h-full hover:shadow-[0_10px_30px_rgba(113,0,122,0.05)] transition-all shadow-sm"
                        style={{ backgroundColor: 'var(--card-bg)' }}>
                        <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                            <Truck size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-black mb-2" style={{ color: 'var(--card-title)' }}>Envíos a Todo el País</h4>
                            <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--card-body)' }}>
                                Despachamos tu pedido por Correo Argentino, Andreani o encomiendas con embalaje reforzado y seguro.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                    <div className="flex gap-4 p-6 rounded-2xl border border-primary/5 hover:border-primary/20 h-full hover:shadow-[0_10px_30px_rgba(113,0,122,0.05)] transition-all shadow-sm"
                        style={{ backgroundColor: 'var(--card-bg)' }}>
                        <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-black mb-2" style={{ color: 'var(--card-title)' }}>Compra Transparente</h4>
                            <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--card-body)' }}>
                                Abona de forma simple mediante transferencia bancaria protegida o efectivo en el punto de entrega.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                    <div className="flex gap-4 p-6 rounded-2xl border border-primary/5 hover:border-primary/20 h-full hover:shadow-[0_10px_30px_rgba(113,0,122,0.05)] transition-all shadow-sm"
                        style={{ backgroundColor: 'var(--card-bg)' }}>
                        <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-black mb-2" style={{ color: 'var(--card-title)' }}>Retiro en Mendoza</h4>
                            <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--card-body)' }}>
                                Coordiná previamente y retirá tus insumos en nuestro punto de entrega exclusivo en Las Heras / Mendoza.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
