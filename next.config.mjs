/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: [
    {
      protocol: "http",
      hostname: "localhost",
      port: "3000",
      pathname: "/images/**",
    },
    {
      protocol: "https",
      hostname: "https://assignment-4-rp3q.vercel.app/",
      port: "",
      pathname: "/images/**",
    },
  ],
};

export default nextConfig;
