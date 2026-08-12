---
name: Tempo Chorus
description: A premium hospitality-tech system where a restaurant's scattered guest channels visibly flow together into one platform — dark navy ground, violet/mint brand accents, authored UI-mockup proof and real (never stock) restaurant photography/video knocked back with a violet wash, instead of literal musical notation.
colors:
  ink-900: "#0b0917"
  ink-800: "#12102a"
  ink-700: "#191634"
  ink-600: "#221e42"
  violet-400: "#b19cff"
  violet-500: "#9a7cf2"
  violet-600: "#7d5ae8"
  violet-700: "#5c3fc4"
  mint-300: "#62d9a9"
  mint-400: "#30c18b"
  amber-400: "#f5b544"
  text-hi: "#f4f2fa"
  text-mid: "#b8b0d8"
  text-low: "#8e86b0"
  shadow: "rgb(0 0 0 / 0.9)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.1rem + 6vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.4rem + 4.2vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.65rem, 1rem + 2.2vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.038em"
  subhead:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.1rem + 3.2vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  subtitle:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 0.95rem + 1.7vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.032em"
  statement:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 0.95rem + 1vw, 1.65rem)"
    fontWeight: 600
    lineHeight: 1.32
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1rem + 0.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.05rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.09em"
  caption:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  ui:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  nav:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  panelTitle:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  statValue:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.6rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
rounded:
  hairline: "2px"
  field: "3px"
  chip: "4px"
  panel: "5px"
  stage: "6px"
  round: "50%"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  shell: "78rem"
  card-pad: "clamp(1.5rem, 3.5vw, 2.5rem)"
  column-gap: "clamp(2rem, 6vw, 5rem)"
  section-tight: "clamp(3rem, 7vw, 5rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
  section-loose: "clamp(5rem, 11vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.mint-400}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.hairline}"
    padding: "0.95rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.mint-300}"
    textColor: "{colors.ink-900}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.hairline}"
    padding: "0.95rem 1.6rem"
  button-nav-cta:
    backgroundColor: "{colors.mint-400}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.hairline}"
    padding: "0.6rem 1.15rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-mid}"
    padding: "0.3rem 0"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.text-hi}"
    padding: "0.3rem 0"
  input-field:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.field}"
    padding: "0.7rem 0.85rem"
  card-booking:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.chip}"
    padding: "clamp(1.75rem, 4vw, 2.5rem)"
  card-stage:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.stage}"
    padding: "clamp(1.5rem, 3.5vw, 2.5rem)"
  card-panel:
    backgroundColor: "{colors.ink-600}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.panel}"
    padding: "1.1rem 1.25rem"
  chip-channel:
    backgroundColor: "{colors.ink-600}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.chip}"
    padding: "0.5rem 0.8rem"
  pricing-card:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.75rem, 4vw, 2.5rem)"
---

# Design System: Tempo Chorus

## Overview

**Creative North Star: everything flowing together.**

The client brief that governs this build (`Tempo_Chorus_Website_Design_Brief_for_Claude.docx`) explicitly retired the site's original "Night Score" musical-notation system — no more stave rules, bar lines, braces, noteheads, or a "12 voices" framing repeated through the copy and the UI. What survives from that build, because it was never actually musical notation, is the dark score-paper-navy ground and the authored-UI-mockup idiom (`ProductMocks.astro`, `FeatureArt.astro`): panels, chips, tiles and flow-cards that look like real product surfaces. That idiom is now the site's primary proof system, promoted from a homepage-only feature to the spine of the Features page too.

The one recurring visual idea, replacing the brace, is **flow**: scattered channels (website, phone, text, email, social, reviews, events, guests) connect to a single Chorus node by thin lines, not a bracket. The same connector-line vocabulary (`.wires`, `.flowline` — already prototyped in `ProductMocks.astro`) is the site's one motif for "bringing everything together," used at the hero and echoed sparingly elsewhere. It is a diagram, not a decoration: every line connects two real things.

Color still carries the argument exactly as before: violet is structure (rules, connectors, borders), brand green marks resolution (the answered call, the confirmed booking, the primary action), amber marks the unresolved. Density stays editorial, not dashboard — generous vertical rhythm, short measures (44–68ch), Bricolage Grotesque running large at the top of each beat. The site still refuses the feature-icon grid and the claim-without-proof hero, and it still refuses stock or AI-generated imagery — but real, verified restaurant photography and video, always knocked back with a violet wash, is now a deliberate part of the system (the Four Jobs background, the vignette-timeline media).

**Key Characteristics:**

- Night-navy ground: a four-step ink ladder, no light mode, no white surfaces.
- Flow as the connective idiom: thin connector lines joining channels to outcomes, not bar lines or braces.
- Authored UI-mockup panels (inbox threads, calendars, review queues, service rails) are the primary proof system, used across the homepage and the Features page.
- Violet structures, green resolves, amber marks what is still open.
- Bricolage Grotesque display over Archivo text; no third face, no icon font, no glyph icons.
- Feature graphics and demonstration UI are authored SVG/CSS, not stock photography. Real, user-supplied restaurant photography and video are used deliberately in two places, both always knocked back with a violet wash: the Four Jobs section's ambient background (dark violet wash over muted/looping video), and the small media frame beside each "Here is what that actually means" vignette (a lighter violet wash — 26% mix rather than the Four Jobs treatment's near-full wash — since these read as supporting frames, not a full-bleed backdrop). All of it is verified footage/photos of real restaurant work and moments, never stock or AI-generated imagery.
- Restrained motion: a settle-in arrival at the hero, plus small scroll-triggered entrances on mockup panels — never a global scroll-reveal, never Popmenu-style pinned scroll-jacking.

## Colors

A dark, high-chroma pair — one violet, one green — lifted directly from the Tempo Chorus logo and set against a four-step navy ink ladder, with a single amber reserved for what's unresolved.

### Primary

- **Logo Violet** (`--violet-400`, #b19cff): Structure — rules, connector lines, borders, secondary links and hover underlines.
- **Score Violet** (`--violet-500`, #9a7cf2): The working shade used almost exclusively inside `color-mix(in oklab, … , transparent)` at 16–80% to draw hairlines, borders and dividers. This is the token that produces the site's characteristic near-invisible rules.
- **Deep Violet** (`--violet-600`, #7d5ae8): Heavier structure where a rule needs to read as a mark rather than a division.
- **Shadow Violet** (`--violet-700`, #5c3fc4): One job only — the 26% radial wash in the top-right corner of a product-mock stage, which is what makes a stage read as lit rather than flat.

### Secondary

- **Logo Green** (`--mint-400`, #30c18b): What Chorus resolves. The primary button, the hero headline accent, the focus ring, the convergence node and its link, the completed step, the confirmed card border, the active nav underline.
- **Bright Green** (`--mint-300`, #62d9a9): The lit variant — button hover, resolved *text* (a thread reply, a stat figure, a completed-step label).

### Tertiary

- **Alarm Amber** (`--amber-400`, #f5b544): The unresolved. Used sparingly: an incoming-call pulse, a flagged review, a moment nobody was there for. Never on an action.

### Neutral

- **Score Ground** (`--ink-900`, #0b0917): Page background, button text on green, input backgrounds.
- **Second Stave** (`--ink-800`, #12102a): The alternating section ground. Section rhythm on this site is carried by this one step, not by borders.
- **Stage** (`--ink-700`, #191634): The panel a mock, a pricing card, or the booking form floats on.
- **Surface** (`--ink-600`, #221e42): The product surface itself — panels, tiles, chips, flow cards. The lightest ground in the system.
- **Text High** (`--text-hi`, #f4f2fa): Headings, strong body, list items that carry a claim.
- **Text Mid** (`--text-mid`, #b8b0d8): Standing body copy, subs, nav at rest, metadata.
- **Text Low** (`--text-low`, #8e86b0): Uppercase micro-labels, timestamps, deliberately-recessive copy.

### Named Rules

**The Brand-Derived Palette Rule.** `--violet-400` (#b19cff) and `--mint-400` (#30c18b) are lifted verbatim from the real Tempo Chorus logo at `public/brand/chorus-logo.svg` (`.st2` and `.st1`). They are brand facts, not design choices. Every other violet and green is a derived shade; if the brand asset changes, the ramps change with it.

**The Resolution Rule.** Violet is the system, green is what the system resolved, amber is what is still open. A color is never chosen for variety.

**The Two-Green Rule.** Brand green appears on both the hero `h1` accent and the primary CTA. Settled and user-confirmed — do not "fix" it by desaturating the headline accent or moving the CTA to violet.

**The Hairline Mix Rule.** Structural lines are never a flat token. They are `color-mix(in oklab, var(--violet-500) N%, transparent)` where N is 16–34% for dividers and borders, 55–85% for lines that must be seen as marks.

## Typography

**Display Font:** Bricolage Grotesque (variable, `opsz 12..96, wdth 75..100, wght 400..800`), falling back to `ui-sans-serif, system-ui, sans-serif`
**Body Font:** Archivo (`wght 400..700`, plus italic 400), falling back to `ui-sans-serif, system-ui, sans-serif`

**Character:** Bricolage is a wide, slightly eccentric grotesque that holds up at genuinely large sizes and reads as authored rather than defaulted; Archivo underneath it is plain, wide-aperture and unfussy, matching a "talk to the operator, not the marketer" voice. One loud face, one quiet one — no third.

### Hierarchy

- **Display** (700, `clamp(2.75rem, 1.1rem + 6vw, 5.6rem)`, line-height 1.02, tracking −0.045em): the `h1` on every page.
- **Headline** (700, `clamp(2.1rem, 1.4rem + 4.2vw, 4.4rem)`, tracking −0.03em): the `.eyeless-h2` utility, the section `h2` that opens a beat.
- **Title** (700, `clamp(1.65rem, 1rem + 2.2vw, 2.75rem)`, tracking −0.038em): a category or concept name.
- **Statement** (display face, 600, `clamp(1.3rem, 0.95rem + 1vw, 1.65rem)`, line-height 1.32, tracking −0.025em): a recurring "one sentence that carries the beat" — setting body-length prose in the display face at 600 promotes a paragraph without turning it into a heading.
- **Body** (400, `clamp(1rem, 0.96rem + 0.2vw, 1.05rem)`, line-height 1.6): all standing prose. Measures held at 44–68ch, never left to the container.
- **Lede** (400, `clamp(1.05rem, 1rem + 0.5vw, 1.3rem)`, line-height 1.5, `--text-mid`, max 46ch): the `.lede` utility under a section headline.
- **Label** (600, 0.72rem, `letter-spacing: 0.09em`, uppercase, `--text-low`): micro-labels inside simulated product chrome — panel headers, stat tiles, flow-card dates.

### Named Rules

**The Caption-Below Rule.** No eyebrow, kicker or uppercase label ever sits *above* a heading. The subordinate line lands *below* its heading as a caption. Deliberate and load-bearing.

**The Optical Tracking Rule.** Tracking tightens as size grows: −0.025em for statement copy, −0.03em for section headings, −0.038 to −0.045em for titles and display.

**The Two-Face Rule.** Bricolage for anything that carries emphasis (headings, buttons, nav, chips, statements, big figures); Archivo for anything read as prose. No third family, no monospace, no icon font.

## Layout

**Container.** One shell: `width: min(100% - (var(--gutter) * 2), var(--shell))` — max 78rem, gutters `clamp(1.25rem, 5vw, 4rem)`. Every section wraps its content in `.shell`; full-bleed backgrounds are applied to the section, never to the shell.

**Vertical rhythm.** Sections breathe on a three-step clamp ladder: tight `clamp(3rem, 7vw, 5rem)`, standard `clamp(4.5rem, 10vw, 8rem)`, loose `clamp(5rem, 11vw, 9rem)`. Section separation is carried by the `--ink-800` alternation plus that whitespace, not by boxes.

**Column model.** Two-column asymmetric grids, always explicitly *unequal* so the page never reads as a 50/50 template: hero `0.92fr / 1.08fr`, feature category `0.72fr / 1.28fr`, concept `1.15fr / 0.85fr`, demo `1.05fr / 0.95fr`. Gaps are `clamp(2rem, 6vw, 5rem)`. Collapse to one column at `62rem` unless a component documents its own hinge.

**Sticky offsets.** The masthead is `position: sticky; top: 0; z-index: 50` with `backdrop-filter: blur(14px)` over `ink-900` at 88%. Anchor-linked targets carry `scroll-margin-top: 5rem`.

### Named Rules

**The No-Hidden-Menu Rule.** Below `46rem` the masthead becomes two rows — mark and CTA on row one, the full nav as a horizontally scrollable row beneath (scrollbar hidden). No hamburger, no drawer, no disclosure. Every page stays reachable on a phone in one tap.

**The Held-Measure Rule.** Prose never fills its column. Every text block declares a `ch` measure. If a new block has no `max-width` in `ch`, it is unfinished.

## Elevation & Depth

The ground is flat. Depth comes from the tonal ink ladder — `ink-900` page → `ink-800` alternating section → `ink-700` stage → `ink-600` surface — plus 1px violet-mix borders. Shadows appear in exactly two situations: under a simulated product surface floating on a stage, and under the green CTA as a colored glow.

### Shadow Vocabulary

- **Action glow** (`box-shadow: 0 6px 22px -8px color-mix(in oklab, var(--mint-400) 60%, transparent)`): under the primary button at rest; opens on hover.
- **Surface seat** (`box-shadow: 0 22px 44px -26px rgb(0 0 0 / 0.9)`): panels and stat tiles inside a mock stage. Flow cards and pricing cards use a shallower `0 18px 38px -24px`, chips shallower still `0 10px 22px -14px`.
- **Form lift** (`box-shadow: 0 28px 60px -34px rgb(0 0 0 / 0.85)`): the booking card, the deepest seat on the site.
- **Focus ring** (`box-shadow: 0 0 0 3px color-mix(in oklab, var(--mint-400) 22%, transparent)`) plus a `--mint-400` border, on form fields. Everywhere else focus is the global `outline: 3px solid var(--mint-400); outline-offset: 3px`.

### Named Rules

**The Shadow-As-Seat Rule.** All shadows are large-blur, large-negative-spread and offset straight down. They seat an object on a surface; they never outline it.

**The Two-Shadow Ceiling Rule.** A shadow is legal only on (a) the green primary action, or (b) an element depicting product UI inside a mock stage or a pricing card. Otherwise use the ink ladder and a violet hairline.

## Shapes

Corners are near-square: **2px** (buttons, focus-visible), **3px** (form fields), **4px** (chips, the booking card), **5px** (product panels, tiles, flow cards, pricing cards), **6px** (a mock stage). Circles (`border-radius: 50%`) are used only for the convergence node, status pulses and the plain list-marker dot.

**The connective primitives — the actual form language:**

- **Hairline** (`.hairline` in `global.css`) — a 1px full-width line whose violet fades to transparent at both ends. Used between sections and inside cards.
- **Dot** (`.dot` in `global.css`) — a plain 0.42em circle, filled with `currentColor`. The bullet for every list on the site. Green when the line describes something Chorus resolves, violet when it describes a capability. No rotation, no notation reference.
- **Flow line / wire** — a thin violet-to-mint connector (SVG path or a straight `.flowline` div) joining a channel to an outcome or a step to the next step. This is the one recurring "bringing it together" motif; it draws a real connection, never decoration.

### Named Rules

**The Plain-Marker Rule.** There are no bullet glyphs, no check marks, no icon set. A list item is introduced by `.dot` or by nothing.

**The Hairline-Or-Flow Rule.** A separating line is 1px and violet-mixed into near-invisibility (`.hairline`). A line that connects two things is a flow line, drawn violet-to-mint or violet-to-violet depending on whether it ends in a resolution. There is no third line weight and no bar-line-as-decoration.

## Components

### Buttons

- **Shape:** effectively square (2px radius), display face at 700, 1.02rem, tracking −0.015em, `inline-flex` with a 0.7rem gap.
- **Primary** (`.btn`): brand green ground (`--mint-400`) with ink-900 text, `0.95rem 1.6rem` padding, action glow beneath. Themed through two locals, `--btn-bg` / `--btn-fg`.
- **Hover / Focus:** background lifts to `--mint-300`, `translateY(-2px)`, glow opens; `:active` returns to `translateY(0)`. All transitions `0.25s var(--ease-out)` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Ghost** (`.btn--ghost`): transparent ground, `--text-hi` text, a 1px inset violet ring at 45%; hover fills with `--violet-600` at 22% and the ring goes solid.
- **Quiet action:** not a button — display face 600, `--violet-400`, 1px underline that goes solid on hover.

### Chips

`--ink-600` ground, 1px violet border at 40%, 4px radius, `0.5rem 0.8rem` padding, display face 600 at 0.86rem, surface-seat shadow. Static labels only (channel tags, concept "leads" rows) — not filters, no selected state.

### Cards / Containers

- **Stage** (`.stage`): the frame a mockup lives in. `--ink-700` plus a 26% `--violet-700` radial wash from `78% 12%`, 1px violet border at 22%, 6px radius, `clamp(1.5rem, 3.5vw, 2.5rem)` padding.
- **Panel** (`.panel`): the depicted product surface. `--ink-600`, 1px violet border at 34%, 5px radius, surface-seat shadow.
- **Tile / Flow card:** same recipe as panel at reduced padding; a resolved flow card swaps its border to `--mint-400` at 55% and its title to `--mint-300`.
- **Booking card** (`.booking`): `--ink-700`, 1px violet border at 30%, 4px radius, form-lift shadow.
- **Pricing card:** `--ink-700`, 1px violet border at 30% (mint at 55% for the "Most Popular" tier), 5px radius, surface-seat shadow, `clamp(1.75rem, 4vw, 2.5rem)` padding.

### Inputs / Fields

`--ink-900` ground (darker than the card it sits in — fields recede, they don't lift), 1px violet border at 32%, 3px radius, `0.7rem 0.85rem` padding. Hover brightens the border to `--violet-400` at 60%; focus goes solid `--mint-400` with a 3px green glow ring.

### Navigation

- **Masthead:** sticky, `ink-900` at 88% with a 14px backdrop blur, closed by a 22% violet hairline. Links are display face 600 at 1.05rem, `--text-mid` at rest, with a 2px transparent bottom border that turns `--violet-400` on hover and `--mint-400` on `aria-current="page"`. Order: Overview / What it does / Who it's for / Pricing / Book a demo.
- **Mobile (≤46rem):** two rows — see **The No-Hidden-Menu Rule**.
- **Footer:** `--ink-800` above a 24% violet hairline, wordmark plus prose, a vertical nav in the display face that goes green on hover, a base row carrying the copyright and the illustrative-content disclosure.

### Signature: PhoneField (the hero)

Channel labels stacked as `name / hairline-rule` rows, each joined by a thin flow line that converges on a circular green node — badged right at the seam of a stylized phone showing a restaurant menu screen (name, rating, category tabs, dish rows with a color-swatch stand-in for a photo), whose content auto-scrolls in a seamless loop. The node's core is sized generously (80% of its halo, a 58% mark) so the Tempo mark reads clearly rather than looking swallowed by whitespace. Each label's resting place is its true layout position; the scatter (`--dx` in `vw`, `--dy` in `rem`, `--rot` in degrees) is a transform applied on top, so the arrival is compositor-safe. Strand endpoints extend slightly past the node's near edge (not stopping exactly at the boundary) so the convergence reads as solid even before the arrival animation settles. Below `36rem` the phone grows rather than shrinks — dish names and prices stay legible — while the channel list and node compress to make room.

### Signature: Authored UI mockups (ProductMocks / FeatureArt)

The site's primary proof system: an inbox thread merging three channels into one guest record, an after-hours call answered and confirmed, a content calendar staging a month of sends, a review queue with one item flagged for a human, a service rail showing a resold table. Each lives inside a `.stage`, uses `.panel`/`.chip`/`.tile`/`.fcard` for its internal surfaces, and enters with a small scroll-triggered stagger (list rows/cards fade and lift in sequence) rather than sitting static — the site's answer to "animated graphics that show the feature working," kept restrained rather than pinned-scroll-driven.

### Motion

The site's animation engine is [GSAP](https://gsap.com/) plus its ScrollTrigger plugin, via one shared module (`src/scripts/motion.js`, initialized once from `Base.astro`) — not CSS `@keyframes`. GSAP owns every animated transform directly through its own internal transform cache, which matters here specifically: an element that needs both a *permanent* positioning transform (centering via `xPercent`/`yPercent`, a per-item rotation) and an *animated* one can't get the permanent part from CSS once GSAP also touches that element — GSAP composites `x`/`y`/`rotation`/`scale` into one `transform` and silently drops a CSS-only `translate`/`rotate` set outside it. The fix, used everywhere this applies (the hero's channel scatter, the "Why Chorus" orbit tablets), is to hand GSAP the permanent part too (`gsap.set` once, un-animated) rather than leaving it in CSS.

`--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` (GSAP's `power3.out`, the closest named equivalent) remains the house ease; CSS state transitions (color/border/background/shadow on hover, focus, etc.) still use plain CSS transitions at 0.2–0.3s, untouched by GSAP.

**The Restrained-Motion Rule.** One authored arrival at the hero (channels scatter, settle, connect to the node — a GSAP timeline, not scroll-triggered, since it's the first-viewport moment). Mockup panels and list groups (`[data-reveal]`/`[data-reveal-solo]`) get a single small entrance stagger the first time they scroll into view, once. The homepage vignette timeline is the one deliberate scroll-*scrubbed* moment on the site: its spine grows in sync with scroll progress (`ScrollTrigger` with `scrub: true`) while each vignette still gets a one-shot fade-in — the page itself never pins or freezes, which is what keeps this from becoming Popmenu-style scroll-jacking. Never a global scroll-reveal on every section, never a second competing hero sequence.

`initMotion()` checks `prefers-reduced-motion` once, up front: reduced-motion visitors skip GSAP's animated calls entirely and get every element's final state set directly (`gsap.set`, no tween). There is no `.js`-class CSS gating anymore — GSAP sets each animated element's hidden starting state itself at runtime, so without JS nothing is ever hidden in the first place.

## Do's and Don'ts

### Do:

- **Do** take violet and green from the logo. Derive new shades from them; do not re-pick them by eye.
- **Do** keep green on both the hero headline accent and the primary CTA. Settled, user-confirmed.
- **Do** author every image. All imagery on this site is SVG or CSS drawn by hand.
- **Do** use `.dot` as the only list marker, colored green for a resolution and violet for a capability.
- **Do** use a thin flow line whenever the point is "these things connect" — a channel to the node, a trigger to an automated response, a step to the next step.
- **Do** give every prose block an explicit `ch` measure (44–68ch).
- **Do** make two-column grids unequal and collapse them at 62rem unless documented otherwise.
- **Do** put the subordinate line *below* its heading, as a caption.
- **Do** register every new animated element with `motion.js` so `prefers-reduced-motion` and the no-JS resting state stay covered centrally, rather than writing a one-off reduced-motion block per component.
- **Do** keep the full nav visible on phones as a second masthead row.
- **Do** keep demonstration data clearly labeled illustrative (footer disclosure) until real material lands.

### Don't:

- **Don't** add stock or AI-generated photography, ever. Real, verified restaurant photography/video is allowed only where it's already established (Four Jobs background, vignette-timeline media) and only knocked back with a violet wash — don't add it as a plain, untinted image elsewhere without deciding that on purpose.
- **Don't** add a global scroll-reveal, a second competing hero sequence, or pinned/scrubbed scroll-jacking.
- **Don't** put an eyebrow, kicker or uppercase label above a heading anywhere on a page.
- **Don't** introduce a light theme, a white surface, or a fifth ink step.
- **Don't** use amber on an action, or green on anything that is not resolved, complete or the primary path.
- **Don't** add icons — no icon font, no glyph set, no third-party icon package.
- **Don't** add a shadow to anything that is not the green CTA, a depicted product surface, or a pricing card.
- **Don't** round corners past 6px.
- **Don't** add a third type family or a monospace.
- **Don't** build a feature-icon grid, an endless grid of identical SaaS cards, or a claim-without-proof hero.
- **Don't** reintroduce stave rules, bar lines, braces, noteheads, or a fixed "voices" count anywhere in copy or UI — this was the explicit, brief-mandated retirement this version records.
