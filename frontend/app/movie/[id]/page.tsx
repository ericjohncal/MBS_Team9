import { Navigation } from "@/components/navigation"
import { MovieDetails } from "@/components/movie-details"
import { ShowtimeSelector } from "@/components/showtime-selector"
import { Footer } from "@/components/footer"

export default function MoviePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <MovieDetails movieId={params.id} />
      <div className="container mx-auto px-4 py-12">
        <ShowtimeSelector movieId={params.id} />
      </div>
      <Footer />
    </div>
  )
}
