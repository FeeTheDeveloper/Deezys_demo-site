import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getProductsByCategory } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";
import { AddToCartButton } from "./AddToCartButton";

interface ProductPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24">
      {/* Breadcrumb */}
      <div className="bg-brand-gray-dark border-b border-brand-gold/10">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-xs font-sans text-brand-offwhite/40">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
            <span>/</span>
            <Link
              href={`/shop?category=${product.category}`}
              className="hover:text-brand-gold transition-colors capitalize"
            >
              {product.category.replace("-", " ")}
            </Link>
            <span>/</span>
            <span className="text-brand-offwhite/60">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 bg-brand-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="aspect-[3/4] bg-brand-gray-dark border border-brand-gold/10 overflow-hidden relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-3 font-sans">
                {product.category.replace("-", " ")}
              </p>

              <h1 className="heading-md text-brand-offwhite mb-4">
                {product.name}
              </h1>

              <p className="text-3xl font-serif font-bold text-brand-gold mb-6">
                ${product.price.toFixed(2)}
              </p>

              <div className="w-12 h-0.5 bg-brand-gold/30 mb-6" />

              <p className="text-body mb-8">
                {product.description}
              </p>

              {/* Tags */}
              {product.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider text-brand-offwhite/30 border border-brand-gold/10 px-3 py-1 font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <AddToCartButton product={product} />
                <a
                  href={product.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold text-center"
                >
                  Buy on Amazon
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex items-center gap-6 text-brand-offwhite/30">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-xs font-sans">Secure Shopping</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <span className="text-xs font-sans">Fast Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-brand-gray-dark border-t border-brand-gold/10">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="heading-md text-brand-offwhite mb-4">You May Also Like</h2>
              <div className="gold-divider" />
            </div>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        </section>
      )}
    </div>
  );
}
