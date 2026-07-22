"use client";

import { useState } from "react";
import { User, MessageSquare, Send, Mail, Phone, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { siteConfig } from "@/config";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = siteConfig.contact.phone.replace(/\D/g, "");
        const text = `Hola, soy ${name}. Vengo de la web y te quería consultar por: ${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen relative bg-transparent">
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/3 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-36 pb-28">

                <FadeIn direction="down">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-md mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                                Hablemos hoy
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-brizel drop-shadow-sm tracking-wide"
                            style={{ color: 'var(--card-title)' }}>
                            TE CONTAMOS QUE TENEMOS EN STOCK :  ESCRIBINOS
                        </h1>
                        <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-4" />
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">

                    <div className="lg:col-span-7 h-full">
                        <FadeIn delay={0.2} direction="left" className="h-full">
                            <div className="backdrop-blur-md p-8 md:p-10 rounded-3xl border border-primary/10 shadow-[0_20px_50px_rgba(113,0,122,0.04)] h-full flex flex-col justify-between"
                                style={{ backgroundColor: 'var(--card-bg)' }}>
                                <div>
                                    <div className="mb-8 border-b pb-6 flex items-center justify-between"
                                        style={{ borderColor: 'var(--card-muted)' }}>
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-brizel mb-1 tracking-wide"
                                                style={{ color: 'var(--card-title)' }}>
                                                Iniciar Chat
                                            </h2>
                                            <p className="text-xs sm:text-sm font-medium"
                                                style={{ color: 'var(--card-body)' }}>
                                                Completá tus datos y te responderemos por WhatsApp al instante.
                                            </p>
                                        </div>
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl hidden sm:block">
                                            <MessageSquare size={24} />
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block mb-2 text-xs md:text-sm font-bold ml-1"
                                                style={{ color: 'var(--card-title)' }}>
                                                Tu Nombre
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full border rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/15 focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-gray-400 shadow-sm text-sm"
                                                    style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)', color: 'var(--card-title)' }}
                                                    placeholder="Ej: Juan Pérez"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-xs md:text-sm font-bold ml-1"
                                                style={{ color: 'var(--card-title)' }}>
                                                Tu Mensaje
                                            </label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                                <textarea
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    className="w-full border rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/15 focus:border-primary focus:outline-none transition-all duration-300 h-36 placeholder:text-gray-400 shadow-sm resize-none text-sm"
                                                    style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)', color: 'var(--card-title)' }}
                                                    placeholder="Contanos qué insumos o personalizados estás buscando..."
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 text-sm"
                                        >
                                            <Send size={16} />
                                            ENVIAR A WHATSAPP
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">

                        <FadeIn delay={0.3} direction="right">
                            <div className="backdrop-blur-md p-6 rounded-3xl border border-primary/10 shadow-[0_15px_35px_rgba(113,0,122,0.03)] flex flex-col gap-5"
                                style={{ backgroundColor: 'var(--card-bg)' }}>
                                <h3 className="text-lg font-bold border-b pb-3 flex items-center gap-2"
                                    style={{ color: 'var(--card-title)', borderColor: 'var(--card-muted)' }}>
                                    <span className="w-1.5 h-3 bg-primary rounded-full" />
                                    Contacto Directo
                                </h3>

                                <div className="flex flex-col gap-4">
                                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-colors group">
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <div className="overflow-hidden">
                                            <span className="text-[10px] uppercase font-bold block" style={{ color: 'var(--card-muted)' }}>Email</span>
                                            <span className="text-sm font-semibold truncate block" style={{ color: 'var(--card-title)' }}>{siteConfig.contact.email}</span>
                                        </div>
                                    </a>

                                    <a href={`https://wa.me/${siteConfig.contact.phone.replace("+", "")}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-colors group">
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold block" style={{ color: 'var(--card-muted)' }}>Teléfono / WhatsApp</span>
                                            <span className="text-sm font-semibold block" style={{ color: 'var(--card-title)' }}>{siteConfig.contact.phone}</span>
                                        </div>
                                    </a>

                                    <a href={siteConfig.contact.mapsLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-colors group">
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold block" style={{ color: 'var(--card-muted)' }}>Ubicación</span>
                                            <span className="text-sm font-semibold block leading-tight" style={{ color: 'var(--card-title)' }}>{siteConfig.contact.location}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="right">
                            <div className="backdrop-blur-md p-6 rounded-3xl border border-primary/10 shadow-[0_15px_35px_rgba(113,0,122,0.03)] flex flex-col gap-4"
                                style={{ backgroundColor: 'var(--card-bg)' }}>
                                <h3 className="text-lg font-bold border-b pb-3 flex items-center gap-2"
                                    style={{ color: 'var(--card-title)', borderColor: 'var(--card-muted)' }}>
                                    <span className="w-1.5 h-3 bg-primary rounded-full" />
                                    Nuestras Redes
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <a href={siteConfig.socials.instagramInsumos} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-2xl border transition-all group"
                                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}>
                                        <Instagram size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                        <div>
                                            <span className="text-[10px] font-bold block" style={{ color: 'var(--card-muted)' }}>Instagram Insumos</span>
                                            <span className="text-xs font-semibold" style={{ color: 'var(--card-title)' }}>{siteConfig.socials.instagramInsumosHandle}</span>
                                        </div>
                                    </a>

                                    <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-2xl border transition-all group"
                                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}>
                                        <Instagram size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                        <div>
                                            <span className="text-[10px] font-bold block" style={{ color: 'var(--card-muted)' }}>Instagram General</span>
                                            <span className="text-xs font-semibold" style={{ color: 'var(--card-title)' }}>{siteConfig.socials.instagramHandle}</span>
                                        </div>
                                    </a>

                                    <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-2xl border transition-all group"
                                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-muted)' }}>
                                        <Facebook size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                        <div>
                                            <span className="text-[10px] font-bold block" style={{ color: 'var(--card-muted)' }}>Facebook</span>
                                            <span className="text-xs font-semibold" style={{ color: 'var(--card-title)' }}>{siteConfig.socials.facebookHandle}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5} direction="right">
                            <div className="backdrop-blur-md p-6 rounded-3xl border border-primary/10 shadow-[0_15px_35px_rgba(113,0,122,0.03)] flex flex-col gap-4"
                                style={{ backgroundColor: 'var(--card-bg)' }}>
                                <h3 className="text-lg font-bold border-b pb-3 flex items-center gap-2"
                                    style={{ color: 'var(--card-title)', borderColor: 'var(--card-muted)' }}>
                                    <span className="w-1.5 h-3 bg-primary rounded-full" />
                                    Horarios de Atención
                                </h3>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/5 text-primary rounded-xl mt-1">
                                        <Clock size={18} />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        {siteConfig.businessHours.map((hour, index) => (
                                            <div key={index} className="flex justify-between text-xs md:text-sm font-semibold">
                                                <span style={{ color: 'var(--card-muted)' }}>{hour.day}:</span>
                                                <span style={{ color: 'var(--card-title)' }}>{hour.hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                    </div>
                </div>

            </div>
        </div>
    );
}
