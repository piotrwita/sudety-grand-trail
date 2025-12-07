import { LiveTrackingSection, Section } from '@/components/sections';
import { Stats, StatsSeparator } from '@/components/Stats';
import { FadeIn, ScaleIn } from '@/components/motion';
import { pageMetadata } from '@/config/metadata';
import { Metadata } from 'next';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { LogoImage } from '@/components/LogoImage';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { MapIcon, LocationIcon, ClockIcon, FlagIcon } from '@/components/icons';
import { ModernTrackerSection } from '@/components/sections/ModernTrackerSection';

export const metadata: Metadata = pageMetadata.live;

export default function LivePage() {
  return (
    <>
      <LiveHeroSection />
      <LiveTrackingSection />
      <ModernTrackerSection />
      <AdditionalInfoSection />
    </>
  );
}

const LiveHeroSection = () => {
  return (
    <Section
      className="theme-hero-bg theme-live-hero pt-16"
      ariaLabel="Sekcja główna - Śledź Wyprawę"
    >
      {/* Epic Background Effects */}
      <div className="theme-hero-overlay theme-live-hero" />
      <div className="gradient-mesh-overlay absolute inset-0 opacity-30" />
      <VintageMountainsBackground className="opacity-15" />

      {/* Epic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-orange-500/5 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="theme-live-glow absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-radial" />
      </div>

      {/* Radial glow effect */}
      <div className="theme-hero-glow theme-live-glow" />

      {/* Logo in background */}
      <div className="absolute left-1/2 top-1/2 z-0 size-[400px] -translate-x-1/2 -translate-y-1/2 transform opacity-10 lg:size-[500px] 2xl:size-[600px]">
        <LogoImage fill preload />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn
          direction="up"
          offset={50}
          duration={0.8}
          delay={0.2}
          inView={false}
        >
          {/* Live Badge */}
          <ScaleIn
            initialScale={0}
            duration={0.6}
            delay={0.4}
            inView={false}
            className="mb-8 inline-flex items-center space-x-3 rounded-full border-2 border-orange-400 bg-orange-500/20 px-8 py-4 backdrop-blur-sm"
          >
            <div className="h-4 w-4 animate-pulse rounded-full bg-orange-500" />
            <span className="text-lg font-bold uppercase tracking-wide text-cream">
              LIVE TRACKING
            </span>
          </ScaleIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.8}
            delay={0.6}
            inView={false}
          >
            <h1 className="hero-title mb-6 leading-tight text-cream">
              Śledź <span className="theme-live-text-gradient">Wyprawę</span>
            </h1>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.8}
            delay={0.8}
            inView={false}
          >
            <p className="text-fluid-base lg:text-fluid-lg mx-auto mb-8 max-w-3xl font-medium leading-relaxed text-cream/85">
              <span className="italic text-cream/60">
                Na żywo pokażesz innym, gdzie obecnie jesteś i jak przebiega
                Twoja własna przygoda.
              </span>
            </p>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.8}
            delay={1.0}
            inView={false}
            className="flex flex-wrap items-center justify-center gap-8 text-center"
          >
            <Stats value="900" label="Kilometrów" ariaLabel="900 Kilometrów" />
            <StatsSeparator />
            <Stats value="24/7" label="Tracking" ariaLabel="24/7 Tracking" />
          </FadeIn>
        </FadeIn>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-orange-500/10 blur-xl" />
      <div
        className="absolute bottom-20 right-10 h-32 w-32 animate-pulse rounded-full bg-orange-600/10 blur-2xl"
        style={{ animationDelay: '1s' }}
      />

      <ScrollIndicator />
    </Section>
  );
};

const AdditionalInfoSection = () => {
  return (
    <Section className="bg-cream">
      <div className="fluid-container">
        <FadeIn
          direction="up"
          offset={50}
          duration={0.8}
          inView={true}
          inViewMargin="-100px"
          className="text-center"
        >
          <h2 className="section-title">
            Jak działa{' '}
            <span className="theme-live-text-gradient">Live Tracking</span>?
          </h2>

          <div className="mx-auto mt-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

          <p className="text-fluid-lg mx-auto max-w-5xl font-medium leading-relaxed text-mountain-600">
            Dzięki współpracy z firmą{' '}
            <strong className="text-orange-500">Poltrax</strong> powstała
            interaktywna mapa, która pokazuje moją lokalizację w czasie
            rzeczywistym oraz orientacyjne punkty etapów.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FadeIn
            direction="up"
            offset={30}
            duration={0.6}
            delay={0.2}
            inView={true}
          >
            <div className="card-vintage h-full p-8 text-center">
              <div className="badge-circle mx-auto size-16 transition-transform duration-300 group-hover:scale-110">
                <LocationIcon className="size-6" />
              </div>
              <h3 className="section-title mt-6 text-xl">Real-time GPS</h3>

              <div className="mx-auto my-3 h-0.5 w-12 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

              <p className="text-sm text-mountain-600">
                Aktualna pozycja co kilka minut
              </p>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.6}
            delay={0.3}
            inView={true}
          >
            <div className="card-vintage h-full p-8 text-center">
              <div className="badge-circle mx-auto size-16 transition-transform duration-300 group-hover:scale-110">
                <MapIcon className="size-6" />
              </div>
              <h3 className="section-title mt-6 text-xl">Przebyta Trasa</h3>

              <div className="mx-auto my-3 h-0.5 w-12 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

              <p className="text-sm text-mountain-600">
                Historia całej wędrówki
              </p>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.6}
            delay={0.4}
            inView={true}
          >
            <div className="card-vintage h-full p-8 text-center">
              <div className="badge-circle mx-auto size-16 transition-transform duration-300 group-hover:scale-110">
                <ClockIcon className="size-6" />
              </div>
              <h3 className="section-title mt-6 text-xl">Limit Czasowy</h3>

              <div className="mx-auto my-3 h-0.5 w-12 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

              <p className="text-sm text-mountain-600">
                Presja czasu widoczna na mapie
              </p>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.6}
            delay={0.5}
            inView={true}
          >
            <div className="card-vintage h-full p-8 text-center">
              <div className="badge-circle mx-auto size-16 transition-transform duration-300 group-hover:scale-110">
                <FlagIcon className="size-6" />
              </div>
              <h3 className="section-title mt-6 text-xl">Punkty Etapów</h3>

              <div className="mx-auto my-3 h-0.5 w-12 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

              <p className="text-sm text-mountain-600">
                Planowane miejsca noclegów
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
