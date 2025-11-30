"use client"

import { MapPin, Star, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const theaters = [
  {
    id: 1,
    name: "CineMax Downtown",
    address: "123 Main Street, Downtown",
    distance: "0.5 km",
    rating: 4.5,
    screens: 8,
    features: ["IMAX", "Dolby Atmos", "4K Projection"],
  },
  {
    id: 2,
    name: "CineMax Westside",
    address: "456 West Avenue, Westside",
    distance: "2.3 km",
    rating: 4.3,
    screens: 6,
    features: ["Dolby Atmos", "Recliner Seats"],
  },
  {
    id: 3,
    name: "CineMax Mall Plaza",
    address: "789 Shopping Center, North District",
    distance: "3.8 km",
    rating: 4.7,
    screens: 10,
    features: ["IMAX", "Dolby Atmos", "4K Projection", "VIP Lounge"],
  },
  {
    id: 4,
    name: "CineMax Eastgate",
    address: "321 East Road, Eastgate",
    distance: "5.1 km",
    rating: 4.2,
    screens: 5,
    features: ["Dolby Atmos", "Premium Seats"],
  },
]

export function TheaterList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {theaters.map((theater) => (
        <Card key={theater.id} className="p-6 hover:border-primary/50 transition-colors">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{theater.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4" />
                  <span>{theater.address}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-medium">{theater.rating}</span>
                  </div>
                  <span className="text-muted-foreground">{theater.screens} screens</span>
                  <span className="text-primary font-medium">{theater.distance}</span>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Navigation className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {theater.features.map((feature) => (
                <span key={feature} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {feature}
                </span>
              ))}
            </div>

            <Button className="w-full">View Showtimes</Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
