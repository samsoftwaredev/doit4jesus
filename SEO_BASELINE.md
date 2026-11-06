# DoIt4Jesus SEO Baseline

Audit date: 2026-11-05  
Repository baseline: `e086836`  
Production property reviewed: `https://www.doitforjesus.com`  
Framework: Next.js 16 App Router, static export (`output: "export"`), React 19, Vercel redirects

## Scope and evidence

This baseline separates three evidence levels:

- **Verified in repository:** route source, metadata generators, content, navigation, policy text, sitemap, robots, structured data, tests, and deployment configuration were inspected directly.
- **Verified in generated HTML:** the production build was rendered and its indexable HTML, internal links, canonicals, language alternates, social metadata, robots directives, JSON-LD syntax, and sitemap membership were checked.
- **Unverified externally:** Google indexing, rankings, Search Console status, deployed redirect behavior, external-link availability, rich-result eligibility, and field Core Web Vitals require production or account data.

The production homepage and Spanish homepage were also fetched on 2026-11-05. They exposed meaningful server-rendered content without authentication. The browsing service could not retrieve production `robots.txt` or `sitemap.xml`; their repository and generated-build versions were verified instead.

## Public route inventory at baseline

All 20 routes below were indexable at baseline. Each had `robots: index, follow`, a self-referencing canonical, reciprocal `en-US`/`es-ES`/`x-default` alternates, Open Graph metadata, Twitter metadata, and a single primary H1. Canonical URLs use `https://www.doitforjesus.com` plus the route shown.

| Route | Baseline title | Baseline description | Primary H1 | JSON-LD |
|---|---|---|---|---|
| `/` | Do It for Jesus Every Day \| DoIt4Jesus Catholic App | Do it for Jesus every day with guided Rosary prayer, daily Catholic Scripture, reflection, progress, and community in the DoIt4Jesus app. | Do It for Jesus, Every Day | `WebSite` |
| `/es` | Hazlo por Jesús cada día \| DoIt4Jesus | Hazlo por Jesús cada día con el Rosario guiado, la Sagrada Escritura, la reflexión, el progreso y la comunidad católica. | Hazlo por Jesús, cada día | `WebPage` |
| `/features` | DoIt4Jesus Features \| Catholic Prayer, Rosary & Faith App | Explore Catholic prayer, Rosary tracking, daily Scripture, spiritual growth, achievements, friends, and community features in the DoIt4Jesus faith app. | Everything You Need to Grow in Your Catholic Faith | `FAQPage`, `SoftwareApplication`, `BreadcrumbList` |
| `/es/features` | Funciones de DoIt4Jesus \| Oración y Rosario | Descubre las funciones de oración, Rosario, Escritura, progreso y comunidad de DoIt4Jesus. | Todo lo que necesitas para crecer en la fe católica | Localized equivalents |
| `/about` | About DoIt4Jesus \| Our Rosary Prayer Mission | Learn why DoIt4Jesus brings people together through Rosary prayer, faith, and community. | Pray together. Grow closer to Christ. | None |
| `/es/about` | Acerca de DoIt4Jesus \| Nuestra misión | Conoce por qué DoIt4Jesus reúne a las personas a través del Rosario, la fe y la comunidad. | Recemos juntos. Acerquémonos a Cristo. | None |
| `/terms-of-service` | Terms of Service \| DoIt4Jesus | Read the terms that govern use of the DoIt4Jesus Rosary app and community. | Terms of Service | None |
| `/es/terms-of-service` | Términos de servicio \| DoIt4Jesus | Lee los términos oficiales que rigen la aplicación y la comunidad de DoIt4Jesus. | Términos de servicio | None |
| `/privacy-policy` | Privacy Policy \| DoIt4Jesus | Learn how DoIt4Jesus collects, uses, protects, and shares personal information. | Privacy Policy | None |
| `/es/privacy-policy` | Política de privacidad \| DoIt4Jesus | Conoce cómo DoIt4Jesus recopila, usa, protege y comparte datos personales. | Política de privacidad | None |
| `/community-guidelines` | Community Guidelines \| DoIt4Jesus | Read the safety, conduct, content, and event rules for the DoIt4Jesus prayer community. | Community Guidelines | None |
| `/es/community-guidelines` | Normas de la comunidad \| DoIt4Jesus | Lee las normas de seguridad, conducta, contenido y eventos de la comunidad de oración DoIt4Jesus. | Normas de la comunidad | None |
| `/catholic-prayer-app` | Catholic Prayer App for Rosary & Scripture \| DoIt4Jesus | Build a steady Catholic prayer routine with a guided Rosary, daily Mass Scripture, examinations of conscience, progress tools, and community. | A Catholic Prayer App for Rosary, Scripture, and Reflection | `WebPage`, `BreadcrumbList`, `FAQPage`; nested `SoftwareApplication` |
| `/es/catholic-prayer-app` | Aplicación de oración católica y Rosario \| DoIt4Jesus | Construye una rutina católica constante con el Rosario guiado, las lecturas diarias de la Misa, el examen de conciencia, el progreso y la comunidad. | Una aplicación católica para el Rosario, la Escritura y la reflexión | Localized equivalents |
| `/gamified-rosary-app` | Gamified Rosary App for Catholic Prayer \| DoIt4Jesus | Use a Rosary Garden, streaks, XP, levels, badges, and community encouragement to build consistency while keeping prayer—not points—at the center. | A Gamified Rosary App That Keeps Prayer at the Center | `WebPage`, `BreadcrumbList`, `FAQPage`; nested `SoftwareApplication` |
| `/es/gamified-rosary-app` | Aplicación del Rosario con motivación \| DoIt4Jesus | Usa el Jardín del Rosario, rachas, XP, niveles, insignias y el ánimo de la comunidad para cultivar la constancia sin perder de vista la oración. | Una aplicación del Rosario con motivación que mantiene la oración en el centro | Localized equivalents |
| `/rosary-tracker-app` | Rosary Tracker App for Prayer Streaks \| DoIt4Jesus | Track completed Rosaries, prayer streaks, garden progress, and milestones while staying focused on the mysteries of Christ. | A Rosary Tracker That Keeps the Mysteries in Focus | `WebPage`, `BreadcrumbList`, `FAQPage`; nested `SoftwareApplication` |
| `/es/rosary-tracker-app` | Seguimiento del Rosario y rachas de oración \| DoIt4Jesus | Registra Rosarios terminados, rachas, el progreso del jardín y logros mientras mantienes la atención en los misterios de Cristo. | Un seguimiento del Rosario que mantiene los misterios en el centro | Localized equivalents |
| `/examination-of-conscience-app` | Examination of Conscience App \| DoIt4Jesus | Reflect with guided examinations of conscience for adults, teens, and children as you prepare your heart for Catholic Confession. | An Examination of Conscience App for Honest Reflection | `WebPage`, `BreadcrumbList`, `FAQPage`; nested `SoftwareApplication` |
| `/es/examination-of-conscience-app` | Aplicación de examen de conciencia \| DoIt4Jesus | Reflexiona con exámenes de conciencia guiados para adultos, adolescentes y niños mientras preparas tu corazón para la Confesión. | Una aplicación de examen de conciencia para reflexionar con sinceridad | Localized equivalents |

Non-page public resources: `/robots.txt`, `/sitemap.xml`, `/favicon.ico`, `/og-image.jpg`, and assets under `/assets`. Authenticated product routes live on the separate `app.doitforjesus.com` host and are not in the public-site sitemap.

## Findings

| Severity | Finding | Evidence and verification | Resolution state |
|---|---|---|---|
| Critical | Public copy promoted teen and child examinations and described the app as for “anyone,” while approved Terms restrict accounts/authenticated features to U.S. residents age 18+. | Verified in `content/site.ts`, `data/features*.ts`, `content/seo-pages*.ts`, and both legal-language versions. The conflict was also visible on the production homepages. | Fixed locally; legal/product owner confirmation remains required. |
| High | The five requested educational resources did not exist as routes, drafts, or a reusable article architecture. | Verified with route and file inventory. | Bilingual drafts and a reusable template are prepared but intentionally unpublished pending human approval. |
| High | About pages omitted the verified operator, editorial process, review status, and direct policy discovery, while including an unverified origin-story narrative. | Verified in page content; operator is stated in the approved Terms and Privacy Policy. | Replaced locally with verifiable project, operator, editorial, contact, and eligibility information. |
| High | The production build depended on downloading Geist from Google Fonts. In a restricted environment the baseline build failed, and the request added a render-time third-party dependency. | Reproduced with `npm run build`; request to `fonts.googleapis.com` failed. | Replaced with a system font stack; build now succeeds offline and emits no font files. |
| Medium | Spanish homepage feature cards exposed the English CTA “See how it works.” | Verified in production-rendered Spanish HTML and component source. | Localized to “Descubre cómo funciona,” including the accessible image-link label. |
| Medium | The global 404 metadata did not explicitly declare `noindex`. | Verified in `app/global-not-found.tsx`. | Fixed locally with `noindex, nofollow`; HTTP 404 behavior remains provided by Next/Vercel. |
| Medium | There was no generated-HTML SEO crawler for duplicate metadata, broken internal links, canonical/hreflang errors, sitemap drift, invalid JSON-LD, or accidental `noindex`. | Package scripts and tests inspected. | Added `npm run seo:check` and a focused metadata contract test. |
| Medium | Search landing pages had JSON-LD breadcrumbs but no visible breadcrumbs. | Verified in `SearchLandingPage.tsx`. | Added visible, localized Home → page breadcrumbs matching the flat route hierarchy. |
| Medium | `SoftwareApplication` markup does not contain an `Offer` or verified aggregate rating/review and therefore should not be claimed as eligible for Google’s software-app rich result. | Verified in generated JSON-LD. | No data was fabricated. Base Schema.org markup remains truthful; rich-result eligibility remains unclaimed. |
| Low | Homepage Rosary copy included a specific St. Dominic origin claim without a visible source and used “Save Souls” as a benefit heading. | Verified in production copy. | Replaced locally with restrained, Christ-centered, Scripture-based language and “Pray for Others.” |

## Crawlability and discovery

- **Meaningful unauthenticated content:** verified. Next statically renders headings, copy, links, images, and JSON-LD into HTML; important content does not require client-side execution.
- **Client-side rendering risk:** low for content discovery. Analytics consent and interactive controls hydrate on the client, but primary content and navigation are present in the HTML.
- **Sitemap:** valid generated XML with 20 canonical, indexable language routes and no authenticated app URLs. No speculative `lastmod` values are emitted.
- **Robots:** valid generated syntax allowing public crawling and declaring the sitemap. Private application content is on another host.
- **Internal discovery:** all current indexable pages are linked from shared navigation, footer guides, homepage feature sections, or related-page cards. No current indexable orphan was found.
- **Broken internal links:** none in the post-change generated build. The initial repository had tests but no full generated-output crawler, so this finding is verified post-change rather than claimed for every deployed edge case.
- **Redirects:** `vercel.json` defines preferred-host redirects from `doit4jesus.com`, `www.doit4jesus.com`, and `doitforjesus.com` to `www.doitforjesus.com`, plus `/app` handoffs to the application host. No loop exists in configuration. Production HTTPS and edge behavior remain unverified.
- **404:** a custom recovery page exists and Next generates a 404 document. Post-change metadata is `noindex, nofollow`.

## Localization audit

- Every current English public route has a Spanish `/es` counterpart.
- Layout `lang` values are `en` and `es`; metadata uses `en-US` and `es-ES` alternates.
- Canonicals are self-referencing; Spanish pages are not canonicalized to English.
- Language selectors target the equivalent route, not a generic language homepage.
- Internal navigation remains in the visitor’s locale.
- One verified Spanish UI leftover (“See how it works”) was fixed.
- The five new Spanish educational drafts require human review for Catholic terminology before publication; their existence is not treated as approved translation.

## Unverified gaps

- Google Search Console ownership, Page indexing, Sitemaps, URL Inspection, Manual Actions, Security Issues, performance queries, CTR, and rankings.
- Google rich-results and Schema Markup Validator results against a deployed build.
- PageSpeed Insights, CrUX, Search Console Core Web Vitals, and 75th-percentile LCP/INP/CLS.
- Production preferred-host/HTTPS redirects, edge caching, 404 status, robots accessibility, and sitemap accessibility after deployment.
- Availability of every external social, video, policy, and Catholic source link over time.
- Doctrinal, Spanish theological-language, Scripture-permission, and legal review of draft content.

Sitemap presence is not evidence that Google has indexed a URL, and this audit makes no ranking or Core Web Vitals claim.
