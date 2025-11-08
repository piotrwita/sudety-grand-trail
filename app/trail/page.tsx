import TrailMap from '@/components/TrailMap';
import TrailDescription from '@/components/TrailDescription';
import TrailMotivation from '@/components/TrailMotivation';
import { FadeIn, ScaleIn } from '@/components/motion';
import { MapIcon } from '@/components/icons';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.trail;

export default function TrailPage() {
  return (
    <>
      <TrailHeroSection />
      <TrailMap />
      <TrailDescription />
      <TrailMotivation />
    </>
  );
}

const TrailHeroSection = () => (
  <section className="relative bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700 py-32">
    <div className="absolute inset-0 bg-vintage-texture opacity-10" />
    <div className="fluid-container relative z-10">
      <FadeIn
        direction="up"
        offset={60}
        duration={0.6}
        className="mx-auto max-w-5xl text-center"
      >
        <ScaleIn
          initialScale={0.5}
          duration={0.8}
          delay={0.2}
          className="mb-8 inline-flex size-20 items-center justify-center rounded-full border-4 border-cream/20 bg-gradient-to-br from-accent to-earth-700 shadow-vintage-xl"
        >
          <MapIcon className="size-8 text-cream" />
        </ScaleIn>

        <h1 className="hero-title mb-6 text-5xl md:text-6xl lg:text-7xl">
          Poznaj <span className="text-accent">Trasę</span>
        </h1>

        <div className="vintage-divider bg-gradient-to-r from-accent to-cream" />

        <p className="text-2xl font-medium leading-relaxed text-cream/90">
          <span className="font-bold text-accent">KORONA SUDETÓW</span> w jednym
          szlaku! 900 km przez 24 pasma i zdobycie najwyższego szczytu każdego z
          nich. Od Jarnołtówka (Góry Opawskie) po Ślężę – kompletne podbicie
          Sudetów.
        </p>
      </FadeIn>
    </div>
  </section>
);
