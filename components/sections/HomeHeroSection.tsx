'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { Stats, StatsSeparator } from '@/components/Stats';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from './Section';
import { LogoImage } from '../LogoImage';
import { siteConfig } from '@/config/site';
import { siteRoutes } from '@/config/site-routes';
import { FadeIn, ScaleIn } from '@/components/motion';

export const HomeHeroSection = () => {
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
    <Section
      ref={ref}
      ariaLabel="Sekcja główna - Sudety Grand Trail"
      className="pt-16"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: backgroundY }}
      >
        <VintageMountainsBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/85" />
      </motion.div>

      {/* Parallax Logo Image */}
      <motion.div
        className="z-5 absolute inset-0 will-change-transform"
        style={{ scale: logoScale, opacity: logoOpacity }}
      >
        <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 transform lg:size-[600px] 2xl:size-[800px]">
          <LogoImage
            fill
            sizes="(min-width: 1536px) 800px, (min-width: 1024px) 600px, 100vw"
            priority
            fetchPriority="high"
          />
        </div>
      </motion.div>

      {/* Parallax Content Container */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 text-center will-change-transform sm:px-6 lg:px-8"
        style={{ y: contentY }}
      >
        <FadeIn direction="up" duration={0.6} delay={0.2} offset={50}>
          <FadeIn
            direction="up"
            duration={0.6}
            delay={0.6}
            offset={30}
            className="hero-title"
          >
            <span className="mb-1 block sm:mb-2">Sudety</span>
            <span className="gradient-text-mesh block">Grand Trail</span>
          </FadeIn>

          {/* Separator */}
          <ScaleIn
            duration={0.6}
            delay={0.75}
            initialScale={0}
            finalScale={1}
            initialOpacity={0}
            finalOpacity={1}
            className="mx-auto my-4 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent lg:my-6"
            style={{ transformOrigin: 'center' }}
          >
            <div />
          </ScaleIn>

          {/* Description Container */}
          <FadeIn
            direction="up"
            duration={0.6}
            delay={0.8}
            offset={30}
            className="mx-auto max-w-5xl space-y-3 px-2 text-center text-cream/90 sm:space-y-4 sm:px-4"
          >
            <FadeIn direction="up" duration={0.8} delay={0.9} offset={20}>
              <p className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                <span className="gradient-text-mesh">KORONA SUDETÓW</span> w
                jednym szlaku!
              </p>
              <p className="text-fluid-base lg:text-fluid-lg mx-auto max-w-3xl font-medium leading-relaxed text-cream/85">
                <span className="italic text-cream/60">
                  Autorski projekt zdobycia najwyższych szczytów wszystkich pasm
                  górskich Sudetów.
                </span>
              </p>
            </FadeIn>
          </FadeIn>

          {/* Buttons Container */}
          <FadeIn
            direction="up"
            duration={0.6}
            delay={1.0}
            offset={30}
            className="mt-4 flex w-full flex-col items-center justify-center gap-3 px-4 sm:mt-6 sm:flex-row sm:gap-4 md:gap-6"
          >
            <Link
              href={siteRoutes.trail}
              className="btn-primary w-full px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
              aria-label="Rozpocznij podróż przez Sudety Grand Trail"
            >
              Rozpocznij Podróż
            </Link>
            <Link
              href={siteConfig.links.map.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full border-cream/80 px-6 py-3 text-sm text-cream hover:bg-cream hover:text-forest-800 focus:ring-cream/50 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
              aria-label="Zobacz interaktywną mapę trasy (otworzy się w nowej karcie)"
            >
              Zobacz Mapę
            </Link>
          </FadeIn>

          {/* Stats Row */}
          <FadeIn
            direction="up"
            duration={0.6}
            delay={1.2}
            offset={30}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <div
              className="flex flex-wrap items-center justify-center gap-4 px-2 sm:gap-6 lg:gap-8"
              role="region"
              aria-label="Statystyki trasy"
            >
              <Stats
                value="900"
                label="Kilometrów"
                ariaLabel="900 Kilometrów"
              />
              <StatsSeparator />
              <Stats value="22" label="Pasma" ariaLabel="22 Pasma" />
              <StatsSeparator />
              <Stats value="3" label="Kraje" ariaLabel="3 Kraje" />
              <StatsSeparator />
              <Stats
                value="30k"
                label="Przewyższeń"
                ariaLabel="30 tysięcy Przewyższeń"
              />
              <StatsSeparator />
              <Stats
                value="16"
                label="Szczytów KGP"
                ariaLabel="16 Szczytów Korony Gór Polski"
              />
            </div>
          </FadeIn>
        </FadeIn>
      </motion.div>

      <ScrollIndicator />

      <DecorativeVintageElements />
    </Section>
  );
};

const ScrollIndicator = () => (
  <FadeIn
    duration={0.6}
    delay={1.4}
    offset={0}
    className="absolute bottom-16 left-1/2 -translate-x-1/2 transform lg:bottom-20"
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
  </FadeIn>
);

const DecorativeVintageElements = () => (
  <>
    <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-accent/10 blur-xl" />
    <div
      className="absolute bottom-20 right-10 h-32 w-32 animate-pulse rounded-full bg-forest-700/10 blur-2xl"
      style={{ animationDelay: '1s' }}
    />
  </>
);
