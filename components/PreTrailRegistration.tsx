'use client';

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
import { useTranslations } from '@/lib/i18n-utils';

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

const getProcessSteps = (t: (key: string) => string): ProcessStep[] => [
  {
    number: 1,
    title: t('process.step1.title'),
    description: t('process.step1.description'),
    linkText: t('process.step1.linkText'),
    linkHref: getSectionUrl(siteRoutes.live, sectionIds.trackerForm),
    gradientClass: 'from-forest-600 to-forest-700',
  },
  {
    number: 2,
    title: t('process.step2.title'),
    description: t('process.step2.description'),
    linkText: t('process.step2.linkText'),
    linkHref: '/trail',
    gradientClass: 'from-earth-600 to-earth-700',
  },
  {
    number: 3,
    title: t('process.step3.title'),
    description: t('process.step3.description'),
    linkText: t('process.step3.linkText'),
    linkHref: getSectionHash(sectionIds.submission),
    gradientClass: 'from-gold-500 to-gold-600',
  },
];

const getBenefits = (t: (key: string) => string): Benefit[] => [
  {
    title: t('benefits.benefit1.title'),
    description: t('benefits.benefit1.description'),
  },
  {
    title: t('benefits.benefit2.title'),
    description: t('benefits.benefit2.description'),
  },
  {
    title: t('benefits.benefit3.title'),
    description: (
      <>
        {t('benefits.benefit3.description')}{' '}
        <Link
          href={getSectionUrl(siteRoutes.hallOfFame, sectionIds.hallOfFame)}
          className="font-semibold text-forest-700 underline decoration-2 underline-offset-2 transition-colors hover:text-forest-800"
        >
          {t('benefits.benefit3.hallOfFame')}
        </Link>{' '}
        {t('benefits.benefit3.descriptionEnd')}
      </>
    ),
  },
  {
    title: t('benefits.benefit4.title'),
    description: t('benefits.benefit4.description'),
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
      inViewMargin="50px"
      className="relative flex items-start gap-6"
    >
      <div
        className={`relative z-10 flex size-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradientClass} text-xl font-black text-cream shadow-lg`}
      >
        {step.number}
      </div>
      <div className="flex-1 pt-1">
        <h4 className="mb-2 text-lg font-bold text-forest-800">{step.title}</h4>
        <p className="mb-3 text-justify leading-relaxed text-mountain-600">
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

const ProcessSteps = () => {
  const { t } = useTranslations('preTrailRegistration');
  const steps = getProcessSteps(t);
  
  return (
    <div className="relative flex h-full flex-col">
      <FadeIn direction="up" offset={30} duration={0.6} delay={0.3} inView={true}>
        <h3 className="mb-8 text-left font-display text-2xl font-bold uppercase tracking-wide text-forest-800">
          {t('process.title')}
        </h3>
      </FadeIn>

      <div className="relative flex flex-1 flex-col">
        {/* Vertical timeline line */}
        <div className="absolute bottom-0 left-7 top-0 w-0.5 bg-gradient-to-b from-forest-600 via-earth-600 to-accent" />

        <div className="relative flex h-full flex-col justify-between py-4">
          {steps.map((step, index) => (
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
};

const BenefitItem = ({ benefit }: { benefit: Benefit }) => (
  <div className="flex items-start gap-4">
    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-700 shadow-vintage">
      <CheckIcon className="size-5 text-cream" />
    </div>
    <div>
      <h4 className="mb-1 font-bold text-forest-800">{benefit.title}</h4>
      <p className="text-sm text-justify leading-relaxed text-mountain-600">
        {benefit.description}
      </p>
    </div>
  </div>
);

const BenefitsCard = () => {
  const { t } = useTranslations('preTrailRegistration');
  const benefits = getBenefits(t);
  
  return (
    <FadeIn direction="up" offset={30} duration={0.6} delay={0.5} inView={true}>
      <div className="card-vintage-noanim p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 shadow-vintage">
            <StarIcon className="size-8 text-cream" />
          </div>
          <h3 className="mb-4 text-center font-display text-2xl font-bold uppercase tracking-wide text-forest-800">
            {t('benefitsCard.title')}
          </h3>
        </div>

        <div className="mt-8 space-y-5">
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.title} benefit={benefit} />
          ))}
        </div>

        <div className="mt-8 border-t border-forest-200 pt-8 text-center">
          <Link
            href={getSectionUrl(siteRoutes.live, sectionIds.trackerForm)}
            className="theme-btn-base theme-halloffame-btn-primary inline-flex items-center justify-center px-4 py-3 text-sm sm:px-8 sm:py-4 sm:text-base md:text-lg"
          >
            {t('benefitsCard.button')}
          </Link>
          <p className="mt-4 text-sm text-mountain-500">
            {t('benefitsCard.footer')}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

const WarningBox = () => {
  const { t } = useTranslations('preTrailRegistration');
  
  return (
    <FadeIn
      direction="up"
      offset={30}
      duration={0.6}
      delay={0.9}
      inView={true}
      inViewMargin="-50px"
      className="mt-16"
    >
      <div className="card-vintage-noanim border-2 border-gold-400 bg-gradient-to-br from-gold-50 to-gold-100 p-5 sm:p-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
          <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 shadow-vintage sm:size-14">
            <svg
              className="size-6 text-white sm:size-7"
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
            <h4 className="mb-2 text-base font-bold text-gold-800 sm:mb-3 sm:text-lg">
              {t('warning.title')}
            </h4>
            <p className="text-sm text-justify leading-relaxed text-gold-700 sm:text-base">
              <strong>{t('warning.text.part1')}</strong>
              {t('warning.text.part2')}
              <strong>{t('warning.text.part3')}</strong>
              {t('warning.text.part4')}{' '}
              <Link
                href={getSectionUrl(siteRoutes.hallOfFame, sectionIds.hallOfFame)}
                className="font-bold text-gold-800 underline decoration-2 underline-offset-2 transition-colors hover:text-gold-900"
              >
                {t('warning.hallOfFame')}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

/*  ==========================================================================
        MAIN COMPONENT
    ========================================================================== */
export const PreTrailRegistration = () => {
  const { t } = useTranslations('preTrailRegistration');
  
  return (
    <Section
      ariaLabel={t('title')}
      className="overflow-hidden bg-gradient-to-br from-gold-500/10 to-gold-600/10"
    >
      <VintageMountainsBackground className="opacity-15" />

      <div className="fluid-container relative z-10">
        <SectionHeader
          title={t('title')}
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
            {t('callToAction.text')}{' '}
            <span className="bg-gradient-to-r from-gold-700 via-gold-600 to-gold-800 bg-clip-text text-transparent font-bold">
              {t('callToAction.highlight')}
            </span>
            {t('callToAction.textMiddle')}{' '}
            <span className="bg-gradient-to-r from-gold-700 via-gold-600 to-gold-800 bg-clip-text text-transparent font-bold">
              {t('callToAction.highlight2')}
            </span>
            {t('callToAction.textEnd')}
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
