import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* The site's one animation engine, replacing the old CSS-keyframe +
   IntersectionObserver combination. GSAP owns every animated transform
   directly (via its own transform cache), so an element that needs a fixed
   positioning transform (centering, rotation) and an animated one no longer
   fight each other the way they did under plain CSS `translate`/`transform`
   — that conflict cost real debugging time twice before this rewrite. */

gsap.registerPlugin(ScrollTrigger);

const EASE = "power3.out";

/* Landing on a hash link (e.g. /#demo from another page) is unreliable on
   this site's tallest pages: `scroll-behavior: smooth` makes the browser's
   own initial-load fragment scroll an animated one over a very long
   distance, and it can land hundreds of pixels short if anything touches
   scroll or layout mid-animation. Bypass that with our own instant,
   corrected jump once the page has actually finished loading. */
function fixHashScroll() {
  if (!location.hash) return;
  const target = document.querySelector(location.hash);
  if (!target) return;

  const settle = () => {
    const behavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    target.scrollIntoView({ block: "start" });
    document.documentElement.style.scrollBehavior = behavior;
  };

  if (document.readyState === "complete") {
    requestAnimationFrame(settle);
  } else {
    window.addEventListener("load", () => requestAnimationFrame(settle), { once: true });
  }
}

/* [data-reveal]'s direct children stagger in once. [data-reveal-solo]
   animates itself once. Both replace the old CSS `.is-in` toggle exactly —
   same fade + lift, same one-shot-on-first-view behavior. */
function revealGroups() {
  gsap.utils.toArray("[data-reveal]").forEach((group) => {
    const children = gsap.utils.toArray(group.children);
    if (!children.length) return;
    gsap.set(children, { opacity: 0, y: 14 });
    ScrollTrigger.create({
      trigger: group,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: EASE,
          stagger: 0.07,
        }),
    });
  });

  gsap.utils.toArray("[data-reveal-solo]").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 14 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: EASE }),
    });
  });
}

/* The "Why Chorus" orbit graphic: six channel tags spring out from behind
   the Chorus node, orbit it clockwise, retract back behind it, then loop.
   Position is driven by polar coordinates (radius, angle) recomputed into
   x/y on every tick — CSS can't own continuous motion like this, and a tag
   also needs a *permanent* centering transform (xPercent/yPercent) that
   must be set through GSAP's own properties (see the note in heroArrival)
   rather than CSS, or GSAP's transform cache silently drops it. */
function orbitRadius() {
  return window.matchMedia("(max-width: 30rem)").matches ? 112 : 170;
}

function orbitReveals() {
  gsap.utils.toArray("[data-orbit-reveal]").forEach((container) => {
    const tags = gsap.utils.toArray(container.querySelectorAll(".unified__tablet"));
    const node = container.querySelector(".unified__node");
    if (!tags.length) return;

    const step = 360 / tags.length;
    const startAngle = (i) => i * step - 90; // -90 so tag 0 starts at 12 o'clock

    gsap.set(tags, { xPercent: -50, yPercent: -50, opacity: 0 });
    if (node) gsap.set(node, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.7 });

    const place = (el, angleDeg, radius) => {
      const rad = (angleDeg * Math.PI) / 180;
      gsap.set(el, { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius });
    };
    tags.forEach((el, i) => place(el, startAngle(i), 0));

    ScrollTrigger.create({
      trigger: container,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (node) gsap.to(node, { opacity: 1, scale: 1, duration: 0.6, ease: EASE });

        const shared = { radius: 0, spin: 0 };
        const radius = orbitRadius();
        const apply = () =>
          tags.forEach((el, i) => place(el, startAngle(i) + shared.spin, shared.radius));

        gsap
          .timeline({ repeat: -1, delay: 0.3 })
          .to(tags, { opacity: 1, duration: 0.5, stagger: 0.06 }, 0)
          .to(shared, { radius, duration: 0.9, ease: "back.out(1.6)", onUpdate: apply }, 0)
          .to(shared, { spin: "+=360", duration: 7, ease: "none", onUpdate: apply }, ">")
          .to(shared, { radius: 0, duration: 0.7, ease: "power2.in", onUpdate: apply }, ">")
          .to(tags, { opacity: 0, duration: 0.5 }, "<")
          .to({}, { duration: 0.5 }); // a beat behind the node before it loops
      },
    });
  });
}

function settleOrbitForReducedMotion() {
  document.querySelectorAll("[data-orbit-reveal]").forEach((container) => {
    const tags = gsap.utils.toArray(container.querySelectorAll(".unified__tablet"));
    const node = container.querySelector(".unified__node");
    if (node) gsap.set(node, { xPercent: -50, yPercent: -50, opacity: 1, scale: 1 });
    if (!tags.length) return;
    const step = 360 / tags.length;
    const radius = orbitRadius();
    tags.forEach((el, i) => {
      const rad = ((i * step - 90) * Math.PI) / 180;
      gsap.set(el, {
        xPercent: -50,
        yPercent: -50,
        opacity: 1,
        x: Math.cos(rad) * radius,
        y: Math.sin(rad) * radius,
      });
    });
  });
}

/* The hero (PhoneField): channels scatter in from off-position, the flow
   lines fade in once they've mostly settled, then the node pops in. Runs
   once on load — not scroll-triggered, this is the first-viewport moment. */
function heroArrival() {
  const voices = gsap.utils.toArray(".mvoice");
  const strands = gsap.utils.toArray(".merge__strand");
  const node = document.querySelector(".merge__node");
  if (!voices.length && !node) return;

  voices.forEach((el) => {
    const dx = el.getAttribute("data-dx") || "0";
    const dy = el.getAttribute("data-dy") || "0";
    const rot = parseFloat(el.getAttribute("data-rot") || "0");
    gsap.set(el, { x: dx, y: dy, rotation: rot, opacity: 0, filter: "blur(5px)" });
  });
  gsap.set(strands, { opacity: 0 });
  if (node) gsap.set(node, { opacity: 0, scale: 0.5 });

  const tl = gsap.timeline({ delay: 0.16 });
  tl.to(
    voices,
    {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.15,
      ease: EASE,
      stagger: 0.085,
    },
    0,
  );
  tl.to(strands, { opacity: 1, duration: 0.6, ease: EASE, stagger: 0.06 }, 0.89);
  if (node) tl.to(node, { opacity: 1, scale: 1, duration: 0.75, ease: EASE }, 1.39);
}

function settleHeroForReducedMotion() {
  gsap.set(".mvoice", { x: 0, y: 0, rotation: 0, opacity: 1, filter: "blur(0px)" });
  gsap.set(".merge__strand", { opacity: 1 });
  const node = document.querySelector(".merge__node");
  if (node) gsap.set(node, { opacity: 1, scale: 1 });
}

/* A single authored stat count-up (e.g. "calls answered after close"). */
function countUps() {
  gsap.utils.toArray("[data-count-to]").forEach((el) => {
    const to = parseInt(el.getAttribute("data-count-to") || "0", 10);
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        const proxy = { value: 0 };
        gsap.to(proxy, {
          value: to,
          duration: 0.9,
          ease: EASE,
          onUpdate: () => {
            el.textContent = String(Math.round(proxy.value));
          },
        });
      },
    });
  });
}

/* The homepage vignette timeline: the spine fills in sync with scroll
   progress through the list (scrubbed, but the page itself never pins —
   this is the restrained alternative to Popmenu-style scroll-jacking), and
   each vignette fades in once as it's reached. */
function vignetteTimeline() {
  const list = document.querySelector(".chain__list");
  const spine = document.querySelector(".chain__spine");

  if (list && spine) {
    gsap.set(spine, { scaleY: 0, transformOrigin: "top center" });
    ScrollTrigger.create({
      trigger: list,
      start: "top 70%",
      end: "bottom 60%",
      scrub: true,
      onUpdate: (self) => gsap.set(spine, { scaleY: self.progress }),
    });
  }

  gsap.utils.toArray(".vignette").forEach((v) => {
    gsap.set(v, { opacity: 0, y: 24 });
    ScrollTrigger.create({
      trigger: v,
      start: "top 85%",
      once: true,
      onEnter: () => gsap.to(v, { opacity: 1, y: 0, duration: 0.7, ease: EASE }),
    });
  });
}

/* Reduced motion: put every animated target in its final, static state and
   skip GSAP entirely. Mirrors the guarantee the old CSS media queries gave. */
function settleForReducedMotion() {
  document.querySelectorAll("[data-reveal]").forEach((group) => {
    gsap.set(group.children, { opacity: 1, y: 0 });
  });
  document.querySelectorAll("[data-reveal-solo]").forEach((el) => {
    gsap.set(el, { opacity: 1, y: 0 });
  });
  document.querySelectorAll("[data-count-to]").forEach((el) => {
    el.textContent = el.getAttribute("data-count-to") || el.textContent;
  });
  const spine = document.querySelector(".chain__spine");
  if (spine) gsap.set(spine, { scaleY: 1 });
  gsap.set(".vignette", { opacity: 1, y: 0 });

  settleOrbitForReducedMotion();
  settleHeroForReducedMotion();
}

export function initMotion() {
  fixHashScroll();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    settleForReducedMotion();
    return;
  }

  heroArrival();
  revealGroups();
  orbitReveals();
  countUps();
  vignetteTimeline();
}
