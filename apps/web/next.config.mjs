/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"pub-7e33da773f24477fad91084ffacf40cb.r2.dev",
        port:"",
        pathname:'/**'
      }
    ]
  }
}

export default nextConfig
