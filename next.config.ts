import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
 images:{
  remotePatterns:[
    {hostname:"images.pexels.com"},
    {hostname:"images.unsplash.com"},
  ]
}
};

export default nextConfig;
