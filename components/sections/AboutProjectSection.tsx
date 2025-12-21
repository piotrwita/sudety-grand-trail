'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { FacebookIcon } from '@/components/icons';
import { FadeIn } from '@/components/motion';
import { siteConfig } from '@/config/site';
import { siteRoutes } from '@/config/site-routes';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { useTranslations } from '@/lib/i18n-utils';

const FADE_IN_PROPS = {
  inView: true,
  inViewMargin: '100px' as const,
  direction: 'up' as const,
  offset: 30,
  delay: 0.3,
  duration: 0.6,
};

export const AboutProjectSection = () => {
  const { t } = useTranslations('aboutProject');
  const { facebook } = siteConfig.links;

  return (
    <Section
      ariaLabel={t('title')}
      className="relative items-start overflow-hidden bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700"
    >
      <DecorativeBackground />

      <div className="fluid-container relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={t('title')}
            icon={<ProjectIcon className="size-5 text-cream/80 sm:size-6" />}
            variant="light"
          />

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Historia powstania i koncepcja */}
            <FadeIn
              {...FADE_IN_PROPS}
              className="relative overflow-hidden rounded-xl border border-cream/20 bg-gradient-to-br from-forest-800/80 via-forest-800/60 to-earth-800/80 p-4 bg-forest-800/95 sm:rounded-2xl sm:p-6 md:p-8 lg:p-12 supports-[backdrop-filter]:backdrop-blur-sm"
            >
              <div className="relative space-y-4 text-base leading-relaxed text-cream/90 sm:space-y-6 sm:text-lg md:space-y-8">
                {/* Historia powstania */}
                <div className="space-y-3 text-justify sm:space-y-4">
                  <p className="text-xl font-bold text-cream sm:text-2xl">
                    {t('history.title')}
                  </p>
                  <p>
                    {t('history.p1')}{' '}
                    <span className="font-bold text-accent">
                      {t('history.p1Highlight')}
                    </span>
                    .
                  </p>
                  <p>
                    {t('history.p2')}{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      SUDETY GRAND TRAIL
                    </span>
                    {t('history.p2Rest')}{' '}
                    <span className="font-bold text-cream">
                      {t('history.p2Highlight')}
                    </span>
                    .
                  </p>
                </div>

                <Separator variant="cream" />

                {/* Koncepcja */}
                <div className="space-y-3 text-justify sm:space-y-4">
                  <p className="text-xl font-bold text-cream sm:text-2xl">
                    {t('concept.title')}
                  </p>
                  <p>
                    <span className="font-bold text-accent">
                      SUDETY GRAND TRAIL
                    </span>{' '}
                    {t('concept.p1')}{' '}
                    <span className="font-bold text-cream">
                      {t('concept.p1Highlight')}
                    </span>
                    .
                  </p>
                  <p>
                    {t('concept.p2')}{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      {t('concept.p2Part1')}
                    </span>{' '}
                    {t('concept.p2Part2')}{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      {t('concept.p2Part3')}
                    </span>{' '}
                    {t('concept.p2Part4')}{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      {t('concept.p2Part5')}
                    </span>{' '}
                    {t('concept.p2Part6')}{' '}
                    <span className="text-lg font-bold text-accent sm:text-xl">
                      {t('concept.p2Part7')}
                    </span>{' '}
                    {t('concept.p2Part8')}
                  </p>
                  <p className="border-t border-cream/20 pt-3 italic text-cream/95 sm:pt-4">
                    {t('concept.p3')}{' '}
                    <span className="font-bold not-italic text-cream">
                      {t('concept.p3Start')}
                    </span>
                    {t('concept.p3Middle')}{' '}
                    <span className="font-bold not-italic text-cream">
                      {t('concept.p3End')}
                    </span>
                    {t('concept.p3EndDesc')}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Cel i Legendy */}
            <FadeIn
              {...FADE_IN_PROPS}
              className="relative overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/10 to-earth-700/20 p-4 bg-accent/20 sm:rounded-2xl sm:p-6 md:p-8 lg:p-12 supports-[backdrop-filter]:backdrop-blur-sm"
            >
              <div className="relative space-y-4 text-base leading-relaxed text-cream/90 sm:space-y-6 sm:text-lg md:space-y-8">
                {/* Cel Szlaku */}
                <div className="space-y-3 text-justify sm:space-y-4">
                  <p className="text-xl font-bold text-cream sm:text-2xl">
                    {t('goal.title')}
                  </p>
                  <p>
                    {t('goal.p1')}{' '}
                    <span className="font-bold text-cream">
                      {t('goal.p1Highlight1')}
                    </span>
                    {t('goal.p1Middle')}{' '}
                    <span className="font-bold text-cream">
                      {t('goal.p1Highlight2')}
                    </span>
                    .
                  </p>
                  <HighlightedBox>
                    {t('goal.highlightBox')}{' '}
                    <span className="font-bold">
                      {t('goal.highlightBoxBold')}
                    </span>{' '}
                    {t('goal.highlightBoxRest')}
                  </HighlightedBox>
                </div>

                <Separator variant="accent" />

                {/* Legendy */}
                <div className="space-y-3 text-justify sm:space-y-4">
                  <p className="text-xl font-bold text-cream sm:text-2xl">
                    {t('legends.title')}
                  </p>
                  <p>
                    {t('legends.p1')}{' '}
                    <span className="font-bold text-cream">{t('legends.p1Peaks')}</span>
                    {t('legends.p1PeaksDesc')}{' '}
                    <span className="font-bold text-cream">{t('legends.p1Peaks2')}</span>{' '}
                    {t('legends.p1Peaks3')}{' '}
                    <span className="font-bold text-cream">{t('legends.p1Peaks4')}</span>
                    {t('legends.p1Peaks5')}{' '}
                    <span className="font-bold text-cream">{t('legends.p1Peaks6')}</span>
                    {t('legends.p1Peaks7')}{' '}
                    <span className="font-bold text-cream">
                      {t('legends.p1Peaks8')}
                    </span>
                    {t('legends.p1Peaks9')}{' '}
                    <span className="font-bold text-cream">{t('legends.p1Peaks10')}</span>{' '}
                    {t('legends.p1Peaks11')}{' '}
                    <span className="font-bold text-cream">{t('legends.p1Peaks12')}</span>.
                  </p>
                  <p className="text-lg font-medium text-cream sm:text-xl">
                    {t('legends.p2')}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Filozofia */}
            <FadeIn
              {...FADE_IN_PROPS}
              className="relative overflow-hidden rounded-xl border border-cream/20 bg-gradient-to-br from-forest-800/80 via-forest-800/60 to-earth-800/80 p-4 bg-forest-800/95 sm:rounded-2xl sm:p-6 md:p-8 lg:p-12 supports-[backdrop-filter]:backdrop-blur-sm"
            >
              <div className="relative space-y-4 text-base leading-relaxed text-cream/90 sm:space-y-5 sm:text-lg md:space-y-6">
                <p className="text-xl font-bold text-cream sm:text-2xl">
                  {t('philosophy.title')}
                </p>
                <div className="space-y-3 text-justify sm:space-y-4">
                <p>
                  {t('philosophy.p1')}{' '}
                  <span className="font-bold text-accent">{t('philosophy.p1Highlight1')}</span>
                  {t('philosophy.p1Middle')}{' '}
                  <span className="font-bold text-cream">
                    {t('philosophy.p1Highlight2')}
                  </span>
                  .
                </p>
                <p>
                  <span className="text-lg font-bold text-accent sm:text-xl">
                    SUDETY GRAND TRAIL
                  </span>{' '}
                  {t('philosophy.p2')}{' '}
                  <span className="font-bold text-cream">{t('philosophy.p2Highlight')}</span>
                  {t('philosophy.p2Rest')}
                </p>
                <p className="border-t border-cream/20 pt-3 text-lg italic text-cream/90 sm:pt-4 sm:text-xl">
                  {t('philosophy.p3')}
                </p>
                </div>
              </div>
            </FadeIn>

            {/* Zakończenie */}
            <FadeIn {...FADE_IN_PROPS} className="text-center">
              <div className="relative overflow-hidden rounded-xl border border-accent/40 bg-gradient-to-br from-accent/25 via-accent/20 to-earth-700/25 p-4 bg-accent/30 sm:rounded-2xl sm:p-6 md:p-8 lg:p-12 supports-[backdrop-filter]:backdrop-blur-sm">
                <div className="relative space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Zakończenie */}
                  <div>
                    <p className="mb-3 text-xl font-bold italic leading-relaxed text-cream sm:mb-4 sm:text-2xl md:text-3xl">
                      {t('ending.title')}
                    </p>
                    <p className="text-lg text-cream/90 sm:text-xl">
                      {t('ending.p1')}
                    </p>
                  </div>

                  {/* Cytat w ramce */}
                  <HighlightedBox>
                    {t('ending.quote')}
                  </HighlightedBox>

                  {/* Call to Action */}
                  <div className="border-t border-cream/20 pt-4 sm:pt-6">
                    <p className="mb-4 text-lg font-medium text-cream/90 sm:mb-6 sm:text-xl">
                      {t('ending.cta')}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                      <ActionButton
                        href={facebook.href}
                        external={facebook.external}
                        variant="primary"
                      >
                        <FacebookIcon className="size-4 sm:size-5" />
                        {t('ending.joinCommunity')}
                      </ActionButton>
                      <ActionButton
                        href={siteRoutes.trail}
                        external={false}
                        variant="secondary"
                      >
                        {t('ending.checkTrail')}
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
    className={`rounded-r border-l-4 border-accent bg-accent/10 py-2 pl-4 pr-4 text-base font-medium italic text-cream text-justify sm:py-3 sm:pl-6 sm:pr-6 sm:text-lg md:text-xl ${className}`}
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
