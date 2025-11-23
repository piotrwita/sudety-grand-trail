'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FeatureCards from '../FeatureCards';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const WhyChooseSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-mountain-100 to-cream">
      {/* Delikatne tło w stylu szlaku górskiego */}
      <div className="absolute inset-0 opacity-[0.08]">
        <Image
          src="/images/vintage-mountains.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      {/* Subtelny gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest-200/30 via-transparent to-earth-200/30" />

      <div className="fluid-container relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mb-8"
        >
          <motion.div variants={fadeInUp} className="relative mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-icon-badge mb-8 bg-gradient-to-br from-forest-700 to-earth-700"
            >
              {/* Żarówka - ikona pomysłu/inspiracji */}
              <svg
                className="h-8 w-8 text-cream/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </motion.div>
            <motion.h2 className="section-title mb-6">
              <span className="text-gradient">Dlaczego ten szlak</span>
            </motion.h2>
            <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />
          </motion.div>
        </motion.div>

        <FeatureCards />
      </div>
    </section>
  );
};

export default WhyChooseSection;
