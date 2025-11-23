import Link from 'next/link';
import { FacebookIcon } from '@/components/icons';
import { FadeIn, ScaleIn } from '@/components/motion';
import { siteConfig } from '@/config/site';
import { Section } from './Section';

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

export const AboutProjectSection = () => {
  const { facebook, map } = siteConfig.links;

  return (
    <Section
      ariaLabel="O Projekcie"
      className="relative items-start overflow-hidden bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700 py-12 lg:py-24"
    >
      {/* Decorative background elements */}
      <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-cream/5 blur-2xl" />

      <div className="fluid-container relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <FadeIn
              inView={true}
              direction="up"
              offset={60}
              duration={0.6}
              className="relative mb-16 text-center"
            >
              <ScaleIn
                inView={true}
                initialScale={0.5}
                duration={0.6}
                delay={0.2}
                className="section-icon-badge-light mb-8 bg-gradient-to-br from-accent to-earth-700"
              >
                <ProjectIcon className="h-8 w-8 text-cream/80" />
              </ScaleIn>

              <FadeIn inView={true} className="mb-6">
                <h2 className="section-title text-cream">
                  O <span className="text-gradient-light">Projekcie</span>
                </h2>
              </FadeIn>

              <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent" />
            </FadeIn>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Historia powstania i koncepcja */}
            <FadeIn
              inView={true}
              inViewMargin="-200px"
              direction="up"
              className="relative overflow-hidden rounded-2xl border border-cream/20 bg-gradient-to-br from-forest-800/80 via-forest-800/60 to-earth-800/80 p-8 backdrop-blur-sm lg:p-12"
            >
              <div className="relative space-y-8 text-lg leading-relaxed text-cream/90">
                {/* Historia powstania */}
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-cream">
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
                    <span className="text-xl font-bold text-accent">
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

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent" />

                {/* Koncepcja */}
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-cream">
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
                    <span className="text-xl font-bold text-accent">
                      900 kilometrów
                    </span>{' '}
                    długości i{' '}
                    <span className="text-xl font-bold text-accent">
                      niespełna 30 000 metrów
                    </span>{' '}
                    przewyższeń. Przebiega przez{' '}
                    <span className="text-xl font-bold text-accent">
                      22 pasma
                    </span>{' '}
                    górskie, prowadząc przez{' '}
                    <span className="text-xl font-bold text-accent">
                      trzy kraje
                    </span>{' '}
                    – Polskę, Czechy, zahaczając także o Niemcy.
                  </p>
                  <p className="border-t border-cream/20 pt-4 italic text-cream/95">
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
              inView={true}
              inViewMargin="-200px"
              direction="up"
              delay={0.2}
              className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/10 to-earth-700/20 p-8 backdrop-blur-sm lg:p-12"
            >
              <div className="relative space-y-8 text-lg leading-relaxed text-cream/90">
                {/* Cel Szlaku */}
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-cream">
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
                  <div className="rounded-r border-l-4 border-accent bg-accent/10 py-3 pl-6 text-xl font-medium italic text-cream">
                    W wielu przypadkach oznacza to{' '}
                    <span className="font-bold not-italic">
                      podwójne wejścia
                    </span>{' '}
                    – na faktyczny najwyższy punkt i na szczyt koronny, jeśli
                    różnią się od siebie. To czyni trasę jeszcze bardziej
                    wymagającą i wyjątkową.
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                {/* Legendy */}
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-cream">
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
                  <p className="text-xl font-medium text-cream">
                    A to dopiero początek tej górskiej mozaiki.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Filozofia */}
            <FadeIn
              inView={true}
              inViewMargin="-200px"
              direction="up"
              className="relative overflow-hidden rounded-2xl border border-cream/20 bg-gradient-to-br from-forest-800/80 via-forest-800/60 to-earth-800/80 p-8 backdrop-blur-sm lg:p-12"
            >
              <div className="relative space-y-6 text-lg leading-relaxed text-cream/90">
                <p className="text-2xl font-bold text-cream">
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
                  <span className="text-xl font-bold text-accent">
                    SUDETY GRAND TRAIL
                  </span>{' '}
                  to propozycja dla każdego, kto pragnie odkryć Sudety w ich
                  pełni – nie tylko fizycznie, ale też{' '}
                  <span className="font-bold text-cream">duchowo</span>. Dla
                  ludzi gór – wędrowców, marzycieli, samotników, sportowców –
                  dla wszystkich, którzy kochają góry i pragną zmierzyć się z
                  takim wyzwaniem.
                </p>
                <p className="border-t border-cream/20 pt-4 text-xl italic text-cream/90">
                  To szlak stworzony z myślą o tych, którzy szukają czegoś
                  więcej niż tylko oznakowanej drogi.
                </p>
              </div>
            </FadeIn>

            {/* Zakończenie */}
            <FadeIn
              inView={true}
              inViewMargin="-200px"
              direction="up"
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/25 via-accent/20 to-earth-700/25 p-8 backdrop-blur-sm lg:p-12">
                <div className="relative space-y-8">
                  {/* Zakończenie */}
                  <div>
                    <p className="mb-4 text-2xl font-bold italic leading-relaxed text-cream md:text-3xl">
                      Nieprzewidywalna przygoda. Przemyślana koncepcja.
                    </p>
                    <p className="text-xl text-cream/90">
                      Zapraszam do zmierzenia się z tym wyzwaniem – na własnych
                      zasadach, we własnym tempie.
                    </p>
                  </div>

                  {/* Cytat w ramce */}
                  <div className="rounded-r border-l-4 border-accent bg-accent/10 py-4 pl-6 text-left text-xl font-medium italic text-cream">
                    W przestrzeni, w rytmie marszu, w samych sobie — Twórca
                    Sudety Grand Trail
                  </div>

                  {/* Call to Action */}
                  <div className="border-t border-cream/20 pt-6">
                    <p className="mb-6 text-xl font-medium text-cream/90">
                      Gotowy na nieprzewidywalną przygodę przez 24 pasma
                      Sudetów?
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <Link
                        href={facebook.href}
                        target={facebook.external ? '_blank' : undefined}
                        rel={
                          facebook.external ? 'noopener noreferrer' : undefined
                        }
                        className="btn-primary flex items-center justify-center gap-2 px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg"
                      >
                        <FacebookIcon className="size-5" />
                        Dołącz do Społeczności
                      </Link>
                      <Link
                        href={map.href}
                        target={map.external ? '_blank' : undefined}
                        rel={map.external ? 'noopener noreferrer' : undefined}
                        className="btn-secondary border-cream/60 px-8 py-3 text-base text-cream/90 hover:bg-cream/90 hover:text-forest-800 sm:px-10 sm:py-4 sm:text-lg"
                      >
                        Sprawdź Trasę
                      </Link>
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
