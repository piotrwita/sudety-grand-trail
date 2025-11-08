'use client';

import { motion } from 'framer-motion';
import TrailMap from '@/components/TrailMap';
import TrailDescription from '@/components/TrailDescription';
import TrailMotivation from '@/components/TrailMotivation';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function TrailPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700 py-32">
        <div className="absolute inset-0 bg-vintage-texture opacity-10" />
        <div className="fluid-container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-cream/20 bg-gradient-to-br from-accent to-earth-700 shadow-vintage-xl"
            >
              <svg
                className="h-8 w-8 text-cream"
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
            </motion.div>

            <h1 className="hero-title mb-6 text-5xl md:text-6xl lg:text-7xl">
              Poznaj <span className="text-accent">Trasę</span>
            </h1>

            <div className="vintage-divider bg-gradient-to-r from-accent to-cream" />

            <p className="text-2xl font-medium leading-relaxed text-cream/90">
              <span className="font-bold text-accent">KORONA SUDETÓW</span> w
              jednym szlaku! 900 km przez 24 pasma i zdobycie najwyższego
              szczytu każdego z nich. Od Jarnołtówka (Góry Opawskie) po Ślężę –
              kompletne podbicie Sudetów.
            </p>
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute left-8 top-8 h-16 w-16 border-l-4 border-t-4 border-cream/20" />
        <div className="absolute right-8 top-8 h-16 w-16 border-r-4 border-t-4 border-cream/20" />
        <div className="absolute bottom-8 left-8 h-16 w-16 border-b-4 border-l-4 border-cream/20" />
        <div className="absolute bottom-8 right-8 h-16 w-16 border-b-4 border-r-4 border-cream/20" />
      </section>

      {/* Map Section */}
      <TrailMap />

      {/* Trail Description */}
      <TrailDescription />

      {/* Motivation Section */}
      <TrailMotivation />
    </div>
  );
}
