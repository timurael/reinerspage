"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"

const featuredProducts = [
  {
    id: "1",
    name: "FAMILIENWAPPEN",
    price: 145.00,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058",
    description: "Präzisionsgravur auf deutschem Eichenholz",
    wood: "EICHE",
    color: "red-600",
  },
  {
    id: "2",
    name: "WANDRELIEF",
    price: 285.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    description: "Geometrische Kunst aus Schwarzwaldtanne",
    wood: "TANNE",
    color: "blue-600",
  },
  {
    id: "3",
    name: "UNTERSETZER-SET",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
    description: "Funktionales Design aus Westfälischer Buche",
    wood: "BUCHE",
    color: "yellow-400",
  },
  {
    id: "4",
    name: "TORTENKRONE",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073",
    description: "Minimalistisch gravierte Süddeutsche Kirsche",
    wood: "KIRSCHE",
    color: "amber-700",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-4">UNSERE PRODUKTE</h2>
          <div className="flex gap-2 mb-8">
            <div className="w-8 h-1 bg-red-600" />
            <div className="w-8 h-1 bg-blue-600" />
            <div className="w-8 h-1 bg-yellow-400" />
          </div>
          <p className="text-gray-600 max-w-2xl">
            Jedes Stück vereint Bauhaus-Prinzipien mit traditioneller deutscher Handwerkskunst
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group bg-white border-2 border-gray-900 overflow-hidden hover:shadow-[8px_8px_0_0_rgb(0,0,0)] transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Geometric overlay */}
                    <div className={`absolute top-0 left-0 w-24 h-24 bg-${product.color} opacity-90 flex items-center justify-center`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {product.wood}
                      </span>
                    </div>
                    
                    {/* Price tag */}
                    <div className="absolute bottom-0 right-0 bg-gray-900 px-4 py-2">
                      <span className="text-xl font-bold text-white">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {product.description}
                    </p>
                    <Link href={`/produkte/${product.id}`}>
                      <Button className="w-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold uppercase tracking-wider">
                        DETAILS
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/produkte">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-900 bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white px-12 py-6 text-lg font-bold transition-all"
            >
              ALLE PRODUKTE ENTDECKEN
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}