"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Edit } from "lucide-react"

export function AccountOverview() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    memberSince: "January 2024",
    totalBookings: 12,
    avatar: "/placeholder.svg?height=100&width=100",
  }

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="text-2xl">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <Badge variant="secondary">Premium Member</Badge>
            </div>
            <p className="text-muted-foreground mb-4">Member since {user.memberSince}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
            </div>
          </div>

          <Button variant="outline" className="gap-2 bg-transparent">
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{user.totalBookings}</div>
            <div className="text-sm text-muted-foreground">Total Bookings</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Favorite Movies</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">$240</div>
            <div className="text-sm text-muted-foreground">Total Spent</div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: "Booked tickets for", movie: "Stellar Odyssey", date: "2 days ago" },
            { action: "Added to favorites", movie: "The Last Guardian", date: "5 days ago" },
            { action: "Booked tickets for", movie: "Midnight Tales", date: "1 week ago" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div>
                <p className="font-medium">
                  {activity.action} <span className="text-primary">{activity.movie}</span>
                </p>
                <p className="text-sm text-muted-foreground">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
