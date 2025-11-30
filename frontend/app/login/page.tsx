import { LoginForm } from "@/components/login-form"
import { Film } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-primary via-primary/90 to-secondary p-12 text-primary-foreground">
        <div className="max-w-md space-y-6">
          <Link href="/" className="flex items-center gap-3 text-3xl font-bold mb-8">
            <Film className="h-10 w-10" />
            <span>CineMax</span>
          </Link>
          <h2 className="text-4xl font-bold text-balance">Welcome Back to the Ultimate Cinema Experience</h2>
          <p className="text-lg opacity-90 text-pretty">
            Sign in to access your bookings, save your favorite movies, and enjoy exclusive member benefits.
          </p>
          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">✓</div>
              <div>
                <div className="font-semibold">Quick Booking</div>
                <div className="text-sm opacity-80">Save time with one-click checkout</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">✓</div>
              <div>
                <div className="font-semibold">Exclusive Offers</div>
                <div className="text-sm opacity-80">Get special discounts and early access</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">✓</div>
              <div>
                <div className="font-semibold">Booking History</div>
                <div className="text-sm opacity-80">Track all your movie experiences</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
              <Film className="h-8 w-8 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CineMax</span>
            </Link>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
