import FadeIn from "./FadeIn";
import { siteConfig } from "@/config";

export default function Separador() {
    const primary = siteConfig.theme.primaryColor;
    return (
        <FadeIn delay={0.3} direction="up" className="w-full flex justify-center mb-8">
            <div
                className="w-48 md:w-64 h-[2px]"
                style={{
                    background: `linear-gradient(to right, transparent, ${primary}, transparent)`,
                    boxShadow: `0 0 12px ${primary}40`
                }}
            />
        </FadeIn>
    );
}