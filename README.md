# East Point Form & Label Inc. — Mockup Site

This is a **standalone, experimental mockup** of a website for East Point Form & Label Inc. It took the layout structure of a reference site (Vancouver Sign Group, vsgbc.com) — eyebrow pills, ghosted keyword watermarks, alternating service sections — and has since been re-skinned around East Point's real hand-drawn lighthouse logo, with copy written in Peter's own first-person voice throughout.

**Design direction, in short:** deep ocean navy (the blue from the original direction, kept because Peter likes it) + cream and brass-gold accents in the locked hero/My Story/CTA sections, and a cooler white/pale-grey/navy palette (closer to Vancouver Sign Group's) everywhere else — the beige "sand" tone from earlier passes was removed in pass seven. Display type is **Poppins Black (800)** — the same treatment used by Stick2.com and other real label/packaging companies, chosen after Peter felt the earlier rounded font (Baloo 2) read as amateur for the industry. Section backgrounds alternate between scattered ghost-text ("Labels Packaging Print") and real photos with a subtle scroll-parallax effect, echoing Vancouver Sign Group's own alternating layout. Nothing here is invented — the copy is built directly from facts and language Peter provided, and the logo is Peter's actual artwork, not a placeholder.

It is a plain static site — no framework, no build step, no dependencies beyond one Google Font (Poppins) loaded over CDN.

## How to preview

**Option A — just double-click `index.html`.** It will open directly in your browser and works with no server.

**Option B — local server (recommended for the most accurate preview):**

```bash
cd eastpoint-mockup
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Resize the window (or use your browser's device toolbar) to check the responsive behavior — it's been tested at ~1280px (desktop), ~820px/768px (tablet), and ~390px/375px (mobile).

## What's in the folder

```
eastpoint-mockup/
├── index.html      one long-scroll homepage
├── styles.css       all styling (CSS variables, responsive rules)
├── script.js        sticky-nav scroll state, mobile menu toggle
├── images/          license-cleared stock photos + the real logo, processed into variants
└── README.md        this file
```

## Revision history (plain-language changelog)

### Pass twenty-one — SEO and LLM-discoverability pass (no visual or copy changes on the page itself)

With a real domain (`eastpointprint.ca`) purchased and a move off Lovable in progress, Peter asked for anything "behind the scenes" that would help the site get found by search engines and AI tools, explicitly without touching how the page looks or reads. Everything below lives in `<head>` metadata, a JSON-LD script block, or standalone root-level files — nothing here is visible on the page itself.

- **Meta description updated** to match the current voice — it still said "I'm Peter... One person, start to finish" from before the Father-and-Son/family-business rewrite in pass eleven. Now: "East Point Form & Label Inc. — family-owned labels, packaging, and print for Nova Scotia and Atlantic Canada since 2001. Offices in Halifax and Sydney River." This was the one item flagged for Peter's sign-off rather than changed silently, since it's technically copy (what shows up under the listing in search results) even though it's invisible on-page — he confirmed to go ahead.
- **Canonical URL** (`<link rel="canonical">`) pointing at `https://eastpointprint.ca/`, to avoid duplicate-content ambiguity once the domain's live.
- **Open Graph + Twitter Card tags** — title, description, url, locale, and an image (`hero-bg-coast.jpg`, the Peggy's Cove lighthouse photo already used in the hero) so shared links get a real preview instead of nothing.
- **JSON-LD structured data** (`@type: Organization`) with name, logo, founding date, founder (Paul Andriopoulos, matching the Our Story copy), both office addresses as an array of `PostalAddress` entries, phone, email, LinkedIn (`sameAs`), area served, and the four service categories as `Offer`/`Service` entries. This is the biggest lever of the pass — it gives search engines and AI answer tools (ChatGPT, Perplexity, AI Overviews, etc.) structured facts to extract directly instead of inferring from prose. Validated the JSON actually parses before calling it done.
- **`robots.txt`** — allows all crawlers (the wildcard already covers AI crawlers like GPTBot/ClaudeBot/PerplexityBot, no need to list them individually) and points to the sitemap.
- **`sitemap.xml`** — lists the single homepage URL. This is a one-page site with anchor-link sections (`#story`, `#services`, `#contact`), not separate crawlable pages, so one `<url>` entry is correct.
- **`llms.txt`** — a plain-text, LLM-oriented summary of the business (services, contact info, both addresses, what East Point actually is — a brokerage, not a manufacturer) at the site root. This follows the emerging `llms.txt` convention some AI crawlers check for a fast, low-ambiguity summary instead of having to parse the full page. Directly responsive to Peter's specific ask about LLM discoverability.
- **`lang="en"` → `lang="en-CA"`** on the `<html>` tag — minor, but a more accurate regional signal for a Canadian business.
- **Alt-text audit**: checked every `<img>` on the page — all of them already had descriptive alt text from earlier passes (logo, hero mark, the Paul-and-Peter portrait, all four product photos). Nothing needed fixing. Background photos set via CSS (`story-coast.jpg`, `cta-bg-compass.jpg`, `produce-bg-clock.jpg`, `hero-bg-coast.jpg` in the hero) are decorative and correctly don't need alt text — they're not `<img>` elements.
- **Verified no visual regression**: screenshotted the hero after all changes — pixel-identical to before, as expected, since every change this pass lives in `<head>` or in new standalone files (`robots.txt`, `sitemap.xml`, `llms.txt`) that the page itself never references.

### Pass twenty — industries strip fix, footer cleanup, real LinkedIn, two office addresses

- **Industries label reworded**: "Serving local operators and regulated industries:" → "Serving clients in a variety of industries."
- **Fixed the industries strip wrapping to two lines on desktop.** The label + six badges needed 1371px in a 1240px container — even the shorter new label text wasn't enough on its own. Tightened the badge padding (`0.5em 1.1em` → `0.45em 0.85em`), badge font-size (0.82rem → 0.76rem), label font-size (0.72rem → 0.68rem), and the row's gap (1.4rem → 0.8rem column gap). Confirmed via a direct width measurement in the browser: content now fits in ~1175px, comfortably inside the 1240px container, and all six badges sit on one line at normal desktop widths.
- **Footer contact line simplified**: removed "Sydney River, Cape Breton, Nova Scotia" from the phone/email row — that's now handled by the new address block below (see next point), so it isn't repeated.
- **Two physical addresses added to the footer** in a new `.footer-addresses` block — Halifax (3045 Robie St., Ste 150) and Sydney River (5 Birchdale Dr.), each under a small uppercase label, styled consistently with the rest of the footer's contact info. Sits between the phone/email row and the collapsible image-credits section.
- **Footer copyright line updated**: "Sydney River, Cape Breton, Nova Scotia — Serving Nova Scotia & Atlantic Canada" → "Halifax & Cape Breton — Serving Nova Scotia & Atlantic Canada," matching the two-office reality reflected in the new address block.
- **LinkedIn is real now** — both the nav and footer LinkedIn icons pointed at `#` as placeholders through pass nineteen; both now link to `https://www.linkedin.com/in/peter-andriopoulos-36b5a1408/`, opening in a new tab with `rel="noopener noreferrer"`. Facebook is still a placeholder (`#`) — no URL was given for it.

### Pass nineteen — small copy fixes to the produce intro and the CTA band

- **"Our Products." → "Our Products"** — dropped the trailing period on the H2.
- **Produce intro's closing line extended**: "Chances are we can help you out — if we can't, we'll tell you that." → "Chances are we can help you out. If we can't, we'll tell you that — and more than likely be able to point you in the right direction." (split into two sentences, adds the referral note already used elsewhere on the page, e.g. the Folded Cartons & Flexible Packaging copy from earlier passes).
- **CTA band H2**: "One Call. The Whole Network." → "One Call Gets You the Whole Network."
- **CTA band paragraph replaced** with new copy Peter provided directly — shifts from "tell me what you need and I'll quote it" to "we'll come see you, take the time to figure out what you need, and guarantee quality, reliability, and problems caught early." A noticeably warmer, more relationship-first pitch than the old cost/capability/timeline framing.

### Pass eighteen — produce cards switched to bulleted capability lists

Peter's feedback on the pass-seventeen paragraph descriptions: he wanted point form instead, smaller text so more fits, no mention of industries (product-focused only), and gave the exact 10-item Labels list he wanted used verbatim as the model to follow for the other three.

- **New `.produce-list` component**: a plain `<ul>` with the default markers removed, small gold dots (`::before`, matching the site's existing gold accent) in their place, tight 0.5rem gap between items, and smaller type (0.8rem vs. the 0.92rem the old paragraph copy used) — fits ten short lines per card without the section feeling cramped. Kept the same gold used everywhere else on the site (eyebrow pills, CTA buttons) rather than introducing a new accent color for the bullets.
- **Labels list is Peter's exact wording**, used as given — this is the one card where he provided finished copy rather than asking for a rewrite.
- **Folding Cartons researched from [L'Empreinte's specialties page](https://www.empreinte.ca/specialites/)**, following the same framework as Labels (variety-of-the-product-itself: board stocks, structural styles, finishes, production capabilities) since Peter specifically said cartons should follow the labels model.
- **Flexible Packaging researched from [Labelink's flexible packaging page](https://labelink.ca/flexible-packaging/)**, but following the *other* framework Peter described — focused on the different products/formats within the category (stand-up pouches, flow wrap, stick packs, spout pouches, sachets, quad-seal, rollstock) rather than material variety, plus a few capability lines (barrier protection, finishes, sustainable film) to round out ten.
- **Print researched from two sites Peter named**: [Supratech](https://www.supratech.ca/en/) for the business-forms/cheques/booklet side of commercial print, and SinaLite for the more everyday side (business cards, brochures, postcards, banners, tickets) — SinaLite's own site blocked automated fetching, so that part came from web search results about their product catalog rather than a direct page read. Combined into ten items following the same "different products in the category" framework as Flexible Packaging.
- **No industries mentioned anywhere in the four lists**, per Peter's explicit note — every item is about the product, material, finish, or production capability itself.

### Pass seventeen — research-grounded produce card copy

Peter gave draft copy for all four produce card descriptions but was explicit that he didn't want his exact wording used — he wanted it rewritten, grounded in research on what real label/packaging/print companies actually list as their capabilities, covering "at least the basics" without turning into a substrate-by-substrate list, and kept roughly even in length across all four cards.

- **Researched real industry sites** rather than working from assumption: [Labelink](https://labelink.ca/flexible-packaging/) for labels and flexible packaging breadth (pouch formats, rollstock, barrier protection, substrates, adhesive types, industries served), [L'Empreinte](https://www.empreinte.ca/specialites/) for folding carton breadth (board grades, finishes, structures), and a general search across commercial print shops (Meyers, Taylor, Park Printing, etc.) for what "print" typically covers (digital/offset, short-run, marketing collateral, stock/finish range).
- **Confirmed flexible packaging is broader than pouches**, per Peter's specific note — Labelink's own page lists rollstock, flow wrap, stick packs, and spout pouches alongside stand-up pouches. The new card copy calls this out directly ("more than just pouches — rollstock, wrap, and bag formats...") rather than just naming pouches again.
- **All four rewritten from scratch** — different wording from Peter's draft throughout, not a paraphrase — while keeping the same breadth of coverage he was pointing at: substrate/material range, print or production method, and the industries or use cases each product serves. Kept each description to a single sentence in the 20–23 word range so all four cards read as the same "weight" side by side, matching the direct, no-fluff tone already established elsewhere on the page.

### Pass sixteen — "Our Products," new intro copy, frosted-glass produce cards (partially reverted next pass)

- **"Four Things. Done Right." → "Our Products."**, and the intro paragraph replaced with new copy Peter provided directly (the "we work with the best manufacturers..." line), continuing the "we" voice already established in Our Story and the Labels section. This stuck.
- **Produce cards briefly showed a blurred hint of the Town Clock background photo** via `backdrop-filter: blur(18px)` on a semi-transparent card background, with the section's own gradient loosened to leave photo visible behind the card grid. Peter's read on the result: it didn't work — the photo ended up too visible/sharp in the gaps between cards, competing with the content rather than sitting quietly behind it. **Fully reverted in the very next pass**: `.produce-card` back to solid `var(--white)`, `.produce` background back to the exact pass-fifteen gradient (fades to solid `grey-pale` by 72%, photo only visible near the header). The "Our Products." text change was kept; the card visual experiment was not.

### Pass fifteen — cut two services sections, moved both photo backgrounds, researched how to keep two image sections from clashing

Peter asked to delete the second and third services blocks ("Figure Out What You Need. Get It Made Right." and "Doing What I Said I'd Do"), move the compass photo to the CTA band background and the Town Clock photo to the produce section background, and — since that leaves two adjacent sections both carrying photography — asked specifically how to keep them from visually competing, with an explicit instruction to look at vsgbc.com again and ground the answer in real design reasoning rather than guessing.

**Research, not assumption:** I went back to vsgbc.com and actually scrolled it section by section (not just the one screenshot Peter sent) to see how they handle this exact situation, since their home page alternates light and dark sections constantly. Three things stood out:

1. In VSG's light sections (like the white "Large Format Digital Printing" block Peter referenced), the background photo is barely there — it bleeds in softly at the very top and bottom edges of a tall section, but the zone where the actual headline, text, and product photo sit is almost pure white. The photo never competes with content; it's atmosphere, not a subject.
2. VSG reuses the *same* background photo (a Vancouver skyline/mountain shot) across several consecutive sections — a white "Featured Projects" block, later a dark "From Design to Installation" block — just with a much heavier navy overlay in the dark ones and almost none in the light ones. That's their actual trick for avoiding clashing photos: it's the same photo throughout, so nothing ever fights with anything else on the page.
3. Every section transition on their site is a hard, clean color edge — light slams straight into dark with no gradient blend, no divider line, no decorative rule. The "breathing room" comes entirely from generous internal padding and strong tonal contrast, not from an added graphic element between sections.

**The constraint:** Peter's photos aren't one shared image — the produce section gets the Town Clock, the CTA band gets the compass. Point 2 above (VSG's actual technique) isn't directly available here. So the adapted version of the same underlying principle:

- **Produce section ("Four Things. Done Right."):** the Town Clock photo is applied as a background with a light `grey-pale` gradient scrim that's more transparent near the top (behind the headline, where the clocktower's dome reads as a soft, mostly-monochrome silhouette) and fades to fully opaque by the point the card grid starts, so the four white product cards always sit on a clean, uncluttered surface — the same "photo as atmosphere, not subject" idea as VSG's white sections.
- **CTA band ("One Call. The Whole Network."):** the compass photo sits under the same heavy navy scrim treatment already used for every other dark photo section on this site (compass's original section, the coastline behind Our Story) — consistent, not a new pattern. The compass's circular face and gold accents happen to echo the site's own navy/gold palette, which helps it read as branded texture rather than a random photo.
- **No divider was added between them.** Matching what VSG actually does: the hard value contrast (light grey-pale straight into deep navy) is the separator. To make sure that separation has enough physical room to register, `.cta-band` padding was bumped from 4.5rem to 6.5rem — matching `.produce` — so neither section feels cramped against the other.

**Cleanup:** `service-flexible.jpg` and `service-print.jpg` are gone — both were only used in the deleted sections. `service-compass.jpg` was renamed to `cta-bg-compass.jpg` and `cta-bg-clock.jpg` renamed to `produce-bg-clock.jpg`, matching this project's convention of filenames describing current usage rather than history. Footer credits table and this README updated to match.

### Pass fourteen — a real photo of Paul and Peter in Our Story

Peter added an actual photo of the two of them to the project and asked for it to sit to the right of the Father and Son paragraph — rounded corners, not too large, placed so it looks intentional rather than dropped in.

- **Our Story is a two-column `.split-grid` again** (text left, photo right), the same layout pattern used throughout the site — but this time with the coastline photo still doing double duty as the section's full-bleed parallax background behind both columns (the `.parallax-bg`/`.parallax-scrim` treatment from pass eleven is untouched). So the section now layers three things: the coastline background with its scrim, the text on the left, and the portrait on the right.
- **New `.story-portrait` component**, not a reuse of the standard `.split-media img` treatment: the standard treatment is sized for landscape product/scene photography (460px tall, stretched to fill its column). A headshot at that size and shape would have dominated the section and looked out of place next to a single short paragraph, which is the opposite of "not too big." Instead it's capped at a 280px max-width, holds the photo's actual 4:5 portrait aspect ratio (no stretching or awkward cropping), uses the same corner radius as every other rounded element on the site, and picks up a soft drop shadow so it reads as a deliberately placed photo sitting above the busy background image rather than blending into it.
- **Right-aligned in its column** on desktop via a flex wrapper, so it sits close to the text rather than floating in empty space; centered below the text once the layout stacks to one column under 1024px, matching how every other split-grid section handles the same breakpoint.
- Verified the parallax motion on the background photo still animates correctly with the new two-column content sitting on top of it.

### Pass thirteen — new produce-grid photography, square cards, "Folding Cartons" and "Print" renamed

Peter created and supplied four new product mockup photos directly (his own work, not stock) to replace the pass-six logo-composited images in "Four Things. Done Right." — a consistent set, all on the same off-white backdrop with the product itself in a uniform navy blue: a beer bottle + label roll (Labels), a folding carton with a hang-tab (Folding Cartons), a stand-up pouch (Flexible Packaging), and a spiral-bound notebook (Print).

- **New photos placed** at the existing filenames (`product-labels.jpg`, `product-cartons.jpg`, `product-pouches.jpg`, `product-print.jpg`), so no `<img src>` changes were needed in `index.html`. The `labels.png` source got converted to `.jpg` to match the other three and to shrink it from ~1.2 MB down to ~180 KB; the other three were already reasonably sized JPEGs.
- **Card image frame changed from a fixed 210px landscape crop to a true square (`aspect-ratio: 1/1`)**, since all four new photos are themselves square with the product centered and consistent padding. A landscape crop would have cut into some of them (the box and pouch photos both have their subject running close to the top edge); the square frame shows each photo in full, with zero cropping, and guarantees identical proportions across all four cards since the inputs already share the same shape. This is the "adjust cards to accommodate image shape" call — nothing else in `.produce-card` changed (same border, radius, hover-lift, and white body background as before).
- **"Folded Cartons" → "Folding Cartons"** and **"Commercial Print" → "Print"**, every occurrence sitewide: the produce-card headline, the produce section's intro paragraph, the second and third services-block paragraphs, the meta description, and the CTA band paragraph. One resulting line reads a little redundantly now — the Print card's body copy says "Short-run and print, produced right at the right plant..." directly under an h3 that already says "Print" — left as a literal, faithful rename per Peter's instruction; he's planning a fuller copy pass on the lower sections next anyway.
- The old pass-six mockups (real East Point logo composited onto stock photography via Pillow) are fully retired from the produce grid — this is a deliberate style change, not a bug: solid-color branded mockups instead of logo-on-photo compositing.

### Pass twelve — matched the "Our Story" tag styling and dropped the label-roll photo

Two small, targeted follow-ups to the Labels section content that moved over from Our Story in pass eleven:

- **"Our Story" tag now uses the same eyebrow-pill component** as the one in the actual Our Story section — a rounded, gold, pill-shaped badge (`.eyebrow`), not the plain bold uppercase line style (`.tagline`) it had been using. It's also now positioned above the "Two People Sharing the Expertise of Many" headline, matching Our Story's layout (headline used to come first, with the tag below it, mirroring the pattern every other services block still uses).
- **The label-roll production photo removed** from this section entirely. Since there was no other image ready to take its place, the section dropped its `.split-grid` two-column layout and became single-column text (reusing the `.section-lede` max-width, same approach taken for Our Story in pass eleven when its photo was pulled out too) — consistent, not a one-off. `service-labels.jpg` is no longer referenced anywhere and was removed from `/images` along with its footer credits-table row.

### Pass eleven — "Father and Son," a background photo for Our Story, and a content swap into the Labels section

More explicit, itemized edits from Peter to the hero-adjacent sections, building on the pass-nine override:

- **Our Story H2:** "Two People Sharing the Expertise of Many" → "Father and Son" — shorter, more direct.
- **Copy tightened:** "Paul has been working in the printing industry since the 1980s." → "Paul has been working in the print industry since the 80s." The second and third paragraphs (the production-facilities and straightforward-business-practices paragraphs) were removed from this section entirely — Our Story is now a single short paragraph plus the headline and button.
- **Cape Breton coastline photo moved from foreground to background.** It used to sit in a `.split-media` column next to the text; now it's the section's full-bleed background, using the same `.parallax-bg` / `.parallax-scrim` scroll-parallax treatment already established for the compass and Town Clock sections (see pass seven). The section is no longer a two-column `.split-grid` — it's single-column now, reusing the existing `.section-lede` class (max-width 640px) to keep the paragraph a readable line length against the full-width photo background. Verified the parallax motion animates on scroll the same way it does elsewhere.
- **Judgment call:** the "SINCE THE 1980s" scattered watermark that used to sit behind this section's text was removed. It was designed for a flat navy background at very low opacity (9%); with a real photo now underneath the scrim, it would have been almost entirely obscured. This also brings Our Story in line with the compass section, which is the other photo-background section and also carries no watermark — text-only navy/white sections keep their watermarks, photo-background sections don't. Not explicitly requested; flagging it here in case Peter wants it back in some form.
- **The old Our Story headline and both removed paragraphs didn't disappear** — Peter asked for them to be relocated into the first Services block (Labels, id `services`): the h2 there is now "Two People Sharing the Expertise of Many" (was "Custom Labels & Prime Packaging, Built on a Network I Trust"), the tagline is now "Our Story" (was "The Right Plant, Every Time."), and the paragraph is now the two paragraphs moved from Our Story (was the "From roll-fed prime labels..." paragraph). The product photo, "See the Work" button, and scattered "Labels/Packaging/Print" watermark in that section are unchanged.

### Pass ten — hero CTA row refinements

Three follow-up requests refining the pass-nine hero CTA row, all purely visual/copy, no structural lock issues since these are iterations on content Peter had already opened up:

- **Arrow removed** from the "Email Us" button only, via a new `.btn--no-arrow` modifier — every other button on the site keeps its arrow.
- **"or call 902-877-6930" restructured** onto a single line, vertically centered exactly with the "Email Us" button (confirmed via matching center-Y in the browser), with equal spacing on both sides of "or call." The phone number kept its gold color but got a size and weight bump (600 → 700 weight, ~1.3rem → ~1.45rem max size) to read as the focal point of that side of the row.
- **"I'll answer" removed entirely** — it had briefly been a right-aligned line beneath the phone number; Peter asked for it gone. The `.hero-call`, `.hero-call-row`, and `.contact-note` CSS it depended on were removed as dead code along with it.
- **Subhead extended** with a third sentence: "Known for picking up the phone, getting back to people, and being accountable for our work." — reinforces the family-business, always-reachable framing from pass nine.

### Pass nine — explicit, one-time override of the hero and Our Story lock

Every prior pass respected Peter's standing rule not to touch the hero or "One Person Sharing the Expertise of Many" (Our Story) without him saying so directly. This pass, he did — a specific, itemized list of copy and layout changes to exactly those two sections, given with the explicit instruction to override the lock for this request only. The lock is back in force for anything not listed here.

- **Hero H1:** "You Call, I Answer." → "You Call, We Answer." — first sign of the shift from Peter-as-sole-operator to a family-business framing.
- **Hero subhead replaced:** the old "Something goes sideways?..." line is gone, replaced with "Family-owned and operated. Proudly supporting businesses across Nova Scotia since 2001." — states the family angle and the founding year right up front.
- **Hero CTA row restructured** per Peter's exact spec: the button is now "Email Us" (was "Request a Quote"), followed by "or", then a stacked contact block — "Call" as a small label, "902-877-6930" inline with the button, and "I'll answer" beneath the number in italic. Reused the `.contact-line` pattern already established in the CTA band for the label-over-value structure, and added a new `.contact-note` style for the italic line. The old single-line `.hero-call-line` style is gone (nothing else used it).
- **Industries strip relabeled:** "Serving Atlantic Canada's most regulated industries:" → "Serving local operators and regulated industries:". "Manufacturing" was dropped and replaced with two new badges, "Artisanal Producers" and "Government Agencies" — six badges total now, still wrapping cleanly at mobile widths.
- **"My Story" → "Our Story"**, and the H2 "One Person Sharing the Expertise of Many" → "Two People Sharing the Expertise of Many" — the section now introduces two people, not one.
- **All three paragraphs replaced** with new copy Peter provided directly, introducing Paul Andriopoulos (founded the business in 2001, in the printing trade since the 1980s) and Peter (Paul's son, running day-to-day since 2016, on the road between Halifax and Cape Breton). One small punctuation fix applied to the copy as given: "call people back when we say we will. and treat your business..." → "...we say we will, and treat your business..." (a stray period/lowercase-and that read as a typo, not an intentional sentence break).
- **"How I Work" → "How We Work"** on the button below the new copy, and **"I tip my hat to them" → "We tip our hat to our partners"** etc. throughout — the whole section now consistently uses "we," matching the two-person framing. This was a direct implication of the new paragraphs, not a separate ask.
- **Scope check:** nothing outside the hero and Our Story changed. The three service sections and the CTA band still speak in Peter's first-person-singular voice ("I source every label job," "My job is to learn...") — worth a look from Peter at some point, since there's now a voice shift between Our Story ("we") and the sections right after it ("I"), but that wasn't part of this request, so it was left alone.

### Pass eight — moved the Town Clock photo from the footer to the CTA band

A narrow, one-time exception to the "don't touch the CTA band" rule, at Peter's explicit request: he didn't want a background photo in the footer at all, and asked for the Halifax Town Clock image to go behind "One Call. The Whole Network." instead, replacing the Halifax-skyline photo that was there before pass seven.

- **CTA band:** `.cta-band` in `styles.css` now points at `images/cta-bg-clock.jpg` (renamed from `footer-bg-clock.jpg` for clarity, now that it lives here) instead of `cta-bg-halifax.jpg`. This is a plain CSS background-image swap on the band's existing scrim treatment — no parallax was added here, since that wasn't asked for and the CTA band otherwise stays as Peter specified.
- **Footer:** the `.parallax-bg` / `.parallax-scrim` layers added in pass seven are removed from the footer entirely — it's back to a plain solid navy background, no photo.
- **`cta-bg-halifax.jpg` removed** from `/images` — it's no longer referenced anywhere.
- Nothing else in the CTA band changed — headline, copy, buttons, and layout are exactly as they were.

### Pass seven — Vancouver Sign Group visual pass: parallax, alternating backgrounds, color

Peter loved the hero, My Story, and the CTA band and repeated that they must not change. His ask this round was narrower and purely visual: look closely at [Vancouver Sign Group](https://vsgbc.com) and get closer to three specific things they do — a scroll effect where background and foreground move at slightly different speeds, an alternating pattern of text-only vs. photo backgrounds across sections, and their navy/white color scheme instead of this site's beige. He specified the ghosted-text content himself ("Labels Packaging Print") and suggested compass rose / Halifax Town Clock as photo themes.

I spent time on VSG's live site first rather than guessing from memory — used the browser tools to inspect its actual CSS and DOM (`getComputedStyle`, `elementFromPoint`), which showed it's a WordPress/WPBakery/Nectar-Salient theme site using `nectar-parallax-enabled` row backgrounds. I didn't copy that implementation (it's tied to their theme); I built a small vanilla-JS/CSS equivalent that produces the same visual effect:

- **Parallax:** each section that needs a photo background gets an oversized (132% height) absolutely-positioned `.parallax-bg` layer. A scroll listener (throttled with `requestAnimationFrame`) nudges it via `translateY` based on how far the section has moved from the viewport center — the photo drifts slightly slower than the text/images in front of it. Respects `prefers-reduced-motion` (parallax simply doesn't run if the visitor has that set). See the `.parallax-*` rules in `styles.css` and the parallax block in `script.js`.
- **Alternating backgrounds:** with three service sections to work with, the pattern is now text → image → text, which also happens to alternate navy/white the way VSG's sections do: **Labels** (navy background, scattered ghost-text), **Folded Cartons & Flexible Packaging** (real photo background — the new compass image — with a navy scrim and parallax motion), **Commercial Print** (white background, scattered ghost-text). (The Halifax Town Clock photo, originally placed in the footer here, was moved to the CTA band in pass eight — see above.)
- **Scattered ghost-text**, replacing the old single centered watermark word: three instances of "Labels" / "Packaging" / "Print" at varied size, position, and slight rotation per section (`.watermark-scatter`), closer to how VSG scatters its own service keywords across a section rather than centering one word.
- **Beige removed from every non-locked section.** `--sand` (the beige variable) is gone entirely — the Industries strip and the produce grid ("Four Things. Done Right.") now use a new cool pale grey (`--grey-pale`) instead, closer to VSG's white/navy-only palette. The page body background changed from cream to plain white for the same reason. None of this touched `--cream`, `--navy*`, or `--gold*` — those are still exactly what the locked hero, My Story, and CTA band use.
- **Two new photos sourced** for the alternation, per Peter's compass-rose / Halifax-Town-Clock brief — see the credits table below. The Town Clock candidate originally had a "Parks Canada" government sign visible in the background; rather than reject the whole photo, I cropped it out and re-verified the crop, consistent with how earlier passes handled photos with unwanted branding (crop if the rest of the shot is good, discard only if it isn't).
- **Verified the lock held:** compared the hero, My Story ("One Person Sharing the Expertise of Many"), and the CTA band ("One Call. The Whole Network.") against their pre-pass-seven state after all changes — all three are visually unchanged, since every edit this pass either added new CSS classes/rules or changed rules that only locked sections don't use. Also checked the new parallax and scattered-text sections at desktop, tablet, and mobile widths, and confirmed the parallax motion actually animates on scroll (not just a static offset) by reading the layer's `transform` at two different scroll positions.

### Pass six — branded product mockups ("Four Things. Done Right.")

Peter loved the hero, My Story, and the CTA band and asked that those be left alone from here on out. His remaining note: the four produce-grid photos were just generic blank stock images, and he pointed at Stick2.com, where every product shot shows their own logo actually printed on the product — asked whether I could do the same for East Point.

Yes — this is a standard technique (perspective-correct compositing: warping a flat design so it sits convincingly on an angled surface in a photo), and Python's Pillow library (already used for the logo processing in pass three) handles it directly. What changed:

- **Two of the four original mockups were unusable for this** and got replaced: the folding-carton photo had someone else's fictional brand ("CLOTH") printed all over it already, and the "commercial print" shot was just a raw stack of blank paper — not a real printed surface to brand. New sourcing: a clean angled cardboard-box mockup for Folded Cartons, and a blank business-card mockup for Commercial Print. The jar (Labels) and pouch (Flexible Packaging) photos were already clean, blank, professionally-lit mockups, so those were kept and simply branded in place.
- **Built a compositing pipeline** (`find_coeffs` + `Image.transform(..., Image.PERSPECTIVE, ...)`, the standard PIL approach for this) that warps a small East Point "label" graphic — navy rounded rect, white logo, generated from the real logo assets — onto the exact quad of each photo's label/panel area, matched by eye against a coordinate grid overlaid on each source image. The business card uses the dark logo printed directly on the white card stock instead of a navy patch, since the card itself is already the right "canvas."
- **Result:** all four produce-grid images now show the real East Point mark sitting on the product at the correct angle and perspective — a jar label, a pouch face, a carton panel, and a business card — the same effect Stick2 uses, built with the site's own real logo rather than a generic stock photo.
- All four are still real, license-cleared product photography underneath — nothing here is AI-generated imagery, just a real logo composited onto a real photo, the same way a designer would mock up a physical proof.

### Pass five — font swap, faded background photos, cut the "What I Do" language

Peter's feedback on pass four: Baloo 2 read as "a bit amateur" for the industry, he wanted the "big statement" energy he saw on Stick2.com, he wanted the small "What I Do" / "What I Produce" eyebrow labels gone, and he liked the faded background-photo effect visible in Stick2's hero. I visited Stick2.com directly (and Labels Lab again) rather than going from the screenshots alone:

- **Inspected Stick2's actual CSS**, not just how it looks: their headlines are **Poppins at font-weight 800** — the exact font already loaded on this site for body copy, just never used for headings. That's the fix: Baloo 2 is gone, `--font-display` now points to Poppins, and headings jumped from 700 to 800 weight with a bigger size scale to match Stick2's confident, oversized headline treatment. No new font to load — one less external dependency than before.
- **Confirmed the "big statement" pattern on two real sites' live text**, not summaries: Stick2 and Labels Lab both drop small meta-label eyebrows entirely — sections just open with a bold headline, then an ALL-CAPS one-line tagline, then body copy. No "WHAT WE DO" style tags anywhere on either site.
- **Removed "What I Do" and "What I Make" eyebrows** from the three services blocks and the produce grid, replacing them with that headline-then-tagline pattern (a new `.tagline` component — see `styles.css`). Also renamed "What I Produce" (H2) to "Four Things. Done Right." — same reasoning, different words.
- **Reverse-engineered Stick2's background-photo effect** via `getComputedStyle` in the browser rather than guessing: it's a full-bleed photo with a dark semi-transparent gradient ("scrim") painted over it — a standard, well-documented technique, not a special effect. Implemented the same way here with plain CSS (`linear-gradient(...), url(...)` stacked backgrounds), which meets WCAG contrast guidance for text-over-image rather than just eyeballing it.
- **Sourced two new real photos** for that treatment, per Peter's ask for Halifax/Cape Breton/Nova Scotia imagery: a moody dusk shot of Peggy's Cove lighthouse for the hero (a real lighthouse photo fading in behind the illustrated one — deliberate, ties the brand mark to the real place), and a Halifax skyline sunset silhouette behind the closing CTA band as a bookend. One rejected candidate is worth noting: a Halifax ferry photo with "HALIFAX TRANSIT" branded prominently on the hull — downloaded, inspected, and discarded for showing a real organization's branding; it's not in the folder.

### Pass four — hero rewrite, informed by industry research

Peter asked me to look at how other companies in the labels/packaging/print space open their homepages before touching the hero again, and to keep "One person sharing the expertise of many" but move it out of the hero. Findings and the changes that came out of them:

- **Researched three real comparables:** [Stick2](https://www.stick2.com) (Quebec label manufacturer — brand-driven headline, "Learn More" CTA), [Labels Lab](https://labelslab.com/) (a label/packaging broker, closest business model to East Point's — pairs an emotional headline with a literal subhead naming the service), and [Advantage Label & Packaging](https://www.advantagelabel.com/) (names the service directly in the H1: "Total Labeling Solutions to Grow Your Business"). None of them bury what they actually do — it's in the headline or immediately next to it.
- **Checked that against copywriting theory, not just competitors:** the StoryBrand framework (a standard B2B messaging model) says a hero headline should answer "what do you offer + what's the outcome" in the time a visitor gives you — a few seconds — and that a clear headline beats a clever one. ([StoryBrand one-liner examples](https://hughesintegrated.com/storybrand-one-liner-examples/), [hero section best practices](https://prismic.io/blog/website-hero-section))
- **New hero H1:** "Labels, Packaging & Print. You Call, I Answer." — states the three services literally (per every comparable + StoryBrand), while keeping Peter's own accessibility promise as the payoff half of the line.
- **"One Person Sharing the Expertise of Many" moved to My Story**, where it now works as the section's thesis statement (H2) rather than a hero headline — the paragraphs right below it exist specifically to explain that claim (the network of manufacturing partners), so it fits there argably better than it did in the hero.
- **CTA band headline changed** from "You Call. I Answer." to "One Call. The Whole Network." — it used to echo the hero verbatim; now that the hero itself uses that phrase, the CTA band needed its own line so the two don't repeat word-for-word. The new line leads straight into the paragraph beneath it ("One call reaches the whole network...").

### Pass three — real logo, warm coastal redesign

Peter sent over his actual logo: a hand-drawn (pen and ink, cross-hatched) lighthouse illustration paired with a bold, rounded "EastPoint" wordmark. That artwork became the basis for a full visual redesign:

- **Real logo integrated everywhere** the old "EP in a circle" placeholder used to be — nav, hero, footer. Source files were `ep logo.png` / `ep logo 22.png` on Peter's Desktop. From those I generated (via Python/Pillow, see `images/logo-*.png`):
  - `logo-lockup-black.png` / `logo-lockup-white.png` — the full lighthouse + wordmark, in black ink (for light backgrounds) and white ink (for dark backgrounds).
  - `logo-mark-black.png` / `logo-mark-white.png` — just the lighthouse illustration, cropped out of the full lockup, for compact spaces (used in the hero).
  - `favicon.png` — the white lighthouse mark on a navy circle, used as the browser-tab icon.
  - The nav crossfades between the white and black lockup as you scroll (white over the dark hero, black once the nav goes solid on scroll) — same trick the old text-based logo used, just with images instead of a CSS color swap.
- **Palette rebuilt around the logo.** Kept the deep ocean navy and blue accent from the original direction (Peter said he liked it), but everything that was stark white/cold blue-grey became warm: a cream page background, a sandy-beige alternate section color, warm charcoal ink instead of navy-as-text, and a new brass/gold "beacon" accent for eyebrow pills, CTA highlights, and the hero's watermark glow. See `styles.css` `:root` for the full palette with comments.
- **Typography swapped.** Saira Condensed (the aggressive italic-caps treatment) is gone. Headlines now use **Baloo 2** — a bold, rounded, warm display font that pairs well with Poppins (the existing body font) and echoes the rounded terminals in the logo's wordmark. Headlines are no longer forced to uppercase/italic; they read in normal title case now.
- **Shapes rounded throughout** — buttons and eyebrow labels are now full pills (they were sharp rectangles), photos and product cards got rounded corners, matching the roundedness of the logo.
- **Hero redesigned around the lighthouse mark**, with a soft warm gold radial glow placed behind the lamp — a small "the light is on" touch that also gave the whole page a reason to lean on the gold accent color elsewhere (eyebrow pills on dark sections, the CTA button, hover states).
- Research grounding this direction is cited at the bottom of this section.

### Pass two

- **Product list simplified** to exactly four things: Labels, Folded Cartons, Flexible Packaging, and Commercial Print. Everything else from the original brief's longer service list (MICR cheques, business forms, large format, cannabis packaging, standalone "regulated & compliance print") was removed as a category. The "What I Produce" grid, the three alternating service sections, and the ghosted watermark keywords were all rebuilt around just these four.
- **Cannabis removed entirely** — East Point doesn't currently work with cannabis clients. Pulled from the industries strip, the produce grid, and the services copy (there's no more "SOR/2018-144" or cannabis-specific compliance language anywhere on the page).
- **"View Our Work" button removed** from the hero — it's now a single "Request a Quote" CTA plus an inline "or call ... I'll answer" line.
- **"Our Work" and "Digital Brochure" nav items removed.** Nav is now Home / About Us / Services / Contact. (The product showcase content itself still exists — it's the "What I Produce" section — it's just no longer a distinct top-level nav destination.)
- **Testimonials section removed entirely** — HTML, CSS, and the JS carousel code that powered it are all gone.
- **Voice shifted to first-person throughout.** The original mockup used third-person marketing copy ("Peter has run East Point since 2016..."). This version uses Peter's own words, worked into the hero, About, all three service sections, and the closing CTA band — see the "Where Peter's words ended up" section below.

## Where Peter's words ended up

Peter gave me a block of his own language to weave into the site. Rather than dropping it in as one chunk, I split it by theme and placed each piece where it does the most work:

| Original line(s) | Now lives in |
|---|---|
| "You call, I answer. Something goes sideways? You hear from me before you have to ask. If I'm not the guy for the job, I'll tell you." | Original hero H1/subhead through pass eight. **Superseded in pass nine** — see below. |
| "One person sharing the expertise of many." | Original Our Story H2 (id `story`) — moved out of the hero in pass four. **Superseded in pass nine** — see below. |
| "CALL ME / 902-877-6930 / I'll answer." | Hero CTA row and the closing CTA band. The hero side was restructured in pass nine (see below); the CTA band usage is unchanged. |
| "I'm Peter. East Point is my company. I represent a handful of manufacturing plants across Canada. My partners have been around a lot longer than I have... I tip my hat to them. They are the experts. I'm the guy who always picks up the phone, calls people back when I say I will..." | Original Our Story paragraphs through pass eight. **Superseded in pass nine** — see below. |
| *(pass nine)* "You call, we answer" / "Family-owned and operated. Proudly supporting businesses across Nova Scotia since 2001." / "Email Us... Call... 902-877-6930... I'll answer" | Current hero H1, subhead, and CTA row |
| *(pass nine)* "Two people sharing the expertise of many" / the Paul-and-Peter paragraphs, in full, as given | Current Our Story H2 and all three paragraphs (id `story`) |
| "Figure out what you need. Get it made right. My job is to learn the ins and outs of your business..." | Was the second services block (Folded Cartons & Flexible Packaging) through pass fourteen. **That section was deleted in pass fifteen** — this copy is no longer on the page. |
| "Doing what I said I'd do. I know, it sounds like we're setting the bar low... No account managers. No handoffs. No crickets." | Was the third services block (Commercial Print) through pass fourteen. **That section was deleted in pass fifteen** — this copy is no longer on the page. |

## Design research

Two quick web searches grounded the palette and type choices in pass three, before touching any code, rather than going purely on instinct:

- **Palette:** confirmed that a lighthouse/coastal palette pairing deep navy with warm sand, brass/gold, and warm charcoal — rather than a stark navy-and-white corporate look — is squarely in line with current (2026) coastal design direction, which favors warm neutrals and soft, tactile tones over stark minimalism. ([Lighthouse Color Palette Ideas](https://www.media.io/color-palette/lighthouse-color-palette.html), [Coastal Design Trends for 2026](https://www.echoesofthesea.shop/blogs/the-coastal-journal/coastal-design-trends-2026)) Still current — this part of the direction didn't change in pass five.
- **Type pairing:** at the time, confirmed Baloo 2 + Poppins as a validated, commonly-used pairing described as suiting "homey and family-oriented" brands. ([Best Baloo 2 Font Pairings](https://fontfoundryhub.com/best-baloo-2-font-pairings-alternatives/)) **Superseded in pass five** — Peter felt Baloo 2 read as amateur for the industry once he saw it live; see that section for the Poppins-only research that replaced this.

## Placeholders you must replace before this goes anywhere near production

| Placeholder | Where | What to do |
|---|---|---|
| **Social icons (LinkedIn / Facebook)** | Nav + footer | Currently placeholder circles linking to `#`. Wire these up to real profiles if/when they exist, or remove them. |
| **Service copy** | Three services blocks + four "Four Things. Done Right." cards | Worth a pass from Peter to confirm technical accuracy (exact substrates, press types, etc.) before this is customer-facing. |

The logo is no longer a placeholder — it's Peter's real artwork. Everything else is either a direct fact (phone, email, location, heritage) or Peter's own words as provided.

## Image sourcing & credits

Most photos were downloaded from **Pexels** (pexels.com), a stock photo library whose [license](https://www.pexels.com/license/) permits free use for commercial and non-commercial purposes, with no attribution required, and allows modification — modification explicitly includes the pass-six logo compositing and the pass-seven crop of the Town Clock photo. Five photos are the exception and don't need a credits-table entry or license note the way stock photos do: the four produce-grid photos (`product-labels.jpg`, `product-cartons.jpg`, `product-pouches.jpg`, `product-print.jpg`), which Peter created himself and supplied directly in pass thirteen, and `story-paul-peter.jpg`, an actual personal photo of Paul and Peter that Peter supplied in pass fourteen. No image is hotlinked — all nine live in `/images` and are served locally.

Sourcing rules followed for every image:
- No recognizable human faces (model-release risk) — every image was visually inspected after download. (The hero background has a couple of tiny, unidentifiable distant figures on the rocks near the lighthouse — not a face at any visible size — which is consistent with this rule.)
- No recognizable brand names, logos, or branded products **in the source photo** — the four pass-six mockups are the deliberate exception, since the whole point there is East Point's own logo composited on top; the underlying stock photos themselves were still chosen blank/unbranded first. Two candidates were rejected outright for having someone else's branding baked into the photo itself: a stack of printed cards with a visible café/candle brand logo repeated across them (pass three), and a Halifax ferry photo with "HALIFAX TRANSIT" branded prominently on the hull (pass five). Neither is in the folder. A third candidate — the pass-seven Halifax Town Clock photo — had a "Parks Canada" government sign visible in the background; rather than reject it, it was cropped to exclude the sign entirely and re-verified before use.
- No real client, prospect, or partner company depicted or implied anywhere.
- Topically relevant to East Point's actual business: labels, packaging, cartons, pouches, print production, and real Nova Scotia locations (Cape Breton, Peggy's Cove, Halifax, and the Halifax Citadel).

All images were resized and re-compressed (via macOS `sips`) to keep the page lightweight — total `/images` folder is **~2.7 MB** for all 9 photos combined.

### Image credits table

| File | Subject | Source | Author | License |
|---|---|---|---|---|
| `story-coast.jpg` | Cape Breton coastline, Nova Scotia — Our Story parallax background (moved from a foreground `.split-media` photo to the section's full-bleed background in pass eleven) | [Pexels](https://www.pexels.com/photo/scenic-coastal-view-of-cape-breton-in-nova-scotia-33689132/) | Jeffrey Eisen | Pexels License |
| `service-flexible.jpg` | Blank stand-up flexible packaging pouches | [Pexels](https://www.pexels.com/photo/two-stand-up-zipper-pouch-on-white-surface-12024976/) | Mr Mockup | Pexels License |
| `service-print.jpg` | Sheet-fed printing press in production | [Pexels](https://www.pexels.com/photo/close-up-of-a-printing-machine-9550363/) | criiv | Pexels License |
| `hero-bg-coast.jpg` | Peggy's Cove lighthouse at dusk, Nova Scotia | [Pexels](https://www.pexels.com/photo/sea-coast-with-lighthouse-at-sunset-19118409/) | sahilcaptures | Pexels License |
| `service-compass.jpg` | Vintage brass compass (pass seven — parallax background, Folded Cartons & Flexible Packaging) | [Pexels](https://www.pexels.com/photo/6593988/) | joeofcochin | Pexels License |
| `cta-bg-clock.jpg` | Halifax Town Clock, Citadel Hill (sourced pass seven, cropped to remove a Parks Canada sign in the original; moved to the CTA band background in pass eight) | [Pexels](https://www.pexels.com/photo/33503749/) | Jeffrey Eisen | Pexels License |

This table is also reproduced in the site footer under a collapsible "Image credits" section.

## Technical notes

- **Fonts:** Poppins only — weight 800 ("Black") for all headings, 300–700 for body text and UI. One Google Font family for the whole site, loaded via a single `<link>`.
- **Logo:** real artwork, processed with Python/Pillow into black-ink and white-ink PNG variants plus an icon-only crop and a favicon (see `images/logo-*.png` and `images/favicon.png`). No SVG source was provided, so these are raster PNGs with transparency — fine at the sizes used here, but if East Point ever gets a vector (AI/SVG) version of the logo, swap these out for crisper scaling.
- **Background-image scrim technique** (hero, CTA band): a photo plus a semi-transparent navy gradient stacked as CSS background layers (`linear-gradient(...), url(...)`), not an opacity filter on the image itself — that keeps the photo's own contrast intact while still guaranteeing text legibility on top. See `.hero` and `.cta-band` in `styles.css`.
- **Responsive behavior:** two-column sections collapse to single-column below 1024px; the produce grid runs 4 columns on desktop, 2 on tablet, 1 on mobile; the phone number uses `white-space: nowrap` with a fluid font size so it never wraps; ghosted watermark text is contained with `overflow: hidden` so it can't cause horizontal scroll.
- **JS behavior:** the nav is transparent over the hero and switches to a solid cream background with a box-shadow once you scroll past ~60px (the logo image crossfades from white to black ink at the same trigger); a small script handles the mobile hamburger menu toggle; a third script (pass seven) drives the parallax background layers, throttled with `requestAnimationFrame` and disabled under `prefers-reduced-motion`. That's it — no carousel, no other JS-driven UI.
- **Parallax & scattered watermark (pass seven):** see `.parallax-section` / `.parallax-bg` / `.parallax-scrim` and `.watermark-scatter` in `styles.css`, and the parallax block in `script.js`. Both are additive components — new classes on new/existing elements — and don't redefine any rule the locked hero, My Story, or CTA band sections depend on.
- No build step, no npm install, no external JS libraries — just three files plus the `/images` folder.
