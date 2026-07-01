/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Opcional: Se for usar o componente <Image /> do Next, o GitHub Pages não suporta a otimização de imagem padrão em tempo de execução.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;