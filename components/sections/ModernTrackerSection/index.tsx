'use client';

import { FadeIn } from '@/components/motion';
import { Section } from '@/components/sections/Section';
import { sectionIds } from '@/config/section-ids';
import { CheckIcon } from '@/components/icons';
import { sendTrackerRequestEmail } from '@/actions/send-email';
import { TrackerRequestForm } from './TrackerRequestForm';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/lib/i18n-utils';

export const ModernTrackerSection = () => {
  const { t, tArray } = useTranslations('modernTracker');

  return (
    <Section
      id={sectionIds.trackerForm}
      ariaLabel={t('badge')}
      className="bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="fluid-container">
        {/* Header */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.8}
          inView
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            {t('badge')}
          </div>

          <h2 className="section-title mb-6 text-slate-900">
            {t('title')}{' '}
            <span className="theme-live-text-gradient">
              {t('titleHighlight')}
            </span>
          </h2>
        </FadeIn>

        {/* Main Content */}
        <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
          {/* Left - Text Content */}
          <FadeIn
            direction="right"
            offset={30}
            duration={0.8}
            delay={0.2}
            inView
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <Link
                  href="https://poltrax.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block h-12 w-auto transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/images/poltrax-logo.png"
                    alt="Poltrax Logo"
                    width={250}
                    height={48}
                    className="h-12 w-auto object-contain"
                    unoptimized
                  />
                </Link>
                <p className="text-slate-500">{t('partner')}</p>
              </div>

              <p className="text-justify text-lg leading-relaxed text-slate-700">
                <strong className="text-accent">
                  {t('description.part1')}
                </strong>
                {t('description.part2')}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {tArray('features').map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-sm">
                    <CheckIcon className="size-4 text-white" />
                  </div>
                  <span className="font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right - Form in Box */}
          <FadeIn
            direction="left"
            offset={30}
            duration={0.8}
            delay={0.4}
            inView={true}
            className="relative"
          >
            <TrackerRequestForm onSubmitAction={sendTrackerRequestEmail} />
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
