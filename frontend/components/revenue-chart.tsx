"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 25000 },
  { month: "Jun", revenue: 28000 },
]

export function RevenueChart() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-6">Revenue Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(38, 38, 38, 0.3)" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#a3a3a3" />
          <YAxis tick={{ fontSize: 12 }} stroke="#a3a3a3" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#141414",
              border: "1px solid #262626",
              borderRadius: "8px",
              color: "#f5f5f5",
            }}
          />
          <Bar dataKey="revenue" fill="#dc2626" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
