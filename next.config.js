/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
      },
      {
        source: "/treatments",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
