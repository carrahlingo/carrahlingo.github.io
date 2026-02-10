# Responsive Transitions (Desktop <-> Mobile)

This site is a Jekyll static site, but the "desktop to mobile" behavior is almost entirely handled by CSS (Bootstrap 3 + `static/css/main.css`) and a small amount of Bootstrap JS for the collapsing navigation.

The goal is that as the browser gets narrower (or wider), the same page "reflows" into a layout that still reads well, without needing separate mobile pages.

## What "Transition" Means Here

When people say "transitioning from desktop to mobile", they usually mean:

1. The browser width changes (resizing a desktop window, or rotating a phone).
2. The layout adapts at certain width thresholds ("breakpoints").
3. Elements stack, shrink, wrap, or hide/show so nothing is cut off and the page stays readable.

This is responsive design, not an animated transition. The main work is deciding what should happen at different widths and encoding that in CSS rules.

## What We Use In This Repo

1. **Bootstrap 3 responsive grid and components**
   - Breakpoints (Bootstrap 3 defaults):
     - `xs`: < 768px (phones)
     - `sm`: >= 768px (tablets)
     - `md`: >= 992px (small laptops)
     - `lg`: >= 1200px (large desktops)
   - Typical pattern: content is "stacked" by default, and becomes multi-column once the screen is wide enough (e.g. `col-sm-*`).

2. **Site-level max width + flexible elements**
   - `static/css/main.css` defines `--content-max-width: 768px;` and applies it via `.container` and `.navbar-inner`.
   - Images default to scaling down instead of overflowing (`img { max-width: 100%; }` and `.img-responsive`).
   - The homepage avatar uses a fixed "ideal" size, but is capped by the viewport (`max-width: 90vw`) so it fits on mobile.

3. **Custom media queries for site-specific behavior**
   - Navigation: custom mobile dropdown behavior is defined under `@media (max-width: 767px)` in `static/css/main.css`.
   - Resume page: uses its own responsive rules (flex layout that becomes stacked on small screens) in `static/css/main.css`.

## Where To Make Changes

Most responsive behavior lives in these places:

- Global layout shell: `_layouts/layout.html`
  - Includes `<meta name="viewport" content="width=device-width, initial-scale=1">` which is required for correct mobile scaling.
- Shared navigation markup: `_includes/header.html`
  - Uses Bootstrap's collapsing navbar pattern (`.navbar-toggle`, `.navbar-collapse`, `data-toggle="collapse"`).
- Custom CSS: `static/css/main.css`
  - Preferred place for new responsive rules and tweaks.

## How We Typically Design Desktop <-> Mobile Behavior

### Principle 1: Start with the phone layout

If the page reads well at ~375px wide, it usually works everywhere.

- One column by default.
- Natural text flow (avoid "left and right columns" that must stay side-by-side).
- Images and long words/URLs must not overflow.

Then, *add* desktop enhancements at larger widths using Bootstrap classes or media queries.

### Principle 2: Let the layout "stack" on small screens

Common desktop-to-mobile changes:

- Two columns -> one column (stacked)
- Horizontal nav -> collapsed nav menu button
- Large margins/padding -> reduced padding so content fits
- Sidebars -> moved below the main content

Bootstrap makes this easy by choosing where the columns begin:

- `col-sm-*` means "stack on phones, become columns at 768px and up".
- `col-md-*` means "stack until 992px".

### Principle 3: Avoid hard-coded widths

Responsive breakage is almost always caused by fixed widths.

Prefer:

- `max-width` over `width`
- `%`, `vw`, `em/rem` over `px` for sizing
- `flex` layouts that can wrap (`flex-wrap: wrap`)

### Principle 4: Use a small number of breakpoints

This site already uses a few key thresholds:

- `767px` (Bootstrap xs/sm boundary) for mobile nav + resume stacking
- `768px-959px` (tablet range) for resume spacing
- `800px` for a navbar dropdown styling edge case

If something feels off at a specific width, we should decide whether:

- it is a one-off bug fix (add a targeted rule), or
- it suggests the global max width / spacing variables should change.

## How The Navbar "Transitions"

Relevant files:

- Markup: `_includes/header.html`
- Styling: `static/css/main.css` (navbar section)
- Behavior: Bootstrap JS + a small script in `_layouts/layout.html` (closes mobile nav when clicking outside)

What happens:

- Desktop widths: links show inline on the right.
- Mobile widths (< 768px): links collapse into a toggle menu.
- This repo adds custom CSS to make the collapsed menu appear as a small dropdown panel on the right.

If the mobile menu looks wrong:

- Check that the breakpoint is correct (`@media (max-width: 767px)`).
- Check that `.navbar-collapse` positioning rules aren't fighting Bootstrap defaults.
- Check link padding/font-size inside the collapsed menu.

## How The Resume Page "Transitions"

The resume page uses a custom flex layout rather than Bootstrap columns:

- Wide screens: sidebar + main content side-by-side.
- Small screens (< 768px): sidebar stacks on top of the content and becomes centered.

If we add new resume blocks, keep the structure consistent so the existing media queries continue to work.

## Testing Checklist (Practical)

1. Run locally: `bundle exec jekyll serve --port 5000`
2. In Chrome/Firefox devtools:
   - Toggle device toolbar.
   - Test common widths: 375px (phone), 768px (tablet), 1024px (small laptop), 1440px (desktop).
   - Rotate (portrait/landscape).
3. Look for:
   - Horizontal scrolling (usually means overflow)
   - Text that is too small or too wide to read comfortably
   - Images that spill out of their container
   - Nav toggle opening/closing reliably
4. When a layout breaks:
   - Identify the element causing overflow (devtools highlight often shows it).
   - Prefer fixing the cause (removing a fixed width, allowing wrapping) over adding more breakpoints.

## What To Do When Adding A New Page/Section

1. Use the standard wrapper (`<div class="container">`) so the site max-width rules apply.
2. Use Bootstrap's grid classes if you need columns, and pick the breakpoint intentionally (`col-sm-*` is the usual default).
3. If a component needs special mobile behavior:
   - Add one focused media query in `static/css/main.css`.
   - Keep it tied to a class specific to that component to avoid site-wide side effects.

