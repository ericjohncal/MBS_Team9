import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { BookingManagement } from "@/components/booking-management"

export default function AdminBookingsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminHeader title="Bookings Management" />
        <main className="p-6">
          <BookingManagement />
        </main>
      </div>
    </div>
  )
}
