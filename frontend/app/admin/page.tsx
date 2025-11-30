import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentBookings } from "@/components/recent-bookings"
import { RevenueChart } from "@/components/revenue-chart"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminHeader title="Dashboard" />
        <main className="p-6 space-y-6">
          <DashboardStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <RecentBookings />
          </div>
        </main>
      </div>
    </div>
  )
}
