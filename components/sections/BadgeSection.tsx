import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { FadeIn } from '@/components/motion';
import { siteRoutes } from '@/config/site-routes';
import { sectionIds } from '@/config/section-ids';
import { getSectionUrl } from '@/lib/section-navigation';
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

export const BadgeSection = () => {
  return (
    <>
      <Section
        ariaLabel="Odznaka Sudety Grand Trail"
        className="relative items-start overflow-hidden bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700"
      >
        <DecorativeBackground />

        <div className="fluid-container relative z-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              title="Odznaka Sudety Grand Trail"
              icon={<BadgeIcon className="size-5 text-cream/80 sm:size-6" />}
              variant="light"
            />

            {/* Main Content */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {/* Informacja o możliwości zdobycia - EPIC VERSION */}
              <FadeIn
                {...FADE_IN_PROPS}
                className="relative overflow-hidden rounded-2xl border-2 border-gold-400/40 bg-gradient-to-br from-forest-800/95 via-forest-800/75 to-earth-800/95 p-6 backdrop-blur-sm shadow-[0_0_50px_rgba(251,191,36,0.3)] sm:rounded-3xl sm:p-8 md:p-10 lg:p-14"
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
                      <span className="text-xl font-black text-gold-300 sm:text-2xl drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                        SUDETY GRAND TRAIL
                      </span>
                      . To nie jest zwykłe wyróżnienie – to{' '}
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

              {/* Zdjęcie odznaki - EPIC VERSION WITH 3D EFFECT */}
              <FadeIn
                {...FADE_IN_PROPS}
                className="relative overflow-visible rounded-xl border-2 border-gold-400/40 bg-gradient-to-br from-forest-800/90 via-forest-800/70 to-earth-800/90 p-6 backdrop-blur-sm shadow-[0_0_60px_rgba(251,191,36,0.4)] sm:rounded-2xl sm:p-8 md:p-10"
              >
                {/* Enhanced Gold glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/15 via-transparent to-gold-500/15 rounded-xl" />
                <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-gold-400/20 blur-3xl animate-pulse" />
                <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/10 blur-2xl" />
                
                {/* Badge Container with 3D effect */}
                <div className="relative w-full">
                  {/* 3D Shadow layers */}
                  <div className="absolute inset-0 translate-y-4 rounded-[2rem] bg-gold-900/30 blur-2xl" />
                  <div className="absolute inset-0 translate-y-2 rounded-[2rem] bg-gold-800/20 blur-xl" />
                  
                  {/* Badge Image Container - Without circular ring, cleaner design */}
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-gold-400/10 via-gold-500/5 to-gold-600/10 shadow-[0_0_50px_rgba(251,191,36,0.6),inset_0_0_30px_rgba(251,191,36,0.2)]">
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-radial from-gold-300/20 via-transparent to-transparent" />
                    
                    {/* Badge Image */}
                    <div className="relative h-full w-full">
                      <Image
                        src="https://scontent.flcj1-1.fna.fbcdn.net/v/t1.15752-9/592139478_1340256487899607_675340442172499047_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=P5gCY3Gfi9MQ7kNvwGW0vr4&_nc_oc=AdnZ6jGL_7HQkWKszUHTkKTFfv-XG91f2_2-gussACbUxVjZd-3FUlSyWlkIqLvHsGQ&_nc_zt=23&_nc_ht=scontent.flcj1-1.fna&oh=03_Q7cD4AH-9_VJJzXuWnqCIkdOHhKc9D3Rir1b839QUhCFXq6OWQ&oe=695B616A"
                        alt="Oficjalna odznaka Sudety Grand Trail - 900km przez 23 pasma górskie"
                        fill
                        className="object-contain p-6 drop-shadow-[0_0_40px_rgba(251,191,36,0.7)]"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                    
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50" />
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute -top-2 -right-2 size-3 rounded-full bg-gold-400/60 blur-sm animate-ping" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute -bottom-2 -left-2 size-2 rounded-full bg-gold-500/60 blur-sm animate-ping" style={{ animationDelay: '1.5s' }} />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      <Section
        ariaLabel="Regulamin zdobycia odznaki"
        className="relative items-start overflow-hidden bg-gradient-to-br from-forest-900 via-earth-900 to-forest-800"
      >
        <DecorativeBackground />

        <div className="fluid-container relative z-10">
          <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10 md:space-y-12">
            <SectionHeader
              title="Regulamin Zdobycia Odznaki"
              icon={<BadgeIcon className="size-5 text-cream/80 sm:size-6" />}
              variant="light"
            />

            {/* Regulamin - przeniesiony do osobnej sekcji */}
            <FadeIn
              {...FADE_IN_PROPS}
              delay={0.2}
              className="relative overflow-hidden rounded-2xl border-2 border-gold-400/40 bg-gradient-to-br from-accent/25 via-accent/20 to-earth-700/30 p-6 backdrop-blur-sm shadow-[0_0_50px_rgba(251,191,36,0.3)] sm:rounded-3xl sm:p-8 md:p-10 lg:p-14"
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
                    Przejście całego szlaku{' '}
                    <span className="font-bold text-gold-300">
                      Sudety Grand Trail
                    </span>{' '}
                    zgodnie z oficjalną trasą, od Jarnołtówka do Ślęży.
                  </RegulationItem>
                  <RegulationItem number={2}>
                    Zdobycie wszystkich{' '}
                    <span className="font-bold text-gold-300">
                      najwyższych szczytów każdego z 23 pasm górskich
                    </span>{' '}
                    znajdujących się na trasie.
                  </RegulationItem>
                  <RegulationItem number={3}>
                    Po polskiej stronie – zdobycie wszystkich{' '}
                    <span className="font-bold text-gold-300">
                      16 sudeckich szczytów należących do Korony Gór Polski
                    </span>
                    .
                  </RegulationItem>
                  <RegulationItem number={4}>
                    Dokumentacja przejścia w formie{' '}
                    <span className="font-bold text-gold-300">
                      zdjęć, relacji lub trackingu GPS
                    </span>
                    , potwierdzająca ukończenie szlaku.
                  </RegulationItem>
                  <RegulationItem number={5}>
                    Zgłoszenie przejścia poprzez{' '}
                    <span className="font-bold text-gold-300">
                      oficjalny formularz
                    </span>
                    , wraz z udostępnieniem dokumentacji i relacji z
                    przejścia.
                  </RegulationItem>
                </ul>
              </div>
            </FadeIn>

            {/* Call to Action - EPIC VERSION */}
            <FadeIn
              {...FADE_IN_PROPS}
              delay={0.35}
              className="relative overflow-hidden rounded-2xl border-2 border-gold-400/50 bg-gradient-to-br from-gold-400/25 via-gold-500/20 to-gold-600/25 p-6 backdrop-blur-sm shadow-[0_0_80px_rgba(251,191,36,0.5)] sm:rounded-3xl sm:p-8 md:p-10 lg:p-14"
            >
              {/* Enhanced epic gold glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300/15 via-transparent to-gold-500/15 rounded-2xl" />
              <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-gold-400/25 blur-3xl animate-pulse" />
              <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-gold-500/25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/20 blur-2xl" />
              
              <div className="relative space-y-5 text-center sm:space-y-6 md:space-y-8">
                <p className="text-xl font-black text-gold-300 sm:text-2xl drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                  Ukończyłeś Szlak?
                </p>
                <p className="text-lg font-bold text-cream/95 sm:text-xl">
                  Zgłoś swoje przejście i zdobądź oficjalną odznakę!
                </p>
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
                    Zgłoś Przejście i Zdobądź Odznakę
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
    </>
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
  <li className="flex gap-3 sm:gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/30 via-gold-500/30 to-gold-600/30 font-black text-gold-300 ring-2 ring-gold-400/40 shadow-[0_0_15px_rgba(251,191,36,0.3)] sm:h-12 sm:w-12">
      {number}
    </div>
    <div className="flex-1 pt-1 text-cream/95">{children}</div>
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

