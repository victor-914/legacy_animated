/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["ec2-13-51-65-133.eu-north-1.compute.amazonaws.com"], // Add your domain here
  },
};

export default nextConfig;




