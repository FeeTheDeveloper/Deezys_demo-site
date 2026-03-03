import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sharde Williams — entrepreneur, content creator, and advocate for curvy confidence. Discover the story behind the brand.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative aspect-[3/4] bg-brand-gray-dark border border-brand-gold/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-mid to-brand-black flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-brand-gold/20 flex items-center justify-center">
                    <span className="text-4xl font-serif text-brand-gold/30">SW</span>
                  </div>
                  <p className="text-xs text-brand-offwhite/20 uppercase tracking-widest font-sans">
                    Sharde Williams
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-brand-gold/20 -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
                Meet The Founder
              </p>
              <h1 className="heading-lg text-brand-offwhite mb-6">
                I&apos;m Sharde Williams
              </h1>
              <div className="w-16 h-0.5 bg-brand-gold mb-8" />

              <div className="space-y-5">
                <p className="text-body">
                  Entrepreneur, content creator, and the woman behind the brand. I
                  started this journey because I was tired of seeing curvy women left
                  out of the luxury conversation.
                </p>
                <p className="text-body">
                  Every product I curate, every piece of content I create, and every
                  brand I build is rooted in one belief: <strong className="text-brand-gold">confidence
                  looks good on everybody.</strong>
                </p>
                <p className="text-body">
                  From beauty staples that actually work to fashion that celebrates
                  every curve — I&apos;m here to help you walk into every room knowing
                  you&apos;re <em>that woman.</em>
                </p>
              </div>

              <div className="mt-10">
                <Link href="/work-with-me" className="btn-gold">
                  Work With Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-gray-dark">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
              What I Stand For
            </p>
            <h2 className="heading-lg text-brand-offwhite mb-4">The Mission</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Confidence First",
                description:
                  "Everything starts with how you feel about yourself. My products are selected to make you feel unstoppable.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
              {
                title: "Inclusive Luxury",
                description:
                  "Luxury isn't a size. It's a standard. Every product is chosen with curvy women at the center of the conversation.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
              {
                title: "Real Community",
                description:
                  "This isn't just a store — it's a sisterhood. Join thousands of women supporting, inspiring, and uplifting each other.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 bg-brand-black border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 group"
              >
                <div className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-serif text-brand-offwhite mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-brand-offwhite/50 leading-relaxed font-sans">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
