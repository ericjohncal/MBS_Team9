import { Navigation } from "@/components/navigation"
import { BookingConfirmation } from "@/components/booking-confirmation"
import { Footer } from "@/components/footer"

export default function ConfirmationPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <BookingConfirmation movieId={params.id} />
      </div>
      <Footer />
    </div>
  )
}
