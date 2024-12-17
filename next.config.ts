import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dijgtal.com',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
