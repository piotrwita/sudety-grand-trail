'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const TrailMotivation = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-earth-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vintage-mountains.svg"
          alt="Trail motivation background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-earth-900/95 via-earth-800/90 to-earth-900/95" />
      </div>

      <div className="fluid-container relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-icon-badge-light mb-8 bg-gradient-to-br from-earth-600 to-earth-700"
            >
              <svg
                className="h-8 w-8 text-cream/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>

            <h2 className="section-title mb-6 text-cream">
              <span className="text-gradient-light">Motywacja</span> do
              Działania
            </h2>

            <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent" />

            <p className="text-fluid-lg mx-auto font-medium leading-relaxed text-cream/90">
              To propozycja dla każdego, kto pragnie odkryć Sudety w ich pełni –
              nie tylko fizycznie, ale też duchowo. Dla wędrowców, marzycieli,
              samotników, sportowców i ludzi gór.
            </p>
          </motion.div>

          {/* Motivation Content */}
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="card-vintage bg-cream/95 p-10">
                <h3 className="section-title mb-6 text-left text-2xl">
                  Przekrocz Swoje Granice
                </h3>

                <div className="mb-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-earth-700/40 to-transparent" />

                <p className="mb-8 text-lg font-medium leading-relaxed text-mountain-600">
                  Ten projekt powstał z miłości do gór, ale też z potrzeby
                  stworzenia czegoś własnego – ścieżki, która nie tylko prowadzi
                  przez szczyty, ale łączy pasma, kraje, emocje i doświadczenia.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="badge-circle h-12 w-12 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-cream"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wide text-forest-800">
                        Nieprzewidywalna przygoda
                      </h4>
                      <p className="text-sm font-medium text-mountain-500">
                        Ale i przemyślana koncepcja łącząca wszystkie pasma
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="badge-circle h-12 w-12 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-cream"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wide text-forest-800">
                        Na własnych zasadach
                      </h4>
                      <p className="text-sm font-medium text-mountain-500">
                        We własnym tempie, według własnej filozofii wędrowania
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="badge-circle h-12 w-12 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-cream"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wide text-forest-800">
                        Korona Sudetów w jednym szlaku
                      </h4>
                      <p className="text-sm font-medium text-mountain-500">
                        23 najwyższe szczyty plus 16 szczytów KGP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="card-vintage bg-cream/95 p-8 text-center">
                  <div className="stats-number mb-2 text-4xl">900</div>
                  <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
                    Kilometrów
                  </div>
                </div>
                <div className="card-vintage bg-cream/95 p-8 text-center">
                  <div className="stats-number mb-2 text-4xl">24</div>
                  <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
                    Pasma
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="card-vintage border-earth-600 bg-gradient-to-br from-earth-700/20 to-earth-800/20 p-10 text-center">
                <h3 className="hero-title mb-6 text-2xl text-cream">
                  Gotowy na Przygodę?
                </h3>
                <p className="mb-8 text-lg font-medium text-cream/90">
                  Zapraszam do zmierzenia się z tym wyzwaniem – na własnych
                  zasadach, we własnym tempie
                </p>
                <div className="space-y-6">
                  <a
                    href="#"
                    className="btn-primary flex w-full items-center justify-center px-4 py-3 text-sm sm:px-8 sm:py-4 sm:text-base md:text-lg"
                  >
                    Rozpocznij Swoją Przygodę
                  </a>
                  <div className="flex space-x-4">
                    <a
                      href="https://mapy.com/s/barusofola"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 border-cream/60 text-center text-cream/90 hover:bg-cream/90 hover:text-earth-800"
                    >
                      Mapa
                    </a>
                    <a
                      href="https://www.facebook.com/SudetyGrandTrail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 border-cream/60 text-center text-cream/90 hover:bg-cream/90 hover:text-earth-800"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative vintage elements */}
      <div className="absolute left-10 top-20 h-32 w-32 animate-pulse rounded-full bg-accent/10 blur-2xl" />
      <div
        className="absolute bottom-20 right-10 h-24 w-24 animate-pulse rounded-full bg-cream/10 blur-xl"
        style={{ animationDelay: '1s' }}
      />

      {/* Corner decorative elements */}
      <div className="absolute left-8 top-8 h-16 w-16 border-l-4 border-t-4 border-cream/20" />
      <div className="absolute right-8 top-8 h-16 w-16 border-r-4 border-t-4 border-cream/20" />
      <div className="absolute bottom-8 left-8 h-16 w-16 border-b-4 border-l-4 border-cream/20" />
      <div className="absolute bottom-8 right-8 h-16 w-16 border-b-4 border-r-4 border-cream/20" />
    </section>
  );
};

export default TrailMotivation;
