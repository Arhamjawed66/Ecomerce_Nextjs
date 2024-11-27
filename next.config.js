import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
