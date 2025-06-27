"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function ProduktePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058" 
            alt="Handgeschnitzte Holzprodukte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bark-900/80 to-bark-800/60" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-wood-300 text-lg mb-4">Unsere Kollektion</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-wood-50 leading-tight">
              Meisterwerke aus
              <br />
              <span className="text-wood-300 font-light">Deutschem Holz</span>
            </h1>
            <p className="text-xl text-wood-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Jedes Stück ein Unikat, geschaffen aus den edelsten Hölzern deutscher Wälder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="py-16 bg-wood-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-organic handcrafted-shadow bg-wood-50 border-wood-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-organic bg-wood-600 flex items-center justify-center group-hover:bg-wood-700 transition-colors">
                      <category.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-bark-800">{category.name}</h3>
                    <p className="text-bark-600 text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produkt Grid */}
      <section className="py-32 bg-gradient-to-b from-wood-50 to-bark-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bark-800">Aktuelle Kollektion</h2>
            <p className="text-xl text-bark-600 max-w-3xl mx-auto leading-relaxed">
              Handverlesene Stücke, die die Seele deutschen Handwerks verkörpern
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 rounded-organic handcrafted-shadow bg-wood-50/90 border-wood-200 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="secondary" className="bg-wood-800/80 text-wood-50 backdrop-blur-sm">
                          {product.wood}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-bark-800/70 border-bark-600 text-wood-100 backdrop-blur-sm">
                          {product.origin}
                        </Badge>
                      </div>
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-wood-600 text-wood-50">
                            Meisterstück
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-bark-800">{product.name}</h3>
                      <p className="text-bark-600 mb-4 leading-relaxed text-sm">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-wood-700">
                          ab {formatPrice(product.price)}
                        </span>
                        <span className="text-sm text-bark-500">
                          {product.timeframe}
                        </span>
                      </div>
                      <Link href={`/produkte/${product.id}`}>
                        <Button className="w-full bg-wood-600 hover:bg-wood-700 text-wood-50 rounded-organic">
                          Details ansehen
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-20 bg-bark-800 text-wood-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ihr individuelles Meisterwerk
            </h2>
            <p className="text-xl mb-8 text-wood-200">
              Lassen Sie uns gemeinsam etwas Einzigartiges schaffen
            </p>
            <Link href="/design">
              <Button size="lg" className="bg-wood-600 hover:bg-wood-700 text-wood-50 rounded-organic handcrafted-shadow px-12 py-4 text-lg">
                Individuellen Auftrag starten
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    name: "Wohnaccessoires",
    description: "Einzigartige Stücke für Ihr Zuhause",
    icon: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    )
  },
  {
    name: "Geschenke & Andenken",
    description: "Persönliche Erinnerungen in Holz",
    icon: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    name: "Kunstobjekte",
    description: "Skulpturale Meisterwerke aus Holz",
    icon: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  }
]

const products = [
  {
    id: "1",
    name: "Familien-Wappen Schild",
    price: 145.00,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058",
    description: "Handgeschnitzte Familienwappen aus Eichenholz – ein Erbe für Generationen. Jedes Detail wird von Hand ausgearbeitet.",
    wood: "Deutsche Eiche",
    origin: "Spessart",
    timeframe: "2-3 Wochen",
    featured: true,
  },
  {
    id: "2",
    name: "Lebensbaum Wandrelief",
    price: 285.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    description: "Organische Muster, inspiriert von den Wurzeln deutscher Wälder. Ein Kunstwerk, das Generationen verbindet.",
    wood: "Schwarzwald Tanne",
    origin: "Schwarzwald",
    timeframe: "3-4 Wochen",
    featured: false,
  },
  {
    id: "3",
    name: "Gesellschafts-Untersetzer",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
    description: "Vier einzigartige Stücke für Momente der Gemeinschaft. Perfekt für besondere Anlässe.",
    wood: "Westfälische Buche",
    origin: "Teutoburger Wald",
    timeframe: "1-2 Wochen",
    featured: false,
  },
  {
    id: "4",
    name: "Ewigkeits-Tortenkrone",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073",
    description: "Filigrane Kronen, die den Beginn einer gemeinsamen Reise feiern. Hochzeitskunst vom Feinsten.",
    wood: "Süddeutsche Kirsche",
    origin: "Allgäu",
    timeframe: "2-3 Wochen",
    featured: true,
  },
  {
    id: "5",
    name: "Ahnenbaum Skulptur",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    description: "Monumentale Darstellung Ihres Familienstammbaums. Ein Kunstwerk für die Ewigkeit.",
    wood: "Jahrhunderte-Eiche",
    origin: "Münsterland",
    timeframe: "6-8 Wochen",
    featured: true,
  },
  {
    id: "6",
    name: "Meditations-Klangschale",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
    description: "Handgedrechselte Schalen, die Ruhe und Harmonie in Ihr Zuhause bringen.",
    wood: "Alpenahorn",
    origin: "Bayerischer Wald",
    timeframe: "2-3 Wochen",
    featured: false,
  },
]