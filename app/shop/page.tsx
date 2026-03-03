import type { Metadata } from "next";
import { products, categories } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";
import { ExternalShopSection } from "@/components/ExternalShopSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse our curated collection of beauty, curvy style, and fitness essentials. Luxury products for the woman who owns the room.",
};

interface ShopPageProps {
  searchParams: { category?: string };
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  const activeCategory = searchParams.category;
  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-brand-black border-b border-brand-gold/10">
        <div className="section-container text-center">
          <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
            The Collection
          </p>
          <h1 className="heading-lg text-brand-offwhite mb-4">
            {activeCategory
              ? categories.find((c) => c.slug === activeCategory)?.name || "Shop"
              : "Shop All"}
          </h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-brand-gray-dark border-b border-brand-gold/10">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className={`text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-300 font-sans font-semibold ${
                !activeCategory
                  ? "bg-brand-gold text-brand-black border-brand-gold"
                  : "border-brand-gold/20 text-brand-offwhite/60 hover:border-brand-gold/40 hover:text-brand-gold"
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className={`text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-300 font-sans font-semibold ${
                  activeCategory === cat.slug
                    ? "bg-brand-gold text-brand-black border-brand-gold"
                    : "border-brand-gold/20 text-brand-offwhite/60 hover:border-brand-gold/40 hover:text-brand-gold"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-brand-black">
        <div className="section-container">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-sm text-brand-offwhite/40 mb-8 font-sans">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <ProductGrid products={filteredProducts} columns={4} />
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-offwhite/50 text-lg font-sans">
                No products found in this category.
              </p>
              <Link href="/shop" className="btn-outline-gold mt-6 inline-block">
                View All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* External Storefronts */}
      <ExternalShopSection
        title="Shop My Curated Picks"
        description="Hand-selected beauty, fashion, and lifestyle staples I actually wear and love."
        link="https://shopmy.us/shop/shardewilliamss"
        buttonText="Shop My Store"
        bgColor="black"
      />

      <ExternalShopSection
        title="Shop My LTK Looks"
        description="Outfit breakdowns, full looks, and daily style favorites."
        link="https://www.shopltk.com/explore/shardewilliamss"
        buttonText="Explore LTK"
        bgColor="darkgray"
      />

      <ExternalShopSection
        title="Train With Me"
        description="Confidence starts with how you move. Join me at TruFusion."
        link="https://new.trufusion.com/first-class-free?lid=142"
        buttonText="Start Your Free Class"
        bgColor="black"
      />
    </div>
  );
}
