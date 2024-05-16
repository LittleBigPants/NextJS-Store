/** @type {import('next').NextConfig} */


const nextConfig = {
    sassOptions: {
        prependData: `@import "main.sass"`
    }
};
    
export default nextConfig;