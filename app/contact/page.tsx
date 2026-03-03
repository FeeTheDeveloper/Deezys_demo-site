"use client";

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-brand-black border-b border-brand-gold/10">
        <div className="section-container text-center">
          <p className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
            Get In Touch
          </p>
          <h1 className="heading-lg text-brand-offwhite mb-4">Contact</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-brand-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="heading-md text-brand-offwhite mb-6">
                Let&apos;s Connect
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold mb-8" />

              <p className="text-body mb-10">
                Whether you have a question about a product, want to collaborate, or
                just want to say hi — I&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-gold/20 text-brand-gold flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-brand-offwhite mb-1">Email</p>
                    <a
                      href="mailto:contact@shardewilliams.com"
                      className="text-sm text-brand-offwhite/50 hover:text-brand-gold transition-colors font-sans"
                    >
                      contact@shardewilliams.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-gold/20 text-brand-gold flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-brand-offwhite mb-1">Social</p>
                    <p className="text-sm text-brand-offwhite/50 font-sans">
                      @shardewilliams on all platforms
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-gold/20 text-brand-gold flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-brand-offwhite mb-1">Response Time</p>
                    <p className="text-sm text-brand-offwhite/50 font-sans">
                      Usually within 24–48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-gray-dark border border-brand-gold/10 p-8 sm:p-10">
              <h3 className="text-lg font-serif text-brand-offwhite mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-brand-offwhite/40 mb-2 font-sans">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-brand-black border border-brand-gold/20 text-brand-offwhite text-sm px-4 py-3 focus:outline-none focus:border-brand-gold placeholder:text-brand-offwhite/20 transition-colors font-sans"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-brand-offwhite/40 mb-2 font-sans">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-brand-black border border-brand-gold/20 text-brand-offwhite text-sm px-4 py-3 focus:outline-none focus:border-brand-gold placeholder:text-brand-offwhite/20 transition-colors font-sans"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-brand-offwhite/40 mb-2 font-sans">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full bg-brand-black border border-brand-gold/20 text-brand-offwhite text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors font-sans"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Brand Collaboration</option>
                    <option value="product">Product Question</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-brand-offwhite/40 mb-2 font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-brand-black border border-brand-gold/20 text-brand-offwhite text-sm px-4 py-3 focus:outline-none focus:border-brand-gold placeholder:text-brand-offwhite/20 transition-colors resize-none font-sans"
                    placeholder="Tell me what's on your mind..."
                  />
                </div>

                <button type="submit" className="btn-gold w-full text-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
