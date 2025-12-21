'use client';

import { Section } from '@/components/sections';
import { Stats, StatsSeparator } from '@/components/Stats';
import { FadeIn, ScaleIn } from '@/components/motion';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { LogoImage } from '@/components/LogoImage';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { useTranslations } from '@/lib/i18n-utils';

export const LiveHeroSection = () => {
  const { t } = useTranslations('live');

  return (
    <Section
      className="theme-hero-bg theme-live-hero pt-24 pb-16 sm:pt-32 sm:pb-24"
      ariaLabel="Sekcja główna - Śledź Wyprawę"
    >
      {/* Epic Background Effects */}
      <div className="theme-hero-overlay theme-live-hero" />
      <div className="gradient-mesh-overlay absolute inset-0 opacity-30" />
      <VintageMountainsBackground className="opacity-15" />

      {/* Epic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-orange-500/5 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="theme-live-glow absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-radial" />
      </div>

      {/* Radial glow effect */}
      <div className="theme-hero-glow theme-live-glow" />

      {/* Logo in background */}
      <div className="absolute left-1/2 top-1/2 z-0 size-[300px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 sm:size-[400px] lg:size-[500px] 2xl:size-[600px]">
        <LogoImage fill preload />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn
          direction="up"
          offset={50}
          duration={0.8}
          delay={0.2}
          inView={false}
        >
          {/* Live Badge */}
          <ScaleIn
            initialScale={0}
            duration={0.6}
            delay={0.4}
            inView={false}
            className="mb-6 inline-flex items-center space-x-2 rounded-full border-2 border-orange-400 bg-orange-500/20 px-6 py-3 backdrop-blur-sm sm:mb-8 sm:space-x-3 sm:px-8 sm:py-4"
          >
            <div className="h-3 w-3 animate-pulse rounded-full bg-orange-500 sm:h-4 sm:w-4" />
            <span className="text-base font-bold uppercase tracking-wide text-cream sm:text-lg">
              {t('badge')}
            </span>
          </ScaleIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.8}
            delay={0.6}
            inView={false}
          >
            <h1 className="hero-title mb-4 leading-tight text-cream sm:mb-6">
              <span className="font-bold text-cream">{t('title.part1')}</span>{' '}
              <span className="theme-live-text-gradient">{t('title.part2')}</span>
            </h1>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.8}
            delay={0.8}
            inView={false}
          >
            <p className="text-fluid-base lg:text-fluid-lg mx-auto mb-6 max-w-3xl font-medium leading-relaxed text-cream/85 sm:mb-8">
              <span className="italic text-cream/60">
                {t('description')}
              </span>
            </p>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.8}
            delay={1.0}
            inView={false}
            className="flex flex-wrap items-center justify-center gap-6 text-center sm:gap-8"
          >
            <Stats value="900" label={t('stats.kilometers')} ariaLabel={`900 ${t('stats.kilometers')}`} />
            <StatsSeparator />
            <Stats value="24/7" label={t('stats.tracking')} ariaLabel={`24/7 ${t('stats.tracking')}`} />
          </FadeIn>
        </FadeIn>
      </div>

      <ScrollIndicator />
    </Section>
  );
};

