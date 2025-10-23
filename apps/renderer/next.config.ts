import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://portfolio.gitfolio.test",
    "http://skb3611.gitfolio.test", // your subdomain
    "skb3611.gitfolio.test", // your subdomain
    // add any other dev subdomains here
  ],
};

export default nextConfig;
