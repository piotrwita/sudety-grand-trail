'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import backgroundImg from 'public/images/vintage-mountains.svg';
import logoJpg from 'public/images/logo.jpg';

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], [0, 0]);
  const logoScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const logoOpacity = useTransform(smoothProgress, [0, 1], [0.15, 0.05]);
  const contentY = useTransform(smoothProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      aria-label="Sekcja główna - Sudety Grand Trail"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: backgroundY }}
      >
        <Image
          src={backgroundImg}
          alt="Widok gór Sudetów w stylu vintage"
          fill
          className="object-cover"
          priority
          aria-hidden="false"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/85" />
      </motion.div>

      {/* Parallax Background Logo */}
      <motion.div
        className="z-5 absolute inset-0 will-change-transform"
        style={{ scale: logoScale, opacity: logoOpacity }}
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform lg:h-[800px] lg:w-[800px]">
          <Image
            src={logoJpg}
            alt="SGT Background Logo"
            width={800}
            height={800}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Parallax Content Container */}
      <motion.div
        className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 text-center will-change-transform sm:px-6 lg:-mt-20 lg:px-8"
        style={{ y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-title mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="mb-2 block">Sudety</span>
            <span className="gradient-text-mesh block">Grand Trail</span>
          </motion.h1>

          {/* Separator */}
          <motion.div
            className="mx-auto mb-10 h-0.5 w-24 bg-gradient-to-r from-transparent via-cream/40 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          />

          {/* Sekcja z opisem projektu */}
          <motion.div
            className="mx-auto mb-8 max-w-5xl space-y-4 text-center text-cream/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="mb-4 text-xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl">
                <span className="gradient-text-mesh">KORONA SUDETÓW</span> w
                jednym szlaku!
              </p>
              <p className="text-fluid-base lg:text-fluid-lg mx-auto max-w-3xl font-medium leading-relaxed text-cream/85">
                <span className="italic text-cream/60">
                  Autorski projekt zdobycia najwyższych szczytów wszystkich pasm
                  górskich Sudetów.
                </span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link
              href="/trail"
              className="btn-primary px-12 py-5 text-xl"
              aria-label="Rozpocznij podróż przez Sudety Grand Trail"
            >
              Rozpocznij Podróż
            </Link>
            <Link
              href="https://mapy.com/s/barusofola"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-cream/80 px-12 py-5 text-xl text-cream hover:bg-cream hover:text-forest-800 focus:ring-cream/50"
              aria-label="Zobacz interaktywną mapę trasy (otworzy się w nowej karcie)"
            >
              Zobacz Mapę
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-8"
            role="region"
            aria-label="Statystyki trasy"
          >
            <div
              className="group cursor-default text-center transition-transform duration-300 focus-within:scale-105 focus-within:rounded-lg focus-within:px-2 focus-within:py-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-cream/50 hover:scale-105"
              tabIndex={0}
              aria-label="900 Kilometrów"
            >
              <div className="stats-number text-cream transition-colors duration-300 group-hover:text-accent">
                900
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-cream/70">
                Kilometrów
              </div>
            </div>
            <div className="h-12 w-px bg-cream/20" aria-hidden="true"></div>
            <div
              className="group cursor-default text-center transition-transform duration-300 focus-within:scale-105 focus-within:rounded-lg focus-within:px-2 focus-within:py-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-cream/50 hover:scale-105"
              tabIndex={0}
              aria-label="22 Pasma"
            >
              <div className="stats-number text-cream transition-colors duration-300 group-hover:text-accent">
                22
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-cream/70">
                Pasma
              </div>
            </div>
            <div className="h-12 w-px bg-cream/20" aria-hidden="true"></div>
            <div
              className="group cursor-default text-center transition-transform duration-300 focus-within:scale-105 focus-within:rounded-lg focus-within:px-2 focus-within:py-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-cream/50 hover:scale-105"
              tabIndex={0}
              aria-label="3 Kraje"
            >
              <div className="stats-number text-cream transition-colors duration-300 group-hover:text-accent">
                3
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-cream/70">
                Kraje
              </div>
            </div>
            <div className="h-12 w-px bg-cream/20" aria-hidden="true"></div>
            <div
              className="group cursor-default text-center transition-transform duration-300 focus-within:scale-105 focus-within:rounded-lg focus-within:px-2 focus-within:py-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-cream/50 hover:scale-105"
              tabIndex={0}
              aria-label="30 tysięcy Przewyższeń"
            >
              <div className="stats-number text-cream transition-colors duration-300 group-hover:text-accent">
                30k
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-cream/70">
                Przewyższeń
              </div>
            </div>
            <div className="h-12 w-px bg-cream/20" aria-hidden="true"></div>
            <div
              className="group cursor-default text-center transition-transform duration-300 focus-within:scale-105 focus-within:rounded-lg focus-within:px-2 focus-within:py-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-cream/50 hover:scale-105"
              tabIndex={0}
              aria-label="16 Szczytów Korony Gór Polski"
            >
              <div className="stats-number text-cream transition-colors duration-300 group-hover:text-accent">
                16
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-cream/70">
                Szczytów KGP
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />

      {/* Decorative vintage elements */}
      <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-accent/10 blur-xl" />
      <div
        className="absolute bottom-20 right-10 h-32 w-32 animate-pulse rounded-full bg-forest-700/10 blur-2xl"
        style={{ animationDelay: '1s' }}
      />
    </section>
  );
};

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-16 left-1/2 -translate-x-1/2 transform lg:bottom-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.4 }}
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="flex h-10 w-6 justify-center rounded-full border-2 border-cream/40"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-2 h-3 w-1 rounded-full bg-cream/60"
      />
    </motion.div>
  </motion.div>
);
