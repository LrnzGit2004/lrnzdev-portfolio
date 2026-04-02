import { db } from "@/lib/db"
import { deleteSubscriber, toggleSubscriberStatus } from "./actions"

export default async function NewsletterPage() {
  const subscribers = await db.subscriber.findMany({ orderBy: { createdAt: "desc" } })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Newsletter Subscribers</h1>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {subscribers.map((sub) => (
            <li key={sub.id} className="px-4 py-4 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{sub.email}</h3>
                <p className="mt-1 text-sm text-gray-500">Subscribed: {new Date(sub.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${sub.status === "ACTIVE" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                  {sub.status}
                </span>

                <form action={async () => { "use server"; await toggleSubscriberStatus(sub.id, sub.status) }}>
                  <button type="submit" className="text-indigo-600 hover:text-indigo-900 font-medium text-sm">
                    {sub.status === "ACTIVE" ? "Unsubscribe" : "Activate"}
                  </button>
                </form>

                <form action={async () => { "use server"; await deleteSubscriber(sub.id) }}>
                  <button type="submit" className="text-red-600 hover:text-red-900 font-medium text-sm">Delete</button>
                </form>
              </div>
            </li>
          ))}
          {subscribers.length === 0 && <li className="px-4 py-8 text-center text-gray-500">No subscribers yet.</li>}
        </ul>
      </div>
    </div>
  )
}
