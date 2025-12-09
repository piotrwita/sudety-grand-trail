import { BadgeSection } from '@/components/sections';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { LogoImage } from '@/components/LogoImage';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { Section } from '@/components/sections';
import { FadeIn, ScaleIn } from '@/components/motion';
import Link from 'next/link';
import { sectionIds } from '@/config/section-ids';
import { getSectionUrl } from '@/lib/section-navigation';
import { siteRoutes } from '@/config/site-routes';

export const metadata: Metadata = pageMetadata.badge;

export default function BadgePage() {
  return (
    <>
      <BadgeHeroSection />
      <BadgeSection />
    </>
  );
}

const BadgeHeroSection = () => (
  <Section
    className="theme-hero-bg theme-badge-hero pt-16"
    ariaLabel="Sekcja główna - Odznaka"
  >
    {/* Epic Background Effects */}
    <div className="theme-hero-overlay theme-badge-hero" />
    <div className="gradient-mesh-overlay absolute inset-0 opacity-30" />
    <VintageMountainsBackground className="opacity-15" />

    {/* Epic Badge Background Elements - More intense than Hall of Fame */}
    <div className="absolute inset-0">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-gold-400/10 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold-400/10 to-transparent" />
      {/* Enhanced bottom glow - more intense */}
      <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-radial theme-badge-glow blur-[120px]" />
      {/* Additional radial glows for epic effect with animation */}
      <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-gold-400/8 blur-3xl animate-pulse" />
      <div className="absolute right-1/4 top-2/3 h-[500px] w-[500px] rounded-full bg-gold-500/8 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/6 blur-3xl" />
      {/* Floating particles */}
      <div className="absolute left-1/3 top-1/4 h-2 w-2 rounded-full bg-gold-400/40 blur-sm animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute right-1/3 bottom-1/4 h-3 w-3 rounded-full bg-gold-500/40 blur-sm animate-ping" style={{ animationDelay: '2s' }} />
    </div>

    {/* Radial glow effect - enhanced */}
    <div className="theme-hero-glow theme-badge-glow" />

    {/* Logo in background */}
    <div className="absolute left-1/2 top-1/2 z-0 size-[400px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 lg:size-[500px] 2xl:size-[600px]">
      <LogoImage fill preload />
    </div>

    <div className="fluid-container relative z-10 text-center">
      <FadeIn direction="up" offset={60} duration={0.6}>
        {/* Epic Badge Icon - Without circular frame */}
        <ScaleIn
          initialScale={0.3}
          duration={0.8}
          delay={0.2}
          className="mb-4 inline-block"
        >
          <div className="relative inline-block">
            {/* Glow effect without circular border */}
            <div className="absolute inset-0 -z-10 rounded-lg bg-gold-400/20 blur-2xl animate-pulse" />
            <svg
              className="h-20 w-20 text-gold-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] sm:h-24 sm:w-24 md:h-28 md:w-28"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-label="Odznaka"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
        </ScaleIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-3 text-cream">
            <span className="theme-badge-text-gradient drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
              Oficjalna Odznaka
            </span>
            <span className="text-fluid-lg mt-3 block font-display font-black uppercase tracking-wider text-gold-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
              Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.5}>
          <div className="mx-auto my-4 h-1.5 w-48 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <div className="mx-auto max-w-5xl space-y-3">
            <p className="text-fluid-xl font-bold leading-relaxed text-cream/95">
              <span className="theme-badge-text-gradient font-black drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                Najwyższe wyróżnienie
              </span>{' '}
              dla tych, którzy ukończyli pełne przejście szlaku.
            </p>
            <p className="text-fluid-lg font-bold leading-relaxed text-gold-200/95">
              <span className="font-black text-gold-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                900 kilometrów. 23 pasma górskie. Niezłomność. Duma.
              </span>
            </p>
            <p className="text-fluid-base font-medium leading-relaxed text-cream/90">
              <span className="text-lg italic text-gold-200/90 sm:text-xl">
                To nie tylko odznaka.
              </span>{' '}
              <span className="text-xl font-bold text-gold-300 sm:text-2xl drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">
                To symbol pokonania własnych granic.
              </span>
            </p>
          </div>
        </FadeIn>

        <FadeIn
          direction="up"
          offset={30}
          duration={0.8}
          delay={0.8}
          className="mt-8 flex flex-col items-center justify-center gap-6 sm:mt-10 sm:flex-row"
        >
          <Link
            href={getSectionUrl(siteRoutes.hallOfFame, sectionIds.submission)}
            className="theme-btn-base theme-badge-btn-primary px-10 py-4 text-lg font-black shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_40px_rgba(251,191,36,0.7)]"
            aria-label="Zgłoś Swoje Przejście"
          >
            Zgłoś Przejście i Zdobądź Odznakę
          </Link>
          <Link
            href={siteRoutes.hallOfFame}
            className="theme-btn-base theme-badge-btn-secondary px-10 py-4 text-lg font-bold"
            aria-label="Zobacz Zdobywców"
          >
            Zobacz Hall of Fame
          </Link>
        </FadeIn>
      </FadeIn>
    </div>

    <ScrollIndicator />
  </Section>
);
