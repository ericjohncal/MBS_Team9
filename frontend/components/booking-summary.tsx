"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Ticket } from "lucide-react"
import Link from "next/link"

interface BookingSummaryProps {
  movieId: string
}

export function BookingSummary({ movieId }: BookingSummaryProps) {
  // Mock data - in real app this would come from state/context
  const booking = {
    movie: "Stellar Odyssey",
    theater: "CineMax Downtown",
    date: "March 15, 2024",
    time: "7:30 PM",
    seats: ["E5", "E6"],
    seatPrices: [18, 18],
    convenienceFee: 2.5,
  }

  const subtotal = booking.seatPrices.reduce((a, b) => a + b, 0)
  const total = subtotal + booking.convenienceFee

  return (
    <Card className="p-6 sticky top-24">
      <h3 className="text-xl font-bold mb-6">Booking Summary</h3>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-lg mb-2">{booking.movie}</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{booking.theater}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{booking.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ticket className="h-4 w-4" />
              <span>{booking.seats.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tickets ({booking.seats.length})</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Convenience Fee</span>
          <span className="font-medium">${booking.convenienceFee.toFixed(2)}</span>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="flex justify-between text-lg font-bold mb-6">
        <span>Total</span>
        <span className="text-primary">${total.toFixed(2)}</span>
      </div>

      <Link href={`/payment/${movieId}`}>
        <Button className="w-full" size="lg">
          Proceed to Payment
        </Button>
      </Link>

      <p className="text-xs text-muted-foreground text-center mt-4">
        By proceeding, you agree to our Terms & Conditions
      </p>
    </Card>
  )
}
