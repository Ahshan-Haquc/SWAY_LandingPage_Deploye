import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // port: "",      // leave empty unless  need a specific port
        // pathname: "**", // optional: restrict to certain paths if  want
      },
    ],
  },
  reactCompiler: true,
  // experimental: {
  //   turbopack: false,
  // },
};

export default nextConfig;