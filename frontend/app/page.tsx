import { HeroSection } from "@/components/hero-section"
import { SearchBar } from "@/components/search-bar"
import { MovieSection } from "@/components/movie-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <MovieSection title="Now Showing" type="now-showing" />
        <MovieSection title="Coming Soon" type="coming-soon" />
      </div>
      <Footer />
    </div>
  )
}
