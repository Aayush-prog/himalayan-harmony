// Single source of truth for when registration opens.
// Registration for Himalayan Harmony 2027 opens 1 October 2026.
export const REGISTRATION_OPEN_DATE = new Date("2026-10-01T00:00:00");

// Human-readable label used on buttons ("Opens Oct 1, 2026").
export const REGISTRATION_OPEN_LABEL = "Oct 1, 2026";

// External registration provider.
export const REGISTRATION_URL = "https://raceresults.com.hk/event/446";

// True once the opening date has passed.
export function isRegistrationOpen(now: Date = new Date()): boolean {
  return now.getTime() >= REGISTRATION_OPEN_DATE.getTime();
}
