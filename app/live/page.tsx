import { LiveTrackingSection, Section } from '@/components/sections';
import { TimePressure } from '@/components/TimePressure';
import { Stats, StatsSeparator } from '@/components/Stats';
import { FadeIn } from '@/components/motion/FadeIn';
import { ScaleIn } from '@/components/motion/ScaleIn';
import { pageMetadata } from '@/config/metadata';
import { Metadata } from 'next';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import {
  MapIcon,
  LocationIcon,
  ClockIcon,
  FlagIcon,
  CheckIcon,
} from '@/components/icons';

export const metadata: Metadata = pageMetadata.live;

export default function LivePage() {
  return (
    <>
      <LiveHeroSection />
      <LiveTrackingSection />
      <TimePressure />
      <ModernTrackerSection />
      <AdditionalInfoSection />
    </>
  );
}

const LiveHeroSection = () => {
  return (
    <Section
      className="bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 py-24"
      ariaLabel="Sekcja główna - Śledź Wyprawę"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <VintageMountainsBackground className="opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-800/50 to-forest-900" />
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
            className="mb-8 inline-flex items-center space-x-3 rounded-full border-2 border-accent bg-accent/20 px-8 py-4 backdrop-blur-sm"
          >
            <div className="h-4 w-4 animate-pulse rounded-full bg-accent" />
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
              Śledź <span className="text-gradient">Wyprawę</span>
            </h1>
          </FadeIn>

          <FadeIn
            direction="up"
            offset={30}
            duration={0.8}
            delay={0.8}
            inView={false}
          >
            <p className="text-fluid-xl mx-auto mb-8 max-w-3xl font-medium leading-relaxed text-cream/80">
              Śledź moją wyprawę przez 900 kilometrów i 22 pasma Sudetów. Zobacz
              na żywo, gdzie jestem i jak przebiega zdobywanie Korony Sudetów.
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
            <Stats value="22" label="Pasma" ariaLabel="22 Pasma" />
            <StatsSeparator />
            <Stats value="24/7" label="Tracking" ariaLabel="24/7 Tracking" />
          </FadeIn>
        </FadeIn>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-accent/10 blur-xl" />
      <div
        className="absolute bottom-20 right-10 h-32 w-32 animate-pulse rounded-full bg-forest-600/10 blur-2xl"
        style={{ animationDelay: '1s' }}
      />
    </Section>
  );
};

const ModernTrackerSection = () => {
  return (
    <section className="section-padding relative bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="fluid-container">
        {/* Header */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.8}
          inView={true}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            Bezpłatny Tracker
          </div>

          <h2 className="section-title mb-6 text-slate-900">
            Twoja{' '}
            <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
              Własna Historia
            </span>
          </h2>

          <p className="text-fluid-lg mx-auto max-w-3xl leading-relaxed text-slate-600">
            A jeśli kiedyś sami będziecie chcieli spróbować przejść ten szlak,
            to mam dla Was dobrą wiadomość.
          </p>
        </FadeIn>

        {/* Main Content */}
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          {/* Left - Text Content */}
          <FadeIn
            direction="right"
            offset={30}
            duration={0.8}
            delay={0.2}
            inView={true}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">POLTRAX</h3>
                  <p className="text-slate-500">Partner technologiczny</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-slate-700">
                <strong className="text-accent">
                  Poltrax udostępni Wam specjalny tracker zupełnie bezpłatnie
                </strong>
                , abyście i Wy mogli zapisać swoją własną historię na tej
                trasie.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex size-6 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon className="size-4 text-green-600" />
                </div>
                <span className="text-slate-700">
                  Kompletnie darmowy - bez ukrytych kosztów
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex size-6 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon className="size-4 text-green-600" />
                </div>
                <span className="text-slate-700">
                  Profesjonalne narzędzie do trackingu
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex size-6 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon className="size-4 text-green-600" />
                </div>
                <span className="text-slate-700">
                  Zapisz i udostępnij swoją przygodę
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button className="flex items-center justify-center space-x-2 rounded-xl bg-accent px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent/90 hover:shadow-xl">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Skontaktuj się z Poltrax</span>
              </button>
              <button className="flex items-center justify-center space-x-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Dowiedz się więcej</span>
              </button>
            </div>
          </FadeIn>

          {/* Right - Visual Element */}
          <FadeIn
            direction="left"
            offset={30}
            duration={0.8}
            delay={0.4}
            inView={true}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/10 to-orange-500/10 p-8">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                  <LocationIcon className="size-10 text-accent" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    Zostań Legendą
                  </h4>
                  <p className="text-slate-600">
                    Dołącz do grona zdobywców Korony Sudetów
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-xl bg-white/50 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">900</div>
                    <div className="text-sm text-slate-600">Kilometrów</div>
                  </div>
                  <div className="rounded-xl bg-white/50 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">22</div>
                    <div className="text-sm text-slate-600">Pasma</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
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
            Jak działa <span className="text-gradient">Live Tracking</span>?
          </h2>

          <div className="vintage-divider mt-6" />

          <p className="text-fluid-lg mx-auto max-w-5xl font-medium leading-relaxed text-mountain-600">
            Dzięki współpracy z firmą{' '}
            <strong className="text-accent">Poltrax</strong> powstała
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

              <div className="vintage-divider my-3 w-12" />

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

              <div className="vintage-divider my-3 w-12" />

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

              <div className="vintage-divider my-3 w-12" />

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

              <div className="vintage-divider my-3 w-12" />

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
