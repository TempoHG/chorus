---
version: 1
slug: "landing-page"
primary_target: "landing-page"
related_targets: ["features"]
---

## Scope & visitor mode
Persuade. Two pages: primary landing page (lead-gen) and a supporting Features/How It Works page. Visitor is a restaurant operator, not a marketer or GHL admin.

## Audience, job, action, proof, constraints
Restaurant owner/GM evaluating an unfamiliar product category. Job: understand what this even is, then book a demo. Primary action: "Hear What Your Restaurant Sounds Like When Everything Works Together" → book a personalized demo (GHL calendar embed). Proof is illustrative/synthetic (labeled), no real customer logos/testimonials yet — placeholder content, clearly marked for later swap. Constraint: must avoid CRM/automation/pipeline jargon; scenarios and plain language only.

## Chosen direction
Visual world: inherited from the existing Tempo Chorus brand (deep navy ground, violet as primary accent, mint green reserved for the primary CTA, bold rounded sans wordmark/display type). This is an "incomplete brand" carry-forward, not a new world roll — expand and apply it with real craft, replacing the donor page's generic template structure entirely.

Structural thesis (Vignette-Chain Spine, concept-seed surface roll, own-list index 1 of 7, seed key a75a316e): the page carries no separate abstract "here are our features" section. Understanding is built entirely through a chained sequence of concrete guest-interaction vignettes ("Someone calls after closing → Tempo Chorus answers"), each its own full scroll beat, moving from fragmentation (the chaos list/diagram) through the chain of moments to the Chorus story to the CTA. The diagram (disconnected channels → one Chorus node) opens the page as the hero-level proof of mental model, ahead of any prose explainer paragraph.

Sequence:
1. Hero: "Software doesn't grow restaurants. Systems do." + immediate visual proof (chaos channel list, unresolved) — no explainer copy yet.
2. Mental-model beat: "What exactly is Tempo Chorus?" short answer + the chaos→Chorus convergence diagram resolving live.
3. Vignette chain (the structural spine): each scenario as its own full beat — after-hours call, social message, review request, win-back, private event inquiry, reservation reminder — in the plain-spoken "Someone ___. Tempo Chorus ___." cadence from the draft.
4. Why it matters: the compounding-value beat (more reviews, more repeat guests, fewer missed opportunities...).
5. Why "Chorus": the musical metaphor / brand story beat.
6. Guest-journey recap as a closing motif (search → visit → regular), not a separate full timeline page-length section — a compressed reinforcement before CTA.
7. CTA: "Hear What Your Restaurant Sounds Like When Everything Works Together" — book a demo.

Features/How It Works page: same brand world, breaks the unified channel list into a real page that goes deeper per-channel (website, phone, SMS, email, reviews, social, reservations, private events, guest database, marketing, AI) than the landing page's vignettes do, still in plain operator language, not feature-table jargon.

## Scope and boundaries
Fidelity: production-ready, fully responsive, real motion or purposeful animation on the diagram and vignette chain. Named targets: `/` (landing) and `/features` (or `/how-it-works`). Untouched: none (greenfield). Anti-goals: no CRM/pipeline/automation/workflow jargon; no stock gradient-hero-plus-icon-grid template shape; no fabricated customer names, logos, review counts, or pricing.

## States and ranges
Static marketing content, no dynamic app states. Realistic content range: ~6 vignette moments (from the draft list), 10-11 unified channels, single CTA path (demo booking — GHL embed placeholder if no real embed code supplied). Placeholder imagery/photos clearly marked synthetic since no real property photos exist yet.

## Interaction and layout
Vertical scroll-driven page. The chaos→Chorus diagram should visually resolve (channels converging on the Chorus mark) on load or scroll-in, and reappear as a compressed motif elsewhere. Vignette chain has its own rhythm — alternating emphasis/scale, not six identical list rows. Mobile: diagram and vignette chain must both degrade to legible stacked forms without losing the "convergence" idea.

## Constraints and open decisions
Stack: Astro (delegated in PRODUCT.md). No real GHL embed/calendar code supplied yet — build CTA as a real-looking booking module wired to a placeholder endpoint, clearly noted for the user to swap in their GHL embed. No real photography — use authored/illustrative graphics (diagram, iconography) rather than stock restaurant photos misrepresenting a specific property, since this is a category product, not a single restaurant.
