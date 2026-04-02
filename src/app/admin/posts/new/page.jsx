import { createPost } from "../actions"
import Link from "next/link"

export default function NewPostPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Link href="/admin/posts" className="text-blue-500 hover:text-blue-700 mr-4">&larr; Back</Link>
        <h1 className="text-3xl font-bold text-gray-900">Write New Post</h1>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <form action={createPost} className="space-y-6">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-md border">
             <label className="flex items-center text-lg font-medium text-gray-700">
                <input type="checkbox" name="published" value="1" className="w-5 h-5 mr-3 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" />
                Publish this post
             </label>
             <button type="submit" className="bg-yellow-600 border border-transparent rounded-md shadow-sm py-2 px-6 text-sm font-medium text-white hover:bg-yellow-700">
              Save Post
             </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="title" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Slug / URL path (Optional, generated from title if blank)</label>
            <input type="text" name="slug" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
            <input type="url" name="coverImage" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Content (Markdown supported if you add a renderer later)</label>
            <textarea name="content" required rows={20} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 font-mono text-sm"></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}
