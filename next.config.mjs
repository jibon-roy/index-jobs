/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    sassOptions: {
        includePaths: [path.join("./app/global.scss", 'styles')],
    },
};


export default nextConfig;
