import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AdminLayout({ children }) {
  const session = await auth()

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center font-bold text-xl text-gray-900">
                Portfolio Admin
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-4">
                {session.user.email}
              </span>
              <a
                href="/api/auth/signout"
                className="text-sm font-medium text-red-600 hover:text-red-500"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)] rounded-br-lg p-4">
          <ul className="space-y-2">
            <li><a href="/admin" className="block p-2 text-gray-700 hover:bg-gray-50 rounded">Dashboard</a></li>
            <li><a href="/admin/projects" className="block p-2 text-gray-700 hover:bg-gray-50 rounded">Projects</a></li>
            <li><a href="/admin/references" className="block p-2 text-gray-700 hover:bg-gray-50 rounded">References</a></li>
            <li><a href="/admin/experiences" className="block p-2 text-gray-700 hover:bg-gray-50 rounded">Experiences</a></li>
            <li><a href="/admin/posts" className="block p-2 text-gray-700 hover:bg-gray-50 rounded">Blog Posts</a></li>
            <li><a href="/admin/newsletter" className="block p-2 text-gray-700 hover:bg-gray-50 rounded">Newsletter</a></li>
          </ul>
        </aside>

        <main className="flex-1 p-8 overflow-y-auto h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  )
}
