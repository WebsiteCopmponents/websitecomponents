import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webcomponents.blog",
        port: "",
        pathname: "/**",
      },
      // add other hosts here if needed
    ],
  },
};

export default nextConfig;
