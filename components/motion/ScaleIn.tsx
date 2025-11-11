'use client';

import { ReactNode } from 'react';
import {
  motion,
  type MotionProps,
  type UseInViewOptions,
  type Variants,
} from 'framer-motion';

type MarginType = UseInViewOptions['margin'];

interface ScaleInProps
  extends Omit<
    MotionProps,
    'initial' | 'animate' | 'variants' | 'whileInView' | 'viewport'
  > {
  children: ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  initialScale?: number;
  finalScale?: number;
  initialOpacity?: number;
  finalOpacity?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
}

const createVariants = (
  initialScale: number,
  finalScale: number,
  initialOpacity: number,
  finalOpacity: number
): Variants => {
  return {
    hidden: {
      scale: initialScale,
      opacity: initialOpacity,
    },
    visible: {
      scale: finalScale,
      opacity: finalOpacity,
    },
  };
};

export function ScaleIn({
  children,
  className,
  variant,
  duration = 0.8,
  delay = 0,
  initialScale = 0.5,
  finalScale = 1,
  initialOpacity = 0,
  finalOpacity = 1,
  inView = false,
  inViewMargin = '-100px',
  transition,
  ...props
}: ScaleInProps) {
  const combinedVariants =
    variant ||
    createVariants(initialScale, finalScale, initialOpacity, finalOpacity);

  // Default animation transition (for entrance)
  const animationTransition = {
    delay: 0.04 + delay,
    duration,
    ease: 'easeOut',
    ...transition,
  };

  // Combine properties based on inView mode
  const motionProps = {
    initial: 'hidden' as const,
    variants: combinedVariants,
    transition: animationTransition,
    className,
    ...props,
    ...(inView
      ? {
          whileInView: 'visible' as const,
          viewport: { once: true, margin: inViewMargin },
        }
      : {
          animate: 'visible' as const,
        }),
  };

  return <motion.div {...motionProps}>{children}</motion.div>;
}
