"use client"

import Link from "next/link"
import { Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Movie {
  id: number
  title: string
  genre: string
  rating: number
  duration: string
  image: string
}

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 movie-card-hover">
        {/* Movie Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Genre Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
            {movie.genre}
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">{movie.title}</h3>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {movie.rating > 0 ? (
                <>
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="font-medium text-foreground">{movie.rating}</span>
                </>
              ) : (
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Coming Soon</span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{movie.duration}</span>
            </div>
          </div>

          <Button className="w-full btn-hover" size="sm">
            {movie.rating > 0 ? "Book Now" : "Notify Me"}
          </Button>
        </div>
      </div>
    </Link>
  )
}
