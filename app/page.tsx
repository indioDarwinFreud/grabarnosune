import HeroStatic from "@/components/sections/HeroStatic";
import AboutPreview from "@/components/sections/AboutPreview";
import BestSellers from "@/components/sections/BestSellers";
import CategoryBanners from "@/components/sections/CategoryBanners";
import Testimonials from "@/components/sections/Testimonials";
import Separador from "@/components/ui/separador";
import MainCategories from "@/components/sections/MainCategories";
import CommercialInfo from "@/components/sections/CommercialInfo";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col pt-16 md:pt-24 pb-24 md:pb-8 bg-transparent">
      {/* Hero Section */}
      <div className="relative z-30 w-full">
        <HeroStatic />
      </div>

      <Separador />

      {/* Main Categories Section (Lo más buscado) */}
      <div className="relative z-20">
        <MainCategories />
      </div>

      <Separador />

      {/* About Preview Section (Quiénes somos) */}
      <div className="relative z-20">
        <AboutPreview />
      </div>

      <Separador />

      {/* Category Banners Section (Líneas de trabajo) */}
      <div className="relative z-20">
        <CategoryBanners />
      </div>

      <Separador />

      {/* Best Sellers Section (Catálogo destacado) */}
      <div className="relative z-20">
        <BestSellers />
      </div>

      <Separador />

      {/* Commercial Info & Coupons Section */}
      <div className="relative z-20">
        <CommercialInfo />
      </div>

      <Separador />

      {/* Blog Section */}
      <div className="relative z-20">
        <BlogPreview />
      </div>

      <Separador />

      {/* Testimonials Section */}
      <div className="relative z-20 pb-20">
        <Testimonials />
      </div>

    </main>
  );
}
