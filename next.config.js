/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        domains: ['medios.plazavip.com', 'resources.claroshop.com', 'www.cdcuauhtemoc.tecnm.mx'],
        unoptimized: true
    },
    // rewrites: function () {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/home'
    //         },
    //     ];
    // }
}

module.exports = nextConfig
