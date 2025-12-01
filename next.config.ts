import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  reactCompiler: true,
  // experimental: {
  //   turbopack: false,
  // },
};

export default nextConfig;
