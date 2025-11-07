'use client';

import { motion } from 'framer-motion';

const TrailMap = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-6 text-4xl md:text-5xl">
            Oficjalna <span className="text-gradient">Trasa Szlaku</span>
          </h2>

          <div className="vintage-divider" />

          <p className="mx-auto mb-8 max-w-5xl text-xl font-medium leading-relaxed text-mountain-600">
            Nadszedł moment, by oficjalnie przedstawić trasę wyznaczoną
            specjalnie na potrzeby tej wyprawy. To nie przypadkowy kierunek ani
            luźny pomysł – to{' '}
            <strong className="text-accent">przemyślana ścieżka</strong>, która
            idealnie wpisuje się w ideę i wartości całego przedsięwzięcia.
          </p>

          {/* Download GPX Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="https://pro.mapy.com/mapybox-export/v1/path/gpx?id=688fa97f662a3fae890f5f13&rand=0.7002222504750357"
              download="sudety-grand-trail.gpx"
              className="btn-primary group inline-flex items-center space-x-3 px-8 py-4 text-lg"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Pobierz Mapę GPX</span>
            </a>
            <a
              href="https://mapy.com/s/barusofola"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group inline-flex items-center space-x-3 border-forest-600 px-8 py-4 text-lg text-forest-700 hover:bg-forest-700 hover:text-cream"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>Otwórz w Mapy.com</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Map Container */}
          <div className="card-vintage relative overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://mapy.com/s/barusofola"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                title="Grand Trail Sudety Map"
                frameBorder="0"
              />
            </div>

            {/* Overlay with info */}
            <div className="absolute left-6 top-6 rounded-xl border-2 border-forest-600 bg-forest-800/90 p-4 shadow-vintage backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 animate-pulse rounded-full bg-accent" />
                <span className="text-sm font-bold uppercase tracking-wide text-cream">
                  Grand Trail Sudety
                </span>
              </div>
            </div>
          </div>

          {/* Map Info Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-vintage group p-8 text-center hover:scale-105"
            >
              <div className="badge-circle mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-6 w-6 text-cream"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="section-title mb-2 text-xl">Długość</h3>
              <div className="vintage-divider mx-auto my-3 w-12" />
              <p className="stats-number text-2xl">900 km</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card-vintage group p-8 text-center hover:scale-105"
            >
              <div className="badge-circle mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-6 w-6 text-cream"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="section-title mb-2 text-xl">Najwyższy punkt</h3>
              <div className="vintage-divider mx-auto my-3 w-12" />
              <p className="font-bold text-mountain-600">Śnieżka</p>
              <p className="stats-number text-2xl">1602 m</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card-vintage group p-8 text-center hover:scale-105"
            >
              <div className="badge-circle mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-6 w-6 text-cream"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="section-title mb-2 text-xl">Przewyższenia</h3>
              <div className="vintage-divider mx-auto my-3 w-12" />
              <p className="stats-number text-2xl">30 000 m</p>
            </motion.div>

            {/* GPX Download Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="card-vintage to-earth/10 group border-accent/30 bg-gradient-to-br from-accent/10 p-8 text-center hover:scale-105"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-earth-700 shadow-vintage transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-6 w-6 text-cream"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="section-title mb-2 text-xl">Plik GPX</h3>
              <div className="vintage-divider mx-auto my-3 w-12" />
              <p className="mb-3 font-bold text-mountain-600">
                Gotowy do pobrania
              </p>
              <a
                href="https://pro.mapy.com/mapybox-export/v1/path/gpx?id=688fa97f662a3fae890f5f13&rand=0.7002222504750357"
                download="sudety-grand-trail.gpx"
                className="btn-outline border-accent px-4 py-2 text-sm text-accent hover:bg-accent hover:text-cream"
              >
                Pobierz GPX
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrailMap;
