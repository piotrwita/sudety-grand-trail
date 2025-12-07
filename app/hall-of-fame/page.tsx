import { HallOfFameStats } from '@/components/HallOfFameStats';
import { PreTrailRegistration } from '@/components/PreTrailRegistration';
import { HallOfFameList } from '@/components/HallOfFameList';
import { FadeIn, ScaleIn } from '@/components/motion';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section, SubmissionFormSection } from '@/components/sections';
import { LogoImage } from '@/components/LogoImage';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import Link from 'next/link';
import { sectionIds } from '@/config/section-ids';
import { getSectionHash } from '@/lib/section-navigation';

export const metadata: Metadata = pageMetadata.hallOfFame;

export default function HallOfFamePage() {
  return (
    <>
      <HallOfFameHeroSection />
      <HallOfFameStats />
      <PreTrailRegistration />
      <HallOfFameList />
      <SubmissionFormSection />
    </>
  );
}

const HallOfFameHeroSection = () => (
  <Section
    className="theme-hero-bg theme-halloffame-hero pt-16"
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
    <div className="absolute left-1/2 top-1/2 z-0 size-[400px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 lg:size-[500px] 2xl:size-[600px]">
      <LogoImage fill preload />
    </div>

    <div className="fluid-container relative z-10 text-center">
      <FadeIn direction="up" offset={60} duration={0.6}>
        {/* Enhanced Trophy Badge */}
        <ScaleIn
          initialScale={0.5}
          duration={0.6}
          delay={0.2}
          className="theme-badge-base theme-halloffame-badge mb-8"
        >
          <svg
            className="h-14 w-14 text-forest-900/80"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="Puchar"
          >
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
          </svg>
        </ScaleIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-6 text-cream">
            <span className="theme-halloffame-text-gradient">Hall of Fame</span>
            <span className="text-fluid-lg mt-6 block font-display font-bold uppercase tracking-wider text-gold-400 drop-shadow-lg">
              Oficjalne Przejścia Sudety Grand Trail
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
          className="mx-auto my-4 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent lg:my-6"
          style={{ transformOrigin: 'center' }}
        >
          <div />
        </ScaleIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <p className="text-fluid-xl mx-auto mb-8 max-w-4xl font-medium leading-relaxed text-cream/90">
            Niezłomni wędrowcy zdobyli pełną{' '}
            <span className="theme-halloffame-text-gradient font-bold">
              Koronę Sudetów
            </span>
            . Przeszli 900 kilometrów przez 22 pasma górskie.
            <br />
            <span className="mt-4 block italic text-cream/90">
              Ty możesz dołączyć do elitarnego grona zdobywców!
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
            aria-label="Zgłoś Swoje Przejście"
          >
            Zgłoś Swoje Przejście
          </Link>
          <Link
            href={getSectionHash(sectionIds.hallOfFame)}
            className="theme-btn-base theme-halloffame-btn-secondary w-full border-2 px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg"
            aria-label="Zobacz Zdobywców"
          >
            Zobacz Zdobywców
          </Link>
        </FadeIn>
      </FadeIn>
    </div>

    <ScrollIndicator />
  </Section>
);
