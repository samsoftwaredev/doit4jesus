# DoIt4Jesus SEO Manual Actions

None of the actions in this document has been marked complete. Each requires ownership, credentials, private data, editorial authority, legal authority, or production authorization.

## HUMAN-001 — Google Search Console

Status: **Blocked** — property access and ownership verification required.

1. Sign in to Google Search Console with the account authorized to manage DoIt4Jesus.
2. Add or select the Domain property `doitforjesus.com`. Prefer a Domain property so both protocols and all subdomains are visible.
3. If it is not verified, copy Google’s DNS TXT record into the authoritative DNS provider and complete verification.
4. Confirm that `https://www.doitforjesus.com` is the deployed preferred public host.
5. Open **Performance → Search results** and export the last 3–6 months in CSV or Google Sheets format. Include Queries, Pages, Countries, Devices, Dates, and Search appearance when available.
6. Open **Indexing → Pages** and export or capture the reason/status summary and representative affected URLs.
7. Open **Indexing → Sitemaps** and record the submitted sitemap URL, last read date, discovered pages, and errors.
8. Inspect `/`, `/features`, `/catholic-prayer-app`, `/es`, and—after approval/publication—one English and one Spanish educational resource.
9. Review **Security & Manual Actions → Manual actions** and **Security issues**.
10. Provide the exports/screenshots to the AI for query-, page-, and indexing-based prioritization.

Do not treat a successful sitemap submission as proof of indexing.

## HUMAN-002 — Sitemap submission and deployed URL inspection

Status: **Blocked** — deployment and Search Console access required.

After deployment:

1. Open `https://www.doitforjesus.com/sitemap.xml` in a private browser window and confirm a 200 response with the intended canonical URLs.
2. Open `https://www.doitforjesus.com/robots.txt` and confirm it allows public crawling and references the sitemap.
3. In Search Console, submit `https://www.doitforjesus.com/sitemap.xml` or verify the existing submission.
4. Use URL Inspection on the priority URLs listed under HUMAN-001.
5. Record Google-selected canonical, user-declared canonical, crawl status, indexing status, last crawl, and detected enhancements.
6. Request indexing only for important deployed pages that are complete and approved.
7. Recheck after Google has had time to crawl. Google controls whether and when a page is indexed.

## HUMAN-003 — Catholic content and Spanish review

Status: **Blocked** — qualified human approval required.

Review `content/article-drafts.ts` and `SEO_CONTENT_REVIEW.md` before any route is created.

1. Have a suitably qualified Catholic reviewer check every doctrinal, devotional, sacramental, and historical statement.
2. Confirm that distinctions between Church teaching, devotional custom, pastoral suggestion, and DoIt4Jesus product guidance are clear.
3. Have a fluent Spanish Catholic editor review terminology, register, capitalization, prayer names, sacramental language, and naturalness.
4. Confirm the proposed Rosary sequence and traditional day assignments.
5. Review the examination-of-conscience scope, cautions about scrupulosity, and confession language.
6. Approve or replace every source.
7. Confirm prayer-text and Scripture permissions. The current drafts intentionally reproduce no complete Scripture readings and direct users to authorized sources.
8. Supply reviewer name/role (if it may be public), approval date, publication date, and planned review date.
9. Explicitly authorize publication for each English/Spanish route pair.

## HUMAN-004 — Verified identity and product information

Status: **Blocked** — publisher approval required.

Please confirm in writing whether the following approved legal-policy facts may appear publicly:

- Operator: `INRI Paint & Wall LLC, a Texas limited liability company`
- Support email: `admin@doit4jesus.com`
- Current support phone and mailing address shown in legal policies

Also provide or approve:

- A factual project origin/background statement (the implementation removed the prior unverified origin story).
- Any real editorial reviewer roles or workflow that may be disclosed.
- Authentic current app screenshots and rights to publish them.
- Any genuine affiliations, credentials, testimonials, or endorsements, with evidence and exact approved wording. Omit them if none exist.

## HUMAN-005 — Legal and product eligibility

Status: **Blocked** — product owner/legal approval required.

The implementation treats the currently approved Terms and Privacy Policy as authoritative: authenticated accounts are limited to U.S. residents age 18 or older.

1. Confirm the age requirement.
2. Confirm the geographic requirement.
3. Confirm whether public, unauthenticated educational resources may be viewed outside the United States.
4. Confirm that removing teen/child product marketing is the desired resolution.
5. Review the eligibility wording on the About page, feature FAQ, and examination-of-conscience landing content.
6. If policy or eligibility will change, obtain legal review and update the legal documents first or in the same approved release. Do not silently change marketing back to a broader audience.

## HUMAN-006 — Performance and analytics

Status: **Blocked** — production measurements/private reports required.

After deployment:

1. Run PageSpeed Insights for `/`, `/features`, `/about`, `/catholic-prayer-app`, and `/es` on mobile and desktop.
2. Save the report URLs or JSON output and record test date, device profile, and network conditions.
3. In Search Console, export the Core Web Vitals mobile and desktop reports.
4. If available, provide CrUX or RUM 75th-percentile LCP, INP, and CLS by route group.
5. Test representative iOS/Android phones and a desktop browser for navigation, language switching, signup/login handoff, consent controls, focus order, zoom, and responsive layout.
6. Provide analytics exports rather than account credentials whenever practical.

Targets are LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1 at the 75th percentile. Lab results must not be labeled field compliance.

## HUMAN-007 — Deployment, validation, and monitoring

Status: **Blocked** — production authorization required.

1. Review the code diff and all five SEO reports.
2. Confirm HUMAN-005 decisions before deploying audience/eligibility copy.
3. Deploy through the normal approved pipeline.
4. Verify 200 responses for all sitemap URLs, a 404 response for a nonexistent path, and expected redirects for:
   - `http://doitforjesus.com/...`
   - `https://doitforjesus.com/...`
   - `https://doit4jesus.com/...`
   - `https://www.doit4jesus.com/...`
5. Confirm there are no redirect loops and that the final URL is `https://www.doitforjesus.com/...`.
6. Run `npm run build`, `npm run seo:check`, `npm test -- --runInBand`, `npm run typecheck`, and `npm run lint` in CI.
7. Complete HUMAN-001, HUMAN-002, and HUMAN-006.
8. Monitor Search Console after enough data accumulates; compare impressions, clicks, CTR, position, indexing, language, device, and seasonality.
9. Use authentic outreach and partnerships only. Do not buy manipulative links or fabricate endorsements.

## Publication gate for educational resources

Only after HUMAN-003 approval should an implementation add article routes, `Article`/breadcrumb structured data, navigation links, and sitemap entries. Publication must happen as paired English and Spanish routes unless a missing translation is explicitly reported and publication is intentionally deferred.
