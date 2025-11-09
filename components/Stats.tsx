import { cn } from '@/lib/utils';

interface StatsProps {
  value: string;
  label: string;
  ariaLabel: string;
  valueClassName?: string;
  labelClassName?: string;
  containerClassName?: string;
}

export const Stats = ({
  value,
  label,
  ariaLabel,
  valueClassName,
  labelClassName,
  containerClassName,
}: StatsProps) => (
  <div
    className={cn(
      'group cursor-default text-center transition-transform duration-300 focus-within:scale-105 focus-within:rounded-lg focus-within:px-2 focus-within:py-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-cream/50 hover:scale-105',
      containerClassName
    )}
    aria-label={ariaLabel}
  >
    <div
      className={cn(
        'stats-number text-cream transition-colors duration-300 group-hover:text-accent',
        valueClassName
      )}
    >
      {value}
    </div>
    <div
      className={cn(
        'text-xs font-bold uppercase tracking-wide text-cream/70 sm:text-sm',
        labelClassName
      )}
    >
      {label}
    </div>
  </div>
);

export const StatsSeparator = ({ className }: { className?: string }) => (
  <div
    className={cn('h-8 w-px bg-cream/20 sm:h-10 md:h-12', className)}
    aria-hidden="true"
  />
);
