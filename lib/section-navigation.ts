import { type SectionId } from '@/config/section-ids';

export interface ScrollToSectionOptions {
  /**
   * Scroll behavior: 'smooth' for animated scrolling, 'auto' for instant
   * @default 'smooth'
   */
  behavior?: ScrollBehavior;
  /**
   * Delay in milliseconds before scrolling (useful for DOM updates)
   * @default 0
   */
  delay?: number;
  /**
   * Offset in pixels from the top of the section
   * @default 0
   */
  offset?: number;
  /**
   * Scroll animation duration in milliseconds (only used when behavior is 'smooth')
   * @default 500
   */
  duration?: number;
}

/**
 * Scrolls to a section by its ID
 */
export function scrollToSection(
  sectionId: SectionId | string,
  options: ScrollToSectionOptions = {}
): Promise<void> {
  const {
    behavior = 'smooth',
    delay = 0,
    offset = 0,
    duration = 500,
  } = options;

  return new Promise((resolve) => {
    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior,
        });

        // Resolve after scroll animation completes
        if (behavior === 'smooth') {
          setTimeout(resolve, duration);
        } else {
          resolve();
        }
      } else {
        console.warn(`Section with ID "${sectionId}" not found`);
        resolve();
      }
    };

    if (delay > 0) {
      setTimeout(scroll, delay);
    } else {
      scroll();
    }
  });
}

/**
 * Gets the URL hash for a section ID
 */
export function getSectionHash(sectionId: SectionId | string): string {
  return `#${sectionId}`;
}

/**
 * Gets the full URL with section hash
 * @param path - Base path (e.g., "/live" or "/")
 * @param sectionId - The section ID from sectionIds config or a custom string ID
 * @returns Full URL with hash (e.g., "/live#tracker-form")
 */
export function getSectionUrl(
  path: string,
  sectionId: SectionId | string
): string {
  return `${path}${getSectionHash(sectionId)}`;
}
