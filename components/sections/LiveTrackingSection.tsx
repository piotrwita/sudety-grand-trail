'use client';

import { motion } from 'framer-motion';
import { ClockIcon, FlagIcon, LocationIcon } from '../icons';

export const LiveTrackingSection = () => {
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
            className="section-title mb-6 text-forest-800"
          >
            Live <span className="text-gradient">Tracking</span>
          </motion.h2>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto text-xl font-medium leading-relaxed text-mountain-600"
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
                <LocationIcon className="size-6 text-accent" />
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
                <ClockIcon className="size-6 text-accent" />
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
                <FlagIcon className="size-6 text-accent" />
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
