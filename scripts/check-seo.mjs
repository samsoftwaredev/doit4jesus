import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const outputDirectory = resolve(process.argv[2] ?? 'out');
const productionOrigin = 'https://www.doitforjesus.com';

if (!existsSync(outputDirectory)) {
  throw new Error(`Static output was not found at ${outputDirectory}. Run npm run build first.`);
}

const sitemapXml = readFileSync(resolve(outputDirectory, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const sitemapPaths = new Set(sitemapUrls.map((url) => new URL(url).pathname.replace(/\/$/, '') || '/'));
const failures = [];
const titles = new Map();
const descriptions = new Map();

function report(path, message) {
  failures.push(`${path}: ${message}`);
}

function htmlFileFor(path) {
  if (path === '/') return resolve(outputDirectory, 'index.html');
  return resolve(outputDirectory, `${path.slice(1)}.html`);
}

function attribute(html, pattern) {
  return html.match(pattern)?.[1]?.trim();
}

function remember(map, value, path, label) {
  if (!value) return;
  const previous = map.get(value);
  if (previous) report(path, `duplicate ${label} also used by ${previous}`);
  else map.set(value, path);
}

for (const path of sitemapPaths) {
  const file = htmlFileFor(path);
  if (!existsSync(file)) {
    report(path, `missing generated HTML (${file})`);
    continue;
  }

  const html = readFileSync(file, 'utf8');
  const title = attribute(html, /<title>([^<]+)<\/title>/i);
  const description = attribute(html, /<meta name="description" content="([^"]+)"\s*\/?\s*>/i);
  const canonical = attribute(html, /<link rel="canonical" href="([^"]+)"\s*\/?\s*>/i);
  const robots = attribute(html, /<meta name="robots" content="([^"]+)"\s*\/?\s*>/i);
  const htmlLanguage = attribute(html, /<html lang="([^"]+)"/i);
  const openGraphTitle = attribute(html, /<meta property="og:title" content="([^"]+)"/i);
  const openGraphDescription = attribute(html, /<meta property="og:description" content="([^"]+)"/i);
  const openGraphImage = attribute(html, /<meta property="og:image" content="([^"]+)"/i);
  const twitterTitle = attribute(html, /<meta name="twitter:title" content="([^"]+)"/i);

  if (!title) report(path, 'missing title');
  if (!description) report(path, 'missing meta description');
  if (canonical !== `${productionOrigin}${path === '/' ? '' : path}`) report(path, `incorrect canonical ${canonical ?? '(missing)'}`);
  if (!robots?.includes('index') || robots.includes('noindex')) report(path, `unexpected robots directive ${robots ?? '(missing)'}`);
  if (htmlLanguage !== (path === '/es' || path.startsWith('/es/') ? 'es' : 'en')) report(path, `incorrect html lang ${htmlLanguage ?? '(missing)'}`);
  if (openGraphTitle !== title || twitterTitle !== title) report(path, 'social title does not match the page title');
  if (openGraphDescription !== description || !openGraphImage) report(path, 'missing or inconsistent Open Graph metadata');

  remember(titles, title, path, 'title');
  remember(descriptions, description, path, 'description');

  const englishPath = path === '/es' ? '/' : path.startsWith('/es/') ? path.slice(3) : path;
  const spanishPath = englishPath === '/' ? '/es' : `/es${englishPath}`;
  const alternateLinks = new Map([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)].map((match) => [match[1], match[2]]));
  const expectedAlternates = {
    'en-US': `${productionOrigin}${englishPath === '/' ? '' : englishPath}`,
    'es-ES': `${productionOrigin}${spanishPath}`,
    'x-default': `${productionOrigin}${englishPath === '/' ? '' : englishPath}`,
  };
  for (const [language, expected] of Object.entries(expectedAlternates)) {
    if (alternateLinks.get(language) !== expected) report(path, `incorrect ${language} alternate`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); } catch (error) { report(path, `invalid JSON-LD: ${error.message}`); }
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/gi)) {
    const target = match[1].split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    if (target.startsWith('/_next/') || target.startsWith('/assets/') || /\.[a-z0-9]+$/i.test(target)) continue;
    if (!sitemapPaths.has(target)) report(path, `internal link target is not an indexable generated page: ${target}`);
  }
}

const unpublishedDrafts = ['how-to-pray-the-rosary', 'rosary-mysteries-by-day', 'examination-of-conscience-guide', 'daily-catholic-prayers', 'daily-mass-readings'];
for (const slug of unpublishedDrafts) {
  if (sitemapPaths.has(`/${slug}`) || sitemapPaths.has(`/es/${slug}`)) report('sitemap.xml', `unapproved draft was published: ${slug}`);
}

for (const path of sitemapPaths) {
  const counterpart = path === '/es' ? '/' : path.startsWith('/es/') ? path.slice(3) : path === '/' ? '/es' : `/es${path}`;
  if (!sitemapPaths.has(counterpart)) report('sitemap.xml', `missing locale counterpart for ${path}`);
}

if (failures.length) {
  console.error(`SEO validation failed with ${failures.length} issue(s):\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`SEO validation passed for ${sitemapPaths.size} indexable routes: metadata, canonicals, hreflang, social tags, JSON-LD, internal links, and sitemap locale pairs.`);
