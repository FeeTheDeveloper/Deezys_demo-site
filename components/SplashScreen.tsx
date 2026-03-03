"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  const dismiss = useCallback(() => {
    if (fading || !visible) return;
    setFading(true);
    setTimeout(() => setVisible(false), 800);
  }, [fading, visible]);

  useEffect(() => {
    const handleInteraction = () => dismiss();

    window.addEventListener("mousemove", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });

    // Auto-dismiss after 4 seconds if no interaction
    const timer = setTimeout(dismiss, 4000);

    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      clearTimeout(timer);
    };
  }, [dismiss]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.12),_transparent_60%)]" />

      {/* Gold corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/30" />

      {/* Logo */}
      <div className="relative animate-fade-in">
        <Image
          src="/images/logo.png"
          alt="Sharde Williams"
          width={320}
          height={320}
          className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] object-contain drop-shadow-[0_0_60px_rgba(212,175,55,0.35)]"
          priority
        />
      </div>

      {/* Brand name */}
      <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
        <p className="text-[#D4AF37] text-sm uppercase tracking-[0.4em] font-sans">
          Sharde Williams
        </p>
      </div>

      {/* Hint */}
      <div
        className="absolute bottom-12 animate-fade-in"
        style={{ animationDelay: "1.5s", animationFillMode: "both" }}
      >
        <p className="text-white/20 text-xs uppercase tracking-widest font-sans">
          Move to enter
        </p>
      </div>
    </div>
  );
}
