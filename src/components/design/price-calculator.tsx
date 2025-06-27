"use client"

import { formatPrice, calculateLaserCutCost } from "@/lib/utils"
import { motion } from "framer-motion"

interface PriceCalculatorProps {
  area: number
  material: string
  thickness: string
  quantity: number
}

export function PriceCalculator({
  area,
  material,
  thickness,
  quantity,
}: PriceCalculatorProps) {
  const basePrice = calculateLaserCutCost(area, material, thickness)
  const setupFee = 15 // One-time setup fee
  const quantityDiscount = quantity > 5 ? 0.1 : quantity > 10 ? 0.15 : 0
  const subtotal = basePrice * quantity
  const discount = subtotal * quantityDiscount
  const total = subtotal - discount + setupFee

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3"
    >
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Base Price</span>
          <span>{formatPrice(basePrice)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Quantity</span>
          <span>× {quantity}</span>
        </div>
        {quantityDiscount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Volume Discount</span>
            <span>-{formatPrice(discount)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-muted-foreground">Setup Fee</span>
          <span>{formatPrice(setupFee)}</span>
        </div>
      </div>
      
      <div className="border-t pt-3">
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
      
      <div className="text-xs text-muted-foreground">
        <p>• Price includes cutting and basic finishing</p>
        <p>• Additional charges may apply for complex designs</p>
        <p>• Shipping calculated at checkout</p>
      </div>
    </motion.div>
  )
}