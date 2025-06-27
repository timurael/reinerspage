"use client"

import { CartItem as CartItemType } from "@/store/cart-store"
import { useCartStore } from "@/store/cart-store"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
          {item.designUrl ? (
            <img
              src={item.designUrl}
              alt={item.productName}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-100 to-amber-100" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold">{item.productName}</h3>
          {item.customText && (
            <p className="text-sm text-muted-foreground">
              Custom text: "{item.customText}"
            </p>
          )}
          <p className="text-lg font-bold text-primary mt-2">
            {formatPrice(item.price)}
          </p>
        </div>
        
        <div className="flex flex-col items-end justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeItem(item.id)}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-12 text-center font-medium">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}