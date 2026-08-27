import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rv-corporate-needs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;