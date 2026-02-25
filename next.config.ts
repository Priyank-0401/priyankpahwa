import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Only use the basePath when building for production (GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/priyankpahwa" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
