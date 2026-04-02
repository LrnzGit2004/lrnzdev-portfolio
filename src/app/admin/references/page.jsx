import { db } from "@/lib/db"
import Link from "next/link"
import { deleteReference } from "./actions"

export default async function ReferencesPage() {
  const references = await db.reference.findMany({ orderBy: { createdAt: "desc" } })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">References</h1>
        <Link href="/admin/references/new" className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition">
          + Add Reference
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {references.map((ref) => (
            <li key={ref.id} className="px-4 py-4 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{ref.name} <span className="text-sm font-normal text-gray-500">at {ref.company}</span></h3>
                <p className="mt-1 text-sm text-gray-700 italic">"{ref.testimony.slice(0, 80)}..."</p>
              </div>
              <div className="flex items-center space-x-4">
                <Link href={`/admin/references/${ref.id}`} className="text-indigo-600 hover:text-indigo-900 font-medium text-sm">Edit</Link>
                <form action={async () => { "use server"; await deleteReference(ref.id) }}>
                  <button type="submit" className="text-red-600 hover:text-red-900 font-medium text-sm">Delete</button>
                </form>
              </div>
            </li>
          ))}
          {references.length === 0 && <li className="px-4 py-8 text-center text-gray-500">No references found.</li>}
        </ul>
      </div>
    </div>
  )
}
