/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://cemetery-6fef965af345.herokuapp.com/:path*',
            },
        ];
    }
};

export default nextConfig;
