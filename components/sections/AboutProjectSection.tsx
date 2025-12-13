import Link from 'next/link';
import { ReactNode } from 'react';
import { FacebookIcon } from '@/components/icons';
import { FadeIn } from '@/components/motion';
import { siteConfig } from '@/config/site';
import { siteRoutes } from '@/config/site-routes';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';

const FADE_IN_PROPS = {
  inView: true,
  inViewMargin: '-200px' as const,
  direction: 'up' as const,
  offset: 30,
  delay: 0.3,
  duration: 0.6,
};

export const AboutProjectSection = () => {
  const { facebook } = siteConfig.links;

  return (
    <Section
      ariaLabel="O Projekcie"
      className="relative items-start overflow-hidden bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700"
    >
      <DecorativeBackground />

      <div className="fluid-container relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="O Projekcie"
            icon={<ProjectIcon className="size-5 text-cream/80 sm:size-6" />}
            variant="light"
          />

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Historia powstania i koncepcja */}
            <FadeIn
              {...FADE_IN_PROPS}
              className="relative overflow-hidden rounded-xl border border-cream/20 bg-gradient-to-br from-forest-800/80 via-forest-800/60 to-earth-800/80 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8 lg:p-12"
            >
              <div className="relative space-y-4 text-base leading-relaxed text-cream/90 sm:space-y-6 sm:text-lg md:space-y-8">
                {/* Historia powstania */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xl font-bold text-cream sm:text-2xl">
                    Z pasji, doświadczenia i... niedosytu.
                  </p>
                  <p>
                    Sudety zostały przeze mnie przebyte już kilkukrotnie. Nie
                    raz odkrywałem ich tajemnice wytyczonymi oficjalnie trasami.
                    A jednak żaden z istniejących szlaków nie poprowadził mnie{' '}
                    <span className="font-bold text-accent">
                      kompleksowo przez to niezwykle różnorodne pasmo
                    </span>
                    .
                  </p>
                  <p>
                    Właśnie dlatego narodziła się idea{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      SUDETY GRAND TRAIL
                    </span>
                    , czyli szlaku, który stanie się nie tylko zwieńczeniem
                    moich sudeckich wędrówek, ale i{' '}
                    <span className="font-bold text-cream">
                      nowym wyzwaniem dla wszystkich miłośników gór
                    </span>
                    .
                  </p>
                </div>

                <Separator variant="cream" />

                {/* Koncepcja */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xl font-bold text-cream sm:text-2xl">
                    To nie tylko kolejna linia na mapie.
                  </p>
                  <p>
                    <span className="font-bold text-accent">
                      SUDETY GRAND TRAIL
                    </span>{' '}
                    to koncepcyjny szlak, który{' '}
                    <span className="font-bold text-cream">
                      łączy wszystkie pasma górskie Sudetów w jedną logiczną i
                      wymagającą całość
                    </span>
                    .
                  </p>
                  <p>
                    Trasa mierzy{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      900 kilometrów
                    </span>{' '}
                    długości i{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      niespełna 30 000 metrów
                    </span>{' '}
                    przewyższeń. Przebiega przez{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      23 pasma
                    </span>{' '}
                    górskie, prowadząc przez{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      trzy kraje
                    </span>{' '}
                    – Polskę, Czechy, zahaczając także o Niemcy.
                  </p>
                  <p className="border-t border-cream/20 pt-3 italic text-cream/95 sm:pt-4">
                    Początek trasy znajduje się w{' '}
                    <span className="font-bold not-italic text-cream">
                      Jarnołtówku (Góry Opawskie)
                    </span>
                    , a finał – symboliczny i majestatyczny – pod{' '}
                    <span className="font-bold not-italic text-cream">
                      Ślężą
                    </span>
                    , górą o duchowym znaczeniu, tuż pod Wrocławiem.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Cel i Legendy */}
            <FadeIn
              {...FADE_IN_PROPS}
              className="relative overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/10 to-earth-700/20 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8 lg:p-12"
            >
              <div className="relative space-y-4 text-base leading-relaxed text-cream/90 sm:space-y-6 sm:text-lg md:space-y-8">
                {/* Cel Szlaku */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xl font-bold text-cream sm:text-2xl">
                    Kompletne przejście Sudetów.
                  </p>
                  <p>
                    Celem szlaku jest zdobycie{' '}
                    <span className="font-bold text-cream">
                      wszystkich najwyższych szczytów każdego pasma
                    </span>
                    , a także – po polskiej stronie – wszystkich{' '}
                    <span className="font-bold text-cream">
                      16 sudeckich szczytów należących do Korony Gór Polski
                    </span>
                    .
                  </p>
                  <HighlightedBox>
                    W wielu przypadkach oznacza to{' '}
                    <span className="font-bold not-italic">
                      podwójne wejścia
                    </span>{' '}
                    – na faktyczny najwyższy punkt i na szczyt koronny, jeśli
                    różnią się od siebie. To czyni trasę jeszcze bardziej
                    wymagającą i wyjątkową.
                  </HighlightedBox>
                </div>

                <Separator variant="accent" />

                {/* Legendy */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xl font-bold text-cream sm:text-2xl">
                    Legendy Sudetów czekają.
                  </p>
                  <p>
                    Na trasie nie zabraknie ikonicznych szczytów – od
                    majestatycznej{' '}
                    <span className="font-bold text-cream">Śnieżki</span>,
                    najwyższego wierzchołka całego pasma, przez potężny{' '}
                    <span className="font-bold text-cream">Śnieżnik</span> i
                    dumnie górującego nad Jesionikami{' '}
                    <span className="font-bold text-cream">Pradziada</span>, po
                    charakterystyczną{' '}
                    <span className="font-bold text-cream">Wielką Sowę</span>,
                    skalny labirynt{' '}
                    <span className="font-bold text-cream">
                      Szczelińca Wielkiego
                    </span>
                    , graniczną{' '}
                    <span className="font-bold text-cream">Biskupią Kopę</span>{' '}
                    i mistyczną{' '}
                    <span className="font-bold text-cream">Ślężę</span>.
                  </p>
                  <p className="text-lg font-medium text-cream sm:text-xl">
                    A to dopiero początek tej górskiej mozaiki.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Filozofia */}
            <FadeIn
              {...FADE_IN_PROPS}
              className="relative overflow-hidden rounded-xl border border-cream/20 bg-gradient-to-br from-forest-800/80 via-forest-800/60 to-earth-800/80 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8 lg:p-12"
            >
              <div className="relative space-y-4 text-base leading-relaxed text-cream/90 sm:space-y-5 sm:text-lg md:space-y-6">
                <p className="text-xl font-bold text-cream sm:text-2xl">
                  Dla tych, którzy chcą się zgubić, by się odnaleźć.
                </p>
                <p>
                  Ten projekt powstał z{' '}
                  <span className="font-bold text-accent">miłości do gór</span>,
                  ale też z potrzeby stworzenia czegoś własnego – ścieżki, która
                  nie tylko prowadzi przez szczyty, ale{' '}
                  <span className="font-bold text-cream">
                    łączy pasma, kraje, emocje i doświadczenia
                  </span>
                  .
                </p>
                <p>
                  <span className="text-lg font-bold text-accent sm:text-xl">
                    SUDETY GRAND TRAIL
                  </span>{' '}
                  to propozycja dla każdego, kto pragnie odkryć Sudety w ich
                  pełni – nie tylko fizycznie, ale też{' '}
                  <span className="font-bold text-cream">duchowo</span>. Dla
                  ludzi gór – wędrowców, marzycieli, samotników, sportowców –
                  dla wszystkich, którzy kochają góry i pragną zmierzyć się z
                  takim wyzwaniem.
                </p>
                <p className="border-t border-cream/20 pt-3 text-lg italic text-cream/90 sm:pt-4 sm:text-xl">
                  To szlak stworzony z myślą o tych, którzy szukają czegoś
                  więcej niż tylko oznakowanej drogi.
                </p>
              </div>
            </FadeIn>

            {/* Zakończenie */}
            <FadeIn {...FADE_IN_PROPS} className="text-center">
              <div className="relative overflow-hidden rounded-xl border border-accent/40 bg-gradient-to-br from-accent/25 via-accent/20 to-earth-700/25 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8 lg:p-12">
                <div className="relative space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Zakończenie */}
                  <div>
                    <p className="mb-3 text-xl font-bold italic leading-relaxed text-cream sm:mb-4 sm:text-2xl md:text-3xl">
                      Nieprzewidywalna przygoda. Przemyślana koncepcja.
                    </p>
                    <p className="text-lg text-cream/90 sm:text-xl">
                      Zapraszam do zmierzenia się z tym wyzwaniem – na własnych
                      zasadach, we własnym tempie.
                    </p>
                  </div>

                  {/* Cytat w ramce */}
                  <HighlightedBox className="text-left">
                    W przestrzeni, w rytmie marszu, w samych sobie — Twórca
                    Sudety Grand Trail
                  </HighlightedBox>

                  {/* Call to Action */}
                  <div className="border-t border-cream/20 pt-4 sm:pt-6">
                    <p className="mb-4 text-lg font-medium text-cream/90 sm:mb-6 sm:text-xl">
                      Gotowy na nieprzewidywalną przygodę przez 24 pasma
                      Sudetów?
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                      <ActionButton
                        href={facebook.href}
                        external={facebook.external}
                        variant="primary"
                      >
                        <FacebookIcon className="size-4 sm:size-5" />
                        Dołącz do Społeczności
                      </ActionButton>
                      <ActionButton
                        href={siteRoutes.trail}
                        external={false}
                        variant="secondary"
                      >
                        Sprawdź Trasę
                      </ActionButton>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ProjectIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const DecorativeBackground = () => null;

const Separator = ({ variant = 'cream' }: { variant?: 'cream' | 'accent' }) => {
  const classes =
    variant === 'accent'
      ? 'h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent'
      : 'h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent';
  return <div className={classes} />;
};

const HighlightedBox = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-r border-l-4 border-accent bg-accent/10 py-2 pl-4 text-base font-medium italic text-cream sm:py-3 sm:pl-6 sm:text-lg md:text-xl ${className}`}
  >
    {children}
  </div>
);

const ActionButton = ({
  href,
  external,
  children,
  variant = 'primary',
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) => {
  const baseClasses =
    'flex items-center justify-center gap-2 px-6 py-2.5 text-sm sm:w-auto sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-4 md:text-lg w-full';
  const variantClasses =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-secondary border-cream/60 text-cream/90 hover:bg-cream/90 hover:text-forest-800';

  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </Link>
  );
};
