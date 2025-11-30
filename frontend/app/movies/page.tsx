import { Navigation } from "@/components/navigation"
import { SearchBar } from "@/components/search-bar"
import { MovieGrid } from "@/components/movie-grid"
import { MovieFilters } from "@/components/movie-filters"

export default function MoviesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">All Movies</h1>
          <p className="text-muted-foreground text-lg">Browse our complete collection of movies</p>
        </div>

        <SearchBar />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <MovieFilters />
          </aside>
          <main className="lg:col-span-3">
            <MovieGrid />
          </main>
        </div>
      </div>
    </div>
  )
}
