'use client';

import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { LogoImage } from '@/components/LogoImage';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { Section } from '@/components/sections';
import { FadeIn, ScaleIn } from '@/components/motion';
import { Link } from '@/i18n/navigation';
import { sectionIds } from '@/config/section-ids';
import { getSectionUrl } from '@/lib/section-navigation';
import { siteRoutes } from '@/config/site-routes';
import { BadgeSealCheckIcon } from '@/components/icons';
import { useTranslations } from '@/lib/i18n-utils';

export const BadgeHeroSection = () => {
  const { t } = useTranslations('badge');
  
  return (
    <Section
      className="theme-hero-bg theme-badge-hero pb-16 pt-24 sm:pb-24 sm:pt-32"
      ariaLabel="Sekcja główna - Odznaka"
    >
      {/* Epic Background Effects */}
      <div className="gradient-mesh-overlay absolute inset-0 opacity-20" />
      <VintageMountainsBackground className="opacity-15" />

      {/* Epic Badge Background Elements - More intense than Hall of Fame */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-gold-400/10 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold-400/10 to-transparent" />
        {/* Enhanced bottom glow - more intense */}
        <div className="theme-badge-glow absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-radial blur-[120px]" />
        {/* Additional radial glows for epic effect with animation */}
        <div className="bg-gold-400/8 absolute left-1/4 top-1/3 h-[500px] w-[500px] animate-pulse rounded-full blur-3xl" />
        <div
          className="bg-gold-500/8 absolute right-1/4 top-2/3 h-[500px] w-[500px] animate-pulse rounded-full blur-3xl"
          style={{ animationDelay: '1s' }}
        />
        <div className="bg-gold-300/6 absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      {/* Radial glow effect - enhanced */}
      <div className="theme-hero-glow theme-badge-glow" />

      {/* Logo in background */}
      <div className="absolute left-1/2 top-1/2 z-0 size-[300px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 sm:size-[400px] lg:size-[500px] 2xl:size-[600px]">
        <LogoImage fill preload />
      </div>

      <div className="fluid-container relative z-10 text-center">
        <FadeIn direction="up" offset={60} duration={0.6}>
          {/* Enhanced Badge Icon */}
          <ScaleIn
            initialScale={0.5}
            duration={0.6}
            delay={0.2}
            className="theme-badge-base theme-badge-badge mb-6 sm:mb-8"
          >
            <BadgeSealCheckIcon className="h-10 w-10 text-forest-900/80 sm:h-12 sm:w-12 md:h-14 md:w-14" />
          </ScaleIn>

          <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
            <h1 className="hero-title mb-3 text-cream">
              <span className="theme-badge-text-gradient drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                {t('title')}
              </span>
              <span className="text-fluid-lg mt-3 block font-display font-black uppercase tracking-wider text-gold-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
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
            className="mx-auto my-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent shadow-[0_0_15px_rgba(251,191,36,0.6)] sm:w-32 lg:my-6"
            style={{ transformOrigin: 'center' }}
          >
            <div />
          </ScaleIn>

          <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
            <div className="mx-auto max-w-5xl space-y-3">
              <p className="text-fluid-xl font-bold leading-relaxed text-cream/95">
                <span className="theme-badge-text-gradient font-black drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                  {t('highest')}
                </span>{' '}
                {t('description')}
              </p>
              <p className="text-fluid-base font-medium leading-relaxed text-cream/90">
                <span className="text-lg italic text-gold-200/90 sm:text-xl">
                  {t('quote')}
                </span>{' '}
                <span className="text-xl font-bold text-gold-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)] sm:text-2xl">
                  {t('symbol')}
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.8}
            delay={0.8}
            className="mt-6 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-6"
          >
            <Link
              href={{ pathname: siteRoutes.hallOfFame as any, hash: sectionIds.submission }}
              className="theme-btn-base theme-badge-btn-primary w-full px-6 py-3 text-sm font-black shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_40px_rgba(251,191,36,0.7)] sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
              aria-label={t('submit')}
            >
              {t('submit')}
            </Link>
            <Link
              href={siteRoutes.hallOfFame as any}
              className="theme-btn-base theme-badge-btn-secondary w-full px-6 py-3 text-sm font-bold sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
              aria-label={t('hallOfFame')}
            >
              {t('hallOfFame')}
            </Link>
          </FadeIn>
        </FadeIn>
      </div>

      <ScrollIndicator />
    </Section>
  );
};
