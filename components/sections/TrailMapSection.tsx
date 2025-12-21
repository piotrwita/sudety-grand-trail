'use client';

import { FadeIn } from '@/components/motion/FadeIn';
import { ScaleIn } from '@/components/motion/ScaleIn';
import { MapIcon, DownloadIcon } from '@/components/icons';
import Link from 'next/link';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { siteConfig } from '@/config/site';
import { InteractiveIframe } from '@/components/InteractiveIframe';
import { useTranslations } from '@/lib/i18n-utils';

export const TrailMapSection = () => {
  const { t } = useTranslations('trailMap');
  const { t: tGlobal } = useTranslations();
  
  return (
    <Section
      ariaLabel={t('title')}
      className="min-h-0 bg-gradient-to-br from-forest-50 to-cream"
    >
      <VintageMountainsBackground className="opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest-200/30 via-transparent to-forest-300/30" />
      <div className="fluid-container relative z-10">
        <SectionHeader
          title={t('title')}
          icon={<MapIcon className="size-6 text-cream/80" />}
          variant="default"
        />

        <FadeIn
          direction="down"
          offset={30}
          duration={0.8}
          delay={0.3}
          inView={true}
          className="mx-auto mb-8 max-w-5xl text-center"
        >
          <p className="text-fluid-lg font-medium leading-relaxed text-mountain-600">
            {t('description')}
          </p>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.6}
          delay={0.3}
          inView={true}
          className="mb-8"
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={siteConfig.links.map.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-forest-400/50 bg-transparent px-5 py-2.5 font-bold uppercase tracking-wide text-forest-600 transition-all duration-300 hover:scale-105 hover:bg-forest-100/50 sm:w-auto"
            >
              <MapIcon className="size-5" />
              {t('openMap')}
            </Link>
            <Link
              href="https://pro.mapy.com/mapybox-export/v1/path/gpx?id=688fa97f662a3fae890f5f13&rand=0.7002222504750357"
              download="sudety-grand-trail.gpx"
              className="btn-primary flex w-full items-center justify-center gap-2 px-6 py-3 sm:w-auto"
            >
              <DownloadIcon className="size-5" />
              {t('downloadGpx')}
            </Link>
          </div>
        </FadeIn>

        <ScaleIn
          initialScale={0.95}
          finalScale={1}
          duration={0.8}
          delay={0.2}
          inView={true}
          className="relative"
        >
          {/* Map Container */}
          <InteractiveIframe
            src="https://mapy.com/s/barusofola"
            className="card-vintage-noanim"
            title="Grand Trail Sudety Map"
            overlayTitle={t('mapTitle')}
            overlayDescription={tGlobal('interactiveMap.clickToUse')}
            icon={<MapIcon className="size-8 sm:size-10" />}
            overlayAriaLabel={t('mapAriaLabel')}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </ScaleIn>

        {/* Modest Summary Section */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.6}
          delay={0.3}
          inView={true}
          className="mt-12"
        >
          <div className="mx-auto max-w-4xl space-y-6">
            {/* Summary Stats - Simple List */}
            <div className="rounded-lg border border-forest-300/30 bg-cream/50 p-6 backdrop-blur-sm sm:p-8">
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:gap-6">
                <div>
                  <p className="text-2xl font-bold text-forest-700 sm:text-3xl">
                    900 km
                  </p>
                  <p className="mt-1 text-sm text-mountain-600">
                    {t('stats.length')}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-forest-700 sm:text-3xl">
                    30 000 m
                  </p>
                  <p className="mt-1 text-sm text-mountain-600">
                    {t('stats.elevation')}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-forest-700 sm:text-3xl">
                    1602 m
                  </p>
                  <p className="mt-1 text-sm text-mountain-600">
                    {t('stats.highestPeak')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
