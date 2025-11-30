import Link from "next/link"
import { Film, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold hover:text-primary transition-colors duration-200"
            >
              <Film className="h-6 w-6 text-primary icon-hover" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CineMax</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your premier destination for the ultimate cinema experience. Book tickets, explore movies, and enjoy the
              show.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/movies" className="link-hover">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/theaters" className="link-hover">
                  Theaters
                </Link>
              </li>
              <li>
                <Link href="/account" className="link-hover">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="link-hover">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="link-hover">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-hover">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="link-hover">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="link-hover">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center icon-hover"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center icon-hover"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center icon-hover"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center icon-hover"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CineMax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
