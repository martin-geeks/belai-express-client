/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        //domains:['www.thetimes.co.uk'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.thetimes.co.uk',
            }]
    }
}

module.exports = nextConfig
