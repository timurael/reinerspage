"use client"

import { useState } from "react"
import { DesignUploader } from "@/components/design/design-uploader"
import { DesignPreview } from "@/components/design/design-preview"
import { MaterialSelector } from "@/components/design/material-selector"
import { DesignCustomizer } from "@/components/design/design-customizer"
import { PriceCalculator } from "@/components/design/price-calculator"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useCartStore } from "@/store/cart-store"
import { useRouter } from "next/navigation"

export interface DesignData {
  file: File | null
  previewUrl: string | null
  material: string
  thickness: string
  width: number
  height: number
  customText?: string
  quantity: number
}

export default function DesignPage() {
  const router = useRouter()
  const { addItem } = useCartStore()
  const [designData, setDesignData] = useState<DesignData>({
    file: null,
    previewUrl: null,
    material: "birch",
    thickness: "1/4",
    width: 12,
    height: 12,
    quantity: 1,
  })

  const handleFileUpload = (file: File, previewUrl: string) => {
    setDesignData((prev) => ({ ...prev, file, previewUrl }))
  }

  const handleAddToCart = () => {
    if (!designData.file || !designData.previewUrl) return

    const price = calculatePrice()
    const cartItem = {
      id: `custom-${Date.now()}`,
      productId: "custom-design",
      productName: "Custom Laser-Cut Design",
      productImage: designData.previewUrl,
      designUrl: designData.previewUrl,
      quantity: designData.quantity,
      price,
      customText: designData.customText,
    }

    addItem(cartItem)
    router.push("/cart")
  }

  const calculatePrice = () => {
    const area = designData.width * designData.height
    const basePrice = 0.15 // $ per square inch
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
    
    const materialMultiplier = materialMultipliers[designData.material] || 1.0
    const thicknessMultiplier = thicknessMultipliers[designData.thickness] || 1.0
    
    return area * basePrice * materialMultiplier * thicknessMultiplier
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Create Your Custom Design
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload your design, customize it, and we'll bring it to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Upload and Preview */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Upload Your Design</h2>
                <DesignUploader onUpload={handleFileUpload} />
              </Card>

              {designData.previewUrl && (
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Preview</h2>
                  <DesignPreview
                    previewUrl={designData.previewUrl}
                    material={designData.material}
                  />
                </Card>
              )}
            </div>

            {/* Right Column - Customization */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Choose Material</h2>
                <MaterialSelector
                  selected={designData.material}
                  onSelect={(material) =>
                    setDesignData((prev) => ({ ...prev, material }))
                  }
                />
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Customize</h2>
                <DesignCustomizer
                  data={designData}
                  onChange={(updates) =>
                    setDesignData((prev) => ({ ...prev, ...updates }))
                  }
                />
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
                <PriceCalculator
                  area={designData.width * designData.height}
                  material={designData.material}
                  thickness={designData.thickness}
                  quantity={designData.quantity}
                />
                
                <Button
                  className="w-full mt-6"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!designData.file}
                >
                  Add to Cart
                </Button>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}