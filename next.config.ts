import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Ignore basePath if you use a custom domain!
  basePath: "/priyankpahwa",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
