/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
              },
              {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
              },
              {
                protocol: "https",
                hostname: "media.istockphoto.com",
              },
        ],
      },
};

export default nextConfig;
