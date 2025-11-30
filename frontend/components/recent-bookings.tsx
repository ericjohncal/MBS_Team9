"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const bookings = [
  {
    id: "BK123456",
    user: "John Doe",
    movie: "Stellar Odyssey",
    amount: 42.0,
    status: "confirmed",
  },
  {
    id: "BK123455",
    user: "Jane Smith",
    movie: "The Last Guardian",
    amount: 38.0,
    status: "confirmed",
  },
  {
    id: "BK123454",
    user: "Mike Johnson",
    movie: "Midnight Tales",
    amount: 57.0,
    status: "pending",
  },
  {
    id: "BK123453",
    user: "Sarah Williams",
    movie: "Love in Paris",
    amount: 36.0,
    status: "confirmed",
  },
]

export function RecentBookings() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-6">Recent Bookings</h3>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {booking.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{booking.user}</p>
                <p className="text-sm text-muted-foreground">{booking.movie}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">${booking.amount.toFixed(2)}</p>
              <Badge variant={booking.status === "confirmed" ? "default" : "secondary"} className="text-xs">
                {booking.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
