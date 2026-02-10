# Project Overview: carrah-site

This repository is a personal website for **Carrah Lingo** (home page, about page, blog, and a resume page). It is a **Jekyll** site intended to be hosted on **GitHub Pages** with a custom domain (`carrahlingo.com` via `CNAME`).

## Stack

- Static site generator: Jekyll (via the `github-pages` gem)
- Hosting/deploy: GitHub Pages (GitHub Actions workflow builds and deploys)
- Frontend: Bootstrap 3 (CDN), jQuery (CDN), Font Awesome (CDN), custom CSS in `static/css/main.css`

## Key Content Entry Points

- Home page: `index.html` (uses the `home` layout)
- About page: `about.html` (renders `_includes/about.html`)
- Blog index: `blog.html` (lists `site.posts`)
- Blog posts: `_posts/*.md` (example: `_posts/2026-01-01-first-post.md`)
- Resume page: `resume.html` (hand-authored HTML resume content)
- Resume PDF asset: `Carrah_Lingo_Comms_Resume.pdf`

## Jekyll Structure

- Layouts: `_layouts/`
  - `layout.html` is the main HTML shell (head/meta, nav, footer, theme toggle script).
- Includes: `_includes/`
  - `header.html`, `footer.html`, `about.html`, etc.
- Site config: `_config.yml`
  - Notable settings: `url: "https://carrahlingo.com"`, `port: 5000`, `permalink: /:title.html`, `safe: true`.

## Local Development

Prereqs: Ruby + Bundler.

Common commands:

```sh
bundle install
bundle exec jekyll serve --port 5000
```

Build output goes to `_site/` (the GitHub Actions deploy also builds to `_site`).

Note: `_site/` is present in the repository. In typical Jekyll setups it is generated output; prefer editing the source files (layouts/includes/pages/posts) and let the workflow regenerate `_site` during deploy.

## Deployment

Deployment is handled by GitHub Actions in `.github/workflows/pages.yml`:

- Triggers on pushes to the `main` branch (and manual `workflow_dispatch`)
- Uses Ruby `3.1`, runs `bundle exec jekyll build --destination _site`
- Uploads `_site` as the artifact and deploys it to GitHub Pages

Custom domain is configured via `CNAME`.

## Gallery/Photo Tooling (Optional)

There is an (currently unused) photo gallery pipeline derived from `andyzg/gallery`:

- `setup.command`:
  - Duplicates images under `photos/**` to create `.min.*` and `.placeholder.*` variants.
  - Resizes variants using `sips` (macOS) or `mogrify` (Ubuntu/ImageMagick).
  - Runs `tools/setup.py` to generate `config.json`.
- `tools/setup.py` writes `config.json` containing album/image metadata (width/height + paths).
- `js/script.js` expects `config.json` at the site root and renders the gallery on page load.

As of this snapshot, there is **no** `photos/` directory and **no** `config.json` in the repo, so this pipeline will only be relevant if you add a gallery page/content that references it.
