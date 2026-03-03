import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your purchase at Sharde Williams.",
};

export default function CheckoutPage() {
  return (
    <div className="pt-24">
      <section className="py-24 bg-brand-black min-h-[60vh] flex items-center">
        <div className="section-container text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-brand-gold/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-brand-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            </div>

            <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
              Coming Soon
            </p>
            <h1 className="heading-lg text-brand-offwhite mb-4">Checkout</h1>
            <div className="gold-divider mb-8" />

            <p className="text-body mb-8">
              Our secure checkout is being set up. In the meantime, you can purchase
              our products through our affiliate links on Amazon and LTK.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/shop" className="btn-gold">
                Continue Shopping
              </Link>
              <Link href="/cart" className="btn-outline-gold">
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
