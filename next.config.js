/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.bmkg.go.id',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
