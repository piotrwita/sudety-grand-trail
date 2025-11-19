import { useEffect, useState } from 'react';

/**
 * Hook checks if the component is mounted.
 *
 * @returns boolean - Returns `true` if the component is mounted, otherwise `false` and force re-render when the component is mounted.
 */
export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
