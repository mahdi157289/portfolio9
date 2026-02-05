/**
 * File Role: Utility Functions
 * Utility: Provides helper functions for the application.
 * Technical description: Collection of pure functions.
 * Workflow inside the file:
 *  1. Exports helper functions.
 * Relation with other files: Imported where needed.
 * Overall utility in the project: Shared logic.
 */

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
