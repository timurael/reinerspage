"use client"

import { useCartStore } from "@/store/cart-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export function CartSummary() {
  const router = useRouter()
  const { getTotalPrice, getTotalItems } = useCartStore()
  const subtotal = getTotalPrice()
  const shipping = subtotal > 100 ? 0 : 15
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Subtotal ({getTotalItems()} items)
            </span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>
              {shipping === 0 ? (
                <span className="text-green-600">FREE</span>
              ) : (
                formatPrice(shipping)
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>{formatPrice(tax)}</span>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total</span>
            <motion.span
              key={total}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-primary"
            >
              {formatPrice(total)}
            </motion.span>
          </div>
        </div>
        
        <Button
          className="w-full"
          size="lg"
          onClick={() => router.push("/checkout")}
        >
          Proceed to Checkout
        </Button>
        
        {shipping > 0 && (
          <p className="text-xs text-center text-muted-foreground">
            Free shipping on orders over $100
          </p>
        )}
      </CardContent>
    </Card>
  )
}