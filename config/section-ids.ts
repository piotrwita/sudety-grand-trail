/**
 * Centralized section IDs configuration
 * Used for navigation, scrolling, and anchor links
 */
export const sectionIds = {
  submission: 'zglos-przejscie',
  hallOfFame: 'hall-of-fame',
  trackerForm: 'tracker-form',
  mainContent: 'main-content',
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];
