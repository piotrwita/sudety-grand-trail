'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface SectionHeaderProps {
  title: string;
  icon: ReactNode;
  variant?:
    | 'default' // accent to earth-700 (default)
    | 'light' // accent to yellow-500 (for dark backgrounds)
    | 'forest' // forest-700 to earth-700
    | 'forest-dark' // forest-600 to earth-700
    | 'crown'; // yellow-400 to yellow-600 (for Korona Sudetów)
}

const transition = {
  duration: 0.6,
  delay: 0.24, // 0.2 delay + 0.04 internal offset from original FadeIn/ScaleIn
  ease: 'easeOut',
};

const separatorTransition = {
  duration: 0.8,
  delay: 0.4,
  ease: 'easeOut',
};

const badgeVariants = {
  default: {
    badge:
      'section-icon-badge size-14 shrink-0 bg-gradient-to-br from-accent to-earth-700',
    separator:
      'mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent',
    textGradient: 'text-gradient',
  },
  light: {
    badge:
      'section-icon-badge-light size-14 shrink-0 bg-gradient-to-br from-accent to-yellow-500',
    separator:
      'mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/60 to-transparent',
    textGradient: 'text-gradient-light',
  },
  forest: {
    badge:
      'section-icon-badge size-14 shrink-0 bg-gradient-to-br from-accent to-earth-700',
    separator:
      'mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent',
    textGradient: 'text-gradient',
  },
  'forest-dark': {
    badge:
      'section-icon-badge size-14 shrink-0 bg-gradient-to-br from-forest-600 to-earth-700',
    separator:
      'mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent',
    textGradient: 'text-gradient',
  },
  crown: {
    badge:
      'section-icon-badge size-14 shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-600',
    separator:
      'mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent',
    textGradient: 'text-gradient',
  },
};

export const SectionHeader = ({
  title,
  icon,
  variant = 'default',
}: SectionHeaderProps) => {
  const isMobile = useIsMobile();
  const {
    badge: badgeClassName,
    separator: separatorClassName,
    textGradient: textGradientClassName,
  } = badgeVariants[variant];

  // Adjust viewport margin for mobile - smaller margin so animation triggers when badge is more visible
  const viewport = {
    once: true,
    margin: isMobile ? '-20px' : '-100px',
  };

  return (
    <>
      <div className="mb-6 mt-8 flex items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={transition}
          className={`motion ${badgeClassName}`}
        >
          {icon}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={transition}
          className="section-title motion text-left"
        >
          <span className={textGradientClassName}>{title}</span>
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={viewport}
        transition={separatorTransition}
        className={`motion ${separatorClassName}`}
      />
    </>
  );
};
