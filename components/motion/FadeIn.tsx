'use client';

import { ReactNode, useRef } from 'react';
import {
  motion,
  useInView,
  type MotionProps,
  type UseInViewOptions,
  type Variants,
} from 'framer-motion';

type MarginType = UseInViewOptions['margin'];

interface MotionFadeProps extends MotionProps {
  children: ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  inView?: boolean;
  inViewMargin?: MarginType;
}

const createVariants = (
  direction: 'up' | 'down' | 'left' | 'right',
  offset: number
): Variants => {
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
  ...props
}: MotionFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const combinedVariants = variant || createVariants(direction, offset);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: 'easeOut',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
