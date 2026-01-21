import Link from 'next/link';
import { posts } from '@/lib/mock-posts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">Mi Blog</h1>
        <p className="mt-4 text-lg text-gray-600">
          Un espacio para compartir ideas sobre tecnología, desarrollo y más.
        </p>
      </header>
      <section className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold border-b pb-4 mb-8">Últimos Artículos</h2>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <span className="text-2xl font-semibold text-blue-600 hover:underline">
                  {post.title}
                </span>
              </Link>
              <p className="mt-2 text-gray-700">
                {post.content.substring(0, 100)}...
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
