"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group relative bg-brand-gray-dark border border-brand-gold/10 overflow-hidden transition-all duration-500 hover:border-brand-gold/30">
      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-brand-gray-mid">
        {/* Placeholder image with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-mid to-brand-black flex items-center justify-center">
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full border border-brand-gold/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-brand-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
            </div>
            <p className="text-xs text-brand-offwhite/20 font-sans uppercase tracking-wider">
              {product.category.replace("-", " ")}
            </p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="btn-gold text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details
          </span>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/product/${product.id}`}>
            <h3 className="text-sm font-sans font-medium text-brand-offwhite group-hover:text-brand-gold transition-colors leading-tight">
              {product.name}
            </h3>
          </Link>
          <span className="text-sm font-sans font-semibold text-brand-gold whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-xs text-brand-offwhite/40 uppercase tracking-wider mb-4 font-sans">
          {product.category.replace("-", " ")}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => addItem(product)}
            className="flex-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs uppercase tracking-wider py-2.5 font-semibold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
          >
            Add to Cart
          </button>
          <a
            href={product.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 border border-brand-gold/20 text-brand-gold/50 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-300"
            aria-label="Buy on Amazon"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
