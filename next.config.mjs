/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/projects", destination: "/", permanent: false },
      { source: "/testimonials", destination: "/", permanent: false },
    ]
  },
}

export default nextConfig
