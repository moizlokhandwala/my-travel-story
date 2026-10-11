// Site-wide settings. Edit these to change the name, tagline, etc.
export const SITE = {
  title: 'Our Travel Story',
  tagline: 'Places we have been, and what we remember of them.',
  description:
    'A growing journal of our travels: stories, photos, and practical tips from every trip.',
};

// Badge text for trips that are not finished yet (published trips show no badge).
export const STATUS_BADGE = {
  draft: 'Story coming soon',
  'in-progress': 'Story in progress',
} as const;

// "Country · When" label for cards. Skips the country when it just repeats the trip title
// (for example the trip "Georgia" in the country "Georgia").
export const tripPlace = (d: { title: string; country: string; when?: string }): string =>
  [d.country === d.title ? undefined : d.country, d.when].filter(Boolean).join(' · ');

// Builds a link that respects the deploy base path (e.g. /my-travel-story/ on GitHub Pages).
export const withBase = (path = ''): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};
