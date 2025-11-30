import { SignupForm } from "@/components/signup-form"
import { Film } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-primary via-primary/90 to-secondary p-12 text-primary-foreground">
        <div className="max-w-md space-y-6">
          <Link href="/" className="flex items-center gap-3 text-3xl font-bold mb-8">
            <Film className="h-10 w-10" />
            <span>CineMax</span>
          </Link>
          <h2 className="text-4xl font-bold text-balance">Join CineMax Today</h2>
          <p className="text-lg opacity-90 text-pretty">
            Create your account and unlock a world of entertainment. Book tickets, track your favorites, and never miss
            a show.
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
              <Film className="h-8 w-8 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CineMax</span>
            </Link>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}
