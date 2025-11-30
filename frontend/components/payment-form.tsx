"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Wallet, Smartphone, Lock } from "lucide-react"
import { useRouter } from "next/navigation"

interface PaymentFormProps {
  movieId: string
}

export function PaymentForm({ movieId }: PaymentFormProps) {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to confirmation page
    router.push(`/confirmation/${movieId}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="p-6 mb-6">
        <h3 className="text-xl font-bold mb-6">Select Payment Method</h3>

        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
          <div
            className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              paymentMethod === "card" ? "border-primary bg-primary/5" : "border-border"
            }`}
          >
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
              <CreditCard className="h-5 w-5" />
              <div>
                <div className="font-semibold">Credit / Debit Card</div>
                <div className="text-sm text-muted-foreground">Visa, Mastercard, Amex</div>
              </div>
            </Label>
          </div>

          <div
            className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              paymentMethod === "wallet" ? "border-primary bg-primary/5" : "border-border"
            }`}
          >
            <RadioGroupItem value="wallet" id="wallet" />
            <Label htmlFor="wallet" className="flex items-center gap-3 cursor-pointer flex-1">
              <Wallet className="h-5 w-5" />
              <div>
                <div className="font-semibold">Digital Wallet</div>
                <div className="text-sm text-muted-foreground">Apple Pay, Google Pay</div>
              </div>
            </Label>
          </div>

          <div
            className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              paymentMethod === "upi" ? "border-primary bg-primary/5" : "border-border"
            }`}
          >
            <RadioGroupItem value="upi" id="upi" />
            <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
              <Smartphone className="h-5 w-5" />
              <div>
                <div className="font-semibold">UPI</div>
                <div className="text-sm text-muted-foreground">Pay using UPI ID</div>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </Card>

      {paymentMethod === "card" && (
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-6">Card Details</h3>

          <div className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" required />
            </div>

            <div>
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input id="cardName" placeholder="John Doe" className="mt-2" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" className="mt-2" required />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" type="password" maxLength={3} className="mt-2" required />
              </div>
            </div>
          </div>
        </Card>
      )}

      {paymentMethod === "wallet" && (
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-6">Digital Wallet</h3>
          <div className="space-y-4">
            <Button type="button" variant="outline" className="w-full h-14 text-base bg-transparent">
              <img src="/placeholder.svg?height=24&width=24" alt="Apple Pay" className="h-6 w-6 mr-2" />
              Pay with Apple Pay
            </Button>
            <Button type="button" variant="outline" className="w-full h-14 text-base bg-transparent">
              <img src="/placeholder.svg?height=24&width=24" alt="Google Pay" className="h-6 w-6 mr-2" />
              Pay with Google Pay
            </Button>
          </div>
        </Card>
      )}

      {paymentMethod === "upi" && (
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-6">UPI Payment</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="upiId">UPI ID</Label>
              <Input id="upiId" placeholder="yourname@upi" className="mt-2" required />
            </div>
          </div>
        </Card>
      )}

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" className="mt-2" required />
            <p className="text-xs text-muted-foreground mt-1">Booking confirmation will be sent to this email</p>
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-2" required />
          </div>
        </div>
      </Card>

      <div className="flex items-center gap-2 mb-6 p-4 bg-muted/50 rounded-xl">
        <Lock className="h-5 w-5 text-primary" />
        <p className="text-sm text-muted-foreground">
          Your payment information is encrypted and secure. We never store your card details.
        </p>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
        {isProcessing ? "Processing Payment..." : "Complete Payment"}
      </Button>
    </form>
  )
}
