"use client"

import { MovieCard } from "@/components/movie-card"

const nowShowingMovies = [
  {
    id: 1,
    title: "Stellar Odyssey",
    genre: "Sci-Fi",
    rating: 8.5,
    duration: "148 min",
    image: "/sci-fi-space-movie-poster-with-stars-and-spaceship.jpg",
  },
  {
    id: 2,
    title: "The Last Guardian",
    genre: "Action",
    rating: 7.8,
    duration: "132 min",
    image: "/action-movie-poster-with-hero-silhouette.jpg",
  },
  {
    id: 3,
    title: "Midnight Tales",
    genre: "Horror",
    rating: 8.2,
    duration: "115 min",
    image: "/horror-movie-poster-dark-and-mysterious.jpg",
  },
  {
    id: 4,
    title: "Love in Paris",
    genre: "Romance",
    rating: 7.5,
    duration: "105 min",
    image: "/romantic-movie-poster-paris-eiffel-tower.jpg",
  },
]

const comingSoonMovies = [
  {
    id: 5,
    title: "Quantum Realm",
    genre: "Sci-Fi",
    rating: 0,
    duration: "155 min",
    image: "/futuristic-sci-fi-movie-poster-quantum-physics.jpg",
  },
  {
    id: 6,
    title: "Desert Storm",
    genre: "Action",
    rating: 0,
    duration: "140 min",
    image: "/action-movie-poster-desert-warfare.jpg",
  },
  {
    id: 7,
    title: "The Haunting",
    genre: "Horror",
    rating: 0,
    duration: "98 min",
    image: "/horror-movie-poster-haunted-house.jpg",
  },
  {
    id: 8,
    title: "Summer Dreams",
    genre: "Romance",
    rating: 0,
    duration: "112 min",
    image: "/romantic-comedy-movie-poster-beach-summer.jpg",
  },
]

interface MovieSectionProps {
  title: string
  type: "now-showing" | "coming-soon"
}

export function MovieSection({ title, type }: MovieSectionProps) {
  const movies = type === "now-showing" ? nowShowingMovies : comingSoonMovies

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <button className="text-primary hover:text-primary/80 font-medium transition-colors">View All →</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}
