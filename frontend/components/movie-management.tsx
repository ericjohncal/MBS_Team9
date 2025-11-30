"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"

const movies = [
  {
    id: 1,
    title: "Stellar Odyssey",
    genre: "Sci-Fi",
    duration: "148 min",
    rating: 8.5,
    status: "now-showing",
    poster: "/sci-fi-space-movie-poster.png",
  },
  {
    id: 2,
    title: "The Last Guardian",
    genre: "Action",
    duration: "132 min",
    rating: 7.8,
    status: "now-showing",
    poster: "/action-movie-poster-hero.jpg",
  },
  {
    id: 3,
    title: "Midnight Tales",
    genre: "Horror",
    duration: "115 min",
    rating: 8.2,
    status: "now-showing",
    poster: "/dark-horror-poster.png",
  },
  {
    id: 4,
    title: "Quantum Realm",
    genre: "Sci-Fi",
    duration: "155 min",
    rating: 0,
    status: "coming-soon",
    poster: "/quantum-physics-sci-fi-poster.jpg",
  },
]

export function MovieManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search movies..." className="pl-9" />
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Movie
        </Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="p-4 font-semibold">Movie</th>
                <th className="p-4 font-semibold">Genre</th>
                <th className="p-4 font-semibold">Duration</th>
                <th className="p-4 font-semibold">Rating</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={movie.poster || "/placeholder.svg"}
                        alt={movie.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <span className="font-medium">{movie.title}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{movie.genre}</td>
                  <td className="p-4 text-muted-foreground">{movie.duration}</td>
                  <td className="p-4">
                    {movie.rating > 0 ? (
                      <span className="font-medium">{movie.rating}/10</span>
                    ) : (
                      <span className="text-muted-foreground">N/A</span>
                    )}
                  </td>
                  <td className="p-4">
                    <Badge variant={movie.status === "now-showing" ? "default" : "secondary"}>
                      {movie.status === "now-showing" ? "Now Showing" : "Coming Soon"}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
