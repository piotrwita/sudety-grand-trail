'use client';

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { UpArrowIcon } from '@/components/icons';
import { useTranslations } from '@/lib/i18n-utils';
import { useState, useLayoutEffect } from 'react';

const SCROLL_THRESHOLD = 500;

export const ScrollToTopButton = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslations('scrollToTop');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > SCROLL_THRESHOLD);
  });

  useLayoutEffect(() => {
    setIsVisible(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          onClick={scrollToTop}
          aria-label={t('ariaLabel')}
          className="group fixed bottom-6 right-6 z-[90] size-14 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-0 focus-visible:rounded-full md:bottom-8 md:right-8 md:size-16"
        >
          <div className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-accent via-accent to-accent/90 text-cream shadow-vintage-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-vintage-xl">
            <UpArrowIcon className="size-6 md:size-7" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
