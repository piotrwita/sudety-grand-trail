'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';

const TrailDescription = () => {
  return (
    <section className="section-padding overflow-hidden bg-earth-50 relative">
      <VintageMountainsBackground className="opacity-10" />
      <div className="fluid-container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-8 text-left">
              <span className="theme-trail-text-gradient">O Szlaku</span>
            </h2>

            <div className="my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-earth-700/40 to-transparent" />

            <div className="space-y-6 leading-relaxed text-mountain-600">
              <p className="text-xl font-medium">
                <span className="font-bold text-earth-800">
                  SUDETY GRAN TRAIL
                </span>{' '}
                – pierwszy szlak umożliwiający zdobycie najwyższego szczytu
                każdego z {' '}
                <span className="font-bold text-earth-800">
                 23 pasm górskich Sudetów
                </span> {' '}  w jednej trasie. {' '}
                <span className="font-bold text-earth-800">
                  900 km
                </span> {' '}
                 długości, około {' '}
                <span className="font-bold text-earth-800">
                 30 000 m
                </span> {' '} przewyższeń przez {' '}
                <span className="font-bold text-earth-800">
                 Polskę, Czechy i Niemcy
                </span> {' '}. Początek w {' '}
                <span className="font-bold text-earth-800">
                Jarnołtówku
                </span> {' '}
                , finał pod{' '}
                <span className="font-bold text-earth-800">
                Ślężą
                </span> {' '}, górą o duchowym znaczeniu.
              </p>
              <p className="text-lg">
                Od najwyższej Śnieżki (1603m) przez Pradziada (1491m), Śnieżnik
                (1426m), Wielką Sowę (1015m), skalny labirynt Szczelińca
                Wielkiego (919m), graniczną Biskupią Kopę (890m), aż po
                najniższy Lázek (714m) i mistyczną Ślężę (718m).{' '}
                <span className="font-bold text-earth-800">
                  To kompletne podbicie Sudetów!
                </span>
              </p>
            </div>

            {/* Trail Features */}
            <div className="mt-12 space-y-4">
              <h3 className="section-title mb-6 text-left text-xl">
                Główne Atrakcje:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    16 szczytów Korony Gór Polski
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Legendarny finał pod Ślężą
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Parki narodowe i rezerwaty
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Zamki i ruiny
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Schroniska z klimatem
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Wieże widokowe
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Zabytkowe kopalnie i sztolnie
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Niezapomniane widoki
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Unikatowe formacje skalne
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Trójstyk granic Polska-Czechy-Niemcy
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-earth-600 to-earth-700" />
                  <span className="font-bold uppercase tracking-wide text-earth-800">
                    Miejsca związane z legendami i mitami Sudetów
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
            className="relative mt-8"
          >
            <div className="card-vintage overflow-hidden min-h-[550px] relative">
              <Image
                src="https://d34-a.sdn.cz/d_34/c_img_H_K/NaRvEW.jpeg?fl=res,2200,2200,1"
                alt="Sudety Grand Trail - widok górski"
                width={600}
                height={550}
                className="h-full w-full object-cover min-h-[550px]"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-800/50 to-transparent" />

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
              <div className="stats-number text-3xl">23</div>
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
