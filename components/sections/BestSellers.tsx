import FadeIn from "@/components/ui/FadeIn";
import { productsData } from "@/data";
import ProductCard from "@/components/cards/ProductCard";

/**
 * BestSellers — Grilla de productos destacados en la Home
 * Muestra tarjetas de producto reutilizando el componente ProductCard.
 *
 * Datos: `productsData` de data.tsx.
 * Muestra los primeros 4 productos del catálogo principal.
 */
export default function BestSellers() {
    return (
        <section 
            className="mt-32 w-full max-w-7xl mx-auto px-4 pb-24"
            data-imperia-id="BestSellers__container__0"
            data-imperia-path="components/sections/BestSellers.tsx"
        >
            <FadeIn>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900 drop-shadow-sm">
                        Catálogo <span className="text-primary">Destacado</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary rounded-full"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.slice(0, 6).map((product, index) => (
                    <FadeIn key={product.id} delay={index * 0.15} direction="up" className="h-full">
                        <ProductCard product={product} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
