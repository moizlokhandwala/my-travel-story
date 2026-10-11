// Site-wide settings. Edit these to change the name, tagline, etc.
export const SITE = {
  title: 'Our Travel Story',
  tagline: 'Places we have been, and what we remember of them.',
  description:
    'A growing journal of our travels: stories, photos, and practical tips from every trip.',
};

// Builds a link that respects the deploy base path (e.g. /my-travel-story/ on GitHub Pages).
export const withBase = (path = ''): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};
