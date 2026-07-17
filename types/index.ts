import type { LucideIcon } from "lucide-react";

export interface ProductVariant {
    colorName: string;
    colorCode: string;
    image: string;
    stock?: number | null;
    price?: number | string | null;
}

export interface Product {
    id: number;
    title: string;
    location: string;
    description: string;
    image: string;
    category?: string;
    website: string;
    stock?: number | null;
    variants?: ProductVariant[];
    price?: number | string | null;
    guideSlug?: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    category: string;
    readTime: string;
    steps?: string[];
    tips?: string[];
    infographicImage?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    initials: string;
    content: string;
    stars?: number;
}

export interface NavItem {
    id: number;
    title: string;
    icon: React.ReactNode;
    link: string;
}

export interface ContactItem {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
}

export interface BusinessHour {
    day: string;
    hours: string;
}
