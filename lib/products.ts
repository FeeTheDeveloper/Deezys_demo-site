export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "beauty" | "curvy-style" | "fitness-lifestyle";
  externalLink: string;
  featured?: boolean;
  bestSeller?: boolean;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories = [
  {
    slug: "beauty",
    name: "Beauty",
    description: "Luxe beauty essentials that let your glow speak first.",
    image: "/images/category-beauty.png",
  },
  {
    slug: "curvy-style",
    name: "Curvy Style",
    description: "Statement pieces designed for curves that command attention.",
    image: "/images/category-curvy.png",
  },
  {
    slug: "fitness-lifestyle",
    name: "Fitness & Lifestyle",
    description: "Elevated essentials for the woman who moves with purpose.",
    image: "/images/category-fitness.png",
  },
] as const;

export const products: Product[] = [
  // Beauty
  {
    id: "beauty-001",
    name: "Golden Hour Setting Spray",
    price: 34.99,
    description:
      "A luminous setting spray with a subtle gold shimmer that locks your look in place for 16+ hours. Lightweight, buildable, and perfect for every occasion.",
    image: "/images/product-setting-spray.png",
    category: "beauty",
    externalLink: "https://amazon.com",
    featured: true,
    bestSeller: true,
    tags: ["makeup", "setting spray", "glow"],
  },
  {
    id: "beauty-002",
    name: "Velvet Matte Lip Kit — Empress",
    price: 28.00,
    description:
      "Rich, full-coverage matte liquid lip in a deep berry shade. Includes matching liner for a flawless, long-lasting pout.",
    image: "/images/product-lip-kit.png",
    category: "beauty",
    externalLink: "https://amazon.com",
    featured: true,
    bestSeller: true,
    tags: ["lips", "matte", "lip kit"],
  },
  {
    id: "beauty-003",
    name: "Luxury Lash Set — Drama Queen",
    price: 22.00,
    description:
      "25mm mink-style lashes that deliver volume without weight. 3-pack with precision applicator included.",
    image: "/images/product-lashes.png",
    category: "beauty",
    externalLink: "https://amazon.com",
    bestSeller: true,
    tags: ["lashes", "eyes"],
  },
  {
    id: "beauty-004",
    name: "24K Gold Facial Serum",
    price: 54.99,
    description:
      "Infused with real gold particles and hyaluronic acid for deep hydration and an unmistakable glow. Vegan & cruelty-free.",
    image: "/images/product-serum.png",
    category: "beauty",
    externalLink: "https://amazon.com",
    tags: ["skincare", "serum", "gold"],
  },

  // Curvy Style
  {
    id: "style-001",
    name: "Snatched Sculpt Bodysuit",
    price: 48.00,
    description:
      "Seamless compression bodysuit with adjustable straps. Sculpts and smooths while keeping you comfortable all day. Available in xs–4X.",
    image: "/images/product-bodysuit.png",
    category: "curvy-style",
    externalLink: "https://amazon.com",
    featured: true,
    bestSeller: true,
    tags: ["bodysuit", "shapewear", "curves"],
  },
  {
    id: "style-002",
    name: "Power Blazer — Noir",
    price: 89.00,
    description:
      "Tailored oversized blazer designed for curvy frames. Structured shoulders, nipped waist, and luxe satin lining.",
    image: "/images/product-blazer.png",
    category: "curvy-style",
    externalLink: "https://amazon.com",
    bestSeller: true,
    tags: ["blazer", "outerwear", "power"],
  },
  {
    id: "style-003",
    name: "Gold Chain Belt — Statement",
    price: 38.00,
    description:
      "Adjustable chain belt with interlocking gold-tone links. The finishing touch for any outfit.",
    image: "/images/product-belt.png",
    category: "curvy-style",
    externalLink: "https://amazon.com",
    tags: ["accessories", "belt", "gold"],
  },
  {
    id: "style-004",
    name: "Curve-Hug Midi Dress — Champagne",
    price: 72.00,
    description:
      "Body-hugging stretch midi dress in champagne satin. Ruched sides for a flattering silhouette on every body type.",
    image: "/images/product-midi-dress.png",
    category: "curvy-style",
    externalLink: "https://amazon.com",
    featured: true,
    tags: ["dress", "evening", "satin"],
  },

  // Fitness & Lifestyle
  {
    id: "fit-001",
    name: "Boss Mode Gym Set — Onyx",
    price: 64.00,
    description:
      "High-waisted leggings + sports bra in premium compression fabric. Sweat-wicking, squat-proof, and designed for curves.",
    image: "/images/product-gym-set.png",
    category: "fitness-lifestyle",
    externalLink: "https://amazon.com",
    featured: true,
    bestSeller: true,
    tags: ["gym", "activewear", "set"],
  },
  {
    id: "fit-002",
    name: "Luxe Shaker Bottle — Black & Gold",
    price: 24.00,
    description:
      "Stainless steel shaker with matte black finish and gold accents. 24oz capacity with leak-proof lid.",
    image: "/images/product-shaker.png",
    category: "fitness-lifestyle",
    externalLink: "https://amazon.com",
    tags: ["fitness", "accessories", "bottle"],
  },
  {
    id: "fit-003",
    name: "Self-Care Journal — Golden Intentions",
    price: 29.00,
    description:
      "Guided journal with daily affirmations, goal-setting prompts, and gratitude pages. Gold foil cover, 200 pages.",
    image: "/images/product-journal.png",
    category: "fitness-lifestyle",
    externalLink: "https://amazon.com",
    bestSeller: true,
    tags: ["journal", "self-care", "wellness"],
  },
  {
    id: "fit-004",
    name: "Resistance Band Set — Glam Edition",
    price: 32.00,
    description:
      "Set of 5 fabric resistance bands in graduated strengths. Gold-stamped carrying pouch included.",
    image: "/images/product-bands.png",
    category: "fitness-lifestyle",
    externalLink: "https://amazon.com",
    tags: ["fitness", "bands", "workout"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}
