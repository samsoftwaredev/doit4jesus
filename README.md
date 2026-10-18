# DoIt4Jesus public site

The public marketing site for DoIt4Jesus. It contains the bilingual landing page, About, Terms of Service, and Privacy Policy, plus English feature and search-discovery pages. Prayer, account, and other app experiences live at [app.doitforjesus.com](https://app.doitforjesus.com/).

## Start locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the production export, run `npm run build`; the static site is written to `out/`.

## Structure

- `app/` contains the public routes plus robots and sitemap metadata routes.
- `components/atoms`, `molecules`, `organisms`, `templates`, and `pages` form the atomic UI structure.
- `theme/` contains the shared MUI theme and provider.
- `content/` contains bilingual marketing content, legal text, route helpers, and metadata.

The Spanish legal pages are courtesy draft translations. They include a visible notice, carry `noindex`, and are omitted from the sitemap until reviewed. The English legal content is adapted from the [DoIt4Jesus app repository](https://github.com/samsoftwaredev/doit4jesus-app); review it before replacing the live policies. Selected images, favicon, and social preview were copied from that repository.

The canonical site URL is configured as `https://www.doitforjesus.com` in `content/site.ts`. All other public domain variants should permanently redirect to that hostname in one hop.

`vercel.json` contains host-based permanent redirects for `doitforjesus.com`, `doit4jesus.com`, and `www.doit4jesus.com`. Each hostname must also be attached to the Vercel project and have its DNS pointed to Vercel before those redirects can apply.
