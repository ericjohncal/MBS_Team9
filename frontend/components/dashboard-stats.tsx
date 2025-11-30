"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Ticket, Users, Film } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Bookings",
    value: "1,234",
    change: "+8.2%",
    trend: "up",
    icon: Ticket,
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+3.1%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Movies Listed",
    value: "156",
    change: "-2.4%",
    trend: "down",
    icon: Film,
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown

        return (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                <TrendIcon className="h-4 w-4" />
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
