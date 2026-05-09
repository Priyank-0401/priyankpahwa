import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/priyankpahwa",
  assetPrefix: "/priyankpahwa",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
