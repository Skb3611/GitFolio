import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
     {
      protocol:"https",
      hostname:"pub-7e33da773f24477fad91084ffacf40cb.r2.dev",
      port:"",
      pathname:"/templates/**"
     },
     {
      protocol:"https",
      hostname:"gitfolio.in",
      port:"",
      pathname:"/favicon.ico"
     }
    ]
  }
};

export default nextConfig;
