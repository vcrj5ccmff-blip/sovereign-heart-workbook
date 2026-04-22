# Sovereign Stillness Design System

## Overview

**Sovereign Stillness** is a Stoic self-sovereignty brand for women. The core product is a **30-day digital workbook** (PDF/digital, designed in Canva) that guides women through inner inquiry, self-command, and intentional living. The voice is a transmission — not a course, not a checklist, but a private reckoning delivered with warmth and authority.

The reference materials provided are screenshots of a Canva workbook template (69 pages, "Build Your Digital Empire" by Victoria Avery, sourced from a Canva marketplace listing). These serve as the visual foundation for the Sovereign Stillness product — the template's aesthetic DNA has been adapted and codified here.

**Sources provided:**
- `uploads/1.png` – `uploads/69.png` — 69 individual workbook page exports (PNG)
- `uploads/Screenshot 2026-04-06 at 23.50.14.png` — Cover page variations (5 covers)
- `uploads/Screenshot 2026-04-06 at 23.50.21.png` — Full workbook spread overview
- `uploads/Screenshot 2026-04-07 at 22.07.39.png` — Canva marketplace listing (MUSEeBook template)
- `uploads/Screenshot 2026-04-07 at 22.07.45.png` — Interior spread, editorial layout
- `uploads/Screenshot 2026-04-07 at 22.07.57.png` — Digital/iPad mockup view
- `uploads/Screenshot 2026-04-07 at 22.08.04.png` — Full grid of all page spreads
- `uploads/Screenshot 2026-04-07 at 22.08.10.png` — Additional page spreads

No Figma file or codebase was provided. This design system is derived entirely from the workbook page exports.

---

## Products

### 1. 30-Day Digital Workbook (primary product)
A self-directed PDF/digital workbook sold as a digital download. 8.5×11" portrait format. Designed in Canva. Distributed as PDF. Core page types:
- Cover (5 variations)
- Copyright / legal
- Welcome / about
- Table of Contents
- Chapter opener (dark charcoal, full-bleed)
- Body text (cream bg, serif body, image optional)
- Quote page (large centered quote in tan serif)
- Two-column layout (cream left / dark right)
- Module/curriculum overview
- Homework/exercise prompts
- Step-by-step instructional pages
- CTA/upsell ("Unlock the Full Course")
- Thank You / closing

---

## CONTENT FUNDAMENTALS

### Voice
- **Transmission, not instruction.** The brand speaks as if passing something ancient and hard-won directly to the reader — not teaching, not coaching, not instructing.
- **First person singular, warm authority.** "This is probably the greatest thing to happen in my life — to be able to share this with you."
- **Second person address.** "You are right where you are meant to be." The reader is held, not managed.
- **No hedging.** No "maybe," "might want to," "consider." Declarative sentences. Trust.
- **No emoji.** Not in the workbook; likely not in brand comms either.

### Casing
- **Display/hero headlines:** ALL CAPS, wide letter-spacing (e.g. "BUILD YOUR DIGITAL EMPIRE", "CHAPTER ONE")
- **Section labels/eyebrows:** Small caps, letter-spaced (e.g. "WRITTEN BY", "GET READY TO", "TABLE OF", "SECTION 01")
- **Chapter/subheadings:** Title Case or Sentence case in serif italic/regular (e.g. "Your Heading Here", "Chapter Two")
- **Body:** Sentence case. Justified alignment on some pages, left-aligned on others.
- **Quote attribution:** ALL CAPS, spaced sans (e.g. "BOB ROSS", "QUOTE SOURCE HERE")

### Tone Markers
- Spaciousness — wide margins, breathing room, silence on the page
- Gravitas without heaviness — dark charcoal sections feel grounding, not oppressive
- Warmth without softness — the tan gold is earned, not decorative
- Specificity over inspiration-speak — the workbook gives actual steps and prompts

### Examples
> "You are right where you are meant to be."
> "Stop shrinking to fit into places you've outgrown."
> "This is probably the greatest thing to happen in my life — to be able to share this with you."
> "Get Creative" (handwritten-style CTA, in script)

---

## VISUAL FOUNDATIONS

### Color
| Token | Value | Usage |
|---|---|---|
| `--cream` | `#F5F0E8` | Primary background; page bg |
| `--tan` | `#C8B89A` | Accent; quote text; gold headings; CTA buttons; section labels |
| `--charcoal` | `#1A1A1A` | Dark sections bg; primary body text on cream |
| `--mid` | `#4A4A4A` | Secondary body text; captions |
| `--light` | `#8A8A8A` | Tertiary text; placeholders |
| `--dark-panel` | `#2D2D2D` | Dark section panels (slightly lifted from pure black) |

### Typography
The system is **entirely serif-driven**. No functional sans-serif UI — even labels and captions use a spaced, light sans only for structural contrast.

| Role | Font | Weight | Style |
|---|---|---|---|
| Display hero (covers, big type) | Cormorant Garant | 400–700 | Uppercase, ultra-wide letter-spacing |
| Chapter/section headings | Cormorant Garant | 300–400 | Italic or regular, title case |
| Body text | Lora | 400 | Regular, justified or left |
| Labels / eyebrows | Montserrat | 300–400 | ALL CAPS, letter-spacing 0.15–0.25em |
| Quote text | Cormorant Garant | 300–400 | Regular or italic, large, centered |
| Script accent | "Get Creative" style | — | Cursive/handwritten, tan color |

**⚠️ Font substitution note:** The exact Canva fonts are not confirmed. Cormorant Garant (Google Fonts) is the closest available match for the high-contrast editorial serif. Lora (Google Fonts) used for body. Montserrat (Google Fonts) for labels. If you have the original font files, please share them for exact reproduction.

### Backgrounds & Imagery
- **Cream page bg** is the default. No gradients.
- **Full-bleed dark charcoal** panels used for chapter openers and two-column layouts.
- **Photography:** B&W or desaturated film-grain portrait photography. Women, often looking away or in profile. Never direct-to-camera sales energy.
- **Image treatment:** No filters applied in-template; editorial crop; sometimes overlapping frames (stacked portrait crops).
- **No busy patterns or textures.** Page backgrounds are clean flat cream.
- **Arched motif:** Semi-circular arch used on the copyright page as a dark shape — a subtle architectural element.
- **Circular number badges:** Chapter numbers appear in a tan/cream circle with a serif numeral.

### Spacing & Layout
- Generous margins: ~0.6–0.8 inch on all sides for body pages
- Two-column layout (50/50 split): cream column left, charcoal column right
- Justified body text on dense content pages
- Ample vertical white space between sections — breathing room is a design choice, not waste

### Animation / Interactivity
- None in the PDF product
- Digital interface (future): expect slow, subtle fade transitions; no bounce; no spring. If animated: ease-in-out, 300–500ms.

### Borders & Lines
- Thin hairline rules (~0.5pt) in tan/charcoal to separate sections (e.g. TOC rows)
- No rounded corners on content blocks — angular, editorial
- CTA button: flat rectangle, charcoal fill, white text, all caps, wide letter-spacing. No border-radius.

### Cards / Containers
- No "card" UI in the workbook product
- Dark panels are full-width or full-bleed columns — not floating cards
- Tip callouts: oval/pill border in charcoal with "TIP" in serif inside

### Corner Radii
- Near zero. The brand is architectural and rectilinear. The only exception is the circular arch motif and circular number badges.

### Hover / Press States (digital only)
- Opacity reduction on hover (0.7–0.8)
- No color shift; no shadow lift
- Buttons: background darkens slightly on press

### Iconography
- No icon system in the workbook
- Curved arrow used as a hand-drawn "Get Creative" accent — decorative, not functional
- No icon fonts; no SVG icon sets identified

---

## ICONOGRAPHY

No formal icon system is present in the workbook product. Visual accents are typographic or photographic. The only decorative marks are:
- **Curved arrow** (hand-drawn style, tan color) — used as a "tip pointer" annotation
- **Oval/pill callout** — border-only oval around "TIP" text
- **Arch shape** — solid dark semi-circle used as background shape on copyright page
- **Chapter number circles** — serif numeral in a tan/cream circle

No CDN icon library is in use. For digital product UI, recommend **no icon library** unless absolutely needed — lean on typography and spacing instead. If icons become necessary, use a minimal stroke-weight set (e.g. Feather or Lucide) at low opacity.

**Assets available in `assets/`:** See below.

---

## File Index

```
README.md                        ← this file
SKILL.md                         ← agent skill definition
colors_and_type.css              ← CSS custom properties for all tokens
assets/
  workbook-pages/                ← key exported workbook pages (PNG)
preview/
  colors-primary.html            ← Primary color swatches
  colors-semantic.html           ← Semantic color roles
  type-display.html              ← Display / hero type specimen
  type-body.html                 ← Body + label type specimen
  type-quote.html                ← Quote page specimen
  spacing-layout.html            ← Spacing tokens + layout rules
  components-buttons.html        ← Button + CTA styles
  components-callouts.html       ← Tip callout, chapter badge, arch motif
  components-page-types.html     ← Workbook page type overview
ui_kits/
  workbook/
    README.md                    ← Workbook UI kit overview
    index.html                   ← Interactive workbook prototype
    CoverPage.jsx
    ChapterOpener.jsx
    BodyPage.jsx
    QuotePage.jsx
    TwoColumnPage.jsx
    TableOfContents.jsx
    CTAPage.jsx
```
