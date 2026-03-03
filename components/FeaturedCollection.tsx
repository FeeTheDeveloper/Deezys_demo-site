import Link from "next/link";
import { categories } from "@/lib/products";

export function FeaturedCollection() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
            Curated For You
          </p>
          <h2 className="heading-lg text-brand-offwhite mb-4">
            Shop By Collection
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className="group relative overflow-hidden aspect-[4/5] bg-brand-gray-dark border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-gray-mid/50 to-brand-black" />

              {/* Decorative number */}
              <div className="absolute top-6 right-6 text-brand-gold/10 text-8xl font-serif font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="w-12 h-0.5 bg-brand-gold mb-4 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-2xl font-serif text-brand-offwhite mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-brand-offwhite/50 mb-4 font-sans">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
                  Explore
                  <svg
                    className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
