'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const MotivationSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest-800 py-32">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, scale }}
      >
        <Image
          src="/images/vintage-mountains.svg"
          alt="Mountain sunset"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-800/90 via-forest-700/80 to-earth-800/90" />
      </motion.div>

      {/* Content */}
      <div className="fluid-container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Vintage Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 inline-flex h-24 w-24 items-center justify-center rounded-full border-4 border-cream/20 bg-gradient-to-br from-accent to-earth-700 shadow-vintage-xl"
            >
              <svg
                className="h-10 w-10 text-cream"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-title mb-8 text-3xl leading-relaxed md:text-4xl lg:text-5xl"
            >
              "To szlak stworzony z myślą o tych, którzy chcą się zgubić, by się
              odnaleźć"
            </motion.blockquote>

            <div className="vintage-divider bg-gradient-to-r from-accent to-cream" />

            {/* Author */}
            <motion.cite
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-medium not-italic text-cream/80"
            >
              "W przestrzeni, w rytmie marszu, w samych sobie." — Twórca Sudety
              Grand Trail
            </motion.cite>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 border-t border-cream/20 pt-12"
          >
            <p className="mb-8 text-center text-xl font-medium text-cream/90">
              Gotowy na nieprzewidywalną przygodę przez 24 pasma Sudetów?
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="https://www.facebook.com/SudetyGrandTrail"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 py-4 text-lg"
              >
                Dołącz do Społeczności
              </a>
              <a
                href="https://mapy.com/s/barusofola"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-cream/60 px-10 py-4 text-lg text-cream/90 hover:bg-cream/90 hover:text-forest-800"
              >
                Sprawdź Trasę
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vintage elements */}
      <div className="absolute left-10 top-20 h-32 w-32 animate-pulse rounded-full bg-accent/10 blur-2xl" />
      <div
        className="absolute bottom-20 right-10 h-24 w-24 animate-pulse rounded-full bg-cream/10 blur-xl"
        style={{ animationDelay: '1s' }}
      />

      {/* Corner decorative elements */}
      <div className="absolute left-8 top-8 h-16 w-16 border-l-4 border-t-4 border-cream/20" />
      <div className="absolute right-8 top-8 h-16 w-16 border-r-4 border-t-4 border-cream/20" />
      <div className="absolute bottom-8 left-8 h-16 w-16 border-b-4 border-l-4 border-cream/20" />
      <div className="absolute bottom-8 right-8 h-16 w-16 border-b-4 border-r-4 border-cream/20" />
    </section>
  );
};

export default MotivationSection;
