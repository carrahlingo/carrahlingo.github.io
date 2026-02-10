# Home Page Refactor Plan (WORK / PLAY Split)

## Goals (User Requirements)

- Home page content area is a 2-column split:
  - Left: `WORK` with a blue-green gradient background.
  - Right: `PLAY` with a pink-orange gradient background.
- Text is vertically centered within the viewport area and horizontally centered within each column.
- Text color is black.
- `WORK` typography:
  - Typewriter-style font.
  - Animated like it is being typed.
- `PLAY` typography:
  - Sans serif font.
  - Letters wobble in a playful way.
- Animation triggers:
  - Runs once on initial page load.
  - Runs again only when the user hovers the column (and should not loop forever).
- Animation timing:
  - Both text animations have a total play length of `3s`.

## UX / Professional-Grade Details To Include

- Mobile responsiveness:
  - On narrow screens, the two columns should stack (WORK above PLAY) to preserve readability and avoid cramped text.
  - Keep the same animations and centering behavior in the stacked layout.
- Accessibility:
  - Respect `prefers-reduced-motion: reduce` by disabling or simplifying both animations.
  - Ensure keyboard users can retrigger animations via `:focus-visible` (not hover-only).
  - Keep text as real text (not canvas/SVG) for screen readers and SEO.
- Touch devices:
  - Hover does not exist on most phones; provide a tap-based retrigger (e.g., tap column to replay).
- Performance:
  - Implement with minimal JS and CSS animations only (no new heavy libraries).
  - If adding fonts, add only the required weights to avoid large font downloads.
- Visual polish:
  - Keep gradients subtle enough that black text remains readable (avoid overly dark sections).
  - Add a thin divider or subtle seam only if needed; otherwise rely on the color split.

## Implementation Approach (No Code Yet)

### 1. Markup (Home Page)

- Update `index.html` to replace the current centered intro content with a dedicated home "split hero" section.
- Structure:
  - A wrapper section (e.g. `#home-split`) that fills the viewport minus the navbar/footer presence.
  - Two child panels: one for WORK, one for PLAY.
  - Each panel contains a single word rendered as letter spans:
    - WORK can be a single element (typing animation can operate on the whole word).
    - PLAY should be split into per-letter spans to allow staggered wobble.
- Ensure the section is still contained within the existing layout shell (`_layouts/layout.html`) and does not break other pages.

### 2. Layout and Centering (CSS)

- Add new styles in `static/css/main.css` scoped to the home split section.
- Use `display: flex` for:
  - The two-column layout (row direction on desktop).
  - Centering text within each column (align/justify center).
- Use `min-height: 100vh` and account for navbar/footer:
  - Option A: Accept that navbar pushes content slightly (simplest, usually fine).
  - Option B: Use `calc(100vh - <navbar height>)` if we want exact centering; only do this if the simple approach looks off.
- Responsive stacking:
  - At `max-width: 767px`, switch to `flex-direction: column`.

### 3. Background Gradients (CSS)

- WORK panel gradient: blue -> green (choose specific hex colors with good contrast against black text).
- PLAY panel gradient: pink -> orange (choose specific hex colors with good contrast against black text).
- Keep gradients consistent across refreshes (no randomization).

### 4. Typography (Fonts)

- WORK: load a typewriter-style font via Google Fonts, limited weights.
  - Candidate fonts: `IBM Plex Mono`, `Courier Prime`, or `Special Elite` (we will pick one based on feel).
- PLAY: use an intentional sans font (could reuse Source Sans Pro already loaded), or load a more playful sans if needed.
- Apply typography only to the home split words so the rest of the site remains unchanged.

### 5. Animation Behavior (Load Once + Hover Replay)

#### WORK typing animation

- Prefer CSS animation for typing effect:
  - Render WORK as an inline-block with `overflow: hidden` and animated `width` using `steps()`.
  - Optional caret effect via `border-right`.
- Timing:
  - Set the typing animation duration to `3s` total (caret blink, if any, should not create an infinite loop).
- Trigger rules:
  - On initial page load, add a class to start the animation once.
  - On hover/focus, replay by removing and re-adding the animation class (requires a forced reflow in JS).

#### PLAY wobble animation

- Wrap each letter of PLAY in a `span` with a per-letter CSS animation.
- Use a wobble keyframe (small rotation + vertical translation) with a short duration.
- Timing:
  - Ensure the overall effect is `3s` total from first letter start to last letter finish.
  - If staggering letters via `animation-delay`, keep delays within the 3s window (e.g., small delays that do not extend total runtime beyond 3s).
- Trigger rules:
  - Same as WORK: play once on load, replay on hover/focus/tap via toggling a class.

#### Reduced motion

- In `@media (prefers-reduced-motion: reduce)`:
  - Disable typing/wobble animations.
  - Keep the final state readable (word fully visible).

### 6. JavaScript (Minimal, Home Page Only)

- Add a small script (either inline in `index.html` or in a new `static/js/home.js`):
  - On DOM ready, add `is-animating` classes to both panels once.
  - On hover (`mouseenter`) and focus (`focusin`) and tap (`click`), replay the relevant animation by:
    - Removing the class.
    - Forcing reflow (`void el.offsetWidth;`).
    - Re-adding the class.
- Scope the JS so it only runs when the home split section is present.

## File Changes Expected

- `index.html`
  - Replace current home content with WORK/PLAY split section markup.
- `static/css/main.css`
  - Add styles for split layout, gradients, typography, and animations.
- Possibly add one new JS file:
  - `static/js/home.js` (preferred if the script is more than a few lines).
- Possibly update `_layouts/layout.html` if we choose to load a home-only JS file or fonts conditionally.

## Testing Checklist

- Desktop:
  - Load the homepage: both animations run once.
  - Hover WORK panel: typing replays once.
  - Hover PLAY panel: wobble replays once.
  - Move mouse away: animations do not loop.
- Keyboard:
  - Tab focus to each panel: animation replays.
- Mobile:
  - Layout stacks cleanly (WORK then PLAY).
  - Tap each panel: animation replays.
- Reduced motion:
  - With reduced motion enabled: no motion; words remain visible and centered.
- Cross-page regression:
  - About/Blog/Resume unaffected.

## Open Questions (Need Your Preference Before Implementation)

1. Should WORK/PLAY panels be purely visual, or do you want them clickable (e.g., WORK -> Resume, PLAY -> Blog/Photos)?
2. Do you want the existing intro text ("Hi I'm Carrah...") to disappear entirely, or should it be incorporated subtly (e.g., small subtitle under the split)?
3. Any specific font preference for the typewriter feel (clean mono vs vintage typewriter)?
