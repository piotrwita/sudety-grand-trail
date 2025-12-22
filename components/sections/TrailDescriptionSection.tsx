'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from '.';
import { useTranslations } from '@/lib/i18n-utils';
import { RightArrowIcon } from '@/components/icons/RightArrowIcon';
import { FadeIn } from '@/components/motion/FadeIn';
import { ScaleIn } from '@/components/motion/ScaleIn';

export const TrailDescriptionSection = () => {
  const { t, tArray } = useTranslations('trailDescription');
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Define opacity transitions for 3 images across the scroll range
  // Using wider windows (15-20%) for smoother cross-fades
  // Image 1: Visible until 15%, then gradual fade out until 35%
  const image1Opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [1, 1, 0],
    { ease: (t) => t * t } // Ease in for fade out
  );
  // Image 2: Gradual fade in 15-35%, visible until 80%, gradual fade out 80-95%
  const image2Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.35, 0.8, 0.95],
    [0, 1, 1, 0]
  );
  // Image 3: Gradual fade in 80-95%, visible until end
  const image3Opacity = useTransform(
    scrollYProgress,
    [0.8, 0.95, 1],
    [0, 1, 1],
    { ease: (t) => 1 - Math.pow(1 - t, 2) } // Ease out for fade in
  );

  const trailImages = [
    {
      src: '/images/mountains/NaRvEW.jpeg',
      opacity: image1Opacity,
      alt: 'Sudety Grand Trail - widok górski 1',
    },
    {
      src: '/images/mountains/3DRRSH.jpeg',
      opacity: image2Opacity,
      alt: 'Sudety Grand Trail - widok górski 2',
    },
    {
      src: '/images/mountains/c156.jpeg',
      opacity: image3Opacity,
      alt: 'Sudety Grand Trail - widok górski 3',
    },
  ];

  return (
    <Section ref={sectionRef} className="bg-forest-50" ariaLabel={t('title')}>
      <VintageMountainsBackground className="opacity-10" />
      <div className="fluid-container relative z-10">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <FadeIn
            direction="right"
            offset={50}
            duration={0.8}
            inView
            inViewMargin="50px"
            className="order-2 lg:order-1"
          >
            <h2 className="section-title mb-8 text-left">
              <span className="theme-trail-text-gradient">{t('title')}</span>
            </h2>

            <div className="my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

            <div className="space-y-6 leading-relaxed text-mountain-600">
              <p className="text-justify text-xl font-medium">
                <span className="font-bold text-forest-800">
                  SUDETY GRAND TRAIL
                </span>{' '}
                {t('p1.part1')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p1.part2')}
                </span>{' '}
                {t('p1.part3')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p1.part4')}
                </span>{' '}
                {t('p1.part5')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p1.part6')}
                </span>{' '}
                {t('p1.part7')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p1.part8')}
                </span>{' '}
                {t('p1.part9')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p1.part10')}
                </span>
                {t('p1.part11')}{' '}
                <span className="font-bold text-forest-800">
                  {t('p1.part12')}
                </span>
                {t('p1.part13')}
              </p>
              <p className="text-justify text-lg">
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
                {tArray('features.items').map(
                  (attraction: string, index: number) => (
                    <div key={index} className="flex items-center gap-4">
                      <RightArrowIcon className="size-4 flex-shrink-0 text-forest-600" />
                      <span className="text-base font-medium text-forest-700">
                        {attraction}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </FadeIn>

          {/* Image and Stats */}
          <FadeIn
            direction="left"
            offset={50}
            duration={0.8}
            delay={0.2}
            inView
            inViewMargin="50px"
            className="relative order-1 mt-8 lg:sticky lg:top-24 lg:order-2 lg:mt-0 lg:self-start"
          >
            <div className="card-vintage-noanim relative aspect-square overflow-hidden lg:aspect-auto lg:min-h-[550px]">
              {trailImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  style={{ opacity: image.opacity }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-forest-800/50 to-transparent" />

              {/* Vintage corner decorations - always on top */}
              <div className="absolute left-4 top-4 z-20 h-8 w-8 border-l-2 border-t-2 border-cream/60" />
              <div className="absolute right-4 top-4 z-20 h-8 w-8 border-r-2 border-t-2 border-cream/60" />
              <div className="absolute bottom-4 left-4 z-20 h-8 w-8 border-b-2 border-l-2 border-cream/60" />
              <div className="absolute bottom-4 right-4 z-20 h-8 w-8 border-b-2 border-r-2 border-cream/60" />
            </div>

            {/* Floating stats - always on top */}
            <ScaleIn
              duration={0.6}
              delay={0.6}
              inView
              initialScale={0.8}
              className="absolute -bottom-4 -left-4 z-20 rounded-xl border border-forest-200/50 bg-gradient-to-br from-white via-cream to-forest-50 p-3 text-center shadow-xl backdrop-blur-sm lg:-bottom-8 lg:-left-8 lg:rounded-2xl lg:p-6"
            >
              <div className="bg-gradient-to-br from-forest-600 to-forest-800 bg-clip-text text-2xl font-black text-transparent lg:text-4xl">
                23
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wide text-forest-600 lg:text-sm">
                {t('stats.ranges')}
              </div>
            </ScaleIn>

            <ScaleIn
              duration={0.6}
              delay={0.8}
              inView
              initialScale={0.8}
              className="absolute -right-4 -top-4 z-20 rounded-xl border border-forest-200/50 bg-gradient-to-br from-white via-cream to-forest-50 p-3 text-center shadow-xl backdrop-blur-sm lg:-right-8 lg:-top-8 lg:rounded-2xl lg:p-6"
            >
              <div className="bg-gradient-to-br from-forest-600 to-forest-800 bg-clip-text text-2xl font-black text-transparent lg:text-4xl">
                900
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wide text-forest-600 lg:text-sm">
                {t('stats.kilometers')}
              </div>
            </ScaleIn>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
