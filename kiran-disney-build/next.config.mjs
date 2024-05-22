// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




import ('lucide-react')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "links.papareact.com"
            }

        ]
    }
}

export default nextConfig;


