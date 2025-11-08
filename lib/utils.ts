import type { ClassValue } from 'clsx';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for combining CSS class names with Tailwind conflict resolution.
 * Combines clsx (conditional classes) with tailwind-merge (deduplicates conflicting Tailwind classes).
 * @example
 * cn('px-2 py-4', isActive && 'bg-blue-500') // conditional classes
 * cn('px-2 px-4') // returns 'px-4' (resolves conflicts)
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
