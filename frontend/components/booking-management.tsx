"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Eye, Download } from "lucide-react"

const bookings = [
  {
    id: "BK123456",
    user: "John Doe",
    movie: "Stellar Odyssey",
    theater: "CineMax Downtown",
    date: "2024-03-15",
    time: "7:30 PM",
    seats: 2,
    amount: 42.0,
    status: "confirmed",
  },
  {
    id: "BK123455",
    user: "Jane Smith",
    movie: "The Last Guardian",
    theater: "CineMax Westside",
    date: "2024-03-14",
    time: "5:00 PM",
    seats: 2,
    amount: 38.0,
    status: "confirmed",
  },
  {
    id: "BK123454",
    user: "Mike Johnson",
    movie: "Midnight Tales",
    theater: "CineMax Mall Plaza",
    date: "2024-03-13",
    time: "9:00 PM",
    seats: 3,
    amount: 57.0,
    status: "pending",
  },
  {
    id: "BK123453",
    user: "Sarah Williams",
    movie: "Love in Paris",
    theater: "CineMax Downtown",
    date: "2024-03-12",
    time: "4:00 PM",
    seats: 2,
    amount: 36.0,
    status: "confirmed",
  },
  {
    id: "BK123452",
    user: "David Brown",
    movie: "Stellar Odyssey",
    theater: "CineMax Eastgate",
    date: "2024-03-11",
    time: "8:00 PM",
    seats: 4,
    amount: 84.0,
    status: "cancelled",
  },
]

export function BookingManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search bookings..." className="pl-9" />
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="p-4 font-semibold">Booking ID</th>
                <th className="p-4 font-semibold">User</th>
                <th className="p-4 font-semibold">Movie</th>
                <th className="p-4 font-semibold">Theater</th>
                <th className="p-4 font-semibold">Date & Time</th>
                <th className="p-4 font-semibold">Seats</th>
                <th className="p-4 font-semibold">Amount</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="p-4 font-mono text-sm">{booking.id}</td>
                  <td className="p-4">{booking.user}</td>
                  <td className="p-4 text-muted-foreground">{booking.movie}</td>
                  <td className="p-4 text-muted-foreground text-sm">{booking.theater}</td>
                  <td className="p-4 text-muted-foreground text-sm">
                    {booking.date} {booking.time}
                  </td>
                  <td className="p-4 text-center">{booking.seats}</td>
                  <td className="p-4 font-semibold">${booking.amount.toFixed(2)}</td>
                  <td className="p-4">
                    <Badge
                      variant={
                        booking.status === "confirmed"
                          ? "default"
                          : booking.status === "pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
