/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
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
