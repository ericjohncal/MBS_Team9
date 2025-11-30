"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Download, Ticket } from "lucide-react"

const bookings = [
  {
    id: "BK123456",
    movie: "Stellar Odyssey",
    poster: "/sci-fi-space-movie-poster.png",
    theater: "CineMax Downtown",
    date: "March 15, 2024",
    time: "7:30 PM",
    seats: ["E5", "E6"],
    total: 42.0,
    status: "upcoming",
  },
  {
    id: "BK123455",
    movie: "The Last Guardian",
    poster: "/action-movie-poster-hero.jpg",
    theater: "CineMax Westside",
    date: "March 10, 2024",
    time: "5:00 PM",
    seats: ["D8", "D9"],
    total: 38.0,
    status: "completed",
  },
  {
    id: "BK123454",
    movie: "Midnight Tales",
    poster: "/dark-horror-poster.png",
    theater: "CineMax Mall Plaza",
    date: "March 5, 2024",
    time: "9:00 PM",
    seats: ["F10", "F11", "F12"],
    total: 57.0,
    status: "completed",
  },
]

export function BookingHistory() {
  return (
    <div className="space-y-6">
      {bookings.map((booking) => (
        <Card key={booking.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Movie Poster */}
            <img
              src={booking.poster || "/placeholder.svg"}
              alt={booking.movie}
              className="w-full md:w-32 h-48 md:h-auto object-cover rounded-lg"
            />

            {/* Booking Details */}
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{booking.movie}</h3>
                  <Badge variant={booking.status === "upcoming" ? "default" : "secondary"}>
                    {booking.status === "upcoming" ? "Upcoming" : "Completed"}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Booking ID</p>
                  <p className="font-mono font-semibold">{booking.id}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{booking.theater}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{booking.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Ticket className="h-4 w-4" />
                  <span>Seats: {booking.seats.join(", ")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="text-xl font-bold text-primary">${booking.total.toFixed(2)}</p>
                </div>
                <div className="flex gap-2">
                  {booking.status === "upcoming" && (
                    <Button variant="outline" size="sm">
                      View Ticket
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
