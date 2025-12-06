'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/motion';

export const ScrollIndicator = () => (
  <FadeIn
    duration={0.6}
    delay={1.4}
    offset={0}
    className="absolute bottom-16 left-1/2 -translate-x-1/2 transform lg:bottom-20"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="flex h-10 w-6 justify-center rounded-full border-2 border-cream/40"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-2 h-3 w-1 rounded-full bg-cream/60"
      />
    </motion.div>
  </FadeIn>
);

