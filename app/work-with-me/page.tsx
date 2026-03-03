import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Partner with Sharde Williams on brand collaborations, sponsored content, and influencer partnerships.",
};

export default function WorkWithMePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="section-container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-8" />
            <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
              Partnerships & Collaborations
            </p>
            <h1 className="heading-lg text-brand-offwhite mb-6">
              Let&apos;s Create Something{" "}
              <span className="gold-gradient-text">Powerful Together</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              I partner with brands that align with my mission of empowerment, luxury,
              and inclusivity. If your brand serves confident women, let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-brand-gray-dark">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
              How We Can Work Together
            </p>
            <h2 className="heading-lg text-brand-offwhite mb-4">Services</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Brand Collaborations",
                description:
                  "Strategic partnerships that put your product in front of an engaged, loyal audience of curvy, confident women.",
                details: [
                  "Instagram content creation",
                  "Product reviews & styling",
                  "Long-term ambassadorships",
                ],
              },
              {
                title: "Sponsored Content",
                description:
                  "Authentic, high-quality content that tells your brand story while resonating with my community.",
                details: [
                  "Blog posts & articles",
                  "YouTube videos",
                  "TikTok & Reels",
                ],
              },
              {
                title: "Affiliate Marketing",
                description:
                  "Performance-based partnerships that drive real sales through trusted recommendations.",
                details: [
                  "Amazon affiliate integration",
                  "LTK partnerships",
                  "Custom landing pages",
                ],
              },
              {
                title: "Speaking & Events",
                description:
                  "Empowering talks on confidence, entrepreneurship, and building a personal brand.",
                details: [
                  "Keynote speaking",
                  "Panel discussions",
                  "Brand events & launches",
                ],
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="p-8 bg-brand-black border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 group"
              >
                <div className="text-brand-gold/20 text-5xl font-serif font-bold mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-serif text-brand-offwhite mb-3 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-offwhite/50 leading-relaxed mb-4 font-sans">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-xs text-brand-offwhite/40 font-sans flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-brand-gold rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-black">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="gold-divider mb-8" />
            <h2 className="heading-lg text-brand-offwhite mb-4">Ready to Collaborate?</h2>
            <p className="text-body mb-10">
              Send me the details of your project and let&apos;s explore how we can work
              together to create something incredible.
            </p>
            <a
              href="mailto:contact@shardewilliams.com"
              className="btn-gold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
