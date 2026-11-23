# Excel Fire page review checklist

Every page is reviewed at **390px (phone), 768px (tablet), 1280px and 1440px (desktop)**, in light and dark mode, scrolling top to bottom. A page passes only when every line below is true.

Sources: practitioner write-ups on "AI slop" tells ([925 Studios](https://www.925studios.co/blog/ai-slop-web-design-guide), [Noqta](https://noqta.tn/en/blog/ai-design-slop-overused-ui-patterns-fix-2026), [Hallmark anti-patterns](https://instagit.com/Nutlope/hallmark/what-are-the-common-ai-design-patterns-hallmark-aims-to-avoid/)), construction site roundups ([Azuro Digital](https://azurodigital.com/construction-website-examples/): Turner, Suffolk, McCarthy, Mortenson), QA checklists ([BugHerd](https://resources.bugherd.com/website-qa-checklist), [Netguru](https://www.netguru.com/blog/web-development-checklist)), and the Imperial Build plan in `../imperial-build/docs/website-plan.md`.

## 1. Structure
- [ ] The page answers, in order: what it is, who it is for, what we do, proof, next step.
- [ ] One h1. Headings descend without skipping. Each section has one job.
- [ ] No section repeats another on the same page (no two CTA bands back to back).
- [ ] Every inner page has visible breadcrumbs and a route to Contact within one scroll.

## 2. Layout and spacing
- [ ] Section rhythm comes from the tokens (`--space-section`), not ad hoc padding.
- [ ] Rhythm varies on purpose: a dense proof band, then a quiet, open section. Not every section is the same height.
- [ ] Not everything is a bordered, rounded card. Use rules, whitespace and type for structure. Cards only where the thing is clickable or a discrete object.
- [ ] No nested cards (card inside a card).
- [ ] Text measure 60 to 75 characters for body copy.
- [ ] Grids collapse to one column below 640px. No horizontal scroll at 360px.
- [ ] No layout shift while interacting: tabs, filters, carousels and lists keep a fixed height. Labels stay on one line (truncate, never wrap and jump).

## 3. Typography
- [ ] One display style for page and section headings, with clear size contrast against body text.
- [ ] Headlines wrap with `text-balance`; nothing ends on a single orphaned word at 390px.
- [ ] Eyebrow labels are used sparingly (not on every section).
- [ ] Numbers in stats use tabular figures.

## 4. Copy
- [ ] British English. Sentence case. Specific facts beat adjectives.
- [ ] No banned phrases: "highest standards", "end-to-end", "tailored", "rest easy", "peace of mind", "we pride ourselves", "dedicated team", "look no further", "in today's world", "seamless", "cutting-edge".
- [ ] No em dashes in body copy.
- [ ] Every claim traces to a source (case study sheets, live site, Companies House). No invented numbers.
- [ ] Buttons name the action ("Send enquiry", "Read the case study").

## 5. Photography and imagery
- [ ] Real Excel Fire photos first. Stock only where nothing real exists, and never of people pretending to be the team.
- [ ] Every image has a job (proof, place, process). No decorative filler.
- [ ] Alt text says what and where, not "image of".
- [ ] Portrait phone photos are never stretched into wide letterboxes that crop out the subject.
- [ ] No two adjacent sections use the same photo.

## 6. Motion
- [ ] One motion vocabulary: a short fade-and-rise on scroll (≤ 500ms, ease-out), hover lift on clickable cards, image zoom ≤ 3%.
- [ ] Nothing animates on load above the fold except the hero video.
- [ ] `prefers-reduced-motion` removes all of it.
- [ ] No motion that shifts layout.

## 7. Accessibility
- [ ] Text contrast ≥ 4.5:1 (including orange on dark and grey on white).
- [ ] Visible focus ring on every interactive element.
- [ ] Tap targets ≥ 44px on touch.
- [ ] Carousels can be paused and work without a mouse.

## 8. Performance
- [ ] Only the hero image or video is eager. Everything else lazy loads with correct `sizes`.
- [ ] Client components only where interaction needs them.
- [ ] No layout shift from images (fixed aspect ratios).
- [ ] Hero video has a poster and `preload="metadata"`.

## 9. SEO and AI visibility
- [ ] Unique title (≤ 60 characters with the brand) and description (140 to 160 characters).
- [ ] Canonical, Open Graph image and breadcrumbs schema.
- [ ] Page-type schema matches the visible content (Service, Article, FAQPage).
- [ ] The first paragraph answers the page's main question directly, with a specific fact.
- [ ] Internal links: services link to projects and sectors; projects link to services.
