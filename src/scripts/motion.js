import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { track } from "@vercel/analytics";

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

/* The onboarding-fee popup: shows once per tab session, a few seconds after
   load, and stays dismissed (sessionStorage) once closed by any of its close
   controls or Escape. Runs regardless of prefers-reduced-motion — it's a
   functional dialog, not decorative, so it still needs to appear and close;
   only the open/close transition is skipped under reduced motion. */
function initOnboardingPopup() {
  const popup = document.querySelector("[data-onboarding-popup]");
  if (!popup) return;

  const DISMISS_KEY = "chorus-onboarding-popup-dismissed";
  if (sessionStorage.getItem(DISMISS_KEY)) return;

  const backdrop = popup.querySelector("[data-popup-backdrop]");
  const card = popup.querySelector("[data-popup-card]");
  const closeBtn = popup.querySelector(".popup__close");
  const laterBtn = popup.querySelector(".popup__later");
  const cta = popup.querySelector(".popup__cta");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.set(card, {
    xPercent: -50,
    yPercent: -50,
    opacity: 0,
    scale: reduceMotion ? 1 : 0.94,
    y: reduceMotion ? 0 : 12,
  });
  gsap.set(backdrop, { opacity: 0 });

  let lastFocused = null;

  function onKeydown(e) {
    if (e.key === "Escape") close("escape");
  }

  function open() {
    lastFocused = document.activeElement;
    popup.style.display = "block";
    if (reduceMotion) {
      gsap.set([backdrop, card], { opacity: 1, scale: 1, y: 0 });
    } else {
      gsap
        .timeline()
        .to(backdrop, { opacity: 1, duration: 0.35, ease: EASE })
        .to(card, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, "<0.05");
    }
    document.body.classList.add("has-popup");
    document.addEventListener("keydown", onKeydown);
    if (closeBtn) closeBtn.focus();
    track("onboarding_popup_shown");
  }

  function close(via) {
    sessionStorage.setItem(DISMISS_KEY, "1");
    document.removeEventListener("keydown", onKeydown);
    document.body.classList.remove("has-popup");

    const finish = () => {
      popup.style.display = "none";
    };
    if (reduceMotion) {
      gsap.set([backdrop, card], { opacity: 0 });
      finish();
    } else {
      gsap
        .timeline({ onComplete: finish })
        .to(card, { opacity: 0, scale: 0.96, y: 8, duration: 0.25, ease: "power2.in" })
        .to(backdrop, { opacity: 0, duration: 0.25, ease: "power2.in" }, "<");
    }
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    track("onboarding_popup_dismissed", { via });
  }

  if (backdrop) backdrop.addEventListener("click", () => close("backdrop"));
  if (closeBtn) closeBtn.addEventListener("click", () => close("close_button"));
  if (laterBtn) laterBtn.addEventListener("click", () => close("later_link"));
  // Not a close path — clicking through navigates to /#demo, so this only
  // records the click itself (via sendBeacon under the hood, so it survives
  // the navigation) rather than calling close().
  if (cta) cta.addEventListener("click", () => track("onboarding_popup_claim_click"));

  window.setTimeout(open, 5000);
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

/* AI Host Helper "test call" widget: idle -> lead form -> done, with
   validation, a honeypot bot trap, phone auto-formatting and UTM/click-id
   attribution capture. Submits straight to the GHL webhook that triggers
   the outbound-call workflow — this site is static, so there's no
   same-origin API route to proxy through. A failed submission (network
   error, CORS block, workflow error) points people at the real /#demo
   booking flow instead of faking a "we'll call you" success state. */
const AGENT_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/3JJSsdBdAfv9hl1cQfxn/webhook-trigger/6turRCoSa53rhp8jRCF8";

function initAgentCards() {
  const cards = document.querySelectorAll("[data-agent-card]");
  if (!cards.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function formatPhone(value) {
    const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  function setFieldError(input, message) {
    const error = input.closest("[data-row]")?.querySelector("[data-error]");
    if (!error) return;
    if (message) {
      input.setAttribute("data-invalid", "");
      error.textContent = message;
      error.hidden = false;
    } else {
      input.removeAttribute("data-invalid");
      error.hidden = true;
    }
  }

  function getCookie(name) {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`))
      ?.split("=")[1] ?? "";
  }

  function attributionPayload() {
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"];
    const payload = {};
    keys.forEach((key) => {
      const value = params.get(key);
      if (value) payload[key] = value;
    });
    payload.fbp = getCookie("_fbp");
    payload.fbc = getCookie("_fbc");
    payload.referrer = document.referrer;
    payload.landing_page = window.location.href;
    return payload;
  }

  cards.forEach((card) => {
    const idle = card.querySelector("[data-step-idle]");
    const form = card.querySelector("[data-lead-form]");
    const done = card.querySelector("[data-step-done]");
    if (!idle || !form || !done) return;

    function swapTo(target) {
      const steps = [idle, form, done];
      const focusTarget = target === form ? form.querySelector("[data-field]") : null;

      if (reduceMotion) {
        steps.forEach((step) => {
          step.hidden = step !== target;
        });
        if (focusTarget) focusTarget.focus();
        return;
      }

      const fromStep = steps.find((step) => !step.hidden);
      const fromHeight = card.getBoundingClientRect().height;

      steps.forEach((step) => {
        step.hidden = step !== target;
      });
      const toHeight = card.getBoundingClientRect().height;

      gsap.set(card, { height: fromHeight, overflow: "hidden" });
      gsap.set(target, { opacity: 0 });
      if (fromStep) gsap.set(fromStep, { opacity: 1 });

      gsap
        .timeline({
          onComplete: () => {
            gsap.set(card, { height: "auto", overflow: "" });
            if (focusTarget) focusTarget.focus();
          },
        })
        .to(card, { height: toHeight, duration: 0.35, ease: EASE })
        .to(target, { opacity: 1, duration: 0.25, ease: EASE }, "<0.05");
    }

    card.querySelectorAll("[data-start-call]").forEach((btn) => {
      btn.addEventListener("click", () => {
        track("agent_widget_start_call");
        swapTo(form);
      });
    });

    const phoneInput = form.querySelector('[name="phone"]');
    if (phoneInput) {
      phoneInput.addEventListener("input", () => {
        phoneInput.value = formatPhone(phoneInput.value);
      });
    }

    form.querySelectorAll("[data-field]").forEach((input) => {
      input.addEventListener("input", () => setFieldError(input, ""));
    });

    const consentInput = form.querySelector("[data-consent]");
    const consentError = form.querySelector("[data-consent-error]");
    if (consentInput && consentError) {
      consentInput.addEventListener("change", () => {
        if (consentInput.checked) consentError.hidden = true;
      });
    }

    const formError = form.querySelector("[data-form-error]");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const honeypot = form.querySelector('[name="website"]');
      if (honeypot && honeypot.value) return;

      const nameInput = form.querySelector('[name="first_name"]');
      const emailInput = form.querySelector('[name="email"]');
      let firstInvalid = null;

      if (!nameInput.value.trim()) {
        setFieldError(nameInput, "Enter your first name.");
        firstInvalid = firstInvalid || nameInput;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value.trim())) {
        setFieldError(emailInput, "Enter a valid email.");
        firstInvalid = firstInvalid || emailInput;
      }
      const phoneDigits = phoneInput.value.replace(/\D/g, "");
      if (phoneDigits.length !== 10) {
        setFieldError(phoneInput, "Enter a 10-digit mobile number.");
        firstInvalid = firstInvalid || phoneInput;
      }
      if (consentInput && !consentInput.checked && consentError) {
        consentError.hidden = false;
        firstInvalid = firstInvalid || consentInput;
      }

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      if (formError) formError.hidden = true;
      if (submitBtn) submitBtn.disabled = true;

      try {
        const response = await fetch(AGENT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: nameInput.value.trim(),
            full_name: nameInput.value.trim(),
            email: emailInput.value.trim().toLowerCase(),
            phone: `+1${phoneDigits}`,
            consent: true,
            consent_text: form.getAttribute("data-consent-text"),
            consent_timestamp: new Date().toISOString(),
            consent_source: window.location.href,
            placement: card.closest("section")?.id || "host-helper",
            ...attributionPayload(),
          }),
        });

        if (!response.ok) throw new Error("lead webhook unavailable");

        track("agent_widget_lead_sent");
        swapTo(done);
      } catch {
        track("agent_widget_lead_failed");
        if (formError) {
          formError.innerHTML =
            'That didn\'t go through. <a href="/#demo">Book a live walkthrough</a> instead and we\'ll show you the agent in person.';
          formError.hidden = false;
        }
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  });
}

export function initMotion() {
  fixHashScroll();
  initOnboardingPopup();
  initAgentCards();

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
