import { db } from "@/lib/db"

export default async function AdminDashboardPage() {
  const projectsCount = await db.project.count()
  const referencesCount = await db.reference.count()
  const experiencesCount = await db.experience.count()
  const postsCount = await db.post.count()
  const subscribersCount = await db.subscriber.count()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-500">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">Projects</h2>
          <p className="text-3xl font-bold mt-2 text-gray-900">{projectsCount}</p>
          <a href="/admin/projects" className="text-blue-500 text-sm mt-4 inline-block hover:underline">Manage Projects &rarr;</a>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-green-500">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">References</h2>
          <p className="text-3xl font-bold mt-2 text-gray-900">{referencesCount}</p>
          <a href="/admin/references" className="text-green-500 text-sm mt-4 inline-block hover:underline">Manage References &rarr;</a>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-purple-500">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">Experiences</h2>
          <p className="text-3xl font-bold mt-2 text-gray-900">{experiencesCount}</p>
          <a href="/admin/experiences" className="text-purple-500 text-sm mt-4 inline-block hover:underline">Manage Experiences &rarr;</a>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-yellow-500">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">Blog Posts</h2>
          <p className="text-3xl font-bold mt-2 text-gray-900">{postsCount}</p>
          <a href="/admin/posts" className="text-yellow-500 text-sm mt-4 inline-block hover:underline">Manage Posts &rarr;</a>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-red-500">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">Subscribers</h2>
          <p className="text-3xl font-bold mt-2 text-gray-900">{subscribersCount}</p>
          <a href="/admin/newsletter" className="text-red-500 text-sm mt-4 inline-block hover:underline">Manage Newsletter &rarr;</a>
        </div>
      </div>
    </div>
  )
}
