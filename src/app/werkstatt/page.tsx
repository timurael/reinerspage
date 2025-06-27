"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wrench, Zap, Eye, Hammer, TreePine, Award } from "lucide-react"
import Link from "next/link"

export default function WerkstattPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070" 
            alt="Stöveken Werkstatt Interieur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bark-900/90 to-bark-800/60" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-wood-300 text-lg mb-6">Seit 1945 im Herzen Westfalens</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-wood-50 leading-tight">
              Unsere
              <br />
              <span className="text-wood-300 font-light">Werkstatt</span>
            </h1>
            <p className="text-xl md:text-2xl text-wood-100 mb-12 max-w-3xl leading-relaxed">
              Hier verschmelzen jahrhundertealte Handwerkstradition mit modernster Präzisionstechnologie. Ein Ort, wo aus Visionen Realität wird.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/kontakt">
                <Button size="lg" className="bg-wood-600 hover:bg-wood-700 text-wood-50 rounded-organic handcrafted-shadow px-12 py-6 text-lg">
                  Werkstatt besuchen
                </Button>
              </Link>
              <Link href="/design">
                <Button size="lg" variant="outline" className="border-wood-200 text-wood-100 hover:bg-wood-50/20 backdrop-blur-sm rounded-organic px-12 py-6 text-lg">
                  Projekt starten
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Werkstatt Bereiche */}
      <section className="py-32 bg-gradient-to-b from-wood-50 to-bark-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bark-800">
              Bereiche unserer Werkstatt
            </h2>
            <p className="text-xl text-bark-600 max-w-3xl mx-auto leading-relaxed">
              Jeder Bereich unserer Werkstatt erzählt seine eigene Geschichte von Tradition und Innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {workshopAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="rounded-organic handcrafted-shadow bg-wood-50/80 border-wood-200 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <img 
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bark-900/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-wood-600/90 text-wood-50 backdrop-blur-sm">
                          {area.established}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 rounded-organic bg-wood-600/80 backdrop-blur-sm flex items-center justify-center">
                          <area.icon className="h-6 w-6 text-wood-50" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-bark-800">{area.title}</h3>
                      <p className="text-bark-600 leading-relaxed mb-6">
                        {area.description}
                      </p>
                      <div className="space-y-2">
                        {area.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-bark-600">
                            <div className="w-2 h-2 bg-wood-600 rounded-full mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-32 bg-gradient-to-b from-bark-50 to-wood-100 bark-texture">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bark-800">
              Von der Idee zum Meisterwerk
            </h2>
            <p className="text-xl text-bark-600 max-w-3xl mx-auto leading-relaxed">
              Jedes Projekt durchläuft einen durchdachten Prozess, der Ihre Vision mit unserer Handwerkskunst vereint
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-wood-300 transform -translate-x-1/2 z-0" />
                )}
                <Card className="relative z-10 rounded-organic handcrafted-shadow bg-wood-50 border-wood-200 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-organic bg-wood-600 flex items-center justify-center">
                      <span className="text-wood-50 text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-bark-800">{step.title}</h3>
                    <p className="text-bark-600 leading-relaxed mb-4">{step.description}</p>
                    <Badge variant="outline" className="border-wood-400 text-wood-700">
                      {step.duration}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Auszeichnungen */}
      <section className="py-20 bg-wood-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bark-800">
              Anerkannte Qualität
            </h2>
            <p className="text-lg text-bark-600">
              Unsere Arbeit wurde mehrfach ausgezeichnet und von Experten anerkannt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-organic handcrafted-shadow bg-wood-50 border-wood-200 text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-organic bg-wood-600 flex items-center justify-center group-hover:bg-wood-700 transition-colors">
                      <Award className="h-6 w-6 text-wood-50" />
                    </div>
                    <h3 className="font-semibold text-bark-800 mb-2">{award.title}</h3>
                    <p className="text-sm text-bark-600 mb-2">{award.year}</p>
                    <p className="text-xs text-bark-500">{award.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bark-800 text-wood-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Erleben Sie unsere Werkstatt
            </h2>
            <p className="text-xl mb-8 text-wood-200">
              Vereinbaren Sie einen Termin und lassen Sie sich von der Atmosphäre inspirieren
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg" className="bg-wood-600 hover:bg-wood-700 text-wood-50 rounded-organic handcrafted-shadow px-12 py-4 text-lg">
                  Besuch vereinbaren
                </Button>
              </Link>
              <Link href="/design">
                <Button size="lg" variant="outline" className="border-wood-300 text-wood-100 hover:bg-wood-50/20 rounded-organic px-12 py-4 text-lg">
                  Projekt beginnen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const workshopAreas = [
  {
    title: "Traditionelle Handwerkstatt",
    description: "Hier arbeiten wir noch mit den Werkzeugen unserer Großväter. Hobel, Stechbeitel und Handsägen, die seit Generationen in Familienbesitz sind. Jeder Handgriff wird mit der Sorgfalt und Präzision ausgeführt, die nur durch jahrzehntelange Erfahrung entstehen kann.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2067",
    icon: Hammer,
    established: "Seit 1945",
    features: [
      "Handhobel aus dem 19. Jahrhundert",
      "Traditionelle Zapfenverbindungen", 
      "Oberflächenveredelung von Hand",
      "Werkzeuge aus drei Generationen"
    ]
  },
  {
    title: "Precision Laser Lab",
    description: "Modernste Lasertechnologie ermöglicht es uns, filigranste Details und komplexeste Muster mit mikrometergenauen Präzision zu schneiden. Hier entstehen die technischen Wunder, die unsere Handwerkskunst auf ein neues Level heben.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070", 
    icon: Zap,
    established: "Seit 2010",
    features: [
      "CO2-Laser mit 0.1mm Präzision",
      "3D-Gravierung bis 50mm Tiefe",
      "Automatische Materialerkennung",
      "24/7 Qualitätskontrolle"
    ]
  },
  {
    title: "Holzlager & Trocknerei",
    description: "Unser klimatisiertes Holzlager beherbergt über 200 verschiedene Holzarten aus deutschen und europäischen Wäldern. Jedes Stück wird mindestens zwei Jahre schonend getrocknet und auf seine Verwendung vorbereitet.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071",
    icon: TreePine,
    established: "Erweitert 2005", 
    features: [
      "200+ heimische Holzarten",
      "Klimakontrollierte Lagerung",
      "FSC-zertifizierte Hölzer",
      "2-8 Jahre Trocknungszeit"
    ]
  },
  {
    title: "Qualitätsprüfung",
    description: "Jedes Werkstück durchläuft eine mehrstufige Qualitätskontrolle. Von der Holzauswahl bis zur finalen Oberflächenbehandlung wird jeder Schritt dokumentiert und geprüft. Nur Perfektion verlässt unsere Werkstatt.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    icon: Eye,
    established: "Standard seit 1945",
    features: [
      "7-Stufen Qualitätskontrolle",
      "Digitale Maßprüfung",
      "Oberflächenanalyse",
      "Langzeit-Haltbarkeitstest"
    ]
  }
]

const processSteps = [
  {
    title: "Beratung & Konzept",
    description: "Gemeinsam entwickeln wir Ihre Idee. Wir besprechen Material, Größe, Funktion und Design. Ihre Vision wird zu unserem Auftrag.",
    duration: "1-2 Stunden"
  },
  {
    title: "Planung & Entwurf", 
    description: "Detaillierte technische Zeichnungen und 3D-Visualisierungen entstehen. Jeder Aspekt wird durchdacht und optimiert.",
    duration: "3-5 Tage"
  },
  {
    title: "Fertigung & Vollendung",
    description: "Hand in Hand arbeiten Tradition und Moderne zusammen. Das Ergebnis: Ein Meisterwerk, das Generationen überdauert.",
    duration: "1-8 Wochen"
  }
]

const awards = [
  {
    title: "Meister des Handwerks",
    year: "2023",
    organization: "Handwerkskammer OWL"
  },
  {
    title: "Innovation Award",
    year: "2022", 
    organization: "Deutsche Holzwirtschaft"
  },
  {
    title: "Nachhaltigkeitspreis",
    year: "2021",
    organization: "NRW Umweltministerium"
  },
  {
    title: "Traditionspreis",
    year: "2020",
    organization: "Stadt Paderborn"
  }
]