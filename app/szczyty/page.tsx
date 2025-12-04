import { SudetenCrownSection } from '@/components/sections';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { FadeIn, ScaleIn } from '@/components/motion';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { LogoImage } from '@/components/LogoImage';

export const metadata: Metadata = pageMetadata.korona;

export default function SzczytyPage() {
  return (
    <>
      <SzczytyHeroSection />
      <SudetenCrownSection />
    </>
  );
}

const SzczytyHeroSection = () => (
  <Section
    className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 pt-16"
    ariaLabel="Sekcja główna - Wykaz szczytów"
  >
    {/* Epic Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-forest-900/95 via-forest-800/95 to-forest-900/95" />
    <div className="gradient-mesh-overlay absolute inset-0 opacity-30" />
    <VintageMountainsBackground className="opacity-15" />

    {/* Epic Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-forest-500/5 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-forest-500/5 to-transparent" />
      <div className="from-forest-400/8 via-forest-400/4 absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-radial to-transparent blur-3xl" />
    </div>

    {/* Radial glow effect */}
    <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-forest-400/10 via-forest-400/5 to-transparent blur-3xl" />

    {/* Logo in background */}
    <div className="absolute left-1/2 top-1/2 z-0 size-[400px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 lg:size-[500px] 2xl:size-[600px]">
      <LogoImage fill preload />
    </div>

    <div className="fluid-container relative z-10 text-center">
      <FadeIn direction="up" offset={60} duration={0.6}>
        {/* Mountain Badge */}
        <ScaleIn
          initialScale={0.5}
          duration={0.6}
          delay={0.2}
          className="mb-8 inline-flex size-28 items-center justify-center rounded-full border-4 border-forest-400/30 bg-gradient-to-br from-forest-400 via-forest-500 to-forest-600 shadow-[0_0_40px_rgba(22,163,74,0.4)]"
        >
          <svg
            className="h-14 w-14 text-forest-900/80"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="Góra"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
          </svg>
        </ScaleIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-6 text-cream">
            <span className="gradient-text-mesh">Wykaz szczytów</span>
            <span className="text-fluid-lg mt-6 block font-display font-bold uppercase tracking-wider text-forest-400 drop-shadow-lg">
              Szczyty na szlaku Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.5}>
          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent" />
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <p className="text-fluid-xl mx-auto mb-8 max-w-4xl font-medium leading-relaxed text-cream/90">
            Wykaz najciekawszych szczytów na szlaku Sudety Grand Trail. 29
            wierzchołków w 22 pasmach górskich, które spotkasz przemierzając
            Sudety od{' '}
            <span className="bg-gradient-to-r from-forest-400 via-forest-500 to-forest-600 bg-clip-text font-bold text-transparent">
              Śnieżki (1603m)
            </span>{' '}
            po{' '}
            <span className="bg-gradient-to-r from-forest-400 via-forest-500 to-forest-600 bg-clip-text font-bold text-transparent">
              Lázek (714m)
            </span>
            .
          </p>
        </FadeIn>
      </FadeIn>
    </div>
  </Section>
);
