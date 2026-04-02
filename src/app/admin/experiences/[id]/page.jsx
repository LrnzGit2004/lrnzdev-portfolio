import { updateExperience } from "../actions"
import { db } from "@/lib/db"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function EditExperiencePage({ params }) {
  const exp = await db.experience.findUnique({
    where: { id: params.id }
  })

  if (!exp) notFound()

  const updateExperienceWithId = updateExperience.bind(null, exp.id)

  const formatForDateInput = (dateObject) => {
    if (!dateObject) return ""
    return new Date(dateObject).toISOString().split('T')[0]
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Link href="/admin/experiences" className="text-blue-500 hover:text-blue-700 mr-4">&larr; Back</Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Experience</h1>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <form action={updateExperienceWithId} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input type="text" name="title" defaultValue={exp.title} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input type="text" name="company" defaultValue={exp.company} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input type="date" name="startDate" defaultValue={formatForDateInput(exp.startDate)} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date (leave blank if present)</label>
              <input type="date" name="endDate" defaultValue={formatForDateInput(exp.endDate)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" defaultValue={exp.description} required rows={5} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Link href="/admin/experiences" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 mr-4">
              Cancel
            </Link>
            <button type="submit" className="bg-purple-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-purple-700">
              Update Experience
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
