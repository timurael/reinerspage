"use client"

import { motion } from "framer-motion"
import { Upload, Settings, Package, Heart } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "KONZEPT",
    description: "Ihre Idee trifft auf unsere Expertise",
    number: "01",
    color: "red-600",
  },
  {
    icon: Settings,
    title: "DESIGN",
    description: "CAD-Präzision und Materialauswahl",
    number: "02",
    color: "blue-600",
  },
  {
    icon: Package,
    title: "PRODUKTION",
    description: "Laser-Präzision bis 1600×1000mm",
    number: "03",
    color: "yellow-400",
  },
  {
    icon: Heart,
    title: "LIEFERUNG",
    description: "Montage deutschlandweit",
    number: "04",
    color: "amber-700",
  },
]

export function HowItWorks() {
  return (
    <section className="py-32 bg-stone-100 relative">
      <div className="absolute inset-0 bg-amber-200 opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-4">SO ARBEITEN WIR</h2>
          <div className="w-32 h-1 bg-gray-900" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white border-2 border-gray-900 p-8 h-full relative overflow-hidden group hover:shadow-[0_8px_0_0_rgb(0,0,0)] transition-all">
                {/* Step number background */}
                <div className={`absolute -top-4 -right-4 text-9xl font-black text-${step.color} opacity-10`}>
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 mb-6 bg-${step.color} flex items-center justify-center`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-900 z-20" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-900 text-white px-8 py-4">
            <p className="text-sm uppercase tracking-wider mb-2 font-bold">BEWÄHRTES VERFAHREN</p>
            <p className="text-2xl font-bold">890 ERFOLGREICHE PROJEKTE</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}