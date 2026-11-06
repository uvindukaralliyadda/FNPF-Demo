# FNPF website: Next.js build

Next.js 15 (App Router) version of the FNPF website prototype: 80 pages, including the homepage.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

For a fully static build, uncomment `output: 'export'` in `next.config.mjs`; `npm run build` then writes the site to `/out`.

## How it's organised

| Path | What it is |
|---|---|
| `content/pages/*.json` | One file per page: `path`, `title`, `description` (meta) and `html` (header, page body, footer). `members__nominations.json` is `/members/nominations/`. |
| `app/(home)/` | Homepage route with its own layout and `home.css` |
| `app/(site)/[...slug]/` | Every other page, statically generated from `content/pages` |
| `public/assets/site.css`, `home.css`, `motion.css` | Styles (monochrome UI, #C1273D / #172A45 accents, scroll motion) |
| `public/assets/*.bundle.js` | Menus, search, tabs, filters, calculators, forms, scroll reveal, count-up numbers |
| `public/assets/img/` | Photos, logo and partner logos |

To add, edit or delete a page, add, edit or delete its JSON file. Routes are generated from the files.

## Moving to a CMS

The page JSON matches what a headless WordPress endpoint returns: title, meta description and rendered content. To manage content in WordPress, change `lib/pages.js` to fetch from the WordPress REST API (`/wp-json/wp/v2/pages?slug=…`) instead of reading local files. The routes, layouts and assets stay the same.

## Notes

- `/404/` is a normal page. Point your host's 404 to it.
- The forms (contact, whistleblower, feedback, enquiry) check input in the browser only. Connect them to an API route or your form provider.
"# FNPF-Initial-Design" 
"# FNPF-Demo" 
