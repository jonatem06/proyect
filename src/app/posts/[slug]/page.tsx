import { notFound } from 'next/navigation';
import { posts } from '@/lib/mock-posts';
import type { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

// Función para generar metadatos dinámicos para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160), // Límite estándar para descripciones meta
  };
}

// Función para generar las rutas estáticas
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-24">
      <article className="w-full max-w-3xl">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
        </header>
        <div className="prose prose-lg max-w-none text-gray-800">
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}
