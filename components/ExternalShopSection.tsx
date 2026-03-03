interface ExternalShopSectionProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  bgColor?: "black" | "darkgray";
}

export function ExternalShopSection({
  title,
  description,
  link,
  buttonText,
  bgColor = "black",
}: ExternalShopSectionProps) {
  const bg = bgColor === "darkgray" ? "bg-[#111]" : "bg-brand-black";

  return (
    <section className={`${bg} py-24 relative`}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gold decorative line */}
          <div className="gold-divider mb-8" />

          <h2 className="heading-lg text-brand-offwhite mb-5">{title}</h2>

          <p className="text-body max-w-xl mx-auto mb-10">{description}</p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block rounded-xl px-6 py-3 bg-[#D4AF37] text-black font-semibold hover:opacity-90 transition-all duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>

      {/* Bottom gold divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
    </section>
  );
}
