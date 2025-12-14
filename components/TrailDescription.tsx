'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';

const TrailDescription = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress based on image container visibility in viewport
  // Effect starts when image enters viewport and ends before footer
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end 0.6'],
  });

  // Section-level progress so parallax ends with the text content
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
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
  // Faster parallax slide for the sticky image column, ending with the section
  const imageParallaxY = useTransform(sectionProgress, [0, 1], [0, 240]);

  return (
    <section ref={sectionRef} className="section-padding bg-forest-50 relative">
      <VintageMountainsBackground className="opacity-10" />
      <div className="fluid-container relative z-10">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-8 text-left">
              <span className="theme-trail-text-gradient">O Szlaku</span>
            </h2>

            <div className="my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

            <div className="space-y-6 leading-relaxed text-mountain-600">
              <p className="text-xl font-medium">
                <span className="font-bold text-forest-800">
                  SUDETY GRAN TRAIL
                </span>{' '}
                – pierwszy szlak umożliwiający zdobycie najwyższego szczytu
                każdego z {' '}
                <span className="font-bold text-forest-800">
                 23 pasm górskich Sudetów
                </span> {' '}  w jednej trasie. {' '}
                <span className="font-bold text-forest-800">
                  900 km
                </span> {' '}
                 długości, około {' '}
                <span className="font-bold text-forest-800">
                 30 000 m
                </span> {' '} przewyższeń przez {' '}
                <span className="font-bold text-forest-800">
                 Polskę, Czechy i Niemcy
                </span> {' '}. Początek w {' '}
                <span className="font-bold text-forest-800">
                Jarnołtówku
                </span> {' '}
                , finał pod{' '}
                <span className="font-bold text-forest-800">
                Ślężą
                </span> {' '}, górą o duchowym znaczeniu.
              </p>
              <p className="text-lg">
                Od najwyższej Śnieżki (1603m) przez Pradziada (1491m), Śnieżnik
                (1426m), Wielką Sowę (1015m), skalny labirynt Szczelińca
                Wielkiego (919m), graniczną Biskupią Kopę (890m), aż po
                najniższy Lázek (714m) i mistyczną Ślężę (718m).{' '}
                <span className="font-bold text-forest-800">
                  To kompletne podbicie Sudetów!
                </span>
              </p>
            </div>

            {/* Trail Features */}
            <div className="mt-12">
              <h3 className="section-title mb-6 text-left text-xl">
                Główne Atrakcje:
              </h3>
              <div className="space-y-4">
                {[
                  '16 szczytów Korony Gór Polski',
                  'Legendarny finał pod Ślężą',
                  'Parki narodowe i rezerwaty',
                  'Zamki i ruiny',
                  'Schroniska z klimatem',
                  'Wieże widokowe',
                  'Zabytkowe kopalnie i sztolnie',
                  'Niezapomniane widoki',
                  'Unikatowe formacje skalne',
                  'Trójstyk granic Polska-Czechy-Niemcy',
                  'Miejsca związane z legendami i mitami Sudetów',
                ].map((attraction, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <svg className="size-4 flex-shrink-0 text-forest-600" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0 lg:sticky lg:top-24 lg:self-start"
          >
            <div ref={imageContainerRef} className="card-vintage overflow-hidden min-h-[550px] relative">
              {/* Image 1 - First image */}
              <motion.div
                className="absolute inset-0"
                style={{ opacity: image1Opacity }}
              >
                <Image
                  src="https://d34-a.sdn.cz/d_34/c_img_H_K/NaRvEW.jpeg?fl=res,2200,2200,1"
                  alt="Sudety Grand Trail - widok górski"
                  width={600}
                  height={550}
                  className="h-full w-full object-cover min-h-[550px]"
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
                  src="https://d34-a.sdn.cz/d_34/c_img_QP_y/3DRRSH.jpeg?fl=res,2200,2200,1"
                  alt="Sudety Grand Trail - widok górski"
                  width={600}
                  height={550}
                  className="h-full w-full object-cover min-h-[550px]"
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
                  src="https://d34-a.sdn.cz/d_34/c_img_m3_A/kPX8laQTIipeEeWM1acO/c156.jpeg?fl=res,2200,2200,1"
                  alt="Sudety Grand Trail - widok górski"
                  width={600}
                  height={550}
                  className="h-full w-full object-cover min-h-[550px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-forest-800/50 to-transparent z-10" />

              {/* Vintage corner decorations - always on top */}
              <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-cream/60 z-20" />
              <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-cream/60 z-20" />
              <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-cream/60 z-20" />
              <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-cream/60 z-20" />
            </div>

            {/* Floating stats - always on top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 z-20 rounded-2xl border border-forest-200/50 bg-gradient-to-br from-white via-cream to-forest-50 p-6 text-center shadow-xl backdrop-blur-sm"
            >
              <div className="bg-gradient-to-br from-forest-600 to-forest-800 bg-clip-text text-4xl font-black text-transparent">23</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wide text-forest-600">
                Pasma
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -right-8 -top-8 z-20 rounded-2xl border border-forest-200/50 bg-gradient-to-br from-white via-cream to-forest-50 p-6 text-center shadow-xl backdrop-blur-sm"
            >
              <div className="bg-gradient-to-br from-forest-600 to-forest-800 bg-clip-text text-4xl font-black text-transparent">900</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wide text-forest-600">
                Kilometrów
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrailDescription;
