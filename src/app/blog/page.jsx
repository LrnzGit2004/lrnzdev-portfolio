import { db } from "@/lib/db"
import Link from "next/link"
import NewsletterForm from "@/components/NewsletterForm"

export default async function BlogIndexPage() {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Articles & Thoughts</h1>
        <p className="mt-4 text-xl text-gray-500">Writing about development, design, and my journey.</p>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <Link href={`/blog/${post.slug}`}>
                <span className="absolute inset-0"></span>
                {post.title}
              </Link>
            </h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <time dateTime={post.createdAt.toISOString()}>{new Date(post.createdAt).toLocaleDateString()}</time>
            </div>
            {post.coverImage && (
              <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            )}
            <p className="text-gray-600 line-clamp-3">
              {post.content.slice(0, 200)}...
            </p>
            <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800">
              Read more &rarr;
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-center text-gray-500">No blog posts yet.</p>
        )}
      </div>

      <div className="mt-20">
        <NewsletterForm />
      </div>
    </div>
  )
}
