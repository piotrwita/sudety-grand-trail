'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TrailDescription = () => {
  return (
    <section className="section-padding bg-forest-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-4xl md:text-5xl mb-8 text-left">
              O <span className="text-gradient">Szlaku</span>
            </h2>
            
            <div className="vintage-divider mx-0" />
            
            <div className="space-y-6 text-mountain-600 leading-relaxed">
              <p className="text-xl font-medium">
                <span className="text-forest-800 font-bold">KORONA SUDETÓW</span> – pierwszy szlak umożliwiający zdobycie najwyższego szczytu 
                każdego z 24 pasm Sudetów w jednej trasie. 900 km długości, 30 000 m przewyższeń przez Polskę, Czechy i Niemcy. 
                Początek w Jarnołtówku, finał pod Ślężą – górą o duchowym znaczeniu.
              </p>
              <p className="text-lg">
                Od najwyższej Śnieżki (1603m) przez Pradziada (1491m), Śnieżnik (1426m), Wielką Sowę (1015m), 
                skalny labirynt Szczelińca Wielkiego (919m), graniczną Biskupią Kopę (890m), 
                aż po najniższy Lázek (714m) i mistyczną Ślężę (718m). To kompletne podbicie Sudetów!
              </p>
            </div>

            {/* Trail Features */}
            <div className="mt-12 space-y-4">
              <h3 className="section-title text-xl mb-6 text-left">Główne Atrakcje:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-forest-700 to-earth-700 rounded-full" />
                  <span className="text-forest-800 font-bold uppercase tracking-wide">24 pasma górskie</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-forest-700 to-earth-700 rounded-full" />
                  <span className="text-forest-800 font-bold uppercase tracking-wide">16 szczytów Korony Gór Polski</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-forest-700 to-earth-700 rounded-full" />
                  <span className="text-forest-800 font-bold uppercase tracking-wide">3 kraje: Polska, Czechy, Niemcy</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-forest-700 to-earth-700 rounded-full" />
                  <span className="text-forest-800 font-bold uppercase tracking-wide">Legendarny finał pod Ślężą</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-earth-700 rounded-full" />
                  <span className="text-forest-800 font-bold uppercase tracking-wide">Plik GPX dostępny do pobrania</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="card-vintage overflow-hidden">
              <Image
                src="/images/trail-nature.svg"
                alt="Grand Trail Sudety Nature"
                width={600}
                height={450}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-800/50 to-transparent" />
              
              {/* Vintage corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cream/60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cream/60" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cream/60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cream/60" />
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 card-vintage p-6 text-center"
            >
              <div className="stats-number text-3xl">24</div>
              <div className="text-mountain-600 font-bold uppercase tracking-wide text-sm">Pasma</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-8 -right-8 card-vintage p-6 text-center"
            >
              <div className="stats-number text-3xl">900</div>
              <div className="text-mountain-600 font-bold uppercase tracking-wide text-sm">Kilometrów</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrailDescription