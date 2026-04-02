import { createReference } from "../actions"
import Link from "next/link"

export default function NewReferencePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Link href="/admin/references" className="text-blue-500 hover:text-blue-700 mr-4">&larr; Back</Link>
        <h1 className="text-3xl font-bold text-gray-900">Add New Reference</h1>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <form action={createReference} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input type="text" name="company" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input type="text" name="role" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Testimony</label>
            <textarea name="testimony" required rows={4} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Link (optional)</label>
            <input type="url" name="link" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" />
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Link href="/admin/references" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 mr-4">
              Cancel
            </Link>
            <button type="submit" className="bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700">
              Save Reference
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
