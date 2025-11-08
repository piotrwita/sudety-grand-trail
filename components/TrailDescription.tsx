'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const TrailDescription = () => {
  return (
    <section className="section-padding bg-forest-50">
      <div className="fluid-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-8 text-left text-4xl md:text-5xl">
              O <span className="text-gradient">Szlaku</span>
            </h2>

            <div className="vintage-divider mx-0" />

            <div className="space-y-6 leading-relaxed text-mountain-600">
              <p className="text-xl font-medium">
                <span className="font-bold text-forest-800">
                  KORONA SUDETÓW
                </span>{' '}
                – pierwszy szlak umożliwiający zdobycie najwyższego szczytu
                każdego z 24 pasm Sudetów w jednej trasie. 900 km długości, 30
                000 m przewyższeń przez Polskę, Czechy i Niemcy. Początek w
                Jarnołtówku, finał pod Ślężą – górą o duchowym znaczeniu.
              </p>
              <p className="text-lg">
                Od najwyższej Śnieżki (1603m) przez Pradziada (1491m), Śnieżnik
                (1426m), Wielką Sowę (1015m), skalny labirynt Szczelińca
                Wielkiego (919m), graniczną Biskupią Kopę (890m), aż po
                najniższy Lázek (714m) i mistyczną Ślężę (718m). To kompletne
                podbicie Sudetów!
              </p>
            </div>

            {/* Trail Features */}
            <div className="mt-12 space-y-4">
              <h3 className="section-title mb-6 text-left text-xl">
                Główne Atrakcje:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-forest-700 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-forest-800">
                    24 pasma górskie
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-forest-700 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-forest-800">
                    16 szczytów Korony Gór Polski
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-forest-700 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-forest-800">
                    3 kraje: Polska, Czechy, Niemcy
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-forest-700 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-forest-800">
                    Legendarny finał pod Ślężą
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-accent to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-forest-800">
                    Plik GPX dostępny do pobrania
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="card-vintage overflow-hidden">
              <Image
                src="/images/trail-nature.svg"
                alt="Grand Trail Sudety Nature"
                width={600}
                height={450}
                className="h-auto w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-800/50 to-transparent" />

              {/* Vintage corner decorations */}
              <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-cream/60" />
              <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-cream/60" />
              <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-cream/60" />
              <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-cream/60" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card-vintage absolute -bottom-8 -left-8 p-6 text-center"
            >
              <div className="stats-number text-3xl">24</div>
              <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
                Pasma
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="card-vintage absolute -right-8 -top-8 p-6 text-center"
            >
              <div className="stats-number text-3xl">900</div>
              <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
                Kilometrów
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrailDescription;
