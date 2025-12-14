import { SudetenCrownSection } from '@/components/sections';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { FadeIn, ScaleIn } from '@/components/motion';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { LogoImage } from '@/components/LogoImage';
import { ScrollIndicator } from '@/components/ScrollIndicator';

export const metadata: Metadata = pageMetadata.korona;

export default function MountainsPage() {
  return (
    <>
      <MountainsHeroSection />
      <SudetenCrownSection />
    </>
  );
}

const MountainsHeroSection = () => (
  <Section
    className="theme-hero-bg theme-szczyty-hero pb-16 pt-24 sm:pb-24 sm:pt-32"
    ariaLabel="Sekcja główna - Wykaz szczytów"
  >
    {/* Epic Background Effects */}
    <div className="gradient-mesh-overlay absolute inset-0 opacity-20" />
    <VintageMountainsBackground className="opacity-15" />

    {/* Epic Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-earth-500/5 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-earth-500/5 to-transparent" />
      <div className="theme-szczyty-glow absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-radial" />
    </div>

    {/* Radial glow effect */}
    <div className="theme-hero-glow theme-szczyty-glow" />

    {/* Logo in background */}
    <div className="absolute left-1/2 top-1/2 z-0 size-[300px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 sm:size-[400px] lg:size-[500px] 2xl:size-[600px]">
      <LogoImage fill preload />
    </div>

    <div className="fluid-container relative z-10 text-center">
      <FadeIn direction="up" offset={60} duration={0.6}>
        {/* Mountain Badge */}
        <ScaleIn
          initialScale={0.5}
          duration={0.6}
          delay={0.2}
          className="theme-badge-base theme-szczyty-badge mb-6 sm:mb-8"
        >
          <svg
            className="h-10 w-10 text-earth-900/80 sm:h-12 sm:w-12 md:h-14 md:w-14"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="Góra"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
          </svg>
        </ScaleIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-4 text-cream sm:mb-6">
            <span className="theme-szczyty-text-gradient">Wykaz szczytów</span>
            <span className="text-fluid-lg mt-4 block font-display font-bold uppercase tracking-wider text-earth-400 drop-shadow-lg sm:mt-6">
              Szczyty na szlaku Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <ScaleIn
          duration={0.6}
          delay={0.75}
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
          <div className="mx-auto w-full space-y-3 text-center sm:space-y-4">
            <p className="text-fluid-xl font-bold leading-relaxed text-cream/95">
              Wykaz najciekawszych szczytów na szlaku{' '}
              <span className="theme-szczyty-text-gradient">
                SUDETY GRAND TRAIL
              </span>
            </p>
            <p className="text-fluid-base lg:text-fluid-lg mx-auto max-w-4xl font-medium italic leading-relaxed text-cream/85">
              Kilkadziesiąt ciekawych wierzchołków w 23 pasmach górskich, które
              spotkasz przemierzając szlak od{' '}
              <span className="theme-szczyty-text-gradient font-bold">
                Śnieżki
              </span>{' '}
              po{' '}
              <span className="theme-szczyty-text-gradient font-bold">
                Lázek
              </span>
              .
            </p>
          </div>
        </FadeIn>
      </FadeIn>
    </div>

    <ScrollIndicator />
  </Section>
);
