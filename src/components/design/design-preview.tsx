"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DesignPreviewProps {
  previewUrl: string
  material: string
}

const materialTextures: Record<string, string> = {
  pine: "linear-gradient(45deg, #f4e4c1 25%, #e8d4a0 25%, #e8d4a0 50%, #f4e4c1 50%, #f4e4c1 75%, #e8d4a0 75%, #e8d4a0)",
  oak: "linear-gradient(45deg, #8b6f47 25%, #7a5d36 25%, #7a5d36 50%, #8b6f47 50%, #8b6f47 75%, #7a5d36 75%, #7a5d36)",
  walnut: "linear-gradient(45deg, #4a3728 25%, #3c2a1e 25%, #3c2a1e 50%, #4a3728 50%, #4a3728 75%, #3c2a1e 75%, #3c2a1e)",
  maple: "linear-gradient(45deg, #f5deb3 25%, #e8d19f 25%, #e8d19f 50%, #f5deb3 50%, #f5deb3 75%, #e8d19f 75%, #e8d19f)",
  birch: "linear-gradient(45deg, #faebd7 25%, #f5e6d3 25%, #f5e6d3 50%, #faebd7 50%, #faebd7 75%, #f5e6d3 75%, #f5e6d3)",
}

export function DesignPreview({ previewUrl, material }: DesignPreviewProps) {
  const texture = materialTextures[material] || materialTextures.birch

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div
        className="relative aspect-square rounded-lg overflow-hidden shadow-2xl"
        style={{
          background: texture,
          backgroundSize: "20px 20px",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-4 bg-white/90 rounded-lg overflow-hidden">
          <img
            src={previewUrl}
            alt="Design preview on material"
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Preview on {material} wood
        </p>
      </div>
    </motion.div>
  )
}