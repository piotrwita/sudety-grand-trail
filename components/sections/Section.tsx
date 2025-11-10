import { cn } from '@/lib/utils';
import {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  Ref,
  forwardRef,
} from 'react';

interface SectionProps extends PropsWithChildren {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  style?: CSSProperties;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    { children, className, ariaLabel, ...rest }: SectionProps,
    ref: Ref<HTMLDivElement>
  ) => (
    <section
      ref={ref}
      className={cn(
        'full-width relative flex min-h-screen items-center justify-center overflow-hidden pt-12',
        className
      )}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </section>
  )
);
