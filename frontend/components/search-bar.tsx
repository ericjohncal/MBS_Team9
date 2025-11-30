"use client"

import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  return (
    <div className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search movies, genres..." className="pl-10 h-12 bg-background border-border" />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Location" className="pl-10 h-12 bg-background border-border" />
          </div>
          <Button size="lg" className="h-12">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}
