'use client';

import { ReactNode } from 'react';
import {
  motion,
  type MotionProps,
  type UseInViewOptions,
  type Variants,
} from 'framer-motion';

type DirectionType = 'up' | 'down' | 'left' | 'right';
type MarginType = UseInViewOptions['margin'];

interface MotionFadeProps
  extends Omit<
    MotionProps,
    'initial' | 'animate' | 'variants' | 'whileInView' | 'viewport'
  > {
  children: ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: DirectionType;
  inView?: boolean;
  inViewMargin?: MarginType;
}

const createVariants = (direction: DirectionType, offset: number): Variants => {
  const isHorizontal = direction === 'left' || direction === 'right';
  const axis = isHorizontal ? 'x' : 'y';
  const offsetValue =
    direction === 'right' || direction === 'down' ? -offset : offset;

  return {
    hidden: {
      [axis]: offsetValue,
      opacity: 0,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
    },
  };
};

export function FadeIn({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = 'down',
  inView = false,
  inViewMargin = '-100px',
  transition,
  ...props
}: MotionFadeProps) {
  const combinedVariants = variant || createVariants(direction, offset);

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
