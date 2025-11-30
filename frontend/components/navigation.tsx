"use client"

import Link from "next/link"
import { Film, User, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold hover:text-primary transition-colors duration-200"
          >
            <Film className="h-6 w-6 text-primary icon-hover" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CineMax</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium nav-link-hover">
              Home
            </Link>
            <Link href="/movies" className="text-sm font-medium nav-link-hover">
              Movies
            </Link>
            <Link href="/theaters" className="text-sm font-medium nav-link-hover">
              Theaters
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild className="btn-hover">
              <Link href="/account">
                <User className="h-4 w-4 mr-2 icon-hover" />
                Account
              </Link>
            </Button>
            <Button size="sm" asChild className="btn-hover">
              <Link href="/login">
                <LogIn className="h-4 w-4 mr-2 icon-hover" />
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
