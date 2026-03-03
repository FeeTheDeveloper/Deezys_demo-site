import Link from "next/link";
import Image from "next/image";

export function HeroSplash() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        {/* Gold corner accents */}
        <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-brand-gold/20" />
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-brand-gold/20" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-brand-gold/20" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-brand-gold/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        {/* Logo Splash with radial glow */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15),_transparent_70%)]" />
          <Image
            src="/images/logo.png"
            alt="Sharde Williams"
            width={220}
            height={220}
            className="relative w-[140px] h-[140px] md:w-[220px] md:h-[220px] object-contain mx-auto drop-shadow-[0_0_50px_rgba(212,175,55,0.3)] animate-float"
            priority
          />
        </div>

        {/* Gold divider */}
        <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-8" />

        {/* Pre-heading */}
        <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-6 font-sans">
          The Sharde Williams Collection
        </p>

        {/* Main Heading */}
        <h1 className="heading-xl text-brand-offwhite mb-6">
          Curvy Glam.{" "}
          <span className="gold-gradient-text">Real Confidence.</span>
        </h1>

        {/* Subtext */}
        <p className="text-body max-w-2xl mx-auto mb-10">
          Elevated style, beauty, and essentials for women who own the room.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/shop" className="btn-gold">
            Shop The Staples
          </Link>
          <Link href="/shop" className="btn-outline-gold">
            Explore Collections
          </Link>
        </div>

        {/* Gold decorative line */}
        <div className="gold-divider mt-12" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-brand-gold/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
