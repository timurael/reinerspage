"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  ShoppingCart, Star, Leaf, TreePine, Search, Filter, 
  Heart, Grid3X3, List, ChevronDown, SlidersHorizontal 
} from "lucide-react"
import Link from "next/link"

const allProducts = [
  {
    id: "1",
    name: "Handcrafted Oak Dining Table",
    price: 1450.00,
    originalPrice: 1650.00,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058",
    rating: 4.8,
    reviews: 24,
    category: "Furniture",
    material: "German Oak",
    sustainable: true,
    badge: "Best Seller",
    inStock: true
  },
  {
    id: "2",
    name: "Cedar Wall Art Panel",
    price: 385.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    rating: 4.9,
    reviews: 18,
    category: "Decor",
    material: "Cedar Wood",
    sustainable: true,
    badge: "New",
    inStock: true
  },
  {
    id: "3",
    name: "Birch Serving Tray Set",
    price: 125.00,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
    rating: 4.7,
    reviews: 42,
    category: "Kitchen",
    material: "Birch Wood",
    sustainable: true,
    inStock: true
  },
  {
    id: "4",
    name: "Pine Jewelry Box",
    price: 195.00,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073",
    rating: 4.6,
    reviews: 31,
    category: "Storage",
    material: "Pine Wood",
    sustainable: true,
    badge: "Limited",
    inStock: false
  },
  {
    id: "5",
    name: "Walnut Coffee Table",
    price: 890.00,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058",
    rating: 4.9,
    reviews: 15,
    category: "Furniture",
    material: "American Walnut",
    sustainable: true,
    inStock: true
  },
  {
    id: "6",
    name: "Oak Spice Rack",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
    rating: 4.5,
    reviews: 67,
    category: "Kitchen",
    material: "Oak Wood",
    sustainable: true,
    inStock: true
  },
  {
    id: "7",
    name: "Maple Bookshelf",
    price: 650.00,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058",
    rating: 4.8,
    reviews: 19,
    category: "Storage",
    material: "Maple Wood",
    sustainable: true,
    inStock: true
  },
  {
    id: "8",
    name: "Cherry Wood Mirror Frame",
    price: 220.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    rating: 4.7,
    reviews: 28,
    category: "Decor",
    material: "Cherry Wood",
    sustainable: true,
    badge: "Handpicked",
    inStock: true
  }
]

const categories = ["All", "Furniture", "Kitchen", "Decor", "Storage"]
const materials = ["All", "Oak", "Pine", "Birch", "Walnut", "Cedar", "Maple", "Cherry"]
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under €100", min: 0, max: 100 },
  { label: "€100 - €300", min: 100, max: 300 },
  { label: "€300 - €600", min: 300, max: 600 },
  { label: "Over €600", min: 600, max: Infinity }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedMaterial, setSelectedMaterial] = useState("All")
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesMaterial = selectedMaterial === "All" || product.material.toLowerCase().includes(selectedMaterial.toLowerCase())
    const matchesPrice = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.material.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesMaterial && matchesPrice && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.badge === "New" ? 1 : -1
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-800 mb-4">
              Our <span className="text-green-700">Collection</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover sustainably crafted furniture and decor, each piece telling a story of German craftsmanship and environmental consciousness.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search by product name or wood type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              {/* Mobile Filter Toggle */}
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden w-full mb-4 bg-green-700 hover:bg-green-800 text-white"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>

              <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-6`}>
                {/* Category Filter */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                  <h3 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-green-600" />
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                          selectedCategory === category
                            ? 'bg-green-100 text-green-800 font-medium'
                            : 'text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                  <h3 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-amber-600" />
                    Wood Type
                  </h3>
                  <div className="space-y-2">
                    {materials.map(material => (
                      <button
                        key={material}
                        onClick={() => setSelectedMaterial(material)}
                        className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                          selectedMaterial === material
                            ? 'bg-amber-100 text-amber-800 font-medium'
                            : 'text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        {material}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                  <h3 className="font-semibold text-stone-800 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPriceRange(range)}
                        className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                          selectedPriceRange.label === range.label
                            ? 'bg-green-100 text-green-800 font-medium'
                            : 'text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-stone-600">
                  {sortedProducts.length} products found
                </span>
                {(selectedCategory !== "All" || selectedMaterial !== "All" || searchQuery) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("All")
                      setSelectedMaterial("All")
                      setSelectedPriceRange(priceRanges[0])
                      setSearchQuery("")
                    }}
                    className="text-green-700 border-green-700 hover:bg-green-50"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Toggle */}
                <div className="flex border border-stone-200 rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? 'bg-green-100 text-green-700' : 'text-stone-600'}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? 'bg-green-100 text-green-700' : 'text-stone-600'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`${
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" 
                : "space-y-6"
            }`}>
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className={`group hover:shadow-xl transition-all duration-300 border-stone-200 rounded-xl overflow-hidden ${
                    viewMode === "list" ? "flex" : ""
                  }`}>
                    <CardContent className="p-0">
                      <div className={`relative overflow-hidden ${
                        viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-[4/3]"
                      }`}>
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {product.sustainable && (
                            <Badge className="bg-green-600 text-white">
                              <Leaf className="h-3 w-3 mr-1" />
                              Sustainable
                            </Badge>
                          )}
                          {product.badge && (
                            <Badge className="bg-amber-600 text-white">
                              {product.badge}
                            </Badge>
                          )}
                          {!product.inStock && (
                            <Badge className="bg-red-600 text-white">
                              Out of Stock
                            </Badge>
                          )}
                        </div>

                        {/* Wishlist */}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full w-10 h-10 p-0"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>

                        {/* Quick Add */}
                        {viewMode === "grid" && (
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button 
                              className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg"
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              {product.inStock ? "Add to Cart" : "Out of Stock"}
                            </Button>
                          </div>
                        )}
                      </div>
                      
                      <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <p className="text-sm text-stone-500 mb-1">{product.category}</p>
                            <h3 className="font-semibold text-stone-800 mb-2">{product.name}</h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
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
                          <span className="text-sm text-stone-600">({product.reviews})</span>
                        </div>

                        <p className="text-sm text-stone-600 mb-4">{product.material}</p>

                        <div className={`flex items-center justify-between ${
                          viewMode === "list" ? "flex-col items-start gap-4" : ""
                        }`}>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-green-700">
                              €{product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-stone-500 line-through">
                                €{product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                          
                          <div className={`flex gap-2 ${viewMode === "list" ? "w-full" : ""}`}>
                            <Link href={`/products/${product.id}`}>
                              <Button variant="outline" size="sm" className="rounded-lg">
                                View Details
                              </Button>
                            </Link>
                            {viewMode === "list" && (
                              <Button 
                                className="bg-green-700 hover:bg-green-800 text-white rounded-lg flex-1"
                                disabled={!product.inStock}
                              >
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                {product.inStock ? "Add to Cart" : "Out of Stock"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <TreePine className="h-16 w-16 text-stone-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-stone-600 mb-2">No products found</h3>
                <p className="text-stone-500 mb-6">Try adjusting your filters or search terms</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All")
                    setSelectedMaterial("All")
                    setSelectedPriceRange(priceRanges[0])
                    setSearchQuery("")
                  }}
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {sortedProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-green-700 text-green-700 hover:bg-green-50">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}