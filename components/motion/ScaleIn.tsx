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

interface ScaleInProps extends MotionProps {
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
  ...props
}: ScaleInProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const combinedVariants =
    variant ||
    createVariants(initialScale, finalScale, initialOpacity, finalOpacity);

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
