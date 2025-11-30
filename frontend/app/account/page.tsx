import { Navigation } from "@/components/navigation"
import { AccountSidebar } from "@/components/account-sidebar"
import { AccountOverview } from "@/components/account-overview"
import { Footer } from "@/components/footer"

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <AccountSidebar />
          </aside>
          <main className="lg:col-span-3">
            <AccountOverview />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
