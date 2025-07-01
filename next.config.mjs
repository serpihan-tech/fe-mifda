/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: false,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false, // ⛔️ abaikan modul ini di browser
    };
    return config;
  },
};

export default nextConfig;
