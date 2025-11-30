import { Navigation } from "@/components/navigation"
import { TheaterList } from "@/components/theater-list"
import { MapPin } from "lucide-react"

export default function TheatersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Theaters Near You</h1>
          </div>
          <p className="text-muted-foreground text-lg">Find the perfect cinema for your movie experience</p>
        </div>

        <TheaterList />
      </div>
    </div>
  )
}
