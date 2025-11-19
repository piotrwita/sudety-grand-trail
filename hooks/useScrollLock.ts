'use client';

import {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';

type UseScrollLockOptions = {
  autoLock?: boolean;
  lockTarget?: HTMLElement | string;
  widthReflow?: boolean;
};

type UseScrollLockReturn = {
  isLocked: boolean;
  lock: () => void;
  unlock: () => void;
};

type OriginalStyle = {
  overflow: CSSStyleDeclaration['overflow'];
  paddingRight: CSSStyleDeclaration['paddingRight'];
};

const IS_SERVER = typeof window === 'undefined';
const useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;

/*
 * Hook allows to lock the scroll of a specific element or the body.
 * The `data-scroll-lock-fill-gap` attribute is used to identify elements that are fixed-positioned and should retain their layout or visual alignment when the main scroll container (typically `body`) is locked.
 */
export function useScrollLock(
  options: UseScrollLockOptions = {}
): UseScrollLockReturn {
  const { autoLock = true, lockTarget, widthReflow = true } = options;
  const [isLocked, setIsLocked] = useState(false);
  const target = useRef<HTMLElement | null>(null);
  const originalStyle = useRef<OriginalStyle | null>(null);
  const originalFixedStyles = useRef<Map<HTMLElement, string>>(new Map());

  const lock = useCallback(() => {
    if (target.current) {
      const { overflow, paddingRight } = target.current.style;
      // Save the original styles
      originalStyle.current = { overflow, paddingRight };
      // Prevent width reflow
      if (widthReflow) {
        // Use window inner width if body is the target as global scrollbar isn't part of the document
        const offsetWidth =
          target.current === document.body
            ? window.innerWidth
            : target.current.offsetWidth;
        // Get current computed padding right in pixels
        const currentPaddingRight =
          parseInt(window.getComputedStyle(target.current).paddingRight, 10) ||
          0;
        const scrollbarWidth = offsetWidth - target.current.scrollWidth;
        target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;

        // Handle fixed elements
        const fixedElements = document.querySelectorAll(
          '[data-scroll-lock-fill-gap]'
        );
        fixedElements.forEach((fixed) => {
          const element = fixed as HTMLElement;
          originalFixedStyles.current.set(element, element.style.paddingRight);

          const currentFixedPadding =
            parseInt(window.getComputedStyle(element).paddingRight, 10) || 0;
          element.style.paddingRight = `${currentFixedPadding + scrollbarWidth}px`;
        });
      }
      // Lock the scroll
      target.current.style.overflow = 'hidden';
      setIsLocked(true);
    }
  }, [widthReflow]);

  const unlock = useCallback(() => {
    if (target.current && originalStyle.current) {
      target.current.style.overflow = originalStyle.current.overflow;
      // Only reset padding right if we changed it
      if (widthReflow) {
        target.current.style.paddingRight = originalStyle.current.paddingRight;

        // Restore fixed elements
        originalFixedStyles.current.forEach((originalPadding, element) => {
          element.style.paddingRight = originalPadding;
        });
        originalFixedStyles.current.clear();
      }
    }
    setIsLocked(false);
  }, [widthReflow]);

  useIsomorphicLayoutEffect(() => {
    if (IS_SERVER) return;
    // Re-find the target element each time
    if (lockTarget) {
      target.current =
        typeof lockTarget === 'string'
          ? document.querySelector(lockTarget)
          : lockTarget;
    }
    if (!target.current) {
      target.current = document.body;
    }
    if (autoLock) {
      lock();
    }
    return () => {
      unlock();
    };
  }, [autoLock, lockTarget, widthReflow, lock, unlock]);

  return { isLocked, lock, unlock };
}

export type { UseScrollLockOptions, UseScrollLockReturn };
