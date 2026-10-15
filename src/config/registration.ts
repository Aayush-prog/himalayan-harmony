// Single source of truth for when registration opens.
// Registration for Himalayan Harmony 2027 opens 1 October 2026.
export const REGISTRATION_OPEN_DATE = new Date("2026-10-01T00:00:00");

// Human-readable label used on buttons ("Opens Oct 1, 2026").
export const REGISTRATION_OPEN_LABEL = "Oct 1, 2026";

// External registration provider.
export const REGISTRATION_URL = "https://raceresults.com.hk/event/492";

// Set to true once all seats have been filled; closes registration early
// even though the opening date has already passed.
export const REGISTRATION_SEATS_FULL = true;

// Label shown on the disabled button once seats are full.
export const REGISTRATION_FULL_LABEL = "Seats Full";

// True once the opening date has passed and seats are still available.
export function isRegistrationOpen(now: Date = new Date()): boolean {
  return (
    now.getTime() >= REGISTRATION_OPEN_DATE.getTime() && !REGISTRATION_SEATS_FULL
  );
}
