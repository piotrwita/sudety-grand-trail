import { TrailMapSection } from '@/components/sections';
import TrailDescription from '@/components/TrailDescription';
import TrailMotivation from '@/components/TrailMotivation';
import { FadeIn, ScaleIn } from '@/components/motion';
import { MapIcon } from '@/components/icons';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { LogoImage } from '@/components/LogoImage';

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
    className="relative overflow-hidden bg-gradient-to-br from-earth-900 via-earth-800 to-earth-900 pt-16"
    ariaLabel="Sekcja główna - Poznaj Trasę"
  >
    {/* Epic Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-earth-900/95 via-earth-800/95 to-earth-900/95" />
    <div className="gradient-mesh-overlay absolute inset-0 opacity-30" />
    <VintageMountainsBackground className="opacity-15" />

    {/* Epic Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-earth-500/5 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-earth-500/5 to-transparent" />
      <div className="from-earth-400/8 via-earth-400/4 absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-radial to-transparent blur-3xl" />
    </div>

    {/* Radial glow effect */}
    <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-earth-400/10 via-earth-400/5 to-transparent blur-3xl" />

    {/* Logo in background */}
    <div className="absolute left-1/2 top-1/2 z-0 size-[400px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 lg:size-[500px] 2xl:size-[600px]">
      <LogoImage fill priority />
    </div>

    <div className="fluid-container relative z-10 text-center">
      <FadeIn direction="up" offset={60} duration={0.6}>
        <ScaleIn
          initialScale={0.5}
          duration={0.6}
          delay={0.2}
          className="mb-8 inline-flex size-28 items-center justify-center rounded-full border-4 border-earth-500/30 bg-gradient-to-br from-earth-500 via-earth-600 to-earth-700 shadow-[0_0_40px_rgba(139,69,19,0.4)]"
        >
          <MapIcon className="h-14 w-14 text-earth-900/80" />
        </ScaleIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-6 text-cream">
            <span className="gradient-text-mesh">Poznaj Mapę</span>
            <span className="text-fluid-lg mt-6 block font-display font-bold uppercase tracking-wider text-earth-400 drop-shadow-lg">
              Trasa Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.5}>
          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent" />
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <p className="text-fluid-xl mx-auto mb-4 max-w-6xl font-medium leading-relaxed text-cream/90">
            Nadszedł moment, by przedstawić trasę jaka kryje się za inicjatywą{' '}
            <span className="bg-gradient-to-r from-earth-400 via-earth-500 to-earth-600 bg-clip-text font-bold text-transparent">
              SUDETY GRAND TRAIL
            </span>
            . To nie przypadkowy wybór, lecz koncept, który oddaje założenia, charakter i ideę całego projektu.
          </p>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.7}>
          <p className="text-fluid-xl mx-auto mb-8 max-w-6xl font-medium leading-relaxed text-cream/90">
            Cała{' '}
            <span className="bg-gradient-to-r from-earth-400 via-earth-500 to-earth-600 bg-clip-text font-bold text-transparent">
              KORONA SUDETÓW
            </span>{' '}
            w jednym szlaku. 900 kilometrów przez 22 pasma i wejście na najwyższy
            szczyt każdego z nich. Od Jarnołtówka w Górach Opawskich po finał na
            Ślęży. Kompletny, zamknięty obraz Sudetów ułożony w jeden ambitny szlak.
          </p>
        </FadeIn>
      </FadeIn>
    </div>
  </Section>
);
