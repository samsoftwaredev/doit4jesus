---
name: doit4jesus-bilingual-pages
description: Create or change public pages in the DoIt4Jesus website while preserving complete English and Spanish route, content, metadata, navigation, and test coverage.
---

# DoIt4Jesus bilingual pages

Use this skill for any user-facing page, shared navigation, footer, metadata, sitemap, or 404 change in this repository.

## Required outcome

- Every public English route must have an equivalent Spanish route under `/es`.
- Keep shared structure and behavior in reusable components; select copy with the repository's `Locale` type instead of maintaining divergent page layouts.
- Language controls must link to the equivalent page in the other language. Do not send visitors to a language home page when a translated counterpart exists.
- Keep internal links in the visitor's current locale, including header, footer, cards, calls to action, and related-page links.
- Localize visible text, accessible names, image alternatives, structured data, titles, descriptions, canonical URLs, `hreflang` alternates, and sitemap entries.
- Preserve the English root convention and the Spanish `/es` prefix. Do not add an i18n dependency unless the user requests a framework migration.

## SEO for every content change

Treat SEO as part of the content, not a later publishing step. Every new or changed public page in both languages must have:

- a useful, language-specific title and meta description written for the page's real search intent;
- a self-referencing canonical URL plus reciprocal `en-US`, `es-ES`, and `x-default` alternates;
- localized Open Graph and Twitter copy;
- semantic heading order, descriptive link text, and meaningful image alternative text;
- localized JSON-LD where structured data applies, including the correct URL and `inLanguage` value;
- discoverable internal links from relevant content in the same locale;
- an entry in the sitemap for each indexable language version.

Keep claims accurate to verified product behavior. Avoid keyword stuffing, duplicated translated metadata, hidden SEO text, and English structured-data copy on Spanish pages.

## Unit tests

Every page or localization change must include or update focused unit tests. Tests must verify meaningful behavior rather than only matching implementation details:

- render at least one representative English state and its Spanish state;
- assert the localized primary heading or other defining content;
- assert the language selector targets the equivalent route in both languages;
- assert important internal links remain in the active locale;
- verify localized recovery actions for 404 changes;
- verify canonical, `hreflang`, localized social metadata, structured-data language, and sitemap locale pairs when SEO or content files change.

Run the focused Jest tests, `npm run typecheck`, and `npm run build`. The build may require network access because the project loads Geist through `next/font/google`.
