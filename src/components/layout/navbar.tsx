"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X, Search, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart-store"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart, getTotalItems } = useCartStore()
  const cartItemsCount = getTotalItems()

  const navLinks = [
    { href: "/products", label: "SHOP" },
    { href: "/categories", label: "KATEGORIEN" },
    { href: "/custom", label: "MAßANFERTIGUNG" },
    { href: "/sustainability", label: "NACHHALTIGKEIT" },
    { href: "/about", label: "ÜBER UNS" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              {/* Nature-inspired logo */}
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-stone-800">
                Holz<span className="text-green-700">Werk</span>
              </h1>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Deutsches Handwerk</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-stone-700 hover:text-green-700 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex hover:bg-green-50 rounded-full" 
            >
              <Search className="h-5 w-5 text-stone-600" />
            </Button>

            {/* Cart Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-green-50 rounded-full" 
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5 text-stone-600" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 h-5 w-5 bg-green-700 text-white text-xs flex items-center justify-center font-semibold rounded-full"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </Button>

            {/* Contact Button */}
            <Link href="/kontakt">
              <Button 
                variant="outline" 
                className="text-sm font-medium border-green-700 text-green-700 hover:bg-green-50 rounded-lg"
              >
                Kontakt
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-green-50 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-stone-200 bg-white"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Produkte suchen..."
                  className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    className="block py-3 text-lg font-medium text-stone-700 hover:text-green-700 transition-colors border-b border-stone-100 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 space-y-3"
              >
                <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-medium">
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}