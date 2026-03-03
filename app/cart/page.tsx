"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-24">
        <section className="py-24 bg-brand-black">
          <div className="section-container text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-brand-gold/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-brand-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h1 className="heading-lg text-brand-offwhite mb-4">Your Cart is Empty</h1>
            <p className="text-body mb-8">Looks like you haven&apos;t added anything yet.</p>
            <Link href="/shop" className="btn-gold">
              Start Shopping
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-12 bg-brand-black border-b border-brand-gold/10">
        <div className="section-container text-center">
          <h1 className="heading-lg text-brand-offwhite mb-2">Your Cart</h1>
          <p className="text-sm text-brand-offwhite/40 font-sans">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-12 bg-brand-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-6 p-6 bg-brand-gray-dark border border-brand-gold/10"
                >
                  {/* Image placeholder */}
                  <div className="w-24 h-32 bg-brand-gray-mid border border-brand-gold/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-gold/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        href={`/product/${item.product.id}`}
                        className="text-sm font-sans font-medium text-brand-offwhite hover:text-brand-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-brand-offwhite/40 uppercase tracking-wider mt-1 font-sans">
                        {item.product.category.replace("-", " ")}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-brand-gold/20">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1.5 text-brand-offwhite/50 hover:text-brand-gold transition-colors text-sm"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-3 py-1.5 text-sm text-brand-offwhite font-sans border-x border-brand-gold/20">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1.5 text-brand-offwhite/50 hover:text-brand-gold transition-colors text-sm"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-brand-gold font-sans">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-brand-offwhite/30 hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-brand-gray-dark border border-brand-gold/10 p-8 sticky top-24">
                <h2 className="text-lg font-serif text-brand-offwhite mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-brand-offwhite/50">Subtotal</span>
                    <span className="text-brand-offwhite">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-brand-offwhite/50">Shipping</span>
                    <span className="text-brand-offwhite/50">Calculated at checkout</span>
                  </div>
                  <div className="w-full h-px bg-brand-gold/10" />
                  <div className="flex justify-between">
                    <span className="text-sm font-sans font-semibold text-brand-offwhite">Total</span>
                    <span className="text-lg font-serif font-bold text-brand-gold">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link href="/checkout" className="btn-gold w-full text-center block">
                  Proceed to Checkout
                </Link>

                <Link
                  href="/shop"
                  className="block text-center mt-4 text-xs text-brand-offwhite/40 uppercase tracking-widest hover:text-brand-gold transition-colors font-sans"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
