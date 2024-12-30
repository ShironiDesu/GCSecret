/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  sassOptions: {
    quietDeps: true, // Отключает предупреждения от Sass
  },
};

export default nextConfig;
