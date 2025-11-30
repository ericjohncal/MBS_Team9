"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download, Mail, Calendar, Clock, MapPin, Ticket, Film } from "lucide-react"
import Link from "next/link"

interface BookingConfirmationProps {
  movieId: string
}

export function BookingConfirmation({ movieId }: BookingConfirmationProps) {
  const booking = {
    bookingId: "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    movie: "Stellar Odyssey",
    poster: "/sci-fi-space-movie-poster.png",
    theater: "CineMax Downtown",
    address: "123 Main Street, Downtown",
    date: "March 15, 2024",
    time: "7:30 PM",
    seats: ["E5", "E6"],
    seatType: "Premium",
    quantity: 2,
    total: 42.0,
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Success Message */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4">
          <CheckCircle2 className="h-10 w-10 text-green-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-muted-foreground text-lg">Your tickets have been successfully booked</p>
      </div>

      {/* Booking Details Card */}
      <Card className="p-8 mb-6">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Booking ID</p>
            <p className="text-2xl font-bold font-mono">{booking.bookingId}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Total Paid</p>
            <p className="text-2xl font-bold text-primary">${booking.total.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Movie Poster */}
          <div>
            <img
              src={booking.poster || "/placeholder.svg"}
              alt={booking.movie}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Booking Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">{booking.movie}</h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{booking.theater}</div>
                  <div className="text-muted-foreground">{booking.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">{booking.date}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">{booking.time}</span>
              </div>

              <div className="flex items-center gap-3">
                <Ticket className="h-5 w-5 text-primary" />
                <span className="font-medium">Seats: {booking.seats.join(", ")}</span>
              </div>

              <div className="flex items-center gap-3">
                <Film className="h-5 w-5 text-primary" />
                <span className="font-medium">
                  {booking.seatType} × {booking.quantity}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-muted/50 rounded-xl p-6 text-center">
          <div className="inline-block bg-white p-4 rounded-lg mb-4">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="QR Code"
              className="w-48 h-48 mx-auto"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <p className="text-sm text-muted-foreground">Show this QR code at the theater entrance</p>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Button size="lg" variant="outline" className="gap-2 bg-transparent">
          <Download className="h-5 w-5" />
          Download Ticket
        </Button>
        <Button size="lg" variant="outline" className="gap-2 bg-transparent">
          <Mail className="h-5 w-5" />
          Email Ticket
        </Button>
      </div>

      {/* Info Box */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h4 className="font-semibold mb-3">Important Information</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Please arrive at least 15 minutes before showtime</li>
          <li>• Carry a valid ID proof for verification</li>
          <li>• Outside food and beverages are not allowed</li>
          <li>• Tickets once booked cannot be cancelled or refunded</li>
        </ul>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
        <Link href="/">
          <Button variant="outline" size="lg">
            Back to Home
          </Button>
        </Link>
        <Link href="/account/bookings">
          <Button size="lg">View My Bookings</Button>
        </Link>
      </div>
    </div>
  )
}
