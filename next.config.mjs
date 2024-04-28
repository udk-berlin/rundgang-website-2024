/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.udk-berlin.de",
        port: "",
      },
    ],
  },
};

export default nextConfig;
