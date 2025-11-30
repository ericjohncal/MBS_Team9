"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"

const showtimes = [
  {
    theater: "CineMax Downtown",
    address: "123 Main Street, Downtown",
    distance: "0.5 km",
    times: ["10:00 AM", "1:30 PM", "4:45 PM", "7:30 PM", "10:15 PM"],
  },
  {
    theater: "CineMax Westside",
    address: "456 West Avenue, Westside",
    distance: "2.3 km",
    times: ["11:00 AM", "2:00 PM", "5:30 PM", "8:45 PM"],
  },
  {
    theater: "CineMax Mall Plaza",
    address: "789 Shopping Center, North District",
    distance: "3.8 km",
    times: ["9:30 AM", "12:45 PM", "3:30 PM", "6:15 PM", "9:00 PM", "11:30 PM"],
  },
]

interface ShowtimeSelectorProps {
  movieId: string
}

export function ShowtimeSelector({ movieId }: ShowtimeSelectorProps) {
  const [selectedDate, setSelectedDate] = useState(0)

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    return date
  })

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Select Date & Showtime</h2>

        {/* Date Selector */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
          {dates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(index)}
              className={`flex-shrink-0 px-6 py-4 rounded-xl border-2 transition-all ${
                selectedDate === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className="text-center">
                <div className="text-sm font-medium">{date.toLocaleDateString("en-US", { weekday: "short" })}</div>
                <div className="text-2xl font-bold">{date.getDate()}</div>
                <div className="text-xs opacity-80">{date.toLocaleDateString("en-US", { month: "short" })}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Theater Showtimes */}
      <div className="space-y-6">
        {showtimes.map((showtime, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">{showtime.theater}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{showtime.address}</span>
                  <span className="text-primary font-medium">• {showtime.distance}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {showtime.times.map((time, timeIndex) => (
                <Link key={timeIndex} href={`/booking/${movieId}?theater=${index}&time=${time}`}>
                  <Button
                    variant="outline"
                    className="gap-2 hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    {time}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
