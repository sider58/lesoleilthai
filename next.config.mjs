/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site vitrine statique : HTML et images prêts à servir.
  images: {
    // Les WebP sont servis directement depuis public/images.
    unoptimized: true,
  },
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
