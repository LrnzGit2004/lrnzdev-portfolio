import { db } from "@/lib/db"
import Link from "next/link"
import { deletePost } from "./actions"

export default async function PostsPage() {
  const posts = await db.post.findMany({ orderBy: { createdAt: "desc" } })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        <Link href="/admin/posts/new" className="bg-yellow-600 text-white px-4 py-2 rounded shadow hover:bg-yellow-700 transition">
          + Add Post
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {posts.map((post) => (
            <li key={post.id} className="px-4 py-4 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-yellow-600">{post.title}</h3>
                <p className="mt-1 text-sm text-gray-500">/{post.slug}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                  {post.published ? 'Published' : 'Draft'}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <Link href={`/admin/posts/${post.id}`} className="text-indigo-600 hover:text-indigo-900 font-medium text-sm">Edit</Link>
                <form action={async () => { "use server"; await deletePost(post.id) }}>
                  <button type="submit" className="text-red-600 hover:text-red-900 font-medium text-sm">Delete</button>
                </form>
              </div>
            </li>
          ))}
          {posts.length === 0 && <li className="px-4 py-8 text-center text-gray-500">No posts found. Write something!</li>}
        </ul>
      </div>
    </div>
  )
}
