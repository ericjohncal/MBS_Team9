"use client"

import { MovieCard } from "@/components/movie-card"

const allMovies = [
  {
    id: 1,
    title: "Stellar Odyssey",
    genre: "Sci-Fi",
    rating: 8.5,
    duration: "148 min",
    image: "/sci-fi-space-movie-poster.png",
  },
  {
    id: 2,
    title: "The Last Guardian",
    genre: "Action",
    rating: 7.8,
    duration: "132 min",
    image: "/action-movie-poster-hero.jpg",
  },
  {
    id: 3,
    title: "Midnight Tales",
    genre: "Horror",
    rating: 8.2,
    duration: "115 min",
    image: "/dark-horror-poster.png",
  },
  {
    id: 4,
    title: "Love in Paris",
    genre: "Romance",
    rating: 7.5,
    duration: "105 min",
    image: "/romantic-movie-poster-paris.jpg",
  },
  {
    id: 5,
    title: "Quantum Realm",
    genre: "Sci-Fi",
    rating: 8.9,
    duration: "155 min",
    image: "/quantum-physics-sci-fi-poster.jpg",
  },
  {
    id: 6,
    title: "Desert Storm",
    genre: "Action",
    rating: 7.2,
    duration: "140 min",
    image: "/desert-warfare-action-poster.jpg",
  },
  {
    id: 7,
    title: "The Haunting",
    genre: "Horror",
    rating: 8.0,
    duration: "98 min",
    image: "/haunted-house-horror-poster.jpg",
  },
  {
    id: 8,
    title: "Summer Dreams",
    genre: "Romance",
    rating: 7.6,
    duration: "112 min",
    image: "/summer-romance-beach-poster.jpg",
  },
  {
    id: 9,
    title: "City of Shadows",
    genre: "Thriller",
    rating: 8.3,
    duration: "128 min",
    image: "/noir-thriller-city-poster.jpg",
  },
  {
    id: 10,
    title: "Laugh Out Loud",
    genre: "Comedy",
    rating: 7.1,
    duration: "95 min",
    image: "/comedy-movie-poster-funny.jpg",
  },
  {
    id: 11,
    title: "The Journey Home",
    genre: "Drama",
    rating: 8.7,
    duration: "142 min",
    image: "/emotional-drama-movie-poster.jpg",
  },
  {
    id: 12,
    title: "Neon Nights",
    genre: "Sci-Fi",
    rating: 7.9,
    duration: "118 min",
    image: "/cyberpunk-neon-city-poster.jpg",
  },
]

export function MovieGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">{allMovies.length} movies found</p>
        <select className="bg-background border border-border rounded-lg px-4 py-2 text-sm">
          <option>Sort by: Popular</option>
          <option>Sort by: Rating</option>
          <option>Sort by: Release Date</option>
          <option>Sort by: Title</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
