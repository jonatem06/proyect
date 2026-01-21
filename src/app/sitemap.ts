import { MetadataRoute } from 'next';
import { posts } from '@/lib/mock-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://[URL_DEL_BLOG]'; // <-- Reemplaza esto con tu dominio

  // URLs de los artículos
  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: new Date(), // Puedes hacer esto más dinámico si tienes fechas en tus datos
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
