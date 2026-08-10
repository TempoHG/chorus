---
name: Tempo Chorus
description: A restaurant's guest channels drawn as a choral score — many voices braced into one system reading the same measures.
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
  marker:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontStyle: "italic"
rounded:
  hairline: "2px"
  field: "3px"
  chip: "4px"
  panel: "5px"
  stage: "6px"
  brace: "14px"
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
---

# Design System: Tempo Chorus



## Overview

**Creative North Star: "The Night Score"**

The whole system is a sheet of music read in a dark room. The ground is score paper at night — a ladder of near-black navies (`#0b0917` up to `#221e42`) that never lightens into a page. Onto that ground the interface draws the marks a score is made of: hairline stave rules, 2px bar lines opening each block, elliptical noteheads instead of bullets, and one literal brace in the hero that clamps twelve separate voices into a single system. Nothing here is a generic SaaS surface with a musical skin applied; the notation *is* the component vocabulary, and every rule, tick and dot on the page is a member of it.

Color carries the argument. Violet is the score itself — the rules, the braces, the bar lines, the structure that lets separate parts be read together. Brand green marks what Chorus resolves: the leading voice, the answered call, the confirmed booking, the action the operator should take. Amber marks the unresolved — the missed call, the review that sat for two weeks, the timestamp of a moment nobody was there for. An operator can read the state of any composition on this site by color alone, without reading a word.

Density is editorial, not dashboard. Sections are separated by generous vertical rhythm (`clamp(4.5rem, 10vw, 8rem)` typical), measures are held short (44–68ch), and the display face — Bricolage Grotesque, tightly tracked — is allowed to run genuinely large at the top of each beat. The site refuses two specific things by construction: the feature-icon grid (the features page is twelve *voices* on a stave, one of which is given the full measure every fourth turn) and the claim-without-proof hero (the first viewport shows the convergence happening rather than asserting "all-in-one platform"). It also refuses photography entirely — see **The Authored Image Rule**.

**Key Characteristics:**

- Night score-paper ground: a four-step navy ink ladder, no light mode, no white surfaces.
- Notation as component language: stave rules, bar lines, noteheads, braces, a chain spine.
- Violet structures, green resolves, amber marks what is still open.
- Bricolage Grotesque display over Archivo text; no third face, no icon font, no glyph icons.
- All imagery is authored SVG/CSS. No photography anywhere.
- Exactly one authored motion moment on the entire site.

## Colors

A dark, high-chroma pair — one violet, one green — lifted directly from the Tempo Chorus logo and set against a four-step navy ink ladder, with a single amber reserved for failure states.

### Primary

- **Logo Violet** (`--violet-400`, #b19cff): The score. Every stave rule, bar line, brace, connector wire, notehead-on-a-supporting-voice, secondary link and hover underline. It is by far the most-used accent in the build (23 direct uses plus 39 uses of its `--violet-500` working shade) because it is structure, not emphasis.
- **Score Violet** (`--violet-500`, #9a7cf2): The working shade used almost exclusively inside `color-mix(in oklab, … , transparent)` at 16–80% to draw hairlines, borders and dividers. This is the token that produces the site's characteristic near-invisible rules.
- **Deep Violet** (`--violet-600`, #7d5ae8): Heavier structure — the vignette chain spine, the stave lines behind the "Why Chorus?" title, unweighted arrangement bars.
- **Shadow Violet** (`--violet-700`, #5c3fc4): One job only — the 26% radial wash in the top-right corner of a product-mock stage, which is what makes a stage read as lit rather than flat.

### Secondary

- **Logo Green** (`--mint-400`, #30c18b): What Chorus resolves. The primary button, the hero headline accent, the focus ring, the convergence node and its link, the completed step, the confirmed card border, the leading voice in an arrangement, the last stop on the guest journey, the active nav underline.
- **Bright Green** (`--mint-300`, #62d9a9): The lit variant — button hover, resolved *text* (the Chorus reply in a thread, the "47" figure, the final journey step label, a leading channel's name). Where `--mint-400` is a surface, `--mint-300` is type on dark.

### Tertiary

- **Alarm Amber** (`--amber-400`, #f5b544): The unresolved. Used sparingly and deliberately: the vignette markers (the timestamp of the moment), the after-hours incoming pulse, the strike-through on "Twelve places to look", the stray fragments in the alternate chaos hero. It never appears on an action.

### Neutral

- **Score Ground** (`--ink-900`, #0b0917): Page background, button text on green, the mark inside the green convergence node, input backgrounds.
- **Second Stave** (`--ink-800`, #12102a): The alternating section ground — the "what it is not" section, the guest journey, the features parts block, the concepts block, the footer. Section rhythm on this site is carried by this one step, not by borders.
- **Stage** (`--ink-700`, #191634): The panel a mock or the booking form floats on.
- **Surface** (`--ink-600`, #221e42): The product surface itself — panels, tiles, chips, flow cards. This is the lightest ground in the system.
- **Text High** (`--text-hi`, #f4f2fa): Headings, strong body, list items that carry a claim.
- **Text Mid** (`--text-mid`, #b8b0d8): Standing body copy, subs, nav at rest, metadata.
- **Text Low** (`--text-low`, #8e86b0): Uppercase micro-labels, the quiet second paragraph, timestamps, deliberately-recessive copy.

### Named Rules

**The Brand-Derived Palette Rule.** `--violet-400` (#b19cff) and `--mint-400` (#30c18b) are not design choices — they are lifted verbatim from the real Tempo Chorus logo at `public/brand/chorus-logo.svg`, where they exist as `.st2` and `.st1`. They are brand facts and are not freely changeable. Every other violet and green in the system is a derived shade of those two; if the brand asset changes, the ramps change with it, and never the other way around.

**The Resolution Rule.** Violet is the system, green is what the system resolved, amber is what is still open. A color is never chosen for variety. Before adding an accent, name which of those three states it reports.

**The Two-Green Rule.** Brand green appears on *both* the hero `h1` accent ("All together now.") and the primary CTA. This is settled and user-confirmed, not drift, and it is the one deliberate exception to keeping an action color unique to actions. Do not "fix" it by desaturating the headline accent or moving the CTA to violet.

**The Hairline Mix Rule.** Structural lines are never a flat token. They are `color-mix(in oklab, var(--violet-500) N%, transparent)` where N is 16–34% for dividers and borders, 55–85% for lines that must be seen as marks. This is what keeps a dark page from turning into a grid of visible boxes.

*Declared but unused in the build:* `--ink-500`, `--violet-900`, `--mint-500`, `--amber-500`, `--paper`, `--measure`. They are reserve, not system. Do not treat their presence in `global.css` as permission to introduce a fifth ink or a second amber without a reason.

## Typography

**Display Font:** Bricolage Grotesque (variable, `opsz 12..96, wdth 75..100, wght 400..800`), falling back to `ui-sans-serif, system-ui, sans-serif`
**Body Font:** Archivo (`wght 400..700`, plus italic 400), falling back to `ui-sans-serif, system-ui, sans-serif`
**SVG text.** `<text>` inside a `viewBox` is sized in drawing units, not the type ramp — those values scale with the artwork and are deliberately outside the ramp.

**Label/Mono Font:** none — labels are Archivo at 0.72rem, uppercase, `letter-spacing: 0.08–0.09em`

**Character:** Bricolage is a wide, slightly eccentric grotesque that holds up at genuinely large sizes and reads as authored rather than defaulted; Archivo underneath it is plain, wide-aperture and unfussy, matching the product's "talk to the operator, not the marketer" voice. The pairing is one loud face and one quiet one — there is no third.

### Hierarchy

- **Display** (700, `clamp(2.5rem, 1.1rem + 6vw, 5.6rem)`, line-height 1.02, tracking −0.045em): the `h1` on every page. The together-hero variant runs slightly smaller (`clamp(2.3rem, 1.1rem + 4.4vw, 4.4rem)`) because it shares the viewport with the hero field.
- **Headline** (700, `clamp(2.25rem, 1.4rem + 4.2vw, 4.5rem)`, tracking −0.03em): the `.eyeless-h2` utility — the section `h2` that opens a beat. Variants in place: the "Why Chorus?" title at `clamp(2.4rem, 1.2rem + 4.4vw, 5rem)` / −0.05em, the demo title at `clamp(2rem, 1.1rem + 3.4vw, 3.6rem)` / −0.04em, page-closing titles at `clamp(1.9rem, 1.1rem + 3.2vw, 3.5rem)` / −0.04em.
- **Title** (700, `clamp(1.6rem, 1rem + 2.2vw, 2.75rem)`, tracking −0.038em): a voice name on the features page. Concept names run `clamp(1.8rem, 1.1rem + 2.6vw, 3.1rem)`; a vignette trigger runs `clamp(1.4rem, 0.95rem + 1.7vw, 2.35rem)` and its wide variant `clamp(1.6rem, 1rem + 2.3vw, 2.9rem)`.
- **Statement** (display face, 600, `clamp(1.2rem, 0.95rem + 1vw, 1.65rem)`, line-height 1.32, tracking −0.025em): the recurring "one sentence that carries the beat" — the chain coda, the journey thread, a features voice's `part__line`, the "Why Chorus?" lead. Setting body-length prose in the display face at 600 is a system move, not an accident; it is how a paragraph is promoted without becoming a heading.
- **Body** (400, `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)`, line-height 1.6): all standing prose. Measures are held at 44–68ch and never left to the container.
- **Lede** (400, `clamp(1.125rem, 1.02rem + 0.5vw, 1.4rem)`, line-height 1.5, `--text-mid`, max 46ch): the `.lede` utility under a section headline.
- **Label** (600, 0.72rem, `letter-spacing: 0.09em`, uppercase, `--text-low`): micro-labels *inside simulated product chrome only* — panel headers, stat tiles, flow-card dates. Page-level jump labels use the same treatment at 0.72rem / 0.08em.
- **Marker** (Archivo italic 400, 1rem, `--amber-400`): the vignette timestamp. The only italic in the system.

### Named Rules

**The Caption-Below Rule.** No eyebrow, kicker or uppercase label ever sits *above* a heading. The subordinate line always lands *below* its heading as a caption — the vignette marker below its trigger, the concept kicker below its name. This is deliberate and load-bearing; do not "restore" the label-above-headline pattern.

**The Optical Tracking Rule.** Tracking tightens as size grows: −0.025em for statement copy, −0.03em for section headings, −0.038 to −0.045em for titles and display, −0.05em at the largest. Base heading tracking is −0.03em in `global.css`; anything set larger than a section heading must tighten further.

**The Two-Face Rule.** Bricolage for anything that carries emphasis (headings, buttons, nav, chips, statements, channel names, big figures); Archivo for anything that is read as prose. No third family, no monospace, no icon font.

## Layout

**Container.** One shell: `width: min(100% - (var(--gutter) * 2), var(--shell))` — max 78rem, gutters `clamp(1.25rem, 5vw, 4rem)`. Every section wraps its content in `.shell`; full-bleed backgrounds are applied to the section, never to the shell.

**Vertical rhythm.** Sections breathe on a three-step clamp ladder: tight `clamp(3rem, 7vw, 5rem)`, standard `clamp(4.5rem, 10vw, 8rem)`, loose `clamp(5rem, 11vw, 9rem)`. Inside a section, the ladder continues at `clamp(2.5rem, 6vw, 4rem)` between blocks and `clamp(1.5rem, 3.5vw, 2.5rem)` inside a card. Section separation is carried by the `--ink-800` alternation plus that whitespace, not by boxes.

**Column model.** Two-column asymmetric grids, always with an explicitly *unequal* split so the page never reads as a 50/50 template: hero `0.92fr / 1.08fr`, features voice `0.72fr / 1.28fr`, concept `1.15fr / 0.85fr`, demo `1.05fr / 0.95fr`, "Why Chorus?" `1fr / 1fr` (the one intentional even split, because the stave must frame the title). Gaps are `clamp(2rem, 6vw, 5rem)`.

**Breakpoints actually used** (all `rem`, all in component/page scope — there is no shared breakpoint token):

| Width | What changes |
| --- | --- |
| `34rem` (max) | Arrangement chart shortens from 10.5rem to 7.5rem and its rotated labels stay at 0.72rem. |
| `40rem` (max) | Inbox mock stacks; the connector `wires` SVG is hidden; thread rows reflow to two columns. |
| `46rem` (max) | Masthead becomes two rows — see **The No-Hidden-Menu Rule**. |
| `56rem` (max) | ConvergenceScore swaps its landscape SVG for the portrait SVG. |
| `60rem` (min/max) | Features voice grid collapses to one column; above it, the voice-name column becomes `position: sticky; top: 6.5rem`. Also the chaos-hero type ramp. |
| `62rem` (min/max) | The primary layout hinge: hero, "Why Chorus?", concept and demo grids all collapse to one column. Above it, vignettes take their staggered indents. |
| `66rem` (max) | Product-mock grid goes single-column and the ad-to-table flow cards stack vertically. |
| `68rem` (max) | Guest journey rotates from a 9-column horizontal timeline to a vertical rail. |

**Signature spatial move — the off-beat entry.** Above `62rem`, vignettes 3–7 in the chain take increasing left indents (`7rem`, `2.5rem`, `11rem`, `4.5rem`, `14rem`) off a 2px violet spine, each connected back to the spine by a hairline `::before` whose width is computed from that indent. The effect is voices entering at different points in the bar. Below 62rem all indents collapse to zero and the spine stays.

**Sticky offsets.** The masthead is `position: sticky; top: 0; z-index: 50` with `backdrop-filter: blur(14px)` over `ink-900` at 88%. Anything anchor-linked carries `scroll-margin-top: 5rem` (sections) or `5.5rem` (in-page article targets); the sticky voice-name column sits at `top: 6.5rem`.

### Named Rules

**The No-Hidden-Menu Rule.** Below `46rem` the masthead becomes two rows — mark and CTA on row one, the full nav as a horizontally scrollable row beneath (scrollbar hidden, `white-space: nowrap`). There is no hamburger, no drawer, no disclosure. All three pages stay reachable on a phone in one tap.

**The Held-Measure Rule.** Prose never fills its column. Every text block declares a `ch` measure: 44ch (hero sub), 46ch (lede, demo sub), 48–60ch (body), 54ch/68ch (vignette narrow/wide), 26ch (a promoted `part__line` on a turn row). If a new block has no `max-width` in `ch`, it is unfinished.

## Elevation & Depth

The ground is flat. Depth comes from the tonal ink ladder — `ink-900` page → `ink-800` alternating section → `ink-700` stage → `ink-600` surface — plus 1px violet-mix borders. Shadows exist, but they are not a general elevation scale; they appear in exactly two situations: under a *simulated product surface* floating on a stage, and under the green CTA as a colored glow. No section, no heading, no divider and no page-level container carries a shadow.

### Shadow Vocabulary

- **Action glow** (`box-shadow: 0 6px 22px -8px color-mix(in oklab, var(--mint-400) 60%, transparent)`): under the primary button at rest. On hover it opens to `0 12px 30px -10px … 70%`. This is the only colored shadow in the system.
- **Surface seat** (`box-shadow: 0 22px 44px -26px rgb(0 0 0 / 0.9)`): panels and stat tiles inside a mock stage. Flow cards use a shallower `0 18px 38px -24px`, chips a shallower still `0 10px 22px -14px`.
- **Form lift** (`box-shadow: 0 28px 60px -34px rgb(0 0 0 / 0.85)`): the booking card, the deepest seat on the site.
- **Halo ring** (`box-shadow: 0 0 0 5px color-mix(in oklab, <accent> 20%, transparent)`): a state ring, not a shadow — green around the final journey node, amber around the after-hours pulse.
- **Focus ring** (`box-shadow: 0 0 0 3px color-mix(in oklab, var(--mint-400) 22%, transparent)`) plus a `--mint-400` border, on form fields. Everywhere else focus is the global `outline: 3px solid var(--mint-400); outline-offset: 3px`.

### Named Rules

**The Shadow-As-Seat Rule.** All shadows are large-blur, large-negative-spread and offset straight down (`0 Ypx Bpx -Spx`). They seat an object on a surface; they never outline it. A hard, tight or offset-sideways shadow does not belong in this world.

**The Two-Shadow Ceiling Rule.** A shadow is legal only on (a) the green primary action, or (b) an element that is depicting product UI inside a mock stage. If neither is true, use the ink ladder and a violet hairline instead.

## Shapes

Corners are near-square. The radius scale is short and deliberately unfashionable: **2px** (buttons, arrangement bar caps, focus-visible), **3px** (form fields), **4px** (chips, the booking card), **5px** (product panels, tiles, flow cards), **6px** (a mock stage). Nothing on the site is "rounded" in the soft-SaaS sense — the two exceptions are both notation: the hero brace, which is a border-only rectangle with `border-radius: 0 14px 14px 0` and no left edge so it reads as an accolade, and `border-radius: 50%` circles used only for noteheads, dots and the convergence node.

**The notation primitives, which are the actual form language:**

- **Stave rule** — a 1px full-width line whose violet fades to transparent at both ends (12%/88% stops). Available globally as `.stave-rule`.
- **Bar line** — a 2px violet vertical tick, `clamp(2rem, 4vw, 3.25rem)` tall, absolutely positioned at `left: 0; top: -1px`, opening every `.part` (features) and `.concept` (concepts). Every fourth features voice — the "turn" row — gets a taller (`clamp(2.5rem, 5vw, 4rem)`) green bar line instead of violet.
- **Notehead** — `.notehead` in `global.css`: `0.7em × 0.55em`, `border-radius: 50%`, `rotate(-22deg)`, filled with `currentColor`. This is the bullet for every list on the site. Green when the line describes something Chorus resolved, violet when it describes capability.
- **Brace** — the hero's border-only accolade joining twelve voices into one system.
- **Spine** — a 2px vertical gradient rail, transparent at both ends, running the length of the vignette chain.

### Named Rules

**The Notehead Rule.** There are no bullet glyphs, no check marks, no icon set. A list item is introduced by a `.notehead` or by nothing. If a new list needs a marker, it uses `.notehead` at the color that reports its state.

**The Hairline-Or-Bar Rule.** A separating line is 1px and violet-mixed into near-invisibility. A line that *opens* something is 2px, solid violet (or solid green if the thing it opens is a resolution). There is no third line weight.

## Components

### Buttons

- **Shape:** effectively square (2px radius), display face at 700, 1.02rem, tracking −0.015em, `inline-flex` with a 0.7rem gap.
- **Primary** (`.btn`): brand green ground (`--mint-400`) with ink-900 text, `0.95rem 1.6rem` padding, action glow beneath. Themed through two locals, `--btn-bg` / `--btn-fg`, so variants re-skin by reassigning them rather than by overriding properties.
- **Hover / Focus:** background lifts to `--mint-300`, `translateY(-2px)`, glow opens; `:active` returns to `translateY(0)`. All transitions `0.25s var(--ease-out)` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Ghost** (`.btn--ghost`): transparent ground, `--text-hi` text, a 1px inset violet ring at 45%; on hover the ring goes solid `--violet-400` and the ground fills with `--violet-600` at 22%. Present in the system, currently unused on the three shipped pages.
- **Quiet action** (`.hero__link`, `.lead__jump a`): not a button — display face 600, `--violet-400`, 1px underline that goes solid on hover. This is the site's tertiary action.

### Chips

- **Style:** `--ink-600` ground, 1px violet border at 40%, 4px radius, `0.5rem 0.8rem` padding, display face 600 at 0.86rem, with a surface-seat shadow so it reads as floating over the stage.
- **State:** static labels only — chips here name a channel entering a guest record, they are not filters and carry no selected state.

### Cards / Containers

- **Stage** (`.stage`): the frame a mockup lives in. `--ink-700` plus a 26% `--violet-700` radial wash from `78% 12%`, 1px violet border at 22%, 6px radius, `clamp(1.5rem, 3.5vw, 2.5rem)` padding, `overflow: hidden`.
- **Panel** (`.panel`): the depicted product surface. `--ink-600`, 1px violet border at 34%, 5px radius, surface-seat shadow, with a `1.1rem 1.25rem` header separated by a 24% violet hairline.
- **Tile / Flow card:** same recipe as panel at reduced padding; a resolved flow card swaps its border to `--mint-400` at 55% and its title to `--mint-300`.
- **Booking card** (`.booking`): `--ink-700`, 1px violet border at 30%, 4px radius, form-lift shadow, `clamp(1.75rem, 4vw, 2.5rem)` padding.

### Inputs / Fields

- **Style:** `--ink-900` ground (darker than the card it sits in — fields recede, they don't lift), 1px violet border at 32%, 3px radius, `0.7rem 0.85rem` padding, `font: inherit` at 1rem, `--text-hi` text. Labels sit above at 0.88rem / 600 / `--text-mid`.
- **Hover:** border brightens to `--violet-400` at 60%.
- **Focus:** border goes solid `--mint-400` with a 3px green glow ring; the native outline is suppressed only because that ring replaces it.
- **Error / Disabled:** not implemented. The demo form is `novalidate` against a placeholder action and is documented in-code as awaiting the GoHighLevel embed.

### Navigation

- **Masthead:** sticky, `ink-900` at 88% with a 14px backdrop blur, closed by a 22% violet hairline. Links are display face 600 at 1.05rem, `--text-mid` at rest, with a 2px transparent bottom border that turns `--violet-400` on hover and `--mint-400` on `aria-current="page"`. The "Book a demo" CTA rides in the nav as a compact `.btn` (`0.6rem 1.15rem`).
- **Mobile (≤46rem):** two rows — see **The No-Hidden-Menu Rule**. The CTA is pulled out and absolutely positioned top-right at the gutter.
- **Footer:** `--ink-800` above a 24% violet hairline, wordmark plus a 34ch line of prose, a vertical nav in the display face that goes green on hover, and a base row (`--text-low`, 0.875rem) carrying the copyright and the illustrative-content disclosure.

### Signature: TogetherField (the hero)

Twelve labeled voices stacked as `name / hairline-rule` rows, clamped on the right by a violet brace, joined by a green link line to a circular green node containing the Tempo mark. Each voice's resting place is its true layout position; the scatter (`--dx` in `vw`, `--dy` in `rem`, `--rot` in degrees) is a transform applied on top, so the arrival is compositor-safe. Sizing is driven by three locals — `--node`, `--link`, `--brace` — that also reserve the right-hand padding, so the brace and node can be absolutely positioned without overlapping type.

### Signature: Arrangement (the concepts chart)

The same twelve voices as a weighted bar chart with three states: supporting (`--h: 20%`, violet-600 at 55%), active (`46%`, violet-400 at 70%), leading (`100%`, solid `--mint-400` with a `--mint-300` notehead floating 0.75rem above the cap). Channel names are rotated 90° below the axis at 0.68rem. The whole chart is a single `role="img"` with a written `aria-label` naming the leading voices — the bars are decoration over an accessible sentence.

### Signature: ConvergenceScore (built, available, not shipped)

A complete component that draws all twelve channels as labeled paths curving into one green node, with a landscape SVG (1180×560) and a portrait SVG (420×690) that swap at 56rem, a proper `<title>`/`<desc>` pair, a stroke-dash draw-in staggered at 85ms per voice, and a caption pairing a `--amber-400` strike-through ("Twelve places to look.") against a `--mint-400` resolution ("One conversation."). **It is currently imported by nothing.** Treat it as available inventory, not as shipped design; if it is ever mounted, it becomes a second authored motion moment and the choice under **The One Authored Moment Rule** must be made explicitly.

### Alternate: ChaosField (reachable, not default)

The alternate hero field — twelve hand-positioned channel labels at unequal sizes, rotations and opacities, each trailed by a stub of stave that starts and ends nowhere, plus four amber "stray" fragments in Archivo italic. It is switched in by changing the `HERO` constant at the top of `src/pages/index.astro` from `"together"` to `"chaos"`. It is the fragmentation half of the same argument and shares the palette exactly.

### Motion

`--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` is the only easing token; state transitions run 0.2s (color/border), 0.25s (background/transform) or 0.3s (shadow).

**The One Authored Moment Rule.** The site has exactly one authored motion moment: the TogetherField hero settle. Twelve voices arrive scattered, rotated and blurred, stagger into alignment (1.15s each, `160ms + i × 85ms`), then the brace draws in from its left edge (0.85s at 1.15s), the green link fades (0.5s at 1.4s), and the Tempo node lands (0.75s at 1.5s). Nothing else on the site animates on scroll — a site-wide scroll-reveal existed and was deliberately removed. Do not reintroduce a global reveal, a fade-up-on-enter utility, or a second competing sequence; if a new moment is genuinely needed, it replaces this one rather than joining it.

Every animated component pairs its keyframes with a `prefers-reduced-motion: reduce` block that sets the resting state directly and cancels the animation, and every animation is gated behind a `.js` class stamped on `<html>` by an inline script, so the resting state is what renders without JS.

## Do's and Don'ts

### Do:

- **Do** take violet and green from the logo. `--violet-400` (#b19cff) and `--mint-400` (#30c18b) are brand facts read out of `public/brand/chorus-logo.svg`. Derive new shades from them; do not re-pick them by eye.
- **Do** keep green on both the hero headline accent and the primary CTA. It is a settled, user-confirmed decision.
- **Do** author every image. All imagery on this site is SVG or CSS drawn by hand — the hero field, the mocks, the arrangement charts, the journey rail, the Tempo mark.
- **Do** open a repeated block with a 2px violet bar line and separate blocks with 1px violet-mixed hairlines.
- **Do** use `.notehead` as the only list marker, colored green for a resolution and violet for a capability.
- **Do** give every prose block an explicit `ch` measure (44–68ch).
- **Do** make two-column grids unequal (`0.72fr / 1.28fr`, `1.15fr / 0.85fr`, `0.92fr / 1.08fr`) and collapse them at 62rem unless the component has its own documented hinge.
- **Do** put the subordinate line *below* its heading, as a caption.
- **Do** ship every animation with a `prefers-reduced-motion` resting state and a no-JS resting state.
- **Do** keep the full nav visible on phones as a second masthead row.
- **Do** replace the authored demonstration data before this is presented as evidence — the guest names (Sarah Chen), timestamps, thread copy and the "47 calls answered" figure in `ProductMocks.astro`, plus the placeholder booking form, which awaits the real GoHighLevel calendar embed. The footer line "All guest moments shown on this site are illustrative" is the current disclosure and must stay until real material lands.

### Don't:

- **Don't** add photography of any kind. No real Tempo Chorus photography exists, and stock food photography is precisely the anti-reference's failure mode — it would misrepresent a specific property for a category product. This is a standing constraint, not a temporary state.
- **Don't** add a global scroll-reveal or a second competing motion sequence. One authored moment, not a global reveal.
- **Don't** put an eyebrow, kicker or uppercase label above a heading anywhere on a page.
- **Don't** introduce a light theme, a white surface, or a fifth ink step. The ladder is `ink-900 / 800 / 700 / 600`.
- **Don't** use amber on an action, or green on anything that is not resolved, complete or the primary path.
- **Don't** add icons — no icon font, no glyph set, no third-party icon package. The Tempo mark and the notation primitives are the entire pictorial vocabulary.
- **Don't** add a shadow to anything that is not the green CTA or a depicted product surface inside a mock stage.
- **Don't** round corners past 6px. The 14px on the hero brace is an accolade shape, not a radius precedent.
- **Don't** add a third type family, a monospace, or an italic outside the amber vignette marker.
- **Don't** build a feature-icon grid or a claim-without-proof hero. Both are the explicit refusals this world was built against.
- **Don't** treat the unused tokens in `global.css` (`--ink-500`, `--violet-900`, `--mint-500`, `--amber-500`, `--paper`, `--measure`) as sanctioned roles.
