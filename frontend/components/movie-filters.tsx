"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export function MovieFilters() {
  const [rating, setRating] = useState([0])

  const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller"]
  const languages = ["English", "Spanish", "French", "Hindi", "Japanese"]

  return (
    <div className="bg-card border border-border rounded-2xl p-6 space-y-6 sticky top-24">
      <div>
        <h3 className="font-bold text-lg mb-4">Filters</h3>
      </div>

      {/* Genre Filter */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Genre</Label>
        <div className="space-y-2">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center gap-2">
              <Checkbox id={genre} />
              <label htmlFor={genre} className="text-sm cursor-pointer">
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Language Filter */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Language</Label>
        <div className="space-y-2">
          {languages.map((language) => (
            <div key={language} className="flex items-center gap-2">
              <Checkbox id={language} />
              <label htmlFor={language} className="text-sm cursor-pointer">
                {language}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Minimum Rating</Label>
        <div className="space-y-2">
          <Slider value={rating} onValueChange={setRating} max={10} step={0.5} className="w-full" />
          <div className="text-sm text-muted-foreground">{rating[0].toFixed(1)}+ stars</div>
        </div>
      </div>
    </div>
  )
}
