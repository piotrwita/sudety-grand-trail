'use client';

import Link from 'next/link';
import { ClockIcon, FlagIcon, LocationIcon } from '@/components/icons';
import { InteractiveIframe } from '@/components/InteractiveIframe';
import { FadeIn, ScaleIn } from '@/components/motion';
import { Section } from './Section';
import { useTranslations } from '@/lib/i18n-utils';

export const LiveTrackingSection = () => {
  const { t } = useTranslations('liveTracking');
  const { t: tGlobal } = useTranslations();

  return (
    <Section
      className="bg-cream"
      ariaLabel="Live Tracking - Sudety Grand Trail"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-forest-50 to-cream" />
      <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-10" />

      <div className="fluid-container relative z-10">
        <FadeIn
          inView
          inViewMargin="100px"
          offset={50}
          direction="up"
          transition={{ duration: 0.8, delay: 0 }}
          className="mb-16 text-center"
        >
          {/* Live Badge */}
          <ScaleIn
            inView
            inViewMargin="0px"
            initialScale={0}
            finalScale={1}
            initialOpacity={1}
            finalOpacity={1}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center space-x-3 rounded-full border-2 border-orange-400 bg-orange-500/20 px-6 py-3 backdrop-blur-sm"
          >
            <div className="h-3 w-3 animate-pulse rounded-full bg-orange-500" />
            <span className="text-sm font-bold uppercase tracking-wide text-orange-600">
              {t('badge')}
            </span>
          </ScaleIn>

          <FadeIn
            inView
            inViewMargin="0px"
            offset={30}
            direction="up"
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-title mb-6 text-forest-800"
          >
            Live <span className="theme-live-text-gradient">Tracking</span>
          </FadeIn>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          <FadeIn
            inView
            inViewMargin="0px"
            offset={30}
            direction="up"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-5xl text-xl font-medium leading-relaxed text-mountain-600"
          >
            {t('description')}{' '}
            <Link
              href="https://poltrax.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-500 underline decoration-2 underline-offset-2 transition-colors hover:text-orange-600"
            >
              {t('poltrax')}
            </Link>{' '}
            {t('descriptionEnd')}
            <br />
            {t('descriptionLine2')}
          </FadeIn>
        </FadeIn>

        {/* Live Map Container */}
        <FadeIn
          inView
          inViewMargin="50px"
          offset={20}
          direction="up"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <InteractiveIframe
            src="https://poltrax.live/sgt"
            className="card-vintage-noanim"
            title="Sudety Grand Trail - Live Tracking"
            overlayTitle={t('mapTitle')}
            overlayDescription={tGlobal('interactiveMap.clickToUse')}
            icon={<LocationIcon className="size-8 sm:size-10" />}
            frameBorder="0"
          />

          {/* Quick Info Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FadeIn
              inView
              inViewMargin="0px"
              offset={30}
              direction="up"
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-orange-200/60 bg-gradient-to-br from-white via-orange-50/30 to-white p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/80 hover:shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon container with enhanced styling */}
              <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100/80 transition-all duration-300 group-hover:scale-110">
                <LocationIcon className="size-6 text-orange-600" />
              </div>

              <h3 className="relative mb-1.5 text-lg font-bold text-orange-800">
                {t('cards.position.title')}
              </h3>
              <p className="relative text-sm leading-relaxed text-mountain-600">
                {t('cards.position.description')}
              </p>

              {/* Decorative bottom border */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 group-hover:scale-x-100" />
            </FadeIn>

            <FadeIn
              inView
              inViewMargin="0px"
              offset={30}
              direction="up"
              transition={{ duration: 0.6, delay: 0.8 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-orange-200/60 bg-gradient-to-br from-white via-orange-50/30 to-white p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/80 hover:shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon container with enhanced styling */}
              <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100/80 transition-all duration-300 group-hover:scale-110">
                <ClockIcon className="size-6 text-orange-600" />
              </div>

              <h3 className="relative mb-1.5 text-lg font-bold text-orange-800">
                {t('cards.timeLimit.title')}
              </h3>
              <p className="relative text-sm leading-relaxed text-mountain-600">
                {t('cards.timeLimit.description')}
              </p>

              {/* Decorative bottom border */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 group-hover:scale-x-100" />
            </FadeIn>

            <FadeIn
              inView
              inViewMargin="0px"
              offset={30}
              direction="up"
              transition={{ duration: 0.6, delay: 0.9 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-orange-200/60 bg-gradient-to-br from-white via-orange-50/30 to-white p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/80 hover:shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon container with enhanced styling */}
              <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100/80 transition-all duration-300 group-hover:scale-110">
                <FlagIcon className="size-6 text-orange-600" />
              </div>

              <h3 className="relative mb-1.5 text-lg font-bold text-orange-800">
                {t('cards.stages.title')}
              </h3>
              <p className="relative text-sm leading-relaxed text-mountain-600">
                {t('cards.stages.description')}
              </p>

              {/* Decorative bottom border */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 group-hover:scale-x-100" />
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
