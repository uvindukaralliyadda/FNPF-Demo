/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  // output: 'export',   // uncomment for a fully static build in /out
};
export default nextConfig;
