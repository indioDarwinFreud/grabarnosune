"use client"

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { blogPosts } from "@/data";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";
import { siteConfig } from "@/config";
import GuideModal from "@/components/ui/GuideModal";
import type { BlogPost } from "@/types";

export default function BlogPreview() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 mt-20">
            <FadeIn>
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-brizel text-center mb-4 text-gray-900 drop-shadow-sm uppercase tracking-wide">
                        Consejos & <span className="text-primary">Tutoriales</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base font-medium text-center max-w-md">
                        Guías prácticas paso a paso para sublimar y crear productos increíbles.
                    </p>
                    <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
                </div>
            </FadeIn>

            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {blogPosts.map((post, index) => (
                    <FadeIn key={post.id} delay={index * 0.1} direction="up" className="w-full">
                        <Card
                            className="overflow-hidden w-full transition-all duration-500 group cursor-pointer border border-gray-200/50 hover:border-primary/20 shadow-sm hover:shadow-[0_15px_35px_rgba(113,0,122,0.06)] rounded-2xl flex flex-col md:flex-row"
                            style={{ backgroundColor: siteConfig.theme.backgroundCard }}
                            onClick={() => setSelectedPost(post)}
                        >
                            {/* Image Section */}
                            <div className="relative w-full md:w-80 h-52 md:h-auto min-h-[200px] flex-shrink-0 overflow-hidden bg-neutral-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                                    sizes="(max-width: 768px) 100vw, 320px"
                                />
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full border border-gray-200/50">
                                    {post.category}
                                </span>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-3">
                                        <Clock size={14} />
                                        <span>{post.readTime} de lectura</span>
                                    </div>
                                    <h3
                                        className="font-bold text-xl leading-snug mb-2 transition-colors group-hover:text-primary"
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
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary">
                                    <span>Ver guía completa</span>
                                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>

            {selectedPost && (
                <GuideModal
                    guide={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </section>
    );
}
