import Link from "next/link"
import { Mail, MapPin, Phone, Leaf, TreePine, Recycle, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-100">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  Holz<span className="text-green-400">Werk</span>
                </h3>
                <p className="text-xs text-stone-400 uppercase tracking-wider">Deutsches Handwerk</p>
              </div>
            </div>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Wir schaffen schöne, nachhaltige Möbel und Dekoration aus verantwortlich beschafftem deutschem Holz. 
              Handgefertigt mit Sorgfalt für Sie und unseren Planeten.
            </p>
            
            {/* Certifications */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-green-800 px-3 py-2 rounded-full">
                <TreePine className="w-4 h-4 text-green-200" />
                <span className="text-xs font-medium text-green-200">FSC Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-700 px-3 py-2 rounded-full">
                <Award className="w-4 h-4 text-amber-200" />
                <span className="text-xs font-medium text-amber-200">ISO 14001</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p className="font-semibold text-stone-200">Reiner Stöveken</p>
              <p className="text-stone-400">Meisterhandwerker</p>
              <p className="text-stone-400">Ummendorf, Baden-Württemberg</p>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-stone-300 hover:text-green-400 transition-colors">Alle Produkte</Link></li>
              <li><Link href="/categories/furniture" className="text-stone-300 hover:text-green-400 transition-colors">Möbel</Link></li>
              <li><Link href="/categories/kitchen" className="text-stone-300 hover:text-green-400 transition-colors">Küche & Esszimmer</Link></li>
              <li><Link href="/categories/decor" className="text-stone-300 hover:text-green-400 transition-colors">Wohnkultur</Link></li>
              <li><Link href="/categories/storage" className="text-stone-300 hover:text-green-400 transition-colors">Aufbewahrung</Link></li>
              <li><Link href="/custom" className="text-stone-300 hover:text-green-400 transition-colors">Maßanfertigung</Link></li>
              <li><Link href="/gift-cards" className="text-stone-300 hover:text-green-400 transition-colors">Geschenkkarten</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Unternehmen</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-stone-300 hover:text-green-400 transition-colors">Über uns</Link></li>
              <li><Link href="/sustainability" className="text-stone-300 hover:text-green-400 transition-colors">Nachhaltigkeit</Link></li>
              <li><Link href="/craftsmanship" className="text-stone-300 hover:text-green-400 transition-colors">Unsere Handwerkskunst</Link></li>
              <li><Link href="/materials" className="text-stone-300 hover:text-green-400 transition-colors">Materialien & Beschaffung</Link></li>
              <li><Link href="/reviews" className="text-stone-300 hover:text-green-400 transition-colors">Kundenbewertungen</Link></li>
              <li><Link href="/blog" className="text-stone-300 hover:text-green-400 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-stone-300 hover:text-green-400 transition-colors">Karriere</Link></li>
            </ul>
          </div>
          
          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Kontakt & Support</h4>
            
            <div className="space-y-4 mb-6">
              <div className="bg-green-900 p-4 rounded-lg">
                <p className="text-green-200 font-medium mb-2">"Eigentlich ist immer jemand da"</p>
                <p className="text-sm text-green-300">Workshop, office & home under one roof for the best service</p>
              </div>
              
              <div className="space-y-3">
                <a href="mailto:hello@woodcraft-sustainable.de" className="flex items-center gap-3 text-stone-300 hover:text-green-400 transition-colors">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">hello@woodcraft-sustainable.de</span>
                </a>
                <a href="tel:+4973518234567" className="flex items-center gap-3 text-stone-300 hover:text-green-400 transition-colors">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">+49 (0) 7351 823-4567</span>
                </a>
                <div className="flex items-center gap-3 text-stone-300">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Ummendorf, Baden-Württemberg</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-stone-200 mb-3">Kundenservice</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="text-stone-400 hover:text-green-400 transition-colors">Hilfe-Center</Link></li>
                <li><Link href="/shipping" className="text-stone-400 hover:text-green-400 transition-colors">Versandinfo</Link></li>
                <li><Link href="/returns" className="text-stone-400 hover:text-green-400 transition-colors">Rückgabe & Umtausch</Link></li>
                <li><Link href="/care" className="text-stone-400 hover:text-green-400 transition-colors">Pflegehinweise</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Sustainability Promise Bar */}
        <div className="border-t border-stone-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <TreePine className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-stone-300">100% Nachhaltige Quellen</span>
              </div>
              <div className="flex items-center gap-2">
                <Recycle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-stone-300">Klimaneutraler Versand</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-stone-300">Lokale Waldpartnerschaft</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">15+</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider">Jahre Handwerk</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-stone-400">
              <span>© 2024 HolzWerk Deutsches Handwerk</span>
              <Link href="/privacy" className="hover:text-green-400 transition-colors">Datenschutz</Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">AGB</Link>
              <Link href="/cookies" className="hover:text-green-400 transition-colors">Cookie-Richtlinie</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-400">Hergestellt mit 🌱 in Deutschland</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">DE</span>
                </div>
                <span className="text-xs text-stone-400">Gefertigt in Deutschland</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}