import AboutCreator from '@/components/AboutCreator';
import { TrailJourneySection } from '@/components/TrailJourneySection';
import { FadeIn } from '@/components/motion';
import { pageMetadata } from '@/config/metadata';
import { Metadata } from 'next';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from '@/components/sections/Section';

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutCreator />
      <TrailJourneySection />
    </>
  );
}

const AboutHeroSection = () => (
  <Section
    className="min-h-0 bg-gradient-to-br from-forest-800 via-forest-700 to-earth-800 pt-24 pb-16 sm:pt-32 sm:pb-24"
    ariaLabel="Sekcja główna - O Projekcie"
  >
    {/* Background Pattern */}
    <div className="gradient-mesh-overlay absolute inset-0 opacity-20" />
    <VintageMountainsBackground className="opacity-10" />

    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <FadeIn direction="up" offset={60} duration={0.6}>
        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-6 text-cream">
            Poznaj <br />
            <span className="gradient-text-mesh">Człowieka</span>
            <span className="text-fluid-lg mt-4 block font-medium normal-case tracking-normal text-cream/80">
              Twórca Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <p className="text-fluid-base lg:text-fluid-lg mx-auto mb-8 max-w-3xl font-medium leading-relaxed text-cream/85">
            <span className="italic text-cream/60">
              Historia chłopaka z Łodzi, który postanowił użyć własnych
              nóg, by zmieniać świat na lepszy.
            </span>
          </p>
        </FadeIn>
      </FadeIn>
    </div>
  </Section>
);
