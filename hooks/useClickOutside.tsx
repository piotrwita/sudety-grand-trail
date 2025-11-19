import { RefObject, useEffect } from 'react';

/**
 * Hook allows to detect clicks outside of a specific element.
 *
 * This is commonly used to close modals, dropdowns, or menus when the user clicks
 * anywhere else on the page.
 *
 * @param ref - A React ref object pointing to the element to monitor.
 * @param handler - A function to be called when a click outside the element is detected.
 */
function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref || !ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handler]);
}

export default useClickOutside;
