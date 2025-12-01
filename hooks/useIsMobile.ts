import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

const MOBILE_BREAKPOINT = 768;

/**
 * Hook allows to detect if the current viewport is mobile-sized.
 *
 * @param debounceDelay - The delay in milliseconds to wait before updating the state (default: 200ms).
 *                        This helps prevent rapid state changes during window resizing.
 * @returns boolean - Returns `true` if the viewport width is less than the mobile breakpoint (768px), otherwise `false`.
 */
export function useIsMobile(debounceDelay: number = 200) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => mql.removeEventListener('change', onChange);
  }, []);

  const debouncedIsMobile = useDebounce(isMobile, debounceDelay);

  return !!debouncedIsMobile;
}
