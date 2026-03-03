import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";
import { SplashScreen } from "@/components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sharde Williams — Curvy Glam. Real Confidence.",
    template: "%s | Sharde Williams",
  },
  description:
    "Elevated style, beauty, and essentials for women who own the room. Shop curated collections by Sharde Williams.",
  keywords: [
    "curvy fashion",
    "plus size style",
    "luxury beauty",
    "women empowerment",
    "Sharde Williams",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sharde Williams",
    title: "Sharde Williams — Curvy Glam. Real Confidence.",
    description:
      "Elevated style, beauty, and essentials for women who own the room.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharde Williams — Curvy Glam. Real Confidence.",
    description:
      "Elevated style, beauty, and essentials for women who own the room.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <CartProvider>
          <SplashScreen />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
