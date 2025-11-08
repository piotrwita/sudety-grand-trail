'use client';

import { motion } from 'framer-motion';

const LiveTracking = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-cream">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-forest-50 to-cream" />
      <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-10" />

      <div className="fluid-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          {/* Live Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center space-x-3 rounded-full border-2 border-accent bg-accent/20 px-6 py-3 backdrop-blur-sm"
          >
            <div className="h-3 w-3 animate-pulse rounded-full bg-accent" />
            <span className="text-sm font-bold uppercase tracking-wide text-accent">
              ŚLEDŹ NA ŻYWO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-title mb-6 text-4xl text-forest-800 md:text-5xl lg:text-6xl"
          >
            Live <span className="text-gradient">Tracking</span>
          </motion.h2>

          <div className="vintage-divider" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-4xl text-xl font-medium leading-relaxed text-mountain-600"
          >
            Dzięki współpracy z <strong className="text-accent">Poltrax</strong>{' '}
            możesz śledzić moją wyprawę w czasie rzeczywistym. Mapa pokazuje
            aktualną pozycję, przebytą trasę oraz{' '}
            <strong className="text-accent">
              orientacyjne punkty noclegów
            </strong>
            . Widoczny jest także limit czasowy – to będzie{' '}
            <strong className="text-forest-800">wyścig z czasem</strong>
            przez wszystkie 22 pasma Sudetów.
          </motion.p>
        </motion.div>

        {/* Live Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="card-vintage relative overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://poltrax.live/sgt"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
                title="Sudety Grand Trail - Live Tracking"
                frameBorder="0"
              />
            </div>

            {/* Live Overlay */}
            <div className="absolute left-6 top-6 rounded-xl border-2 border-accent bg-accent/90 p-4 shadow-vintage backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 animate-pulse rounded-full bg-cream" />
                <span className="text-sm font-bold uppercase tracking-wide text-cream">
                  OFICJALNA TRASA
                </span>
              </div>
            </div>

            {/* Info Badge */}
            <div className="absolute right-6 top-6 rounded-xl border border-forest-600 bg-forest-800/90 p-4 shadow-vintage backdrop-blur-sm">
              <div className="text-center">
                <div className="text-sm font-bold uppercase tracking-wide text-accent">
                  Powered by
                </div>
                <div className="text-lg font-bold text-cream">POLTRAX</div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="rounded-2xl border border-forest-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-forest-800">
                Aktualna Pozycja
              </h3>
              <p className="text-sm text-mountain-600">
                Lokalizacja w czasie rzeczywistym
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="rounded-2xl border border-forest-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent"
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
              <h3 className="mb-2 text-lg font-bold text-forest-800">
                Limit Czasowy
              </h3>
              <p className="text-sm text-mountain-600">
                Wyścig z czasem przez Sudety
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="rounded-2xl border border-forest-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-forest-800">
                Punkty Etapów
              </h3>
              <p className="text-sm text-mountain-600">
                Planowane miejsca noclegów
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveTracking;
