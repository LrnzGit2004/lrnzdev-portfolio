import { updateProject } from "../actions"
import { db } from "@/lib/db"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const project = await db.project.findUnique({
    where: { id: params.id }
  })

  if (!project) notFound()

  // We need to bind the ID to our server action
  const updateProjectWithId = updateProject.bind(null, project.id)

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Link href="/admin/projects" className="text-blue-500 hover:text-blue-700 mr-4">&larr; Back</Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Project</h1>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <form action={updateProjectWithId} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Title</label>
            <input type="text" name="title" defaultValue={project.title} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" defaultValue={project.description} required rows={4} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="url" name="image" defaultValue={project.image || ""} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Project Link</label>
            <input type="url" name="link" defaultValue={project.link || ""} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tech Stack (comma separated)</label>
            <input type="text" name="techStack" defaultValue={project.techStack.join(", ")} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select name="status" defaultValue={project.status} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500">
              <option value="PUBLISHED">Published</option>
              <option value="DRAFT">Draft</option>
            </select>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Link href="/admin/projects" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 mr-4">
              Cancel
            </Link>
            <button type="submit" className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-blue-700">
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
