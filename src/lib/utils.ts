import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | string, currency: string = "USD") {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(numericPrice)
}

export function calculateLaserCutCost(area: number, material: string, thickness: string): number {
  const baseRate = 0.15 // $ per square inch
  const materialMultipliers: Record<string, number> = {
    pine: 1.0,
    oak: 1.5,
    walnut: 2.0,
    maple: 1.8,
    birch: 1.2,
  }
  const thicknessMultipliers: Record<string, number> = {
    "1/8": 1.0,
    "1/4": 1.5,
    "3/8": 2.0,
    "1/2": 2.5,
  }
  
  const materialMultiplier = materialMultipliers[material] || 1.0
  const thicknessMultiplier = thicknessMultipliers[thickness] || 1.0
  
  return area * baseRate * materialMultiplier * thicknessMultiplier
}