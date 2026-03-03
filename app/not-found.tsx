import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24">
      <section className="py-24 bg-brand-black min-h-[60vh] flex items-center">
        <div className="section-container text-center">
          <p className="text-8xl font-serif font-bold text-brand-gold/20 mb-6">404</p>
          <h1 className="heading-lg text-brand-offwhite mb-4">Page Not Found</h1>
          <div className="gold-divider mb-8" />
          <p className="text-body max-w-md mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-gold">
              Go Home
            </Link>
            <Link href="/shop" className="btn-outline-gold">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
