'use client';

import { FadeIn, ScaleIn } from '@/components/motion';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from '@/components/sections';
import { LogoImage } from '@/components/LogoImage';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import Link from 'next/link';
import { sectionIds } from '@/config/section-ids';
import { getSectionHash } from '@/lib/section-navigation';
import { TrophyIcon } from '@/components/icons';
import { useTranslations } from '@/lib/i18n-utils';

export const HallOfFameHeroSection = () => {
  const { t } = useTranslations('hallOfFameHero');
  
  return (
    <Section
      className="theme-hero-bg theme-halloffame-hero pb-16 pt-24 sm:pb-24 sm:pt-32"
      ariaLabel="Sekcja główna - Hall of Fame"
    >
      {/* Epic Background Effects */}
      <div className="theme-hero-overlay theme-halloffame-hero" />
      <div className="gradient-mesh-overlay absolute inset-0 opacity-30" />
      <VintageMountainsBackground className="opacity-15" />

      {/* Epic Conqueror Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-gold-500/5 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold-500/5 to-transparent" />
        {/* Smooth bottom glow - no hard edges */}
        <div className="theme-halloffame-glow absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-radial" />
      </div>

      {/* Radial glow effect */}
      <div className="theme-hero-glow theme-halloffame-glow" />

      {/* Logo in background */}
      <div className="absolute left-1/2 top-1/2 z-0 size-[300px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 sm:size-[400px] lg:size-[500px] 2xl:size-[600px]">
        <LogoImage fill preload />
      </div>

      <div className="fluid-container relative z-10 text-center">
        <FadeIn direction="up" offset={60} duration={0.6}>
          {/* Enhanced Trophy Badge */}
          <ScaleIn
            initialScale={0.5}
            duration={0.6}
            delay={0.2}
            className="theme-badge-base theme-halloffame-badge mb-6 sm:mb-8"
          >
            <TrophyIcon className="h-10 w-10 text-forest-900/80 sm:h-12 sm:w-12 md:h-14 md:w-14" />
          </ScaleIn>

          <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
            <h1 className="hero-title mb-4 text-cream sm:mb-6">
              <span className="theme-halloffame-text-gradient">{t('title')}</span>
              <span className="text-fluid-lg mt-4 block font-display font-bold uppercase tracking-wider text-gold-400 drop-shadow-lg sm:mt-6">
                {t('subtitle')}
              </span>
            </h1>
          </FadeIn>

          <ScaleIn
            duration={0.6}
            delay={0.5}
            initialScale={0}
            finalScale={1}
            initialOpacity={0}
            finalOpacity={1}
            className="mx-auto my-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-cream/40 to-transparent sm:w-32 lg:my-6"
            style={{ transformOrigin: 'center' }}
          >
            <div />
          </ScaleIn>

          <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
            <p className="text-fluid-xl mx-auto mb-6 max-w-4xl font-medium leading-relaxed text-cream/90 sm:mb-8">
              {t('description.part1')}
              <span className="theme-halloffame-text-gradient-light font-bold">{t('description.part2')}</span>
              {t('description.part3')}
              <br />
              <span className="mt-3 block italic text-cream/90 sm:mt-4">
                {t('join')}
              </span>
            </p>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.6}
            delay={0.8}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:gap-6"
          >
            <Link
              href={getSectionHash(sectionIds.submission)}
              className="theme-btn-base theme-halloffame-btn-primary w-full px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
              aria-label={t('submit')}
            >
              {t('submit')}
            </Link>
            <Link
              href={getSectionHash(sectionIds.hallOfFame)}
              className="theme-btn-base theme-halloffame-btn-secondary w-full border-2 px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
              aria-label={t('view')}
            >
              {t('view')}
            </Link>
          </FadeIn>
        </FadeIn>
      </div>

      <ScrollIndicator />
    </Section>
  );
};

