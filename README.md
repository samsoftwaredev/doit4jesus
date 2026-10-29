# DoIt4Jesus public site

The public marketing site for DoIt4Jesus. It contains the bilingual landing page, About, Terms of Service, and Privacy Policy, plus English feature and search-discovery pages. Prayer, account, and other app experiences live at [app.doitforjesus.com](https://app.doitforjesus.com/).

## Start locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the production export, run `npm run build`; the static site is written to `out/`.

Google Analytics is consent-gated and disabled unless `NEXT_PUBLIC_GA_MEASUREMENT_ID` contains a valid GA4 measurement ID. Configure it only in the production deployment. See [Analytics and SEO measurement](docs/analytics.md) for the GA4, Search Console, privacy, event, UTM, and verification setup.

## Structure

- `app/` contains the public routes plus robots and sitemap metadata routes.
- `components/atoms`, `molecules`, `organisms`, `templates`, and `pages` form the atomic UI structure.
- `theme/` contains the shared MUI theme and provider.
- `content/` contains bilingual marketing content, legal text, route helpers, and metadata.

The English and Spanish Terms of Service, Privacy Policy, and Community Guidelines are synchronized official drafts. Both language versions must receive legal and translation review before release. Selected images, favicon, and social preview were copied from the app repository.

## Post-launch legal task

The copyright procedure is temporarily published under the label “Copyright Contact.” Register INRI Paint & Wall LLC and the published contact information in the U.S. Copyright Office designated-agent directory after launch. Once registration is confirmed, change only that label to “Designated DMCA Agent,” record the registration date, and schedule renewal before each three-year deadline. Do not describe the contact as registered or claim DMCA safe-harbor status before registration is complete.

The canonical site URL is configured as `https://www.doitforjesus.com` in `content/site.ts`. All other public domain variants should permanently redirect to that hostname in one hop.

`vercel.json` contains host-based permanent redirects for `doitforjesus.com`, `doit4jesus.com`, and `www.doit4jesus.com`. Each hostname must also be attached to the Vercel project and have its DNS pointed to Vercel before those redirects can apply.
