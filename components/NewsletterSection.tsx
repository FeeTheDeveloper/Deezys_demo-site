"use client";

export function NewsletterSection() {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Gold accent background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent" />

      {/* Top and bottom gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative */}
          <div className="gold-divider mb-8" />

          <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
            Join The Inner Circle
          </p>

          <h2 className="heading-lg text-brand-offwhite mb-4">
            First Access. Exclusive Drops.
          </h2>

          <p className="text-body mb-10 max-w-lg mx-auto">
            Be the first to shop new arrivals, get exclusive discounts, and receive
            style tips straight to your inbox.
          </p>

          {/* Email Form */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-2 border-brand-gold/30 text-brand-offwhite px-5 py-3.5 text-sm focus:outline-none focus:border-brand-gold placeholder:text-brand-offwhite/30 transition-colors font-sans"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="btn-gold whitespace-nowrap"
            >
              Get VIP Access
            </button>
          </form>

          <p className="text-xs text-brand-offwhite/30 mt-4 font-sans">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>

          {/* Decorative */}
          <div className="gold-divider mt-10" />
        </div>
      </div>
    </section>
  );
}
