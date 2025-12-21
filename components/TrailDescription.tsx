'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from './sections';
import { useTranslations } from '@/lib/i18n-utils';

const TrailDescription = () => {
  const { t, tArray } = useTranslations('trailDescription');
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Scroll progress based on image container visibility in viewport
  // Effect starts when image enters viewport and ends before footer
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end 0.6'],
  });

  // Transform scroll progress to image opacity
  // Image 1: visible 0-68%, smooth fade out 68-74%
  const image1Opacity = useTransform(
    scrollYProgress,
    [0, 0.68, 0.74],
    [1, 1, 0]
  );

  // Image 2: fade in 68-74% (synced with img1 fade out), visible 74-88%, fade out 88-94%
  const image2Opacity = useTransform(
    scrollYProgress,
    [0.68, 0.74, 0.88, 0.94],
    [0, 1, 1, 0]
  );

  // Image 3: fade in 88-94% (synced with img2 fade out), visible 94-100%
  const image3Opacity = useTransform(
    scrollYProgress,
    [0.88, 0.94, 1],
    [0, 1, 1]
  );

  return (
    <Section ref={sectionRef} className="bg-forest-50" ariaLabel={t('title')}>
      <VintageMountainsBackground className="opacity-10" />
      <div className="fluid-container relative z-10">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="section-title mb-8 text-left">
              <span className="theme-trail-text-gradient">{t('title')}</span>
            </h2>

            <div className="my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

            <div className="space-y-6 leading-relaxed text-mountain-600">
              <p className="text-xl font-medium text-justify">
                <span className="font-bold text-forest-800">
                  SUDETY GRAND TRAIL
                </span>{' '}
                {t('p1.part1')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p1.part2')}
                </span>{' '}
                {t('p1.part3')}{' '}
                <span className="font-bold text-forest-800">{t('p1.part4')}</span>{' '}
                {t('p1.part5')}{' '}
                <span className="font-bold text-forest-800">{t('p1.part6')}</span>{' '}
                {t('p1.part7')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p1.part8')}
                </span>{' '}
                {t('p1.part9')}{' '}
                <span className="font-bold text-forest-800">{t('p1.part10')}</span>
                {t('p1.part11')}{' '}
                <span className="font-bold text-forest-800">{t('p1.part12')}</span>
                {t('p1.part13')}
              </p>
              <p className="text-lg text-justify">
                {t('p2.part1')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p2.highlight')}
                </span>
              </p>
            </div>

            {/* Trail Features */}
            <div className="mt-12">
              <h3 className="section-title mb-6 text-left text-xl">
                {t('features.title')}
              </h3>
              <div className="space-y-4">
                {tArray('features.items').map((attraction: string, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <svg
                      className="size-4 flex-shrink-0 text-forest-600"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 2l4 4-4 4" />
                    </svg>
                    <span className="text-base font-medium text-forest-700">
                      {attraction}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 relative mt-8 lg:order-2 lg:sticky lg:top-24 lg:mt-0 lg:self-start"
          >
            <div
              ref={imageContainerRef}
              className="card-vintage relative aspect-square overflow-hidden lg:min-h-[550px] lg:aspect-auto"
            >
              {/* Image 1 - First image */}
              <motion.div
                className="absolute inset-0"
                style={{ opacity: image1Opacity }}
              >
                <Image
                  src="/images/mountains/NaRvEW.jpeg"
                  alt="Sudety Grand Trail - widok górski"
                  width={600}
                  height={550}
                  className="h-full w-full object-cover lg:min-h-[550px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </motion.div>

              {/* Image 2 - Second image */}
              <motion.div
                className="absolute inset-0"
                style={{ opacity: image2Opacity }}
              >
                <Image
                  src="/images/mountains/3DRRSH.jpeg"
                  alt="Sudety Grand Trail - widok górski"
                  width={600}
                  height={550}
                  className="h-full w-full object-cover lg:min-h-[550px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </motion.div>

              {/* Image 3 - Third image */}
              <motion.div
                className="absolute inset-0"
                style={{ opacity: image3Opacity }}
              >
                <Image
                  src="/images/mountains/c156.jpeg"
                  alt="Sudety Grand Trail - widok górski"
                  width={600}
                  height={550}
                  className="h-full w-full object-cover lg:min-h-[550px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </motion.div>

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-forest-800/50 to-transparent" />

              {/* Vintage corner decorations - always on top */}
              <div className="absolute left-4 top-4 z-20 h-8 w-8 border-l-2 border-t-2 border-cream/60" />
              <div className="absolute right-4 top-4 z-20 h-8 w-8 border-r-2 border-t-2 border-cream/60" />
              <div className="absolute bottom-4 left-4 z-20 h-8 w-8 border-b-2 border-l-2 border-cream/60" />
              <div className="absolute bottom-4 right-4 z-20 h-8 w-8 border-b-2 border-r-2 border-cream/60" />
            </div>

            {/* Floating stats - always on top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 z-20 rounded-xl border border-forest-200/50 bg-gradient-to-br from-white via-cream to-forest-50 p-3 text-center shadow-xl backdrop-blur-sm lg:-bottom-8 lg:-left-8 lg:rounded-2xl lg:p-6"
            >
              <div className="bg-gradient-to-br from-forest-600 to-forest-800 bg-clip-text text-2xl font-black text-transparent lg:text-4xl">
                23
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wide text-forest-600 lg:text-sm">
                {t('stats.ranges')}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -right-4 -top-4 z-20 rounded-xl border border-forest-200/50 bg-gradient-to-br from-white via-cream to-forest-50 p-3 text-center shadow-xl backdrop-blur-sm lg:-right-8 lg:-top-8 lg:rounded-2xl lg:p-6"
            >
              <div className="bg-gradient-to-br from-forest-600 to-forest-800 bg-clip-text text-2xl font-black text-transparent lg:text-4xl">
                900
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wide text-forest-600 lg:text-sm">
                {t('stats.kilometers')}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default TrailDescription;
