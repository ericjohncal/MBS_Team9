import { Navigation } from "@/components/navigation"
import { SeatSelection } from "@/components/seat-selection"
import { BookingSummary } from "@/components/booking-summary"

export default function BookingPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Select Your Seats</h1>
          <p className="text-muted-foreground">Choose your preferred seats for the best viewing experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SeatSelection movieId={params.id} />
          </div>
          <div className="lg:col-span-1">
            <BookingSummary movieId={params.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
