import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dijgtal.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'mtgassetslads.s3.ap-southeast-2.amazonaws.com',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
