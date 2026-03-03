import { HeroSplash } from "@/components/HeroSplash";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { BrandStory } from "@/components/BrandStory";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ProductGrid } from "@/components/ProductGrid";
import { getBestSellers } from "@/lib/products";

export default function Home() {
  const bestSellers = getBestSellers();

  return (
    <>
      {/* 1. Fullscreen Hero */}
      <HeroSplash />

      {/* 2. Featured Collections */}
      <FeaturedCollection />

      {/* 3. Best Sellers Grid */}
      <section className="py-24 bg-brand-gray-dark">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
              Fan Favorites
            </p>
            <h2 className="heading-lg text-brand-offwhite mb-4">Best Sellers</h2>
            <div className="gold-divider" />
          </div>
          <ProductGrid products={bestSellers} columns={4} />
        </div>
      </section>

      {/* 4. Brand Story */}
      <BrandStory />

      {/* 5. Newsletter / Email Capture */}
      <NewsletterSection />
    </>
  );
}
