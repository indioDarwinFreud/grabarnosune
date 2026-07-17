import { Card } from "@/components/ui/card";
import FadeIn from "@/components/ui/FadeIn";
import { testimonialsData } from "@/data";
import { MessageSquareQuote, Star } from "lucide-react";
import { siteConfig } from "@/config";

export default function Testimonials() {
    return (
        <div 
            className="w-full max-w-7xl mx-auto px-4 mt-16 mb-24"

        >
            <FadeIn>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-brizel text-center mb-4 text-gray-900 drop-shadow-sm uppercase tracking-wide">
                        Lo que dicen de <span className="text-primary">Nosotros</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary rounded-full"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonialsData.map((testimonial, index) => (
                    <FadeIn key={testimonial.id} delay={index * 0.2} direction="up" className="h-full">
                        <Card
                            className="relative overflow-hidden border border-gray-200/50 hover:border-primary/20 transition-all duration-500 p-8 md:p-10 shadow-sm hover:shadow-[0_15px_35px_rgba(113,0,122,0.06)] rounded-2xl group flex flex-col h-full"
                            style={{ backgroundColor: siteConfig.theme.backgroundCard }}
                        >
                            {/* Decorative Quote Icon */}
                            <MessageSquareQuote className="absolute top-6 right-8 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors -rotate-12 z-0" strokeWidth={1} />

                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p
                                    className="text-lg md:text-xl italic font-medium leading-relaxed flex-grow mb-8"
                                    style={{ color: siteConfig.theme.textColors.cardBody }}
                                >
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#55005C] flex items-center justify-center font-bold text-white shadow-sm">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4
                                            className="font-bold text-lg tracking-wide"
                                            style={{ color: siteConfig.theme.textColors.cardTitle }}
                                        >
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
