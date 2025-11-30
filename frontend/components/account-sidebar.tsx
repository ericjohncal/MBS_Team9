"use client"

import { Card } from "@/components/ui/card"
import { User, Ticket, Heart, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: User, label: "Profile", href: "/account" },
  { icon: Ticket, label: "My Bookings", href: "/account/bookings" },
  { icon: Heart, label: "Favorites", href: "/account/favorites" },
  { icon: Settings, label: "Settings", href: "/account/settings" },
]

export function AccountSidebar() {
  const pathname = usePathname()

  return (
    <Card className="p-4 sticky top-24">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          )
        })}

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-destructive/10 text-destructive w-full">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </Card>
  )
}
