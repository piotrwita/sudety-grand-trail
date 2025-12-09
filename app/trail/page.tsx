import { TrailMapSection } from '@/components/sections';
import TrailDescription from '@/components/TrailDescription';
import { FadeIn, ScaleIn } from '@/components/motion';
import { MapIcon } from '@/components/icons';
import { Section } from '@/components/sections/Section';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { LogoImage } from '@/components/LogoImage';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';

export const metadata: Metadata = pageMetadata.trail;

export default function TrailPage() {
  return (
    <>
      <TrailHeroSection />
      <TrailMapSection />
      <TrailDescription />
    </>
  );
}

const TrailHeroSection = () => (
  <Section
    className="theme-hero-bg theme-trail-hero pt-16"
    ariaLabel="Sekcja główna - Poznaj Trasę"
  >
    {/* Epic Background Effects */}
    <div className="theme-hero-overlay theme-trail-hero" />
    <div className="gradient-mesh-overlay absolute inset-0 opacity-30" />
    <VintageMountainsBackground className="opacity-15" />

    {/* Epic Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-earth-500/5 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-earth-500/5 to-transparent" />
      <div className="theme-trail-glow absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-radial" />
    </div>

    {/* Radial glow effect */}
    <div className="theme-hero-glow theme-trail-glow" />

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
          className="theme-badge-base theme-trail-badge mb-8"
        >
          <MapIcon className="h-14 w-14 text-earth-900/80" />
        </ScaleIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-6 text-cream">
            <span className="theme-trail-text-gradient">Poznaj Mapę</span>
            <span className="text-fluid-lg mt-6 block font-display font-bold uppercase tracking-wider text-earth-400 drop-shadow-lg">
              Trasa Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.5}>
          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent" />
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <div className="mx-auto w-full space-y-4 text-center">
            <p className="text-fluid-xl font-bold leading-relaxed text-cream/95 whitespace-nowrap">
              Kompletne oblicze <span className="theme-trail-text-gradient">SUDETÓW</span> ułożone w jeden ambitny szlak.
            </p>
            <p className="text-fluid-base lg:text-fluid-lg mx-auto max-w-4xl font-medium italic leading-relaxed text-cream/85">
              900 kilometrów przez 23 pasma górskie oraz wejście na najwyższy
              szczyt każdego z nich. Od Jarnołtówka w Górach Opawskich po finał
              na Ślęży.
            </p>
          </div>
        </FadeIn>
      </FadeIn>
    </div>

    <ScrollIndicator />
  </Section>
);
