import { db } from "@/lib/db"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function BlogPostPage({ params }) {
  const post = await db.post.findUnique({
    where: { slug: params.slug }
  })

  // Ensure post exists and is published
  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to articles</Link>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">{post.title}</h1>
        <div className="flex items-center text-gray-500 mb-8">
           <time dateTime={post.createdAt.toISOString()}>{new Date(post.createdAt).toLocaleDateString()}</time>
        </div>
        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} className="w-full h-auto rounded-xl mb-12 shadow-sm" />
        )}
      </div>

      {/* Note: In a real app we'd use react-markdown here */}
      <div className="prose prose-lg prose-blue max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-800 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}
