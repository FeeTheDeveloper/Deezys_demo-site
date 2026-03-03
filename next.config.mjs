/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All product images are served from public/images (local).
    // Add remote domains here if external image sources are used later.
    formats: ["image/avif", "image/webp"],
  },
  // Strict React mode for catching bugs early
  reactStrictMode: true,
  // Ensure trailing slashes are consistent
  trailingSlash: false,
};

export default nextConfig;
