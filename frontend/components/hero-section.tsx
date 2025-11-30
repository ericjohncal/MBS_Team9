"use client"

import { Button } from "@/components/ui/button"
import { Play, Info } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative h-[70vh] min-h-[500px] mt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/cinematic-movie-theater-with-red-curtains-and-dram.jpg"
          alt="Featured Movie"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium hover:bg-primary/40 hover:border-primary transition-all duration-300 cursor-pointer">
            Now Playing
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Experience Cinema Like Never Before
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-xl">
            Book your tickets now for the latest blockbusters and upcoming releases. Premium seats, immersive sound, and
            unforgettable moments await.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 btn-hover">
              <Play className="h-5 w-5 group-hover:animate-pulse" />
              Watch Trailer
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent btn-hover">
              <Info className="h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
