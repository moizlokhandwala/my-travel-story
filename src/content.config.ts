import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const trips = defineCollection({
  // Files starting with "_" (like _template.md) are ignored.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/trips' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // "Paris"
      country: z.string(), // "France"
      region: z.string().optional(), // "Kakheti & Tbilisi"
      order: z.number(), // chronological position; a higher number = a more recent trip
      when: z.string().optional(), // free text: "March 2023", "Summer 2024"
      duration: z.string().optional(), // "7 days"
      summary: z.string(), // one or two sentences, shown on cards
      status: z.enum(['draft', 'published']).default('draft'), // draft = "story coming soon"
      accent: z.string().default('#0ea5e9'), // colour used for this trip's cover and highlights (sky blue or a green suits the theme)
      cover: image().optional(),
      coverAlt: z.string().optional(),
      highlights: z.array(z.string()).default([]),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { trips };
