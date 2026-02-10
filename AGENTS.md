# carrah-site (Agent Notes)

This repo is the personal website for Carrah Lingo (home, about, blog, resume). It is a Jekyll site deployed via GitHub Pages with a custom domain (`carrahlingo.com` via `CNAME`).

## Stack

- Jekyll via the `github-pages` gem (Ruby/Bundler)
- GitHub Pages deploy via `.github/workflows/pages.yml`
- Frontend is mostly static HTML + Bootstrap 3 (CDN), jQuery (CDN), Font Awesome (CDN)
- Custom styling lives in `static/css/main.css`

## Key Paths

- Site config: `_config.yml` (notable: `url`, `permalink`, `safe: true`, `port: 5000`)
- Layouts: `_layouts/` (main HTML shell is typically `_layouts/layout.html`)
- Includes: `_includes/` (shared partials like header/footer/about content)
- Pages: `index.html`, `about.html`, `blog.html`, `resume.html`, `404.html`
- Blog posts: `_posts/*.md` (name format: `YYYY-MM-DD-title.md`)
- Assets: `static/` (CSS/images/etc), plus root-level `Carrah_Lingo_Comms_Resume.pdf`
- Responsive design notes: `RESEARCH.md`

## Responsive Design Notes

- Mobile scaling is enabled by the viewport meta tag in `_layouts/layout.html`.
- Responsive layout is mostly CSS-driven (Bootstrap 3 + custom rules in `static/css/main.css`).
- The primary breakpoint is Bootstrap's `xs/sm` boundary at `767px/768px` (mobile nav, resume stacking, etc).
- Navbar:
  - Markup in `_includes/header.html` (Bootstrap collapse pattern).
  - Mobile dropdown styling in `static/css/main.css` under `@media (max-width: 767px)`.
- Resume:
  - Custom flex layout and its responsive rules live in `static/css/main.css` (including tablet + mobile media queries).

## Local Development

Prereqs: Ruby + Bundler.

```sh
bundle install
bundle exec jekyll serve --port 5000
```

Notes:

- Do not edit `_site/` directly; it is generated output (and is ignored via `.gitignore`).
- Prefer changing source files in `_layouts/`, `_includes/`, pages in the repo root, and `static/`.

## Deployment

GitHub Actions builds and deploys on push to `main` (and via manual dispatch):

- Build: `bundle exec jekyll build --destination _site`
- Deploy: uploads `_site` to GitHub Pages

See `.github/workflows/pages.yml`.

## Git Discipline (Required)

Any time you make a meaningful change (behavior, content, styling, build/deploy config), create a git commit with a helpful message.

- Check what changed: `git status`
- Stage only what you intend to commit (avoid bundling unrelated local edits): `git add <paths>`
- Commit with an informative message that says what and why: `git commit -m "..."`.
