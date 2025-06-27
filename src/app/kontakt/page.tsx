"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react"

export default function KontaktPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070" 
            alt="Stöveken Werkstatt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bark-900/90 to-bark-800/70" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-wood-300 text-lg mb-4">Besuchen Sie uns</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-wood-50 leading-tight">
              Willkommen in
              <br />
              <span className="text-wood-300 font-light">Unserer Werkstatt</span>
            </h1>
            <p className="text-xl text-wood-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Im Herzen Westfalens, wo seit drei Generationen Träume zu Holz werden
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kontakt Informationen */}
      <section className="py-32 bg-gradient-to-b from-wood-50 to-bark-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Kontakt Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bark-800">
                  Sprechen wir über
                  <br />Ihr nächstes Projekt
                </h2>
                <p className="text-xl text-bark-600 leading-relaxed mb-8">
                  Jede große Schöpfung beginnt mit einem Gespräch. Lassen Sie uns gemeinsam Ihre Vision zum Leben erwecken.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-organic bg-wood-600 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-wood-50" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bark-800 mb-1">{info.title}</h3>
                      <p className="text-bark-600 leading-relaxed">{info.description}</p>
                      {info.action && (
                        <a href={info.action.href} className="text-wood-700 hover:text-wood-800 font-medium">
                          {info.action.text}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Werkstatt Zeiten */}
              <Card className="rounded-organic handcrafted-shadow bg-wood-100/50 border-wood-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-bark-800 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-wood-700" />
                    Werkstatt-Öffnungszeiten
                  </h3>
                  <div className="space-y-2 text-sm text-bark-600">
                    <div className="flex justify-between">
                      <span>Montag - Freitag</span>
                      <span>8:00 - 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag</span>
                      <span>9:00 - 16:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sonntag</span>
                      <span>Nach Vereinbarung</span>
                    </div>
                  </div>
                  <p className="text-xs text-bark-500 mt-4">
                    * Werkstattbesuche nach vorheriger Terminabsprache
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Kontakt Formular */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-organic handcrafted-shadow bg-wood-50/80 border-wood-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-bark-800">
                    Erzählen Sie uns von Ihrer Vision
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-bark-700 mb-2 block">
                          Vorname
                        </label>
                        <Input 
                          className="rounded-organic border-wood-300 focus:border-wood-500" 
                          placeholder="Ihr Vorname"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-bark-700 mb-2 block">
                          Nachname
                        </label>
                        <Input 
                          className="rounded-organic border-wood-300 focus:border-wood-500" 
                          placeholder="Ihr Nachname"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-bark-700 mb-2 block">
                        E-Mail
                      </label>
                      <Input 
                        type="email"
                        className="rounded-organic border-wood-300 focus:border-wood-500" 
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-bark-700 mb-2 block">
                        Telefon (optional)
                      </label>
                      <Input 
                        type="tel"
                        className="rounded-organic border-wood-300 focus:border-wood-500" 
                        placeholder="+49 123 456789"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-bark-700 mb-2 block">
                        Ihr Projekt
                      </label>
                      <Textarea 
                        className="rounded-organic border-wood-300 focus:border-wood-500 min-h-[120px]" 
                        placeholder="Beschreiben Sie uns Ihre Idee, Ihre Wünsche und Vorstellungen. Welches Holz schwebt Ihnen vor? Welche Geschichte soll Ihr Stück erzählen?"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-wood-600 hover:bg-wood-700 text-wood-50 rounded-organic py-6 text-lg handcrafted-shadow"
                    >
                      Anfrage senden
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-bark-600 flex items-center justify-center">
                      <Heart className="h-4 w-4 mr-1 text-wood-600" />
                      Wir antworten meist innerhalb von 24 Stunden
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anfahrt */}
      <section className="py-20 bg-bark-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bark-800">
              So finden Sie zu uns
            </h2>
            <p className="text-lg text-bark-600">
              Mitten im Herzen Westfalens, umgeben von den Wäldern, die unsere Inspiration sind
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-organic handcrafted-shadow bg-wood-50 border-wood-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-bark-800">Anschrift</h3>
                  <address className="not-italic text-bark-600 leading-relaxed mb-6">
                    Stöveken Studio<br />
                    Waldweg 42<br />
                    33098 Paderborn<br />
                    Deutschland
                  </address>
                  
                  <div className="space-y-3 text-sm">
                    <p className="text-bark-600">
                      <strong>Mit dem Auto:</strong> A33 Ausfahrt Paderborn-Zentrum, dann 5km Richtung Teutoburger Wald
                    </p>
                    <p className="text-bark-600">
                      <strong>Parkplätze:</strong> Kostenfreie Parkplätze direkt vor der Werkstatt
                    </p>
                    <p className="text-bark-600">
                      <strong>ÖPNV:</strong> Buslinie 4 bis Haltestelle "Waldweg"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-80 rounded-organic overflow-hidden handcrafted-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071" 
                  alt="Karte zur Werkstatt"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-wood-50">
                  <p className="text-sm">📍 Stöveken Studio</p>
                  <p className="text-xs opacity-80">Waldweg 42, Paderborn</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const contactInfo = [
  {
    title: "Werkstatt besuchen",
    description: "Waldweg 42, 33098 Paderborn. Erleben Sie die Atmosphäre unserer historischen Werkstatt und lassen Sie sich von der Vielfalt unserer Hölzer inspirieren.",
    icon: MapPin,
    action: {
      href: "https://maps.google.com/?q=Waldweg+42+Paderborn",
      text: "Route planen →"
    }
  },
  {
    title: "Persönliches Gespräch",
    description: "Rufen Sie uns an für eine unverbindliche Beratung. Wir nehmen uns Zeit für Ihre Fragen und entwickeln gemeinsam Ihre Ideen.",
    icon: Phone,
    action: {
      href: "tel:+4952519876543",
      text: "+49 (0) 5251 987 65 43"
    }
  },
  {
    title: "Schriftliche Anfrage", 
    description: "Senden Sie uns Details zu Ihrem Projekt. Je mehr Sie uns über Ihre Vorstellungen erzählen, desto besser können wir Sie beraten.",
    icon: Mail,
    action: {
      href: "mailto:hallo@stoeveken-studio.de",
      text: "hallo@stoeveken-studio.de"
    }
  }
]