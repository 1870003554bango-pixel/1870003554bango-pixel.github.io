import type { Lang } from '../i18n/ui';

/** Prefix a file path in public/ with the site base, so it works on <user>.github.io/<repo>/ too. */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

/**
 * Link to a page in a given language. `route` is the language-free path, e.g. '/work/scam-ready/'.
 * English lives at the root, Chinese under /zh/. Always ends with '/' (GitHub Pages serves folders).
 */
export function page(lang: Lang, route = '/'): string {
  let r = route.startsWith('/') ? route : `/${route}`;
  if (!r.endsWith('/') && !r.includes('#')) r += '/';
  return url(lang === 'zh' ? `/zh${r}` : r);
}
