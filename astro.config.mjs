import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Actions workflow so the same code
// works locally (http://localhost:4321/) and on GitHub Pages (/<repo-name>/).
// If you later add a custom domain, set SITE_URL to it and BASE_PATH to '/'.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
