export type Post = {
  slug: string;
  title: string;
  content: string;
};

/*
 * Este es el archivo que simula los datos de tu backend.
 * Cuando tengas tu API lista, deberás reemplazar el uso de este
 * archivo en las páginas por las llamadas a tu API.
 *
 * La estructura de datos esperada es un array de objetos, donde
 * cada objeto representa un artículo y tiene la siguiente forma:
 * {
 *   slug: 'url-amigable-para-el-articulo',
 *   title: 'Título del Artículo',
 *   content: 'El contenido completo del artículo.'
 * }
 */
export const posts: Post[] = [
  {
    slug: 'mi-primer-articulo',
    title: 'Mi Primer Artículo',
    content: 'Este es el contenido de mi primer artículo. ¡Espero que te guste!',
  },
  {
    slug: 'segundo-articulo-sobre-nextjs',
    title: 'Segundo Artículo sobre Next.js',
    content: 'En este artículo, hablamos de las características de Next.js y por qué es genial para blogs.',
  },
  {
    slug: 'seo-para-principiantes',
    title: 'SEO para Principiantes',
    content: 'Aprende los conceptos básicos de SEO y cómo aplicarlos a tu blog para mejorar tu ranking en Google.',
  },
];
