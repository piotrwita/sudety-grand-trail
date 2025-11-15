import { FadeIn } from '@/components/motion/FadeIn';
import { ScaleIn } from '@/components/motion/ScaleIn';
import {
  MapIcon,
  DownloadIcon,
  ExternalLinkIcon,
  SparklesIcon,
  ClockIcon,
} from '@/components/icons';
import Link from 'next/link';
import { Section } from './Section';

export const TrailMapSection = () => {
  return (
    <Section ariaLabel="Oficjalna Trasa Szlaku" className="bg-cream">
      <div className="fluid-container">
        <FadeIn
          direction="down"
          offset={50}
          duration={0.8}
          inView={true}
          inViewMargin="-100px"
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-6">
            Oficjalna <span className="text-gradient">Trasa Szlaku</span>
          </h2>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

          <p className="text-fluid-lg mx-auto mb-8 font-medium leading-relaxed text-mountain-600">
            Nadszedł moment, by oficjalnie przedstawić trasę wyznaczoną
            specjalnie na potrzeby tej wyprawy. To nie przypadkowy kierunek ani
            luźny pomysł – to{' '}
            <strong className="text-accent">przemyślana ścieżka</strong>, która
            idealnie wpisuje się w ideę i wartości całego przedsięwzięcia.
          </p>

          {/* Download GPX Button */}
          <FadeIn
            direction="down"
            offset={20}
            duration={0.6}
            delay={0.3}
            inView={true}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="https://pro.mapy.com/mapybox-export/v1/path/gpx?id=688fa97f662a3fae890f5f13&rand=0.7002222504750357"
              download="sudety-grand-trail.gpx"
              className="btn-primary group inline-flex items-center space-x-3 px-8 py-4 text-lg"
            >
              <DownloadIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span>Pobierz Mapę GPX</span>
            </Link>
            <Link
              href="https://mapy.com/s/barusofola"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group inline-flex items-center space-x-3 border-forest-600 px-8 py-4 text-lg text-forest-700 hover:bg-forest-700 hover:text-cream"
            >
              <ExternalLinkIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span>Otwórz w Mapy.com</span>
            </Link>
          </FadeIn>
        </FadeIn>

        <ScaleIn
          initialScale={0.95}
          finalScale={1}
          duration={0.8}
          delay={0.2}
          inView={true}
          className="relative"
        >
          {/* Map Container - Hidden on mobile */}
          <div className="card-vintage relative hidden overflow-hidden md:block">
            <div className="aspect-video">
              <iframe
                src="https://mapy.com/s/barusofola"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                title="Grand Trail Sudety Map"
                frameBorder="0"
              />
            </div>

            <div className="absolute left-6 top-6 rounded-xl border-2 border-forest-600 bg-forest-800/90 p-4 shadow-vintage backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 animate-pulse rounded-full bg-accent" />
                <span className="text-sm font-bold uppercase tracking-wide text-cream">
                  Grand Trail Sudety
                </span>
              </div>
            </div>
          </div>
        </ScaleIn>

        {/* Map Info Cards */}
        <div className="py-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <FadeIn
            direction="down"
            offset={30}
            duration={0.6}
            delay={0.3}
            inView={true}
          >
            <div className="card-vintage h-full p-8 text-center">
              <div className="badge-circle mx-auto size-16 transition-transform duration-300 group-hover:scale-110">
                <MapIcon className="size-6" />
              </div>
              <h3 className="section-title mt-6 text-xl">Długość</h3>
              <div className="mx-auto my-3 h-0.5 w-12 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />
              <p className="stats-number mt-3 text-2xl">900 km</p>
            </div>
          </FadeIn>

          <FadeIn
            direction="down"
            offset={30}
            duration={0.6}
            delay={0.45}
            inView={true}
          >
            <div className="card-vintage h-full p-8 text-center">
              <div className="badge-circle mx-auto size-16 transition-transform duration-300 group-hover:scale-110">
                <SparklesIcon className="size-6" />
              </div>
              <h3 className="section-title mt-6 text-xl">Najwyższy punkt</h3>
              <div className="mx-auto my-3 h-0.5 w-12 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />
              <p className="font-bold text-mountain-600">Śnieżka</p>
              <p className="stats-number text-2xl">1602 m</p>
            </div>
          </FadeIn>

          <FadeIn
            direction="down"
            offset={30}
            duration={0.6}
            delay={0.6}
            inView={true}
          >
            <div className="card-vintage h-full p-8 text-center">
              <div className="badge-circle mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                <ClockIcon className="size-6" />
              </div>
              <h3 className="section-title mb-2 text-xl">Przewyższenia</h3>
              <div className="mx-auto my-3 h-0.5 w-12 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />
              <p className="stats-number text-2xl">30 000 m</p>
            </div>
          </FadeIn>

          {/* GPX Download Card */}
          <FadeIn
            direction="down"
            offset={30}
            duration={0.6}
            delay={0.75}
            inView={true}
          >
            <div className="card-vintage group border-accent/30 bg-gradient-to-br from-accent/10 to-earth/10 p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-earth-700 shadow-vintage transition-transform duration-300 group-hover:scale-110">
                <DownloadIcon className="size-6 text-cream" />
              </div>
              <h3 className="section-title mb-2 text-xl">Plik GPX</h3>
              <div className="mx-auto my-3 h-0.5 w-12 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />
              <p className="mb-3 font-bold text-mountain-600">
                Gotowy do pobrania
              </p>
              <Link
                href="https://pro.mapy.com/mapybox-export/v1/path/gpx?id=688fa97f662a3fae890f5f13&rand=0.7002222504750357"
                download="sudety-grand-trail.gpx"
                className="btn-outline border-accent px-4 py-2 text-sm text-accent hover:bg-accent hover:text-cream"
              >
                Pobierz GPX
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
