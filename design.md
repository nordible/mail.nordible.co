# Design System

## Color Palette

| Color Swatch | Name | Hex | RGB |
|---|---|---|---|
| ![#f5fcff](https://placehold.co/40x20/f5fcff/f5fcff.png) | Ice White | `#f5fcff` | (245, 252, 255) |
| ![#dbf3fa](https://placehold.co/40x20/dbf3fa/dbf3fa.png) | Frost Blue | `#dbf3fa` | (219, 243, 250) |
| ![#b7e9f6](https://placehold.co/40x20/b7e9f6/b7e9f6.png) | Sky Mist | `#b7e9f6` | (183, 233, 246) |
| ![#92dff3](https://placehold.co/40x20/92dff3/92dff3.png) | Clear Cyan | `#92dff3` | (146, 223, 243) |
| ![#7ad7f0](https://placehold.co/40x20/7ad7f0/7ad7f0.png) | Aqua Breeze | `#7ad7f0` | (122, 215, 240) |

---

## Usage Guide

### Hierarchy
This is a monochromatic light palette — five tones of the same cyan-sky hue,
ranging from near-white to a saturated aqua. Use them in order of depth:

- `#f5fcff` — Page background, cards, large surface areas
- `#dbf3fa` — Section backgrounds, alternate rows, subtle dividers
- `#b7e9f6` — Borders, input field backgrounds, hover states
- `#92dff3` — Secondary buttons, badges, tags, highlighted text backgrounds
- `#7ad7f0` — Primary accent, CTA buttons, active states, underlines, icons

### CSS Variables
```css
:root {
  --color-bg:         #f5fcff;   /* Ice White */
  --color-surface:    #dbf3fa;   /* Frost Blue */
  --color-border:     #b7e9f6;   /* Sky Mist */
  --color-secondary:  #92dff3;   /* Clear Cyan */
  --color-accent:     #7ad7f0;   /* Aqua Breeze */
}
```

### Pairing Recommendations
Since this palette is entirely light, pair it with:
- **Text**: `#0A1628` (deep navy) for headings, `#2D3F55` for body text
- **CTA contrast**: Use `#7ad7f0` background with `#0A1628` text for buttons
- **Dark sections**: A deep navy `#0A1628` or `#0D2137` background with
  `#f5fcff` or `#dbf3fa` text creates strong contrast for hero or footer sections

---

## Typography

### Font Roles

| Role | Font | Source | Use For |
|---|---|---|---|
| Display / Hero | `Playfair Display` | Google Fonts | Big emotional headlines, hero H1 |
| Heading | `DM Sans` | Google Fonts | H2, H3, section titles, nav |
| Body | `Inter` | Google Fonts | Paragraphs, descriptions, captions |
| Mono / Code | `JetBrains Mono` | Google Fonts | Email address examples, domain previews |

---

### Why These Fonts

- **Playfair Display** — Serif with personality. Commands attention on large headlines.
  Feels premium and editorial without being old-fashioned. Pairs beautifully with
  the clean cyan palette.
- **DM Sans** — Geometric sans-serif. Highly legible at small sizes. Neutral enough
  for UI labels and subheadings without competing with Playfair.
- **Inter** — The gold standard for body text on screens. Optimised for readability
  across all devices and sizes. Safe, clean, universally supported.
- **JetBrains Mono** — Monospace font for displaying email addresses and domain names
  (e.g. `ramesh@sharmadesigns.in`). Gives technical elements a crisp, deliberate look.

---

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

### CSS Font Variables

```css
:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-heading: 'DM Sans', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Courier New', monospace;
}
```

---

### Type Scale

| Element | Font | Weight | Size (desktop) | Size (mobile) |
|---|---|---|---|---|
| H1 Hero | Playfair Display | 800 | 56–64px | 36px |
| H2 Section | Playfair Display | 700 | 40px | 28px |
| H3 Card Title | DM Sans | 600 | 22px | 18px |
| Body | Inter | 400 | 17px | 16px |
| Caption / Label | DM Sans | 500 | 13px | 13px |
| Email / Domain | JetBrains Mono | 500 | 16px | 14px |
| CTA Button | DM Sans | 600 | 16px | 15px |

---

### System Font Fallbacks
If Google Fonts fails to load, the browser falls back gracefully:
```css
--font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-heading: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono:    'JetBrains Mono', 'Courier New', Courier, monospace;
```

---

## Tone & Mood

This palette communicates:
- **Trust** — blue tones are universally associated with reliability
- **Clarity** — light, airy tones suggest transparency and simplicity
- **Professionalism** — clean and calm without being cold or corporate
- **Technology** — cyan-sky hues feel modern and digital-native

Ideal for: SaaS products, email services, fintech, healthcare,
productivity tools, and B2B platforms targeting SMBs.

---

## Spacing & Layout

Used by: Stripe, Linear, Notion, Vercel — all use an 8px base grid for
consistent, breathable layouts that feel intentional at every scale.

### Base Grid: 8px
Every spacing value is a multiple of 8px.

```css
:root {
  --space-1:  4px;   /* hairline gap, icon padding */
  --space-2:  8px;   /* tight inline spacing */
  --space-3:  16px;  /* default element gap */
  --space-4:  24px;  /* card inner padding */
  --space-5:  32px;  /* section sub-gap */
  --space-6:  48px;  /* between components */
  --space-7:  64px;  /* section top/bottom padding (mobile) */
  --space-8:  96px;  /* section top/bottom padding (desktop) */
  --space-9:  128px; /* hero vertical breathing room */
}
```

### Max Width & Container
```css
:root {
  --container-sm:   640px;   /* text-only sections, FAQs */
  --container-md:   768px;   /* narrow content blocks */
  --container-lg:   1024px;  /* standard page width */
  --container-xl:   1280px;  /* wide layouts, hero */
  --container-full: 100%;    /* full-bleed banners */
}

.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--space-4);
}
```

### Column Grid
Use a 12-column grid. Common layouts:
- Hero: 1 column full width
- Features: 3 columns (4+4+4)
- Pricing: 2 columns (6+6), centered
- Testimonials: 3 columns (4+4+4)
- FAQ: 1 column, max-width 768px, centered

---

## Border Radius

Brands like Notion, Intercom, and Freshworks use consistent rounding
to create a friendly, modern feel without being playful or childish.

```css
:root {
  --radius-sm:   4px;   /* tags, badges, small chips */
  --radius-md:   8px;   /* input fields, small cards */
  --radius-lg:   12px;  /* feature cards, testimonial cards */
  --radius-xl:   16px;  /* pricing cards, modals */
  --radius-2xl:  24px;  /* hero elements, large callouts */
  --radius-full: 9999px; /* pills, CTA buttons, domain checker input */
}
```

---

## Shadows & Elevation

Used by: Stripe, Vercel, Framer — layered shadows create depth without
looking dated. This palette is light so shadows must be soft and coloured
(never pure black).

```css
:root {
  /* Subtle: cards at rest */
  --shadow-sm: 0 1px 3px rgba(10, 22, 40, 0.06),
               0 1px 2px rgba(10, 22, 40, 0.04);

  /* Default: cards on hover, input focus */
  --shadow-md: 0 4px 12px rgba(10, 22, 40, 0.08),
               0 2px 4px rgba(10, 22, 40, 0.05);

  /* Elevated: pricing card, modals, domain checker */
  --shadow-lg: 0 12px 32px rgba(10, 22, 40, 0.10),
               0 4px 8px rgba(10, 22, 40, 0.06);

  /* Accent glow: CTA button, active pricing card */
  --shadow-accent: 0 0 0 3px rgba(122, 215, 240, 0.35);

  /* Coloured lift: hover on feature cards */
  --shadow-blue: 0 8px 24px rgba(122, 215, 240, 0.20);
}
```

**Rule:** Never use `box-shadow: 0 0 10px #000`. Always use low-opacity,
slightly coloured shadows matched to your palette.

---

## Motion & Animation

Used by: Linear, Vercel, Apple — micro-interactions signal quality.
Every transition should feel intentional, never decorative.

### Easing Curves
```css
:root {
  --ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1);   /* elements entering */
  --ease-in:     cubic-bezier(0.4, 0.0, 1, 1);      /* elements leaving */
  --ease-inout:  cubic-bezier(0.4, 0.0, 0.2, 1);    /* toggle, expand */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* bouncy hover lifts */
}
```

### Duration Scale
```css
:root {
  --duration-fast:   120ms;  /* button press, icon swap */
  --duration-base:   200ms;  /* hover states, color transitions */
  --duration-slow:   350ms;  /* card reveal, dropdown open */
  --duration-slower: 500ms;  /* page section scroll reveal */
}
```

### Scroll Reveal (IntersectionObserver pattern)
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--duration-slower) var(--ease-out),
              transform var(--duration-slower) var(--ease-out);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Rules
- Never animate more than `opacity` + `transform` simultaneously (GPU only)
- Stagger sibling cards by 60–80ms for cascade feel
- Respect `prefers-reduced-motion` — always provide a no-animation fallback

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Iconography

### Recommended Library
**Lucide Icons** — used by Linear, Vercel, Raycast. Clean 24px stroke icons,
consistent 1.5px stroke weight, open source.

```html
<!-- CDN import -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

### Usage Rules
- Always use icons at **20px or 24px** — never scale to odd sizes
- Stroke weight: **1.5px** (default Lucide) — do not mix with filled icons
- Icon colour should always be one step darker than its background:
  on `#f5fcff` use `#7ad7f0`; on `#7ad7f0` use `#0A1628`
- Never use icons alone without a label or tooltip (accessibility)
- Pain section icons: use a subtle red tint `#FF6B6B` for negative signals
- Feature/benefit icons: use `#7ad7f0` accent colour

---

## Buttons

### Variants
```css
/* Primary — main CTA */
.btn-primary {
  background: #7ad7f0;
  color: #0A1628;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 16px;
  padding: 14px 28px;
  border-radius: var(--radius-full);
  border: none;
  box-shadow: var(--shadow-md);
  transition: transform var(--duration-base) var(--ease-spring),
              box-shadow var(--duration-base) var(--ease-out);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-blue);
}

/* Secondary — ghost button */
.btn-secondary {
  background: transparent;
  color: #0A1628;
  border: 1.5px solid #b7e9f6;
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 15px;
  padding: 13px 26px;
  border-radius: var(--radius-full);
  transition: background var(--duration-base) var(--ease-out),
              border-color var(--duration-base) var(--ease-out);
}
.btn-secondary:hover {
  background: #dbf3fa;
  border-color: #7ad7f0;
}

/* Text link */
.btn-link {
  color: #0A1628;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: #7ad7f0;
}
```

### Button Rules (from top brands)
- One primary CTA per viewport — never two `.btn-primary` visible at once
- Always pair a primary with a lower-commitment secondary nearby
- CTA copy must be action + outcome: "Get My Business Email" not just "Sign Up"
- Minimum tap target: 44×44px (Apple HIG standard)

---

## Form & Input Design

Used by: Typeform, Notion, Linear — inputs feel premium when given space
and clear focus states.

```css
.input {
  width: 100%;
  padding: 14px 20px;
  font-family: var(--font-body);
  font-size: 16px;
  color: #0A1628;
  background: #ffffff;
  border: 1.5px solid #b7e9f6;
  border-radius: var(--radius-full); /* pill shape for domain checker */
  outline: none;
  transition: border-color var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);
}
.input:focus {
  border-color: #7ad7f0;
  box-shadow: var(--shadow-accent);
}
.input::placeholder {
  color: #92dff3;
  opacity: 1;
}
```

---

## Component Patterns

### Trust Bar
Horizontal row of 3–5 short trust signals below every CTA.
Format: `✓ Signal text` — use a checkmark icon, small caps, muted colour.
Never more than 6 words per signal.

### Social Proof Numbers
Display large, bold, real numbers early on the page.
Example: `10,000+ businesses` · `₹99/month` · `10-min setup`
Use `font-size: 48px`, `font-weight: 800`, `font-family: var(--font-display)`.

### Badges / Pills
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: #dbf3fa;
  color: #0A1628;
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  border: 1px solid #b7e9f6;
}
```

Use badges to label: `MOST POPULAR`, `BEST VALUE`, `NEW`, `LIMITED OFFER`
on pricing cards and feature highlights.

### Card Anatomy (used by Stripe, Intercom)
Every card should have:
1. Icon or visual (top)
2. Title — DM Sans 600, 18–22px
3. Description — Inter 400, 15–16px, muted colour
4. Optional CTA or link (bottom)
5. Consistent inner padding: `var(--space-4)` (24px) minimum
6. Hover: lift with `--shadow-blue` + `translateY(-4px)`

---

## Accessibility Standards

Brands like Atlassian and Shopify treat accessibility as a design
requirement, not an afterthought.

### Contrast Ratios (WCAG AA minimum)
| Text on background | Contrast | Pass? |
|---|---|---|
| `#0A1628` on `#f5fcff` | 17.5:1 | ✅ AAA |
| `#0A1628` on `#7ad7f0` | 5.8:1 | ✅ AA |
| `#2D3F55` on `#dbf3fa` | 7.2:1 | ✅ AAA |
| `#ffffff` on `#0A1628` | 18.1:1 | ✅ AAA |

### Rules
- All interactive elements must have `:focus-visible` styles
- Icon-only buttons must have `aria-label`
- Use `role="region"` and `aria-labelledby` on major page sections
- FAQ accordion must use `aria-expanded` toggled by JS
- Form inputs must have visible `<label>` or `aria-label`
- Minimum body font size: 16px (never go below 14px for any user-facing text)

---

## Responsive Breakpoints

```css
/* Mobile first — write base styles for mobile, override upward */
:root {
  --bp-sm:  480px;   /* large phones landscape */
  --bp-md:  768px;   /* tablets */
  --bp-lg:  1024px;  /* small laptops */
  --bp-xl:  1280px;  /* standard desktop */
  --bp-2xl: 1536px;  /* large screens */
}

/* Usage */
@media (min-width: 768px)  { /* tablet and up  */ }
@media (min-width: 1024px) { /* desktop and up */ }
```

### Key responsive rules
- Navigation collapses to hamburger at `< 768px`
- 3-column grids become 1-column at `< 768px`, 2-column at `768–1023px`
- Hero font size scales: 36px mobile → 56px desktop
- Section padding: `48px` mobile → `96px` desktop
- Domain checker input: full width on mobile, 600px max on desktop

---

## Texture & Depth Techniques

Used by: Stripe, Loom, Framer — flat colour alone feels cheap.
Add subtle depth without adding noise.

### Gradient Backgrounds
```css
/* Hero section — subtle directional wash */
.hero {
  background: linear-gradient(135deg, #f5fcff 0%, #dbf3fa 60%, #b7e9f6 100%);
}

/* Dark CTA section — navy with cyan tint */
.cta-dark {
  background: linear-gradient(135deg, #0A1628 0%, #0D2137 100%);
}

/* Accent glow blob behind hero text (decorative) */
.hero-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(122,215,240,0.15) 0%, transparent 70%);
  pointer-events: none;
}
```

### Dividers
Never use `<hr>`. Use section background alternation instead:
- Section 1: `#f5fcff`
- Section 2: `#dbf3fa`
- Section 3: `#f5fcff`
- Section 4 (dark): `#0A1628`

This creates natural visual rhythm without hard lines.

---

## Logo & Brand Mark Guidelines

- Always maintain clear space equal to the cap-height of the wordmark
- Minimum size: 120px wide (digital), never smaller
- On light backgrounds: use `#0A1628` wordmark
- On dark backgrounds: use `#f5fcff` or `#7ad7f0` wordmark
- Never place logo on a busy or textured background without a clear container