import { Navigation } from "@/components/navigation"
import { PaymentForm } from "@/components/payment-form"
import { OrderSummary } from "@/components/order-summary"

export default function PaymentPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Complete Your Payment</h1>
          <p className="text-muted-foreground">Choose your preferred payment method to confirm your booking</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PaymentForm movieId={params.id} />
          </div>
          <div className="lg:col-span-1">
            <OrderSummary movieId={params.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
