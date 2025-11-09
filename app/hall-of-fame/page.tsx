import HallOfFameStats from '@/components/HallOfFameStats';
import PreTrailRegistration from '@/components/PreTrailRegistration';
import HallOfFameList from '@/components/HallOfFameList';
import SubmissionForm from '@/components/SubmissionForm';
import { FadeIn, ScaleIn } from '@/components/motion';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

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
  <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700 py-32">
    {/* Background Pattern */}
    <div className="gradient-mesh-overlay absolute inset-0 opacity-20" />
    <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-10" />

    <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
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
          <a href="#zglos-przejscie" className="btn-primary px-10 py-4 text-lg">
            Zgłoś Swoje Przejście
          </a>
          <a
            href="#hall-of-fame"
            className="btn-secondary border-cream/60 px-10 py-4 text-lg text-cream/90 hover:bg-cream/90 hover:text-forest-800"
          >
            Zobacz Zdobywców
          </a>
        </FadeIn>
      </FadeIn>
    </div>
  </section>
);
