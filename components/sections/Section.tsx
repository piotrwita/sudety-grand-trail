import { cn } from '@/lib/utils';
import {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  Ref,
  forwardRef,
} from 'react';

interface SectionProps extends PropsWithChildren {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  style?: CSSProperties;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    { children, className, ariaLabel, id, ...rest }: SectionProps,
    ref: Ref<HTMLDivElement>
  ) => (
    <section
      id={id}
      ref={ref}
      className={cn(
        'section-padding full-width relative flex items-center justify-center overflow-hidden',
        className
      )}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </section>
  )
);
