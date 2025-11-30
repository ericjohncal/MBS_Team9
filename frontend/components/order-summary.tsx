"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Ticket, Film } from "lucide-react"

interface OrderSummaryProps {
  movieId: string
}

export function OrderSummary({ movieId }: OrderSummaryProps) {
  // Mock data - in real app this would come from state/context
  const order = {
    movie: "Stellar Odyssey",
    poster: "/sci-fi-space-movie-poster.png",
    theater: "CineMax Downtown",
    address: "123 Main Street, Downtown",
    date: "March 15, 2024",
    time: "7:30 PM",
    seats: ["E5", "E6"],
    seatType: "Premium",
    ticketPrice: 18,
    quantity: 2,
    convenienceFee: 2.5,
    taxes: 3.5,
  }

  const subtotal = order.ticketPrice * order.quantity
  const total = subtotal + order.convenienceFee + order.taxes

  return (
    <Card className="p-6 sticky top-24">
      <h3 className="text-xl font-bold mb-6">Order Summary</h3>

      {/* Movie Info */}
      <div className="flex gap-4 mb-6">
        <img src={order.poster || "/placeholder.svg"} alt={order.movie} className="w-20 h-28 object-cover rounded-lg" />
        <div className="flex-1">
          <h4 className="font-semibold mb-2 line-clamp-2">{order.movie}</h4>
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex items-center gap-1">
              <Film className="h-3 w-3" />
              <span>{order.seatType}</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Booking Details */}
      <div className="space-y-3 mb-6 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
          <div>
            <div className="font-medium">{order.theater}</div>
            <div className="text-muted-foreground text-xs">{order.address}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{order.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>{order.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Ticket className="h-4 w-4 text-muted-foreground" />
          <span>Seats: {order.seats.join(", ")}</span>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Price Breakdown */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Tickets ({order.quantity} × ${order.ticketPrice})
          </span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Convenience Fee</span>
          <span className="font-medium">${order.convenienceFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Taxes</span>
          <span className="font-medium">${order.taxes.toFixed(2)}</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between text-lg font-bold">
        <span>Total Amount</span>
        <span className="text-primary">${total.toFixed(2)}</span>
      </div>

      <div className="mt-6 p-3 bg-primary/10 border border-primary/30 rounded-lg">
        <p className="text-xs text-center text-muted-foreground">
          You will receive a confirmation email and SMS with your booking details
        </p>
      </div>
    </Card>
  )
}
