/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.postimg.cc', 
      'img.icons8.com', 
      'cdn-icons-png.flaticon.com',
      'www.flaticon.es',
      'www.capterra.cl' // Se agregó este dominio que aparece en tu error
    ], 
  },
  // Otras configuraciones de Next.js
};

module.exports = nextConfig;
