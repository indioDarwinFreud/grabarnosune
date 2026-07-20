import type { Metadata } from "next";
import ProductsPageWrapper from "./ProductsContent";

export const metadata: Metadata = {
    title: "Productos — Grabar Nos Une",
    description: "Explorá nuestro catálogo completo de insumos para sublimación: papeles, tintas, tazas, remeras, gorras y regalos personalizados.",
};

export default function ProductsPage() {
    return <ProductsPageWrapper />;
}
