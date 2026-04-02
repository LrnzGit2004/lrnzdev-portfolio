import { db } from "@/lib/db"
import Link from "next/link"
import { deleteExperience } from "./actions"

export default async function ExperiencesPage() {
  const experiences = await db.experience.findMany({ orderBy: { startDate: "desc" } })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Experiences</h1>
        <Link href="/admin/experiences/new" className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 transition">
          + Add Experience
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {experiences.map((exp) => (
            <li key={exp.id} className="px-4 py-4 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-purple-600">{exp.title} <span className="text-gray-900">at {exp.company}</span></h3>
                <p className="mt-1 text-sm text-gray-500">
                  {new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
                </p>
                <p className="mt-2 text-sm text-gray-700">{exp.description.slice(0, 100)}...</p>
              </div>
              <div className="flex items-center space-x-4">
                <Link href={`/admin/experiences/${exp.id}`} className="text-indigo-600 hover:text-indigo-900 font-medium text-sm">Edit</Link>
                <form action={async () => { "use server"; await deleteExperience(exp.id) }}>
                  <button type="submit" className="text-red-600 hover:text-red-900 font-medium text-sm">Delete</button>
                </form>
              </div>
            </li>
          ))}
          {experiences.length === 0 && <li className="px-4 py-8 text-center text-gray-500">No experiences found.</li>}
        </ul>
      </div>
    </div>
  )
}
