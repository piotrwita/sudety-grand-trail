import { CheckIcon, InfoIcon, RightArrowIcon } from '@/components/icons';
import { FadeIn } from '@/components/motion';
import { Section } from '@/components/sections';
import { VintageMountainsBackground } from './VintageMountainsBackground';
import Link from 'next/link';
import { SectionHeader } from './sections/SectionHeader';

export const PreTrailRegistration = () => {
  return (
    <Section
      ariaLabel="Zanim Wyruszysz"
      className="overflow-hidden bg-gradient-to-br from-accent/10 to-earth/10"
    >
      <VintageMountainsBackground className="opacity-10" />

      <div className="fluid-container relative z-10">
        <SectionHeader
          title="Zanim Wyruszysz"
          icon={<InfoIcon className="size-6 text-cream/80" />}
          variant="forest"
        />
        <FadeIn
          direction="up"
          offset={30}
          duration={0.6}
          delay={0.6}
          inView={true}
          className="mb-16 text-center"
        >
          <p className="text-fluid-lg mx-auto max-w-4xl font-medium leading-relaxed text-mountain-600">
            Planujesz podbój Korony Sudetów? Najpierw zgłoś swoją próbę
            przejścia i otrzymaj darmowy tracker GPS do śledzenia postępów!
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Left - Process Steps */}
          <FadeIn
            direction="left"
            offset={50}
            duration={0.6}
            delay={0.8}
            inView={true}
            className="relative flex h-full flex-col"
          >
            <h3 className="mb-8 text-left font-display text-2xl font-bold uppercase tracking-wide text-forest-800">
              Proces Przejścia SGT
            </h3>

            {/* Timeline */}
            <div className="relative flex flex-1 flex-col">
              {/* Vertical line connecting steps - full height to match right column */}
              <div className="absolute bottom-0 left-7 top-0 w-0.5 bg-gradient-to-b from-forest-600 via-earth-600 to-accent" />

              {/* Container for evenly spaced steps */}
              <div className="relative flex h-full flex-col justify-between py-4">
                {/* Step 1 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-700 text-xl font-bold text-cream shadow-vintage ring-4 ring-cream">
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="mb-2 text-lg font-bold text-forest-800">
                      Zgłoś Próbę Przejścia
                    </h4>
                    <p className="mb-3 leading-relaxed text-mountain-600">
                      Przed startem wypełnij formularz zgłoszenia próby
                      przejścia. Otrzymasz darmowy tracker GPS i będziesz
                      widoczny na mapie live tracking.
                    </p>
                    <Link
                      href="/live#tracker-form"
                      className="inline-flex items-center font-bold text-accent transition-colors hover:text-accent-600"
                    >
                      Zgłoś próbę przejścia
                      <RightArrowIcon className="ml-2 size-4" />
                    </Link>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-earth-600 to-earth-700 text-xl font-bold text-cream shadow-vintage ring-4 ring-cream">
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="mb-2 text-lg font-bold text-forest-800">
                      Pokonaj Szlak
                    </h4>
                    <p className="mb-3 leading-relaxed text-mountain-600">
                      Wyrusz na trasę z trackerem GPS. Twoje postępy będą
                      widoczne na żywo dla wszystkich obserwujących. Zdobądź
                      wszystkie 22 najwyższe szczyty pasm Sudetów.
                    </p>
                    <Link
                      href="/trail"
                      className="inline-flex items-center font-bold text-accent transition-colors hover:text-accent-600"
                    >
                      Poznaj trasę
                      <RightArrowIcon className="ml-2 size-4" />
                    </Link>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-600 text-xl font-bold text-cream shadow-vintage ring-4 ring-cream">
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="mb-2 text-lg font-bold text-forest-800">
                      Zgłoś Ukończenie
                    </h4>
                    <p className="mb-3 leading-relaxed text-mountain-600">
                      Po ukończeniu szlaku zgłoś swoje przejście z materiałami
                      (zdjęcia, GPX). Po weryfikacji dołączysz do oficjalnego
                      Hall of Fame!
                    </p>
                    <a
                      href="#zglos-przejscie"
                      className="inline-flex items-center font-bold text-accent transition-colors hover:text-accent-600"
                    >
                      Formularz ukończenia
                      <RightArrowIcon className="ml-2 size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right - Benefits Card */}
          <FadeIn
            direction="right"
            offset={50}
            duration={0.8}
            delay={0.5}
            inView={true}
          >
            <div className="card-vintage h-full p-8 hover:shadow-vintage-xl">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-600 shadow-vintage">
                  <svg
                    className="size-8 text-cream"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-center font-display text-2xl font-bold uppercase tracking-wide text-forest-800">
                  Korzyści z Rejestracji
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-700 shadow-vintage">
                    <CheckIcon className="size-5 text-cream" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-forest-800">
                      Darmowy Tracker GPS
                    </h4>
                    <p className="text-sm leading-relaxed text-mountain-600">
                      Otrzymaj profesjonalny tracker Poltrax całkowicie za darmo
                      na cały czas przejścia. Nie musisz kupować sprzętu - my go
                      dostarczamy!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-700 shadow-vintage">
                    <CheckIcon className="size-5 text-cream" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-forest-800">
                      Live Tracking
                    </h4>
                    <p className="text-sm leading-relaxed text-mountain-600">
                      Twoja wyprawa na żywo w internecie! Rodzina, przyjaciele i
                      cała społeczność mogą śledzić każdy Twój krok przez 900
                      kilometrów szlaku.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-700 shadow-vintage">
                    <CheckIcon className="size-5 text-cream" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-forest-800">
                      Oficjalne Uznanie
                    </h4>
                    <p className="text-sm leading-relaxed text-mountain-600">
                      Po ukończeniu szlaku dołączysz do elitarnego grona
                      zdobywców. Twoje imię w{' '}
                      <Link
                        href="/hall-of-fame#hall-of-fame"
                        className="font-semibold text-forest-700 underline decoration-2 underline-offset-2 transition-colors hover:text-forest-800"
                      >
                        Hall of Fame
                      </Link>{' '}
                      i oficjalny certyfikat ukończenia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-700 shadow-vintage">
                    <CheckIcon className="size-5 text-cream" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-forest-800">
                      Społeczność
                    </h4>
                    <p className="text-sm leading-relaxed text-mountain-600">
                      Dołącz do ekskluzywnego grona tych, którzy zdobyli Koronę
                      Sudetów. Dziel się doświadczeniami i inspiruj innych do
                      podjęcia wyzwania.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-forest-200 pt-8 text-center">
                <Link
                  href="/live#tracker-form"
                  className="btn-primary w-full py-4 text-lg"
                >
                  Zgłoś Próbę Przejścia
                </Link>
                <p className="mt-4 text-sm text-mountain-500">
                  Wszystko w jednym miejscu • Szybka rejestracja •
                  Natychmiastowy dostęp
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Warning Box */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.8}
          delay={0.7}
          inView={true}
          className="mt-16"
        >
          <div className="card-vintage border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 hover:shadow-vintage-xl">
            <div className="flex items-start gap-6">
              <div className="flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-vintage">
                <svg
                  className="size-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="mb-3 text-lg font-bold text-yellow-800">
                  Ważne: Zgłoś się przed startem!
                </h4>
                <p className="leading-relaxed text-yellow-700">
                  <strong>
                    Aby Twoje przejście zostało uznane za oficjalne
                  </strong>
                  , musisz zgłosić próbę przejścia
                  <strong> przed rozpoczęciem wędrówki</strong>. Przejścia
                  rozpoczęte bez wcześniejszego zgłoszenia mogą nie zostać
                  uwzględnione w oficjalnych statystykach{' '}
                  <Link
                    href="/hall-of-fame#hall-of-fame"
                    className="font-bold text-yellow-800 underline decoration-2 underline-offset-2 transition-colors hover:text-yellow-900"
                  >
                    Hall of Fame
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
