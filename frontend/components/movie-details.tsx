"use client"

import { Star, Clock, Calendar, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const movieData: Record<string, any> = {
  "1": {
    title: "Stellar Odyssey",
    genre: "Sci-Fi",
    rating: 8.5,
    duration: "148 min",
    releaseDate: "2024-03-15",
    director: "James Cameron",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    description:
      "An epic space adventure that takes you beyond the stars. When a crew of explorers ventures into the unknown reaches of the galaxy, they discover ancient secrets that could change humanity forever.",
    image: "/sci-fi-space-movie-poster.png",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    language: "English",
    certification: "PG-13",
  },
  "2": {
    title: "The Last Guardian",
    genre: "Action",
    rating: 7.8,
    duration: "132 min",
    releaseDate: "2024-02-20",
    director: "Christopher Nolan",
    cast: ["Tom Hardy", "Emily Blunt", "Idris Elba"],
    description:
      "A lone warrior must protect the last hope of civilization from an unstoppable force. Packed with intense action sequences and emotional depth.",
    image: "/action-movie-poster-hero.jpg",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    language: "English",
    certification: "R",
  },
  "3": {
    title: "Midnight Tales",
    genre: "Horror",
    rating: 8.2,
    duration: "115 min",
    releaseDate: "2024-10-31",
    director: "Jordan Peele",
    cast: ["Lupita Nyong'o", "Winston Duke", "Elisabeth Moss"],
    description:
      "A chilling anthology of supernatural stories that will keep you on the edge of your seat. Each tale more terrifying than the last.",
    image: "/dark-horror-poster.png",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    language: "English",
    certification: "R",
  },
}

interface MovieDetailsProps {
  movieId: string
}

export function MovieDetails({ movieId }: MovieDetailsProps) {
  const movie = movieData[movieId] || movieData["1"]

  return (
    <div className="relative mt-16">
      {/* Hero Background */}
      <div className="absolute inset-0 h-[500px]">
        <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <img
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                className="w-full rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>

          {/* Movie Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {movie.certification}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {movie.genre}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {movie.language}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{movie.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <span className="text-xl font-bold text-foreground">{movie.rating}</span>
                  <span className="text-sm">/10</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
                </div>
              </div>

              <Button size="lg" className="gap-2 mb-8">
                <Play className="h-5 w-5" />
                Watch Trailer
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
                <p className="text-muted-foreground leading-relaxed">{movie.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Director</h3>
                <p className="text-muted-foreground">{movie.director}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((actor: string) => (
                    <Badge key={actor} variant="secondary">
                      {actor}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
