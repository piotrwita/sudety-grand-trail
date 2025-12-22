'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { UpArrowIcon } from '@/components/icons';
import { useTranslations } from '@/lib/i18n-utils';
import { useState, useEffect, useRef } from 'react';

const SCROLL_THRESHOLD = 500;
const HIDE_DELAY = 150; // ms delay before hiding to prevent flickering

export const ScrollToTopButton = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > SCROLL_THRESHOLD;
    }
    return false;
  });
  const { t } = useTranslations('scrollToTop');
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const shouldBeVisible = latest > SCROLL_THRESHOLD;

    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    if (shouldBeVisible) {
      // Show immediately when scrolling down past threshold
      setIsVisible(true);
    } else {
      // Delay hiding when scrolling up to prevent flickering during fast scrolling
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        hideTimeoutRef.current = null;
      }, HIDE_DELAY);
    }
  });

  // Check initial scroll position on mount
  useEffect(() => {
    setIsVisible(window.scrollY > SCROLL_THRESHOLD);

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
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
          className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent via-accent to-accent/90 text-cream shadow-vintage-lg transition-all duration-300 hover:scale-110 hover:shadow-vintage-xl focus:outline-none focus:ring-4 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-forest-800 md:bottom-8 md:right-8 md:h-16 md:w-16"
        >
          <UpArrowIcon className="size-6 md:size-7" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

