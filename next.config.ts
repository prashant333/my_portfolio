import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's strict mode for identifying potential issues
  swcMinify: true,       // Enables SWC minification for better production performance
  typescript: {
    ignoreBuildErrors: true, // Allows builds to proceed even with TypeScript errors
  },
};

export default nextConfig;
