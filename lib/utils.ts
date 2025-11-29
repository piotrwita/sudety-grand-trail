import React from 'react';
import type { ClassValue } from 'clsx';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Check if code is running on the server (SSR).
 * Useful for skipping browser-only validation or APIs during SSR.
 * @example
 * if (isServer()) return true; // Skip validation during SSR
 */
export const isServer = () => typeof window === 'undefined';

/**
 * Check if code is running in the browser (client-side).
 * @example
 * if (isClient()) { window.scrollTo(0, 0); }
 */
export const isClient = () => typeof window !== 'undefined';

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
/**
 * Utility for merging multiple refs into a single ref callback.
 * @example
 * const ref = useRef(null);
 * const mergedRef = mergeRefs(ref, ref2, ref3);
 * <div ref={mergedRef} />
 */
export function mergeRefs<T = any>(
  ...refs: (React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null)[]
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
