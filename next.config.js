// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://cemetery-backend.yorafa.com/:path*',
          },
        ]
      },
  };