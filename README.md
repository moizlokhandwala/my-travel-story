# Our Travel Story

A travel journal built with [Astro](https://astro.build). Every trip is one Markdown file; the site
turns them into a home page, a page per trip, and a photo gallery. Pushing to `main` redeploys the
live site through GitHub Actions (GitHub Pages).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Add a new trip

1. Copy `src/content/trips/_template.md` to `src/content/trips/<place>.md` (the file name becomes the
   address, e.g. `japan.md` -> `/trips/japan/`).
2. Fill in the details and write the story in Markdown. Use the next `order` number so it appears
   as your latest trip.
3. Put photos in `src/assets/trips/<place>/` and reference them from `cover:` / `gallery:`
   (see the commented examples in the template). Astro resizes and compresses them automatically.
4. Commit and push to `main`. The site updates in a minute or two.

Use `status: draft` for a trip with no story yet ("story coming soon"), `status: in-progress` while you
are still adding days ("story in progress"), and `status: published` once it is finished.

## Where things live

| What                          | Where                       |
| ----------------------------- | --------------------------- |
| Site name and tagline         | `src/config.ts`             |
| Trip stories                  | `src/content/trips/*.md`    |
| Trip fields (what is allowed) | `src/content.config.ts`     |
| Photos                        | `src/assets/trips/<place>/` |
| Page layouts                  | `src/pages/`, `src/layouts/` |
| Colours and typography        | `src/styles/global.css`     |
| Deployment                    | `.github/workflows/deploy.yml` |

## Photo tips

- Export photos at around 2000 px on the long edge; there is no need for full-resolution originals.
- The repository is public, so every photo file you commit is public too, including its hidden EXIF
  data (GPS location, camera, timestamp). Astro strips this from the optimised copies it serves, but
  not from the original files in `src/assets/`. Remove location data from the originals before you
  commit, especially for photos taken at home or at a hotel. On Windows: right-click the photo ->
  Properties -> Details -> "Remove Properties and Personal Information".
