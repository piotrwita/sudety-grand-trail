import { TrailMapSection } from '@/components/sections';
import TrailDescription from '@/components/TrailDescription';
import TrailMotivation from '@/components/TrailMotivation';
import { FadeIn, ScaleIn } from '@/components/motion';
import { MapIcon } from '@/components/icons';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';

export const metadata: Metadata = pageMetadata.trail;

export default function TrailPage() {
  return (
    <>
      <TrailHeroSection />
      <TrailMapSection />
      <TrailDescription />
      <TrailMotivation />
    </>
  );
}

const TrailHeroSection = () => (
  <Section
    className="min-h-0 bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700 py-24"
    ariaLabel="Sekcja główna - Poznaj Trasę"
  >
    <div className="absolute inset-0 bg-vintage-texture opacity-10" />
    <div className="fluid-container relative z-10">
      <FadeIn
        direction="up"
        offset={60}
        duration={0.6}
        className="mx-auto max-w-6xl text-center"
      >
        <ScaleIn
          initialScale={0.5}
          duration={0.8}
          delay={0.2}
          className="mb-8 inline-flex size-28 items-center justify-center rounded-full border-4 border-forest-500/30 bg-gradient-to-br from-forest-500 via-earth-600 to-forest-600 shadow-[0_0_40px_rgba(22,163,74,0.4)]"
        >
          <MapIcon className="h-14 w-14 text-forest-900/80" />
        </ScaleIn>

        <h1 className="hero-title mb-6">
          Poznaj <span className="text-gradient-light">Mapę</span>
        </h1>

        <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent" />

        <p className="text-fluid-lg mb-4 font-medium leading-relaxed text-cream/90">
          Nadszedł moment, by przedstawić trasę jaka kryje się za inicjatywą{' '}
          <span className="bg-gradient-to-r from-forest-400 via-earth-500 to-forest-500 bg-clip-text font-bold text-transparent">
            SUDETY GRAND TRAIL
          </span>
          . To nie przypadkowy wybór, lecz koncept, który oddaje założenia, charakter i ideę całego projektu.
        </p>

        <p className="text-fluid-lg font-medium leading-relaxed text-cream/90">
          Cała{' '}
          <span className="bg-gradient-to-r from-forest-400 via-earth-500 to-forest-500 bg-clip-text font-bold text-transparent">
            KORONA SUDETÓW
          </span>{' '}
          w jednym szlaku. 900 kilometrów przez 22 pasma i wejście na najwyższy
          szczyt każdego z nich. Od Jarnołtówka w Górach Opawskich po finał na
          Ślęży. Kompletny, zamknięty obraz Sudetów ułożony w jeden ambitny szlak.
        </p>
      </FadeIn>
    </div>
  </Section>
);
