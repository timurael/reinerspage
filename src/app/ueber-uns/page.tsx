"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Award, Leaf, Users } from "lucide-react"
import Link from "next/link"

export default function UeberUnsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071" 
            alt="Deutscher Wald"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bark-900/90 via-bark-800/70 to-bark-900/90" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-wood-300 text-lg mb-4">Unsere Geschichte</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-wood-50 leading-tight">
              Drei Generationen
              <br />
              <span className="text-wood-300 font-light">Deutsche Handwerkskunst</span>
            </h1>
            <p className="text-xl md:text-2xl text-wood-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Von Großvater Klaus zu Vater Heinrich bis zu unserem heutigen Meister Klaus – eine Familientradition, die Holz zum Leben erweckt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Familie Story */}
      <section className="py-32 bg-gradient-to-b from-wood-50 to-bark-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {generations.map((generation, index) => (
              <motion.div
                key={generation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="rounded-organic handcrafted-shadow bg-wood-50/80 border-wood-200 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-80">
                      <img 
                        src={generation.image}
                        alt={generation.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-wood-50 text-xl font-bold">{generation.name}</h3>
                        <p className="text-wood-200 text-sm">{generation.years}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-bark-700 leading-relaxed">{generation.story}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-32 bg-gradient-to-b from-bark-50 to-wood-100 bark-texture">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bark-800">Unsere Werte</h2>
            <p className="text-xl text-bark-600 max-w-3xl mx-auto leading-relaxed">
              Was uns seit drei Generationen antreibt und leitet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-organic bg-wood-600 flex items-center justify-center handcrafted-shadow">
                  <value.icon className="h-10 w-10 text-wood-50" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-bark-800">{value.title}</h3>
                <p className="text-bark-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-wood-800 text-wood-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Werden Sie Teil unserer Geschichte
            </h2>
            <p className="text-xl mb-8 text-wood-200">
              Lassen Sie uns gemeinsam Ihr nächstes Familienerbe erschaffen
            </p>
            <Link href="/design">
              <Button size="lg" className="bg-wood-600 hover:bg-wood-700 text-wood-50 rounded-organic handcrafted-shadow px-12 py-4 text-lg">
                Ihr Projekt beginnen
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const generations = [
  {
    name: "Klaus Stöveken I",
    years: "1945-1985",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    story: "Großvater Klaus gründete 1945 die Werkstatt mit nichts als seinen zwei Händen und einem unerschütterlichen Glauben an die Schönheit des Holzes. Nach dem Krieg half er beim Wiederaufbau, ein Möbelstück nach dem anderen."
  },
  {
    name: "Heinrich Stöveken",
    years: "1970-2010",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2067",
    story: "Vater Heinrich brachte die Moderne in die Tradition. Er war der erste, der Lasertechnologie mit klassischer Handwerkskunst verband und damit den Grundstein für unser heutiges Studio legte."
  },
  {
    name: "Klaus Stöveken III",
    years: "2010-heute",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2067",
    story: "Heute führe ich die Tradition fort, verbinde digitale Präzision mit der Seele des Handwerks. Jedes Stück trägt die DNA von drei Generationen deutscher Holzkunst in sich."
  }
]

const values = [
  {
    title: "Nachhaltigkeit",
    description: "Ausschließlich FSC-zertifizierte Hölzer aus deutschen Wäldern, respektvoller Umgang mit der Natur",
    icon: Leaf,
  },
  {
    title: "Meisterschaft",
    description: "Handwerkliche Exzellenz, die über Generationen verfeinert und weitergegeben wurde",
    icon: Award,
  },
  {
    title: "Herzblut",
    description: "Jedes Projekt wird mit der Leidenschaft und Hingabe einer Familientradition behandelt",
    icon: Heart,
  },
  {
    title: "Gemeinschaft",
    description: "Wir schaffen nicht nur Produkte, sondern Verbindungen zwischen Menschen und Erinnerungen",
    icon: Users,
  },
]