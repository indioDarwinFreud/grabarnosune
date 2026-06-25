import FadeIn from "@/components/ui/FadeIn";
import { blogPosts } from "@/data";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";
import { siteConfig } from "@/config";

export default function BlogPreview() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 mt-20">
            <FadeIn>
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-brizel text-center mb-4 text-gray-900 drop-shadow-sm uppercase tracking-wide">
                        Consejos & <span className="text-primary">Tutoriales</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base font-medium text-center max-w-md">
                        Guías prácticas para sublimar como un profesional.
                    </p>
                    <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <FadeIn key={post.id} delay={index * 0.1} direction="up" className="h-full">
                        <Card
                            className="overflow-hidden h-full transition-all duration-500 group cursor-pointer border border-gray-200/50 hover:border-primary/20 shadow-sm hover:shadow-[0_15px_35px_rgba(113,0,122,0.06)] rounded-2xl"
                            style={{ backgroundColor: siteConfig.theme.backgroundCard }}
                        >
                            <div className="h-48 relative overflow-hidden bg-neutral-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full border border-gray-200/50">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-3">
                                    <Clock size={14} />
                                    <span>{post.readTime} de lectura</span>
                                </div>
                                <h3
                                    className="font-bold text-lg leading-tight mb-2 transition-colors group-hover:text-primary"
                                    style={{ color: siteConfig.theme.textColors.cardTitle }}
                                >
                                    {post.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: siteConfig.theme.textColors.cardBody }}
                                >
                                    {post.excerpt}
                                </p>
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
