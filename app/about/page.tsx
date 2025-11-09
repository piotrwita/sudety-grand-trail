import AboutCreator from '@/components/AboutCreator';
import { FadeIn } from '@/components/motion';
import { pageMetadata } from '@/config/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutCreator />
    </>
  );
}

const AboutHeroSection = () => (
  <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-earth-800 py-32">
    {/* Background Pattern */}
    <div className="gradient-mesh-overlay absolute inset-0 opacity-20" />
    <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-10" />

    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <FadeIn direction="up" offset={60} duration={0.6}>
        <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
          <h1 className="hero-title mb-6 text-cream">
            Poznaj <span className="gradient-text-mesh">Człowieka</span>
            <span className="text-fluid-lg mt-4 block font-medium normal-case tracking-normal text-cream/80">
              za Sudety Grand Trail
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
          <p className="text-fluid-xl mx-auto mb-8 max-w-3xl font-medium leading-relaxed text-cream/80">
            Historia zwykłego chłopaka z Łodzi, który postanowił użyć własnych
            nóg, by zmieniać świat na lepszy.
          </p>
        </FadeIn>
      </FadeIn>
    </div>
  </section>
);
