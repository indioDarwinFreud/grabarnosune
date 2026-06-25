"use client";

import { useState } from "react";
import { User, MessageSquare, Send, Mail, Phone, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { siteConfig } from "@/config";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Limpiar el número de teléfono para wa.me (dejar solo dígitos)
        const phoneNumber = siteConfig.contact.phone.replace(/\D/g, "");
        const text = `Hola, soy ${name}. Vengo de la web y te quería consultar por: ${message}`;
        const encodedText = encodeURIComponent(text);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen relative bg-transparent">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/3 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-36 pb-24">

                {/* Header Principal */}
                <FadeIn direction="down">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-md mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                                Hablemos hoy
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-brizel text-gray-900 drop-shadow-sm tracking-wide">
                            Contáctenos
                        </h1>
                        <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-4" />
                    </div>
                </FadeIn>

                {/* Grid principal: Formulario a la izquierda, Información a la derecha */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">

                    {/* Columna Izquierda: Formulario de Mensaje */}
                    <div className="lg:col-span-7 h-full">
                        <FadeIn delay={0.2} direction="left" className="h-full">
                            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-primary/10 shadow-[0_20px_50px_rgba(113,0,122,0.04)] h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-8 border-b border-gray-100 pb-6 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-brizel text-gray-900 mb-1 tracking-wide">
                                                Iniciar Chat
                                            </h2>
                                            <p className="text-xs sm:text-sm text-gray-600 font-medium">
                                                Completá tus datos y te responderemos por WhatsApp al instante.
                                            </p>
                                        </div>
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl hidden sm:block">
                                            <MessageSquare size={24} />
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-gray-950 mb-2 text-xs md:text-sm font-bold ml-1">
                                                Tu Nombre
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-gray-900 focus:ring-2 focus:ring-primary/15 focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-gray-400 shadow-sm text-sm"
                                                    placeholder="Ej: Juan Pérez"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-950 mb-2 text-xs md:text-sm font-bold ml-1">
                                                Tu Mensaje
                                            </label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                                <textarea
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-gray-900 focus:ring-2 focus:ring-primary/15 focus:border-primary focus:outline-none transition-all duration-300 h-36 placeholder:text-gray-400 shadow-sm resize-none text-sm"
                                                    placeholder="Contanos qué insumos o personalizados estás buscando..."
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-primary hover:bg-[#55005C] text-white font-bold tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 text-sm"
                                        >
                                            <Send size={16} />
                                            ENVIAR A WHATSAPP
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Columna Derecha: Tarjetas de Información Organizables */}
                    <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">

                        {/* Tarjeta 1: Canales Directos */}
                        <FadeIn delay={0.3} direction="right">
                            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-primary/10 shadow-[0_15px_35px_rgba(113,0,122,0.03)] flex flex-col gap-5">
                                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-3 bg-primary rounded-full" />
                                    Contacto Directo
                                </h3>

                                <div className="flex flex-col gap-4">
                                    {/* Email */}
                                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-colors group">
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <div className="overflow-hidden">
                                            <span className="text-[10px] uppercase font-bold text-gray-500 block">Email</span>
                                            <span className="text-sm text-gray-800 font-semibold truncate block">{siteConfig.contact.email}</span>
                                        </div>
                                    </a>

                                    {/* Teléfono */}
                                    <a href={`https://wa.me/${siteConfig.contact.phone.replace("+", "")}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-colors group">
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-gray-500 block">Teléfono / WhatsApp</span>
                                            <span className="text-sm text-gray-800 font-semibold block">{siteConfig.contact.phone}</span>
                                        </div>
                                    </a>

                                    {/* Ubicación */}
                                    <a href={siteConfig.contact.mapsLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-colors group">
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-gray-500 block">Ubicación</span>
                                            <span className="text-sm text-gray-800 font-semibold block leading-tight">{siteConfig.contact.location}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Tarjeta 2: Redes Sociales */}
                        <FadeIn delay={0.4} direction="right">
                            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-primary/10 shadow-[0_15px_35px_rgba(113,0,122,0.03)] flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-3 bg-primary rounded-full" />
                                    Nuestras Redes
                                </h3>

                                <div className="grid grid-cols-2 gap-3">
                                    <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 hover:bg-primary/5 border border-gray-100 hover:border-primary/10 transition-all group">
                                        <Facebook size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                        <div>
                                            <span className="text-[10px] font-bold text-gray-500 block">Facebook</span>
                                            <span className="text-xs text-gray-800 font-semibold">{siteConfig.socials.facebookHandle}</span>
                                        </div>
                                    </a>

                                    <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 hover:bg-primary/5 border border-gray-100 hover:border-primary/10 transition-all group">
                                        <Instagram size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                        <div>
                                            <span className="text-[10px] font-bold text-gray-500 block">Instagram</span>
                                            <span className="text-xs text-gray-800 font-semibold">{siteConfig.socials.instagramHandle}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Tarjeta 3: Horarios de Atención */}
                        <FadeIn delay={0.5} direction="right">
                            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-primary/10 shadow-[0_15px_35px_rgba(113,0,122,0.03)] flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
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
                                                <span className="text-gray-500">{hour.day}:</span>
                                                <span className="text-gray-800">{hour.hours}</span>
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
