/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'logowik.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'seeklogo.com',
                port: '',
            },
        ],
    },

};

export default nextConfig;
