import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { MovieManagement } from "@/components/movie-management"

export default function AdminMoviesPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminHeader title="Movies Management" />
        <main className="p-6">
          <MovieManagement />
        </main>
      </div>
    </div>
  )
}
