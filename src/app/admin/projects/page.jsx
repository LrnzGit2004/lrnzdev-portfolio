import { db } from "@/lib/db"
import Link from "next/link"
import { deleteProject } from "./actions"

export default async function ProjectsPage() {
  const projects = await db.project.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <Link href="/admin/projects/new" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
          + Add Project
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id}>
              <div className="px-4 py-4 sm:px-6 flex justify-between items-center">
                <div className="flex items-center">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-12 h-12 object-cover rounded mr-4" />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 rounded mr-4 flex items-center justify-center text-gray-500">No Img</div>
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-blue-600 truncate">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{project.description.slice(0, 80)}...</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.status === "PUBLISHED" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                    {project.status}
                  </span>
                  <Link href={`/admin/projects/${project.id}`} className="text-indigo-600 hover:text-indigo-900 font-medium text-sm">
                    Edit
                  </Link>
                  <form action={async () => {
                    "use server"
                    await deleteProject(project.id)
                  }}>
                    <button type="submit" className="text-red-600 hover:text-red-900 font-medium text-sm">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </li>
          ))}
          {projects.length === 0 && (
            <li className="px-4 py-8 text-center text-gray-500">No projects found. Create one!</li>
          )}
        </ul>
      </div>
    </div>
  )
}
