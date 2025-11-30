"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SeatSelectionProps {
  movieId: string
}

type SeatStatus = "available" | "selected" | "booked"

interface Seat {
  id: string
  row: string
  number: number
  status: SeatStatus
  type: "regular" | "premium" | "vip"
}

const seatTypes = {
  regular: { price: 12, color: "bg-muted hover:bg-primary/20" },
  premium: { price: 18, color: "bg-secondary/30 hover:bg-secondary/50" },
  vip: { price: 25, color: "bg-primary/30 hover:bg-primary/50" },
}

export function SeatSelection({ movieId }: SeatSelectionProps) {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
  const seatsPerRow = 12

  const [seats, setSeats] = useState<Seat[]>(() => {
    const initialSeats: Seat[] = []
    rows.forEach((row, rowIndex) => {
      for (let i = 1; i <= seatsPerRow; i++) {
        const isBooked = Math.random() > 0.7
        const isPremium = rowIndex >= 3 && rowIndex <= 6 && i >= 4 && i <= 9
        const isVIP = rowIndex >= 7 && i >= 4 && i <= 9

        initialSeats.push({
          id: `${row}${i}`,
          row,
          number: i,
          status: isBooked ? "booked" : "available",
          type: isVIP ? "vip" : isPremium ? "premium" : "regular",
        })
      }
    })
    return initialSeats
  })

  const toggleSeat = (seatId: string) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId && seat.status !== "booked") {
          return {
            ...seat,
            status: seat.status === "selected" ? "available" : "selected",
          }
        }
        return seat
      }),
    )
  }

  const selectedSeats = seats.filter((s) => s.status === "selected")

  return (
    <Card className="p-6">
      {/* Screen */}
      <div className="mb-12">
        <div className="relative">
          <div className="h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-2" />
          <p className="text-center text-sm text-muted-foreground">SCREEN</p>
        </div>
      </div>

      {/* Seats Grid */}
      <div className="space-y-3 mb-8">
        {rows.map((row) => (
          <div key={row} className="flex items-center gap-2">
            <div className="w-8 text-center font-bold text-muted-foreground">{row}</div>
            <div className="flex gap-2 flex-1 justify-center">
              {seats
                .filter((seat) => seat.row === row)
                .map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => toggleSeat(seat.id)}
                    disabled={seat.status === "booked"}
                    className={cn(
                      "w-8 h-8 rounded-t-lg text-xs font-medium flex items-center justify-center seat-hover",
                      seat.status === "booked" && "bg-muted-foreground/20 cursor-not-allowed",
                      seat.status === "available" && seatTypes[seat.type].color,
                      seat.status === "selected" && "bg-primary text-primary-foreground scale-110",
                    )}
                    title={`${seat.id} - ${seat.type} - $${seatTypes[seat.type].price}`}
                  >
                    {seat.status === "selected" && seat.number}
                  </button>
                ))}
            </div>
            <div className="w-8" />
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 justify-center pt-6 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-muted rounded-t-lg" />
          <span className="text-sm">Available ($12)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-secondary/30 rounded-t-lg" />
          <span className="text-sm">Premium ($18)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary/30 rounded-t-lg" />
          <span className="text-sm">VIP ($25)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-t-lg" />
          <span className="text-sm">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-muted-foreground/20 rounded-t-lg" />
          <span className="text-sm">Booked</span>
        </div>
      </div>

      {/* Selected Seats Info */}
      {selectedSeats.length > 0 && (
        <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-xl animate-in slide-in-from-top-2 transition-all duration-300">
          <p className="font-semibold mb-2">Selected Seats:</p>
          <div className="flex flex-wrap gap-2">
            {selectedSeats.map((seat) => (
              <span
                key={seat.id}
                className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm hover:shadow-md transition-all duration-200"
              >
                {seat.id} (${seatTypes[seat.type].price})
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}
