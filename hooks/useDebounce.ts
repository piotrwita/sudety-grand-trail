import { useEffect, useState } from 'react';

/**
 * This hook delays updating the returned value until a specified time has passed
 * since the last time the value changed. It is useful for optimization, such as
 * delaying API calls while the user is typing or handling window resize events.
 *
 * @param value - The value to be debounced.
 * @param delay - The delay in milliseconds (default: 500ms).
 * @returns T - The debounced value.
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
