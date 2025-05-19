/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For Replit compatibility
  webpack: (config) => {
    // Fix the build process on Replit
    config.resolve.fallback = { fs: false };
    return config;
  },
  // Allow specific cross-origin resources
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig