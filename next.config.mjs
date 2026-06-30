/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the whole store deploys to any static host (Netlify Drop).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
