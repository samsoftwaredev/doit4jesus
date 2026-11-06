# DoIt4Jesus SEO Validation

Validation date: 2026-11-05  
Environment: local repository production build; no production deployment performed

## Final automated results

| Check | Result | Evidence |
|---|---|---|
| Unit/integration tests | **Passed** | 58 suites, 104 tests, 0 failures (`npm test -- --runInBand`) |
| TypeScript | **Passed** | `npm run typecheck` |
| ESLint | **Passed** | `npm run lint` |
| Production build/static export | **Passed** | `npm run build`; compiled in 2.4 s and generated 24 framework routes/resources |
| Generated HTML SEO crawl | **Passed** | `npm run seo:check`; 20 indexable routes validated |
| XML syntax | **Passed** | `xmllint --noout out/sitemap.xml` |
| Robots syntax/content | **Passed locally** | Generated `out/robots.txt` contains `User-Agent: *`, `Allow: /`, and the canonical sitemap URL |
| Generated font payload | **Passed** | 0 WOFF2 files after system-font change; baseline contained 5 files totaling 84 KiB |

## What `npm run seo:check` verifies

The generated-output checker fails with the affected route when it finds:

- a missing title or meta description;
- a duplicate title or description;
- an incorrect/missing canonical;
- missing or inconsistent Open Graph/Twitter metadata;
- an unexpected `noindex` on a sitemap route;
- an incorrect HTML language;
- missing/incorrect `en-US`, `es-ES`, or `x-default` alternates;
- invalid JSON-LD syntax;
- an internal link to a path that is not an indexable generated route;
- a missing English/Spanish sitemap counterpart;
- an accidentally published unapproved educational draft.

Final result:

> SEO validation passed for 20 indexable routes: metadata, canonicals, hreflang, social tags, JSON-LD, internal links, and sitemap locale pairs.

## Rendered-output checks

- All 20 current sitemap URLs generated an HTML file.
- Every generated indexable document has a self-referencing canonical on `https://www.doitforjesus.com`.
- English and Spanish counterparts are reciprocal and use the English route as `x-default`.
- Current pages remain `index, follow`; generated 404 metadata is `noindex, nofollow`.
- Primary content, headings, navigation, links, and JSON-LD are present in static HTML without authentication or client JavaScript.
- Draft article paths are absent from both generated output and sitemap.
- The sitemap contains no authenticated `app.doitforjesus.com` URL.
- Spanish homepage card actions render “Descubre cómo funciona,” not the baseline English leftover.

## Structured-data validation

Completed:

- Every emitted JSON-LD block parses as JSON in the generated-HTML crawl.
- Unit tests verify serialization and escaping of opening angle brackets.
- `WebSite`/`WebPage`, `Organization`, `BreadcrumbList`, `FAQPage`, and base `SoftwareApplication` properties match visible content and localized URLs/language.
- No aggregate rating, review, price, testimonial, or Church endorsement was added.

Outstanding:

- Google Rich Results Test and Schema Markup Validator must be run against deployed URLs.
- Base `SoftwareApplication` data does not include the offer/rating data Google documents for its software-app rich result. This is an expected unresolved eligibility warning, not a reason to fabricate data.
- `FAQPage` syntax is valid, but search appearance is entirely at Google’s discretion.

## Performance and accessibility validation

Verified:

- Removed the network-dependent Google Fonts request.
- Removed five generated WOFF2 files totaling 84 KiB from the static output.
- The build now succeeds without downloading a third-party font.
- Existing images declare dimensions; the hero image remains prioritized, while noncritical content images retain lazy/default loading behavior.
- Existing skip navigation, semantic landmarks, localized accessible names, heading hierarchy tests, keyboard focus styles, and native links were preserved.
- Visible breadcrumbs and the remaining About/feature eligibility disclosures are available in rendered HTML; the homepage hero does not display the registration notice.

Not verified:

- No Chrome/Lighthouse executable or real-user dataset was available in the local environment.
- No PageSpeed Insights, CrUX, Search Console Core Web Vitals, or private RUM data was supplied.
- LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1 are therefore targets only; field compliance is not claimed.
- Representative physical-device and assistive-technology testing remains a human action.

The total `out` directory size is not used as a before/after performance claim because content, CSS, tests, hash names, and framework output changed at the same time; the directly comparable font-file count and bytes are reported instead.

## Production and Google gaps

Status: **Blocked** pending deployment/credentials.

- Production status codes, preferred-host/HTTPS redirects, caching, robots, sitemap, canonical selection, and 404 status after deployment.
- Search Console indexing and sitemap reports.
- URL Inspection results and Google-selected canonicals.
- Manual actions/security issues.
- Search impressions, clicks, CTR, average position, and English/Spanish comparisons.
- External validator and external-link monitoring.

See `SEO_MANUAL_ACTIONS.md` for exact steps. A successful local build, sitemap inclusion, or Search Console submission must not be reported as Google indexing or ranking success.
