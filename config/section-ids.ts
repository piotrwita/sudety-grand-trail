/**
 * Centralized section IDs configuration
 * Used for navigation, scrolling, and anchor links
 */
export const sectionIds = {
  submission: 'submission',
  hallOfFame: 'hall-of-fame',
  trackerForm: 'tracker-form',
  mainContent: 'main-content',
  aboutProject: 'about-project',
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];
