import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

export default nextConfig;
