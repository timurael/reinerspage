"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface MaterialSelectorProps {
  selected: string
  onSelect: (material: string) => void
}

const materials = [
  {
    id: "pine",
    name: "Pine",
    description: "Light, affordable, great for beginners",
    color: "#f4e4c1",
    price: "$",
  },
  {
    id: "birch",
    name: "Birch",
    description: "Smooth finish, excellent for detailed work",
    color: "#faebd7",
    price: "$$",
  },
  {
    id: "maple",
    name: "Maple",
    description: "Durable hardwood with fine grain",
    color: "#f5deb3",
    price: "$$",
  },
  {
    id: "oak",
    name: "Oak",
    description: "Classic hardwood, strong and beautiful",
    color: "#8b6f47",
    price: "$$$",
  },
  {
    id: "walnut",
    name: "Walnut",
    description: "Premium dark wood, luxury finish",
    color: "#4a3728",
    price: "$$$$",
  },
]

export function MaterialSelector({ selected, onSelect }: MaterialSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {materials.map((material) => (
        <motion.button
          key={material.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(material.id)}
          className={cn(
            "relative p-4 rounded-lg border-2 text-left transition-all",
            selected === material.id
              ? "border-primary shadow-lg"
              : "border-muted hover:border-muted-foreground/50"
          )}
        >
          <div className="flex items-start space-x-3">
            <div
              className="w-12 h-12 rounded-lg shadow-inner"
              style={{ backgroundColor: material.color }}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{material.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {material.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {material.description}
              </p>
            </div>
          </div>
          {selected === material.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
            >
              <Check className="w-4 h-4 text-primary-foreground" />
            </motion.div>
          )}
        </motion.button>
      ))}
    </div>
  )
}