import { HallOfFameStats } from '@/components/HallOfFameStats';
import { PreTrailRegistration } from '@/components/PreTrailRegistration';
import { HallOfFameList } from '@/components/HallOfFameList';
import { FadeIn, ScaleIn } from '@/components/motion';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section, SubmissionFormSection } from '@/components/sections';
import { LogoImage } from '@/components/LogoImage';
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
    className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-earth-900 to-forest-800 pt-16"
    ariaLabel="Sekcja główna - Hall of Fame"
  >
    {/* Epic Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-forest-900/95 via-earth-900/95 to-forest-800/95" />
    <div className="gradient-mesh-overlay absolute inset-0 opacity-30" />
    <VintageMountainsBackground className="opacity-15" />

    {/* Epic Conqueror Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-yellow-500/5 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-yellow-500/5 to-transparent" />
      {/* Smooth bottom glow - no hard edges */}
      <div className="from-yellow-400/8 via-yellow-400/4 absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-radial to-transparent blur-3xl" />
    </div>

    {/* Radial glow effect */}
    <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-yellow-400/10 via-yellow-400/5 to-transparent blur-3xl" />

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
          className="mb-8 inline-flex size-28 items-center justify-center rounded-full border-4 border-yellow-400/30 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-[0_0_40px_rgba(250,204,21,0.4)]"
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
            <span className="gradient-text-mesh">Hall of Fame</span>
            <span className="text-fluid-lg mt-6 block font-display font-bold uppercase tracking-wider text-yellow-400 drop-shadow-lg">
              Oficjalne Przejścia Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.5}>
          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent" />
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <p className="text-fluid-xl mx-auto mb-8 max-w-4xl font-medium leading-relaxed text-cream/90">
            Niezłomni wędrowcy zdobyli pełną{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-accent bg-clip-text font-bold text-transparent">
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
          duration={0.8}
          delay={0.8}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Link
            href={getSectionHash(sectionIds.submission)}
            className="btn-primary px-10 py-4 text-lg"
            aria-label="Zgłoś Swoje Przejście"
          >
            Zgłoś Swoje Przejście
          </Link>
          <Link
            href={getSectionHash(sectionIds.hallOfFame)}
            className="btn-secondary border-cream/60 px-10 py-4 text-lg text-cream/90 hover:bg-cream/90 hover:text-forest-800"
            aria-label="Zobacz Zdobywców"
          >
            Zobacz Zdobywców
          </Link>
        </FadeIn>
      </FadeIn>
    </div>
  </Section>
);
