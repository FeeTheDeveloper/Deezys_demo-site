import Image from "next/image";

export function BrandStory() {
  return (
    <section className="py-24 bg-brand-gray-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Brand Image */}
          <div className="relative aspect-[4/5] bg-brand-gray-mid border border-brand-gold/10 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Sharde Williams Brand"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Gold border accent */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-brand-gold/20 -z-10" />
          </div>

          {/* Right: Story Text */}
          <div>
            <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
              The Brand
            </p>
            <h2 className="heading-lg text-brand-offwhite mb-6">
              Built for Women Who{" "}
              <span className="gold-gradient-text">Refuse to Blend In</span>
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mb-8" />

            <div className="space-y-5">
              <p className="text-body">
                Sharde Williams isn&apos;t just a brand — it&apos;s a movement. Built on the
                belief that every woman deserves to feel powerful, beautiful, and
                unapologetically herself.
              </p>
              <p className="text-body">
                From curated beauty staples to curve-celebrating fashion, every product
                is hand-picked to deliver luxury, confidence, and that &quot;I own every room
                I walk into&quot; energy.
              </p>
              <p className="text-body">
                This is for the women who don&apos;t wait for permission. The ones who set
                the standard. Welcome home, Queen.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-3xl font-serif font-bold text-brand-gold">10K+</p>
                <p className="text-xs text-brand-offwhite/50 uppercase tracking-wider mt-1 font-sans">
                  Happy Customers
                </p>
              </div>
              <div className="w-px h-12 bg-brand-gold/20" />
              <div>
                <p className="text-3xl font-serif font-bold text-brand-gold">50+</p>
                <p className="text-xs text-brand-offwhite/50 uppercase tracking-wider mt-1 font-sans">
                  Curated Products
                </p>
              </div>
              <div className="w-px h-12 bg-brand-gold/20" />
              <div>
                <p className="text-3xl font-serif font-bold text-brand-gold">4.9</p>
                <p className="text-xs text-brand-offwhite/50 uppercase tracking-wider mt-1 font-sans">
                  Avg Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
