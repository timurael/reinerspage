"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ShoppingCart, Star, Leaf, TreePine, Search, Filter, Heart, Zap, PuzzleIcon, Home, Wind, Sparkles, Clock, Phone } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const allProducts = [
  {
    id: "1",
    name: "Personalisierte Holz-Spruchtafel",
    price: 68.00,
    image: "https://images.unsplash.com/photo-1632344728547-b04cb3ea3828?q=80&w=2070",
    rating: 4.9,
    reviews: 127,
    category: "Geschenke",
    description: "Ihr Wunschtext gelasert auf Eiche",
    customizable: true,
    badge: "Meistverkauft"
  },
  {
    id: "2",
    name: "3D Holzpuzzle - Ummendorfer Dom",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070",
    rating: 4.8,
    reviews: 89,
    category: "Puzzle",
    description: "Lasergecuttetes Puzzle aus Birkenholz",
    pieces: 250
  },
  {
    id: "3",
    name: "Klassenzimmer-Lüftungsautomat",
    price: 890.00,
    image: "https://images.unsplash.com/photo-1564906249481-79b27d963c6b?q=80&w=2070",
    rating: 5.0,
    reviews: 890,
    category: "Lüftung",
    description: "Simpel, ausfallsicher, energiesparend",
    badge: "890 Schulen!",
    special: true
  },
  {
    id: "4",
    name: "Familienwappen aus Holz",
    price: 125.00,
    image: "https://images.unsplash.com/photo-1609205807490-a6e714b3b6e1?q=80&w=2070",
    rating: 4.9,
    reviews: 56,
    category: "Geschenke",
    description: "Gelasert auf 8mm Eichenholz",
    customizable: true
  },
  {
    id: "5",
    name: "Geschenkanhänger-Set (50 Stk)",
    price: 24.50,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2069",
    rating: 4.7,
    reviews: 234,
    category: "Geschenke",
    description: "Individuell graviert mit Namen",
    customizable: true
  },
  {
    id: "6",
    name: "Holz-Visitenkarten",
    price: 89.00,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=2026",
    rating: 4.8,
    reviews: 43,
    category: "Business",
    description: "100 Stück, 0.6mm Furnierholz",
    badge: "Einzigartig"
  }
]

const categories = [
  { name: "Puzzle & Geschenke", icon: PuzzleIcon, count: 45, color: "bg-amber-600" },
  { name: "Spruchtafeln", icon: Sparkles, count: 32, color: "bg-emerald-600" },
  { name: "Business", icon: Home, count: 28, color: "bg-blue-600" },
  { name: "Lüftungstechnik", icon: Wind, count: 12, color: "bg-green-600" }
]

export default function HomePage() {
  return (
    <div className="flex flex-col bg-stone-50">
      {/* Hero Section - Product Focused */}
      <section className="relative bg-gradient-to-br from-amber-50 to-green-50 py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Headline & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 mb-4 bg-green-100 px-3 py-1 rounded-full">
                <Zap className="w-4 h-4 text-green-700" />
                <span className="text-xs font-semibold text-green-800">
                  890+ Schulen vertrauen uns
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-stone-800 leading-tight">
                Handwerk
                <br />
                <span className="text-amber-600">aus Ummendorf</span>
              </h1>
              
              <p className="text-xl text-stone-600 mb-8">
                Von Holzpuzzles bis Lüftungstechnik – individuell für Sie gefertigt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#products">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-semibold">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Jetzt Produkte entdecken
                  </Button>
                </Link>
                <a href="tel:+4973515773065" className="flex items-center justify-center gap-2 border-2 border-stone-300 hover:border-stone-400 text-stone-700 px-6 py-4 rounded-lg font-medium transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Beratung</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Hero Product Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white">
                <img 
                  src={allProducts[0].image}
                  alt={allProducts[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Product Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-stone-500 mb-1">{allProducts[0].category}</p>
                        <h3 className="font-semibold text-stone-800 text-sm">{allProducts[0].name}</h3>
                        <p className="text-2xl font-bold text-green-700">€{allProducts[0].price.toFixed(2)}</p>
                      </div>
                      <Button size="sm" className="bg-green-700 hover:bg-green-800">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    {allProducts[0].rating} ({allProducts[0].reviews})
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Bestseller & Highlights</h2>
            <p className="text-xl text-stone-600">Handgefertigt mit Präzision – jedes Stück ein Unikat</p>
          </div>

          {/* Featured Product Grid - Larger Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {allProducts.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-stone-200 rounded-2xl overflow-hidden bg-white">
                  <CardContent className="p-0">
                    {/* Enhanced Image Section */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Enhanced Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.customizable && (
                          <Badge className="bg-blue-600 text-white shadow-lg">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Individuell
                          </Badge>
                        )}
                        {product.badge && (
                          <Badge className="bg-amber-600 text-white shadow-lg font-bold">
                            {product.badge}
                          </Badge>
                        )}
                        {product.special && (
                          <Badge className="bg-green-600 text-white shadow-lg">
                            <Wind className="h-3 w-3 mr-1" />
                            Innovation
                          </Badge>
                        )}
                      </div>

                      {/* Enhanced Rating Display */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                          <Star className="h-3 w-3 text-amber-400 fill-current" />
                          <span className="text-xs font-semibold text-stone-800">{product.rating}</span>
                        </div>
                      </div>

                      {/* Enhanced CTA Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Button 
                          size="lg" 
                          className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-white text-stone-800 hover:bg-stone-100 shadow-xl"
                        >
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          In den Warenkorb
                        </Button>
                      </div>
                    </div>
                    
                    {/* Enhanced Product Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="text-sm text-amber-600 font-medium mb-1">{product.category}</p>
                          <h3 className="font-bold text-lg text-stone-800 mb-2 leading-tight">{product.name}</h3>
                          <p className="text-sm text-stone-600 mb-3">{product.description}</p>
                        </div>
                      </div>
                      
                      {/* Social Proof */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-amber-400 fill-current'
                                  : 'text-stone-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-stone-600 font-medium">({product.reviews} Bewertungen)</span>
                      </div>

                      {/* Enhanced Pricing */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-green-700">
                            €{product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-stone-500 line-through">
                              €{product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <Link href={`/products/${product.id}`}>
                          <Button variant="outline" size="sm" className="border-green-700 text-green-700 hover:bg-green-50">
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Category Preview Tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/category/${category.name.toLowerCase()}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-stone-200 rounded-xl overflow-hidden h-32">
                    <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-stone-800 mb-1">{category.name}</h3>
                      <p className="text-xs text-stone-600">{category.count} Produkte</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                Alle {allProducts.length} Produkte ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Product Highlight - Lüftungsautomat */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="order-2 lg:order-1">
                <Badge className="bg-green-600 text-white mb-4">
                  <Wind className="h-4 w-4 mr-1" />
                  890 Schulen ausgerüstet!
                </Badge>
                <h3 className="text-3xl font-bold text-stone-800 mb-4">
                  Der Klassenzimmer-Lüftungsautomat
                </h3>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                  Seit September 2020 haben wir 890 Zimmer ausgerüstet! Von Bad Waldsee bis Ulm, 
                  von Ochsenhausen bis in die Göppinger Gegend.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                    </div>
                    <p className="text-stone-700">Simpel, einfach und damit ausfallsicher</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                    </div>
                    <p className="text-stone-700">Nur minimaler Strombedarf von ca. 20W / Zimmer</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                    </div>
                    <p className="text-stone-700">CO₂-Wert von ca. 800...1000ppm dauerhaft einhaltbar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link href="/products/3">
                    <Button className="bg-green-700 hover:bg-green-800 text-white">
                      Mehr erfahren
                    </Button>
                  </Link>
                  <a href="tel:+4973515773065" className="text-green-700 hover:text-green-800 font-medium">
                    Jetzt anfragen →
                  </a>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100">
                  <img 
                    src="https://images.unsplash.com/photo-1564906249481-79b27d963c6b?q=80&w=2070"
                    alt="Klassenzimmer Lüftungsautomat"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-semibold text-stone-800">Großauftrag Stadt Neu-Ulm</p>
                      <p className="text-xs text-stone-600">9 Schulen mit 190 Räumen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070"
                  alt="Sustainable forestry"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-green-900/20 rounded-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span className="text-sm font-semibold text-amber-800 uppercase tracking-wider">
                    Handwerk & Innovation
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold text-stone-800">
                  Was Form & Design
                  <br />
                  <span className="text-amber-600">auszeichnet</span>
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  Großer Erfahrungsschatz aus verschiedenen Aufgaben und Projekten. 
                  Technisches und wirtschaftliches Know-how für diverse Aufgabenstellungen. 
                  Wir stehen für gute Ideen und Vielseitigkeit.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-600 mb-2">2x</div>
                    <div className="text-sm text-stone-600">CO₂-Laser</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-600 mb-2">20+</div>
                    <div className="text-sm text-stone-600">Jahre Erfahrung</div>
                  </div>
                </div>

                <div className="bg-stone-100 p-4 rounded-lg">
                  <p className="text-sm text-stone-600 italic text-center">
                    "Büro, Produktion und Wohnung befinden sich bei uns unter einem Dach.
                    <br />
                    Eigentlich ist immer jemand da."
                  </p>
                </div>

                <Link href="/kontakt">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg">
                    Vereinbaren Sie ein unverbindliches Gespräch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}