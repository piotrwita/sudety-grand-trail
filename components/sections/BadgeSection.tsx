import Link from 'next/link';
import { ReactNode } from 'react';
import { FadeIn } from '@/components/motion';
import { siteRoutes } from '@/config/site-routes';
import { sectionIds } from '@/config/section-ids';
import { getSectionUrl } from '@/lib/section-navigation';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';

const FADE_IN_PROPS = {
  inView: true,
  inViewMargin: '0px' as const,
  direction: 'up' as const,
  offset: 30,
  delay: 0.3,
  duration: 0.6,
};

export const BadgeSection = () => {
  return (
    <Section
      ariaLabel="Odznaka Sudety Grand Trail"
      className="relative min-h-0 items-start overflow-hidden bg-gradient-to-br from-forest-900 via-earth-900 to-forest-800"
    >
      <DecorativeBackground />

      <div className="fluid-container relative z-10">
        <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12 md:space-y-16">
          <SectionHeader
            title="Odznaka Sudety Grand Trail"
            icon={<BadgeIcon className="size-5 text-cream/80 sm:size-6" />}
            variant="light"
          />

          {/* Informacja o możliwości zdobycia */}
          <FadeIn
            {...FADE_IN_PROPS}
            className="relative overflow-hidden rounded-2xl border-2 border-gold-400/40 bg-gradient-to-br from-forest-800/95 via-forest-800/75 to-earth-800/95 p-6 bg-forest-800/98 shadow-[0_0_50px_rgba(251,191,36,0.3)] sm:rounded-3xl sm:p-8 md:p-10 lg:p-14 supports-[backdrop-filter]:backdrop-blur-sm"
          >
            {/* Enhanced decorative gold glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/8 via-transparent to-gold-500/8 rounded-2xl" />
            <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-gold-400/15 blur-3xl animate-pulse" />
            <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-gold-500/12 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative space-y-5 text-base leading-relaxed text-cream/95 sm:space-y-6 sm:text-lg md:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-2xl font-black text-gold-300 sm:text-3xl md:text-4xl">
                  <span className="drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                    Zdobądź Oficjalną Odznakę
                  </span>
                </p>
                <p className="text-xl font-bold text-cream sm:text-2xl">
                  Najwyższe wyróżnienie dla zdobywców
                </p>
                <p className="text-lg leading-relaxed">
                  Po{' '}
                  <span className="font-bold text-gold-300">
                    kompletnym przejściu całego szlaku
                  </span>{' '}
                  masz możliwość zdobycia oficjalnej odznaki{' '}
                  <span className="text-xl font-black text-gold-300 sm:text-2xl drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                    SUDETY GRAND TRAIL
                  </span>
                  .
                </p>
                <p className="text-lg leading-relaxed">
                  To nie jest zwykłe wyróżnienie – to{' '}
                  <span className="font-bold text-cream">
                    symbol pokonania własnych granic
                  </span>
                  , dowód niezłomności i potwierdzenie ukończenia jednego z
                  najbardziej wymagających szlaków w Sudetach.
                </p>
                <div className="rounded-lg border-l-4 border-gold-400/60 bg-gold-400/10 p-4 sm:p-6">
                  <p className="font-bold text-gold-200 sm:text-lg">
                    Odznaka jest potwierdzeniem:
                  </p>
                  <ul className="mt-2 space-y-2 text-cream/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gold-400">✓</span>
                      <span>
                        Przejścia{' '}
                        <span className="font-bold text-gold-300">
                          900 kilometrów przez 23 pasma górskie
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gold-400">✓</span>
                      <span>
                        Zdobycia{' '}
                        <span className="font-bold text-gold-300">
                          wszystkich najwyższych szczytów
                        </span>{' '}
                        każdego pasma
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gold-400">✓</span>
                      <span>
                        Pokonania{' '}
                        <span className="font-bold text-gold-300">
                          ponad 30 000 metrów przewyższeń
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gold-400">✓</span>
                      <span>
                        Dołączenia do{' '}
                        <span className="font-bold text-gold-300">
                          elitarnego grona zdobywców
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Regulamin */}
          <FadeIn
            {...FADE_IN_PROPS}
            delay={0.2}
            className="relative overflow-hidden rounded-2xl border-2 border-gold-400/40 bg-gradient-to-br from-accent/25 via-accent/20 to-earth-700/30 p-6 bg-accent/30 shadow-[0_0_50px_rgba(251,191,36,0.3)] sm:rounded-3xl sm:p-8 md:p-10 lg:p-14 supports-[backdrop-filter]:backdrop-blur-sm"
          >
            {/* Enhanced gold accent glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/8 via-transparent to-gold-500/8 rounded-2xl" />
            <div className="absolute left-0 top-1/4 h-24 w-24 rounded-full bg-gold-400/15 blur-2xl" />
            <div className="absolute right-0 bottom-1/4 h-32 w-32 rounded-full bg-gold-500/15 blur-2xl" />
            
            <div className="relative space-y-4 text-base leading-relaxed text-cream/95 sm:space-y-6 sm:text-lg">
              <div className="mb-4">
                <p className="text-xl font-black text-gold-300 sm:text-2xl">
                  Regulamin Zdobycia Odznaki
                </p>
                <p className="mt-2 text-sm text-cream/70 sm:text-base">
                  Wymagania, które musisz spełnić, aby zdobyć oficjalną odznakę
                </p>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                <RegulationItem number={1}>
                  Zgłoszenie chęci przejścia szlaku poprzez{' '}
                  <Link
                    href={getSectionUrl(siteRoutes.live, sectionIds.trackerForm)}
                    className="font-bold text-gold-300 underline decoration-gold-400/50 underline-offset-2 transition-colors hover:text-gold-200 hover:decoration-gold-300"
                  >
                    oficjalny formularz
                  </Link>{' '}
                  i pobranie{' '}
                  <span className="font-bold text-gold-300">
                    GPS trackera
                  </span>{' '}
                  do śledzenia trasy.
                </RegulationItem>
                <RegulationItem number={2}>
                  Przejście całego szlaku{' '}
                  <span className="font-bold text-gold-300">
                    Sudety Grand Trail
                  </span>{' '}
                  zgodnie z oficjalną trasą, od Jarnołtówka do Ślęży.
                </RegulationItem>
                <RegulationItem number={3}>
                  Zdobycie wszystkich{' '}
                  <span className="font-bold text-gold-300">
                    najwyższych szczytów każdego z 23 pasm górskich
                  </span>{' '}
                  znajdujących się na trasie.
                </RegulationItem>
                <RegulationItem number={4}>
                  Po polskiej stronie zdobycie wszystkich{' '}
                  <span className="font-bold text-gold-300">
                    16 sudeckich szczytów należących do Korony Gór Polski
                  </span>
                  .
                </RegulationItem>
                <RegulationItem number={5}>
                  Dokumentacja przejścia w formie{' '}
                  <span className="font-bold text-gold-300">
                    zdjęć, relacji lub trackingu GPS
                  </span>
                  , potwierdzająca ukończenie szlaku.
                </RegulationItem>
                <RegulationItem number={6}>
                  Zgłoszenie przejścia poprzez{' '}
                  <Link
                    href={getSectionUrl(siteRoutes.hallOfFame, sectionIds.submission)}
                    className="font-bold text-gold-300 underline decoration-gold-400/50 underline-offset-2 transition-colors hover:text-gold-200 hover:decoration-gold-300"
                  >
                    oficjalny formularz
                  </Link>
                  , wraz z udostępnieniem dokumentacji i relacji z
                  przejścia.
                </RegulationItem>
              </ul>
            </div>
          </FadeIn>

          {/* Call to Action */}
          <FadeIn
            {...FADE_IN_PROPS}
            delay={0.35}
            className="relative overflow-hidden rounded-2xl border-2 border-gold-400/50 bg-gradient-to-br from-gold-400/25 via-gold-500/20 to-gold-600/25 p-6 bg-gold-400/30 shadow-[0_0_80px_rgba(251,191,36,0.5)] sm:rounded-3xl sm:p-8 md:p-10 lg:p-14 supports-[backdrop-filter]:backdrop-blur-sm"
          >
            {/* Enhanced epic gold glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-300/15 via-transparent to-gold-500/15 rounded-2xl" />
            <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-gold-400/25 blur-3xl animate-pulse" />
            <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-gold-500/25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/20 blur-2xl" />
            
            <div className="relative space-y-5 text-center sm:space-y-6 md:space-y-8">
              <div className="space-y-2">
                <p className="text-xl font-black text-gold-300 sm:text-2xl drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                  Ukończyłeś Szlak?
                </p>
                <p className="text-lg font-bold text-cream/95 sm:text-xl">
                  Zgłoś swoje przejście i zdobądź oficjalną odznakę!
                </p>
              </div>
              <p className="text-base text-cream/80 sm:text-lg">
                Dołącz do elitarnego grona zdobywców i otrzymaj swoje
                wyróżnienie
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <ActionButton
                  href={getSectionUrl(siteRoutes.hallOfFame, sectionIds.submission)}
                  external={false}
                  variant="primary"
                >
                  Zgłoś Przejście
                </ActionButton>
                <ActionButton
                  href={siteRoutes.hallOfFame}
                  external={false}
                  variant="secondary"
                >
                  Zobacz Hall of Fame
                </ActionButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

const BadgeIcon = ({ className }: { className?: string }) => (
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
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const DecorativeBackgroundLight = () => (
  <>
    {/* Lighter decorative elements with gold accents */}
    <div className="absolute right-4 top-4 h-40 w-40 rounded-full bg-gold-400/15 blur-2xl sm:right-8 sm:top-8 sm:h-56 sm:w-56 md:right-12 md:top-12 md:h-64 md:w-64 lg:right-20 lg:top-20 lg:h-80 lg:w-80 animate-pulse" />
    <div className="absolute bottom-4 left-4 h-32 w-32 rounded-full bg-cream/10 blur-2xl sm:bottom-8 sm:left-8 sm:h-48 sm:w-48 md:bottom-12 md:left-12 md:h-56 md:w-56 lg:bottom-20 lg:left-20 lg:h-72 lg:w-72 animate-pulse" style={{ animationDelay: '1.5s' }} />
    <div className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-gold-300/10 blur-3xl md:h-64 md:w-64" />
    <div className="absolute right-1/3 bottom-1/4 h-36 w-36 rounded-full bg-cream/8 blur-xl md:h-48 md:w-48" />
    <div className="absolute left-1/4 top-2/3 h-40 w-40 rounded-full bg-gold-500/10 blur-2xl md:h-56 md:w-56" />
  </>
);

const DecorativeBackground = () => (
  <>
    {/* Enhanced decorative elements with gold accents */}
    <div className="absolute right-4 top-4 h-40 w-40 rounded-full bg-gold-400/8 blur-2xl sm:right-8 sm:top-8 sm:h-56 sm:w-56 md:right-12 md:top-12 md:h-64 md:w-64 lg:right-20 lg:top-20 lg:h-80 lg:w-80 animate-pulse" />
    <div className="absolute bottom-4 left-4 h-32 w-32 rounded-full bg-gold-500/6 blur-2xl sm:bottom-8 sm:left-8 sm:h-48 sm:w-48 md:bottom-12 md:left-12 md:h-56 md:w-56 lg:bottom-20 lg:left-20 lg:h-72 lg:w-72 animate-pulse" style={{ animationDelay: '1.5s' }} />
    <div className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-gold-300/5 blur-3xl md:h-64 md:w-64" />
    <div className="absolute right-1/3 bottom-1/4 h-36 w-36 rounded-full bg-accent/8 blur-xl md:h-48 md:w-48" />
  </>
);

const RegulationItem = ({
  number,
  children,
}: {
  number: number;
  children: ReactNode;
}) => (
  <li className="flex items-center gap-3 sm:gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/30 via-gold-500/30 to-gold-600/30 font-black text-gold-300 ring-2 ring-gold-400/40 shadow-[0_0_15px_rgba(251,191,36,0.3)] sm:h-12 sm:w-12">
      {number}
    </div>
    <div className="flex-1 text-cream/95">{children}</div>
  </li>
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
    'flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold sm:w-auto sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-4 md:text-lg w-full transition-all duration-300';
  const variantClasses =
    variant === 'primary'
      ? 'bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 text-forest-900 hover:from-gold-400 hover:via-gold-500 hover:to-gold-600 shadow-[0_0_25px_rgba(251,191,36,0.5)] hover:shadow-[0_0_35px_rgba(251,191,36,0.7)] hover:scale-105'
      : 'border-2 border-gold-400/80 bg-transparent text-gold-300 hover:bg-gold-400/20 hover:border-gold-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]';

  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${variantClasses} rounded-xl`}
    >
      {children}
    </Link>
  );
};

