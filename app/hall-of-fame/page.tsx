import HallOfFameStats from '@/components/HallOfFameStats';
import PreTrailRegistration from '@/components/PreTrailRegistration';
import HallOfFameList from '@/components/HallOfFameList';
import SubmissionForm from '@/components/SubmissionForm';
import { FadeIn, ScaleIn } from '@/components/motion';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from '@/components/sections/Section';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata.hallOfFame;

export default function HallOfFamePage() {
  return (
    <>
      <HallOfFameHeroSection />
      <HallOfFameStats />
      <PreTrailRegistration />
      <HallOfFameList />
      <SubmissionForm />
    </>
  );
}

const HallOfFameHeroSection = () => (
  <Section
    className="bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700 py-24"
    ariaLabel="Sekcja główna - Hall of Fame"
  >
    {/* Background Pattern */}
    <div className="gradient-mesh-overlay absolute inset-0 opacity-20" />
    <VintageMountainsBackground className="opacity-10" />

    <div className="fluid-container relative z-10 text-center">
      <FadeIn direction="up" offset={60} duration={0.6}>
        {/* Badge */}
        <ScaleIn
          initialScale={0.5}
          duration={0.6}
          delay={0.2}
          className="mb-8 inline-flex size-24 items-center justify-center rounded-full border-4 border-cream/20 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-vintage-xl"
        >
          <span className="text-3xl">🏆</span>
        </ScaleIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-6 text-cream">
            <span className="gradient-text-mesh">Hall of Fame</span>
            <span className="text-fluid-lg mt-4 block font-medium normal-case tracking-normal text-cream/80">
              Oficjalne Przejścia Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <p className="text-fluid-xl mx-auto mb-8 max-w-4xl font-medium leading-relaxed text-cream/80">
            Ci odważni zdobyli pełną{' '}
            <span className="font-bold text-accent">Koronę Sudetów</span> – 900
            km przez 24 pasma górskie. Dołącz do elitarnego grona zdobywców!
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
            href="#zglos-przejscie"
            className="btn-primary px-10 py-4 text-lg"
            aria-label="Zgłoś Swoje Przejście"
          >
            Zgłoś Swoje Przejście
          </Link>
          <Link
            href="#hall-of-fame"
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
