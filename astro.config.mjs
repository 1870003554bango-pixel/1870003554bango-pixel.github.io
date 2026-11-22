// @ts-check
import { defineConfig } from 'astro/config';

// SITE and BASE are set by the GitHub Pages workflow (.github/workflows/deploy.yml).
// Repo named <user>.github.io  -> BASE=/
// Any other repo name          -> BASE=/<repo>
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
