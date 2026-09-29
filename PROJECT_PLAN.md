# Incremental Portfolio Plan

The portfolio is implemented in small, reviewable slices. Each visible feature ends with `npm run build`.

# Portfolio Completion Roadmap

## Summary

The portfolio already has its core architecture: strict TypeScript, router, theme system, data-driven sections, detail routes, project media, and subtle motion. This plan finishes it as a recruiter-ready MVP without redesigning the site or inventing missing content.

## Phase 1 — Baseline Audit and Cleanup

**Goal:** Establish a clean, reliable starting point.

**Why it matters:** Small code-quality issues become harder to spot once visual and content polish begins.

**Likely files:** `src/index.css`, homepage components, data files.

**Tasks:**

- Run typecheck/build and resolve only actual warnings or errors.
- Standardize TypeScript naming, formatting, React keys, and import style in touched files.
- Remove duplicate or obsolete CSS left over from earlier iterations.
- Confirm each existing project screenshot and Devicon URL loads.
- Make a short content inventory: what is confirmed, what remains intentionally blank.

**Do not change:**

- Routes, data structure, theme behavior, or project order.
- Add new dependencies or fictional project/experience details.

**Definition of done:** `npm run build` passes; no broken assets; no obvious dead styles in the touched areas.

**Manual test:** Load the homepage, each project route, each experience route, and an invalid route.

**Difficulty:** Easy

---

## Phase 2 — Personal Brand and About Content

**Goal:** Make the opening experience clearly communicate “serious builder and curious learner.”

**Why it matters:** Recruiters should understand your direction before reaching the projects list.

**Likely files:** `Hero.tsx`, `About.tsx`, `src/index.css`.

**Tasks:**

- Refine hero supporting text while keeping the full-screen name treatment minimal.
- Rewrite About copy around curiosity, building for real users, research, internships, and UT Arlington.
- Keep the tone concrete and personal rather than inspirational or generic.
- Preserve the scroll cue and reduced-motion behavior.
- Reserve photo space only if needed; defer adding portrait or lifestyle photos until final assets are selected.

**Do not change:**

- The aquatic visual system.
- The hero into a dense résumé or a large photography layout.

**Definition of done:** A first-time visitor can identify your role, school, interests, and point of view within one scroll.

**Manual test:** View desktop and mobile; confirm the hero still fits within the viewport and the scroll cue reaches About.

**Difficulty:** Medium

---

## Phase 3 — Project Content and Showcase Polish

**Goal:** Make every project row easy to scan and credible.

**Why it matters:** Projects are the primary proof of your engineering ability.

**Likely files:** `projects.ts`, `Projects.tsx`, `ProjectRow.tsx`, `ProjectMedia.tsx`, `ProjectDetail.tsx`, `src/index.css`.

**Tasks:**

- Verify project titles, descriptions, stacks, screenshots, and links against supplied information.
- Improve project copy only where accurate source details exist.
- Check the layered screenshot treatment for every project and tune offsets only through reusable CSS.
- Ensure gallery arrows cycle screenshots correctly and remain keyboard accessible.
- Add fuller case-study fields only when you provide role, challenge, lesson, or result details.

**Do not change:**

- The alternating vertical layout.
- Project data-driven rendering or the existing detail route pattern.
- Invent metrics, outcomes, or GitHub/demo URLs.

**Definition of done:** Every project has accurate text, intentional imagery, responsive controls, and a useful detail-page path.

**Manual test:** Test one, two, and three screenshot projects; use arrow buttons with mouse and keyboard; test mobile stacking.

**Difficulty:** Medium

---

## Phase 4 — Experience Credibility Pass

**Goal:** Present experience clearly while protecting proprietary information.

**Why it matters:** Lockheed Martin, research, and community work strengthen the story behind the projects.

**Likely files:** `experiences.ts`, `ExperienceTimeline.tsx`, `ExperienceDetail.tsx`, `src/index.css`.

**Tasks:**

- Confirm organization names, roles, dates, and approved public descriptions.
- Add concise timeline summaries only for details you can publicly share.
- Add detail-page content gradually from approved experience data.
- Verify alternating desktop timeline layout and one-column mobile layout.
- Tune reveal motion only if it improves reading order.

**Do not change:**

- Add proprietary Lockheed Martin details.
- Add invented responsibilities, metrics, or research claims.

**Definition of done:** Every visible timeline entry is accurate, readable, and links to a valid detail page.

**Manual test:** Check desktop alternation, mobile collapse, reduced-motion mode, valid slugs, and invalid slugs.

**Difficulty:** Medium

---

## Phase 5 — Skills, Contact, and Footer Finalization

**Goal:** Finish supporting sections without overstating experience.

**Why it matters:** These sections help recruiters verify your toolkit and contact you quickly.

**Likely files:** `skills.ts`, `Skills.tsx`, `SocialLinks.tsx`, `Contact.tsx`, `Footer.tsx`.

**Tasks:**

- Verify every listed skill reflects something you can discuss.
- Confirm Devicon mappings load; retain the LabVIEW fallback.
- Ensure GitHub, LinkedIn, and email links are correct.
- Add a resume link only after `public/resume.pdf` exists.
- Tighten section copy and spacing for a consistent visual rhythm.

**Do not change:**

- Add proficiency bars, ratings, or unsupported skill claims.
- Add a backend contact form.

**Definition of done:** All icons and links work, contact methods are obvious, and missing resume content never produces a broken link.

**Manual test:** Open each external link, test `mailto:`, switch themes, and verify skills at mobile width.

**Difficulty:** Easy

---

## Phase 6 — Responsive, Accessibility, and Motion Review

**Goal:** Make the complete portfolio reliable for all visitors.

**Why it matters:** A polished portfolio must work without relying on a particular screen size, mouse, or animation preference.

**Likely files:** `src/index.css`, interactive homepage components, navbar, theme toggle.

**Tasks:**

- Test narrow mobile, tablet, desktop, and wide desktop layouts.
- Verify keyboard navigation, visible focus states, menu behavior, gallery buttons, and external links.
- Check color contrast in both themes.
- Confirm `prefers-reduced-motion` disables nonessential movement.
- Fix overflow, touch-target, image-cropping, and spacing issues found during testing.

**Do not change:**

- Introduce major new visuals or interaction patterns.
- Remove motion entirely; keep only subtle, accessible transitions.

**Definition of done:** No horizontal scrolling, clipped content, inaccessible controls, or unreadable contrast at target sizes.

**Manual test:** Use keyboard-only navigation; test dark/light themes; use browser mobile emulation; enable reduced motion.

**Difficulty:** Medium

---

## Phase 7 — Performance, SEO, and Deployment Readiness

**Goal:** Prepare the site for a public recruiter-facing launch.

**Why it matters:** A fast, shareable portfolio is more likely to be opened and remembered.

**Likely files:** `index.html`, `vercel.json`, image assets in `public/`, route components.

**Tasks:**

- Add accurate page title, description, and social sharing metadata.
- Check image sizes and replace oversized screenshots only with optimized versions you provide.
- Confirm Vercel SPA route fallback supports direct project and experience URLs.
- Run a production build and preview.
- Verify the final deployment URL after publishing.

**Do not change:**

- Add analytics, tracking, or third-party services unless you explicitly choose them.
- Redesign pages for performance work.

**Definition of done:** Production build succeeds, direct deep links work, metadata is accurate, and pages load without broken assets.

**Manual test:** Open `/projects/<slug>` and `/experience/<slug>` directly in a new tab; refresh them; inspect social preview metadata.

**Difficulty:** Medium

---

## Phase 8 — Final Recruiter Review

**Goal:** Make focused, evidence-based final edits and launch.

**Why it matters:** A final pass catches confusing wording and incomplete details that code checks cannot.

**Likely files:** Only the specific content or UI files identified during review.

**Tasks:**

- Review the homepage as if you are a recruiter spending two minutes on it.
- Confirm the strongest project and experience information appears early.
- Remove any placeholder, vague statement, broken control, or unfinished label.
- Ask one or two trusted reviewers for feedback on clarity and visual personality.
- Apply only high-confidence final fixes.

**Do not change:**

- Begin another redesign cycle.
- Add features that do not improve recruiter clarity or launch readiness.

**Definition of done:** The site feels complete, accurate, personal, responsive, and easy to navigate.

**Manual test:** Complete one final desktop/mobile walkthrough and production deep-link test.

**Difficulty:** Easy

## Dependencies

- Phase 1 precedes every other phase.
- Phase 2 can proceed independently after Phase 1.
- Phase 3 and Phase 4 depend on accurate project and experience content.
- Phase 5 can run after Phase 1.
- Phase 6 follows the major visual/content phases.
- Phase 7 follows Phase 6.
- Phase 8 is the final gate before launch.

## Best First Task

Start with **Phase 1: verify every existing project screenshot, external link, and route**.

It is contained, immediately useful, and gives you a trustworthy baseline before improving copy or visual polish.

## Content rules

- Project and experience data are the single source of truth for summaries and detail routes.
- Unknown images, URLs, outcomes, and proprietary information remain absent rather than invented.
- Resume remains unavailable until `public/resume.pdf` is added; once present, it opens in a new tab.
