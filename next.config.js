// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     loader: 'cloudinary',
//     path: 'https://res.cloudinary.com/dsjy8ydj7/image/upload/',
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This tells Next.js that res.cloudinary.com is a safe place to pull images from
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // This allows all images from any folder in your Cloudinary account
      },
    ],
    qualities: [75, 90, 100]
  },
};

module.exports = nextConfig;