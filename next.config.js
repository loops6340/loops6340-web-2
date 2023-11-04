/** @type {import('next').NextConfig} */
const nextConfig = {
    // serverActions: true,
    // experimental: {
    //     serverActions: true
    // }
    images: {
        "domains": ["i.ytimg.com"],
        protocol: "https", 
        hostname: "i.ytimg.com",
        port: "",
    }
}

module.exports = nextConfig
