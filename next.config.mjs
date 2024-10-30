/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    protocol: "http",
    hostname: "https://assignment-4-rp3q.vercel.app/",
    port: "",
    pathname: "./Public/images/**",
  },
};

export default nextConfig;
