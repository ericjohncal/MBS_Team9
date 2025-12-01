"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { MovieCard } from "@/components/movie-card";

type MovieRow = {
  id: number;
  title: string;
  genre: string | null;
  rating: number | null;
  duration: string | null;
  image: string | null;
  is_current: boolean;
  is_upcoming: boolean;
};

interface MovieSectionProps {
  title: string;
  type: "now-showing" | "coming-soon";
}

export function MovieSection({ title, type }: MovieSectionProps) {
  const [movies, setMovies] = useState<MovieRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);

      // TEMP: no filters – just grab everything to make sure Supabase works
      const { data, error } = await supabase.from("movies").select("*");

      console.log("Movies query result", { type, data, error });

      if (error) {
  console.error(
    "Error loading movies:",
    error.message,
    error.code,
    error.details,
    error.hint
  );
  setMovies([]);
  setLoading(false);
  return;
}


      setMovies((data ?? []) as MovieRow[]);
      setLoading(false);
    }

    loadMovies();
  }, [type]);

  if (loading) {
    return (
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-gray-500">Loading movies...</p>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <button className="text-primary hover:text-primary/80 font-medium transition-colors">
          View All →
        </button>
      </div>
      {movies.length === 0 ? (
        <p className="text-gray-500">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                id: movie.id,
                title: movie.title,
                genre: movie.genre ?? "",
                rating: movie.rating ?? 0,
                duration: movie.duration ?? "",
                image: movie.image ?? "",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
