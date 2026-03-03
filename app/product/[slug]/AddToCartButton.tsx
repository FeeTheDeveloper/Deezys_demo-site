"use client";

import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button onClick={() => addItem(product)} className="btn-gold text-center">
      Add to Cart
    </button>
  );
}
