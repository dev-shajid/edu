/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:class/:subject/:chapter/:playlistId',
                destination: '/:class/:subject/:chapter/:playlistId/0',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
