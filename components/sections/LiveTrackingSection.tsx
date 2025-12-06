'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, FlagIcon, LocationIcon } from '../icons';

export const LiveTrackingSection = () => {
  const [isMapInteractive, setIsMapInteractive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      setIsScrolling(true);
      setIsMapInteractive(false);

      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  const handleMapClick = () => {
    setIsMapInteractive(true);
  };

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
            className="mb-8 inline-flex items-center space-x-3 rounded-full border-2 border-orange-400 bg-orange-500/20 px-6 py-3 backdrop-blur-sm"
          >
            <div className="h-3 w-3 animate-pulse rounded-full bg-orange-500" />
            <span className="text-sm font-bold uppercase tracking-wide text-orange-600">
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
            Live <span className="theme-live-text-gradient">Tracking</span>
          </motion.h2>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-5xl text-xl font-medium leading-relaxed text-mountain-600"
          >
            Dzięki współpracy z <strong className="text-orange-500">Poltrax</strong>{' '}
            możesz śledzić swoją wyprawę w czasie rzeczywistym. Mapa pokazuje Twoją
            aktualną pozycję, przebytą trasę, limit czasowy oraz orientacyjne punkty noclegów.
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
          <div
            ref={mapContainerRef}
            className="card-vintage relative overflow-hidden"
          >
            <div className="aspect-video relative">
              <iframe
                src="https://poltrax.live/sgt"
                width="100%"
                height="100%"
                style={{
                  border: 'none',
                  pointerEvents: isMapInteractive && !isScrolling ? 'auto' : 'none',
                }}
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
                title="Sudety Grand Trail - Live Tracking"
                frameBorder="0"
              />
              {/* Overlay that blocks interaction during scroll */}
              {(!isMapInteractive || isScrolling) && (
                <div
                  onClick={handleMapClick}
                  className="absolute inset-0 z-10 cursor-pointer bg-transparent transition-opacity duration-200"
                  aria-label="Kliknij na mapę, aby ją przesunąć"
                />
              )}
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                <LocationIcon className="size-6 text-orange-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-orange-800">
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                <ClockIcon className="size-6 text-orange-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-orange-800">
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
              className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                <FlagIcon className="size-6 text-orange-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-orange-800">
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
