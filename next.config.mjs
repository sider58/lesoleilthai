/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site vitrine : HTML et images prêts à servir, sans fonction Netlify.
  output: "export",
  images: {
    // Les WebP sont servis directement depuis public/images.
    unoptimized: true,
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
