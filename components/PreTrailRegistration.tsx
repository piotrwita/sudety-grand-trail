import {
  CheckIcon,
  InfoIcon,
  RightArrowIcon,
  StarIcon,
} from '@/components/icons';
import { FadeIn } from '@/components/motion';
import { Section } from '@/components/sections';
import { VintageMountainsBackground } from './VintageMountainsBackground';
import Link from 'next/link';
import { SectionHeader } from './sections/SectionHeader';
import { ReactNode } from 'react';
import { sectionIds } from '@/config/section-ids';
import { getSectionUrl, getSectionHash } from '@/lib/section-navigation';
import { siteRoutes } from '@/config/site-routes';

/*  ==========================================================================
        TYPES & DATA                               
    ========================================================================== */
interface ProcessStep {
  number: number;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  gradientClass: string;
  isAnchorLink?: boolean;
}

interface Benefit {
  title: string;
  description: ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Zgłoś Próbę Przejścia',
    description:
      'Przed startem wypełnij formularz zgłoszenia próby przejścia. Otrzymasz darmowy tracker GPS i będziesz widoczny na mapie live tracking.',
    linkText: 'Zgłoś próbę przejścia',
    linkHref: getSectionUrl(siteRoutes.live, sectionIds.trackerForm),
    gradientClass: 'from-forest-600 to-forest-700',
  },
  {
    number: 2,
    title: 'Pokonaj Szlak',
    description:
      'Wyrusz na trasę z trackerem GPS. Twoje postępy będą widoczne na żywo dla wszystkich obserwujących. Zdobądź wszystkie 22 najwyższe szczyty pasm Sudetów.',
    linkText: 'Poznaj trasę',
    linkHref: '/trail',
    gradientClass: 'from-earth-600 to-earth-700',
  },
  {
    number: 3,
    title: 'Zgłoś Ukończenie',
    description:
      'Po ukończeniu szlaku zgłoś swoje przejście z materiałami (zdjęcia, GPX). Po weryfikacji dołączysz do oficjalnego Hall of Fame!',
    linkText: 'Formularz ukończenia',
    linkHref: getSectionHash(sectionIds.submission),
    gradientClass: 'from-gold-500 to-gold-600',
  },
];

const BENEFITS: Benefit[] = [
  {
    title: 'Darmowy Tracker GPS',
    description:
      'Otrzymaj profesjonalny tracker Poltrax całkowicie za darmo na cały czas przejścia. Nie musisz kupować sprzętu - my go dostarczamy!',
  },
  {
    title: 'Live Tracking',
    description:
      'Twoja wyprawa na żywo w internecie! Rodzina, przyjaciele i cała społeczność mogą śledzić każdy Twój krok przez 900 kilometrów szlaku.',
  },
  {
    title: 'Oficjalne Uznanie',
    description: (
      <>
        Po ukończeniu szlaku dołączysz do elitarnego grona zdobywców. Twoje imię
        w{' '}
        <Link
          href={getSectionUrl(siteRoutes.hallOfFame, sectionIds.hallOfFame)}
          className="font-semibold text-forest-700 underline decoration-2 underline-offset-2 transition-colors hover:text-forest-800"
        >
          Hall of Fame
        </Link>{' '}
        i oficjalny certyfikat ukończenia.
      </>
    ),
  },
  {
    title: 'Społeczność',
    description:
      'Dołącz do ekskluzywnego grona tych, którzy zdobyli Koronę Sudetów. Dziel się doświadczeniami i inspiruj innych do podjęcia wyzwania.',
  },
];

/*  ==========================================================================
        SUB-COMPONENTS                               
    ========================================================================== */
const ProcessStepItem = ({
  step,
  delay,
}: {
  step: ProcessStep;
  delay: number;
}) => {
  return (
    <FadeIn
      direction="up"
      offset={30}
      duration={0.6}
      delay={delay}
      inView={true}
      inViewMargin="-50px"
      className="relative flex items-start gap-6"
    >
      <div
        className={`relative z-10 flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${step.gradientClass} text-xl font-bold text-cream shadow-vintage ring-4 ring-cream`}
      >
        {step.number}
      </div>
      <div className="flex-1 pt-1">
        <h4 className="mb-2 text-lg font-bold text-forest-800">{step.title}</h4>
        <p className="mb-3 leading-relaxed text-mountain-600">
          {step.description}
        </p>
        <Link
          href={step.linkHref}
          className="inline-flex items-center font-bold text-accent transition-colors hover:text-accent-600"
        >
          {step.linkText}
          <RightArrowIcon className="ml-2 size-4" />
        </Link>
      </div>
    </FadeIn>
  );
};

const ProcessSteps = () => (
  <div className="relative flex h-full flex-col">
    <FadeIn direction="up" offset={30} duration={0.6} delay={0.3} inView={true}>
      <h3 className="mb-8 text-left font-display text-2xl font-bold uppercase tracking-wide text-forest-800">
        Proces Przejścia SGT
      </h3>
    </FadeIn>

    <div className="relative flex flex-1 flex-col">
      {/* Vertical timeline line */}
      <div className="absolute bottom-0 left-7 top-0 w-0.5 bg-gradient-to-b from-forest-600 via-earth-600 to-accent" />

      <div className="relative flex h-full flex-col justify-between py-4">
        {PROCESS_STEPS.map((step, index) => (
          <ProcessStepItem
            key={step.number}
            step={step}
            delay={0.4 + index * 0.2}
          />
        ))}
      </div>
    </div>
  </div>
);

const BenefitItem = ({ benefit }: { benefit: Benefit }) => (
  <div className="flex items-start gap-4">
    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-700 shadow-vintage">
      <CheckIcon className="size-5 text-cream" />
    </div>
    <div>
      <h4 className="mb-1 font-bold text-forest-800">{benefit.title}</h4>
      <p className="text-sm leading-relaxed text-mountain-600">
        {benefit.description}
      </p>
    </div>
  </div>
);

const BenefitsCard = () => (
  <FadeIn direction="up" offset={30} duration={0.6} delay={0.5} inView={true}>
    <div className="card-vintage-noanim p-8">
      <div className="text-center">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 shadow-vintage">
          <StarIcon className="size-8 text-cream" />
        </div>
        <h3 className="mb-4 text-center font-display text-2xl font-bold uppercase tracking-wide text-forest-800">
          Korzyści z Rejestracji
        </h3>
      </div>

      <div className="mt-8 space-y-5">
        {BENEFITS.map((benefit) => (
          <BenefitItem key={benefit.title} benefit={benefit} />
        ))}
      </div>

      <div className="mt-8 border-t border-forest-200 pt-8 text-center">
        <Link
          href={getSectionUrl(siteRoutes.live, sectionIds.trackerForm)}
          className="btn-primary w-full py-4 text-lg"
        >
          Zgłoś Próbę Przejścia
        </Link>
        <p className="mt-4 text-sm text-mountain-500">
          Wszystko w jednym miejscu • Szybka rejestracja • Natychmiastowy dostęp
        </p>
      </div>
    </div>
  </FadeIn>
);

const WarningBox = () => (
  <FadeIn
    direction="up"
    offset={30}
    duration={0.6}
    delay={0.9}
    inView={true}
    inViewMargin="-50px"
    className="mt-16"
  >
    <div className="card-vintage-noanim border-2 border-gold-400 bg-gradient-to-br from-gold-50 to-gold-100 p-8">
      <div className="flex items-start gap-6">
        <div className="flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 shadow-vintage">
          <svg
            className="size-7 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="mb-3 text-lg font-bold text-gold-800">
            Ważne: Zgłoś się przed startem!
          </h4>
          <p className="leading-relaxed text-gold-700">
            <strong>Aby Twoje przejście zostało uznane za oficjalne</strong>,
            musisz zgłosić próbę przejścia
            <strong> przed rozpoczęciem wędrówki</strong>. Przejścia rozpoczęte
            bez wcześniejszego zgłoszenia mogą nie zostać uwzględnione w
            oficjalnych statystykach{' '}
            <Link
              href={getSectionUrl(siteRoutes.hallOfFame, sectionIds.hallOfFame)}
              className="font-bold text-gold-800 underline decoration-2 underline-offset-2 transition-colors hover:text-gold-900"
            >
              Hall of Fame
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </FadeIn>
);

/*  ==========================================================================
        MAIN COMPONENT
    ========================================================================== */
export const PreTrailRegistration = () => {
  return (
    <Section
      ariaLabel="Zanim Wyruszysz"
      className="overflow-hidden bg-gradient-to-br from-gold-500/10 to-gold-600/10"
    >
      <VintageMountainsBackground className="opacity-15" />

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
          delay={0.2}
          inView={true}
          className="mb-16 text-center"
        >
          <p className="text-fluid-lg mx-auto max-w-4xl font-medium leading-relaxed text-mountain-600">
            Planujesz podbój Korony Sudetów? Najpierw zgłoś swoją próbę
            przejścia i otrzymaj darmowy tracker GPS do śledzenia postępów!
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          <ProcessSteps />
          <BenefitsCard />
        </div>

        <WarningBox />
      </div>
    </Section>
  );
};
