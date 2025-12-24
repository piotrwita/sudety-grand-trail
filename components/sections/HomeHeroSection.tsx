'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useRef } from 'react';
import { Stats, StatsSeparator } from '@/components/Stats';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from './Section';
import { LogoImage } from '../LogoImage';
import { siteConfig } from '@/config/site';
import { siteRoutes } from '@/config/site-routes';
import { FadeIn, ScaleIn } from '@/components/motion';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { useTranslations } from '@/lib/i18n-utils';

export const HomeHeroSection = () => {
  const { t } = useTranslations('homeHero');
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
      className="min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24"
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
        <div className="absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 transform sm:size-[400px] md:size-[500px] lg:size-[600px] 2xl:size-[800px]">
          <LogoImage
            fill
            sizes="(min-width: 1536px) 800px, (min-width: 1024px) 600px, 100vw"
            preload
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
            <span className="mb-1 block sm:mb-2">{t('title').split(' ')[0]}</span>
            <span className="gradient-text-mesh block">{t('title').split(' ').slice(1).join(' ')}</span>
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
                <span className="gradient-text-mesh">{t('subtitle.part1')}</span>{' '}
                <span className="font-bold text-cream/90">{t('subtitle.part2')}</span>
              </p>
              <p className="text-fluid-base lg:text-fluid-lg mx-auto max-w-3xl font-medium leading-relaxed text-cream/85">
                <span className="italic text-cream/60">
                  {t('description')}
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
              href={siteRoutes.trail as any}
              className="btn-primary w-full px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
              aria-label={t('startJourney')}
            >
              {t('startJourney')}
            </Link>
            <Link
              href={{ pathname: siteRoutes.trail as any, hash: 'map' }}
              className="btn-secondary w-full border-cream/80 px-6 py-3 text-sm text-cream hover:bg-cream hover:text-forest-800 focus:ring-cream/50 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
              aria-label={t('viewMap')}
            >
              {t('viewMap')}
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
                label={t('stats.kilometers')}
                ariaLabel={`900 ${t('stats.kilometers')}`}
              />
              <StatsSeparator />
              <Stats value="23" label={t('stats.ranges')} ariaLabel={`23 ${t('stats.ranges')}`} />
              <StatsSeparator />
              <Stats value="3" label={t('stats.countries')} ariaLabel={`3 ${t('stats.countries')}`} />
              <StatsSeparator />
              <Stats
                value="30k"
                label={t('stats.elevation')}
                ariaLabel={`30k ${t('stats.elevation')}`}
              />
              <StatsSeparator />
              <Stats
                value="16"
                label={t('stats.kgpPeaks')}
                ariaLabel={`16 ${t('stats.kgpPeaks')}`}
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

const DecorativeVintageElements = () => (
  <>
    <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-mountain-700/10 blur-xl" />
    <div
      className="absolute bottom-20 right-10 h-32 w-32 animate-pulse rounded-full bg-mountain-600/10 blur-2xl"
      style={{ animationDelay: '1s' }}
    />
  </>
);
