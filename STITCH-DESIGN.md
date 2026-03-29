# DESIGN.md — FeedbackPro Precision

## Brand
- **Name:** FeedbackPro by S-Tech
- **Identity:** Enterprise-grade feedback collection tool that works everywhere — web, Android tablets, even offline. Clinical precision meets approachable professionalism.
- **Personality:** Trustworthy, data-forward, precise, efficient, modern
- **Tone:** Confident but not corporate. Specific not vague. Shows the numbers.

---

## Colors

**Tinted Neutrals System** — every neutral carries a trace of brand blue `#2563eb` (2–5% hue shift). Pure greys are never used.

- Background: `#F2F6FF` (off-white + 3% brand blue)
- Surface: `#FAFBFF` (white + 1.5% brand blue — cards, inputs, nav)
- Surface alt: `#EBF0FA` (white + 5% brand blue — placeholders, tab bars)
- Surface dark: Deep navy `#00174b` (footer, social proof strip, pricing popular card)
- Text primary: `#0F1523` (near-black with blue undertone)
- Text muted: `#3B4862` (blue-slate)
- Text light: `#697890` (lighter muted — microcopy, footnotes)
- Text on dark: `#ffffff`
- Accent primary: Blue `#2563eb` (trust, links, CTAs)
- Accent hover: Dark blue `#1d4ed8`
- Accent light: `#eff6ff` (badge backgrounds, card highlights)
- Accent border: `#bfdbfe`
- Success: `#22c55e`
- Success light: `#f0fdf4`
- Warning: `#f59e0b`
- Border light: `#BCC5E3` (grey + 6% brand blue)
- Border dark: `#97A3C3` (grey + 8% brand blue)
- Toggle bg: `#E5EAF7`

**Shadow system** (brand-tinted, not black):
- Card base: `0 1px 3px rgba(37,99,235,0.05)`
- Card hover: `0 4px 20px rgba(37,99,235,0.10), 0 0 0 1px rgba(37,99,235,0.08)`
- Nav scrolled: `0 1px 0 rgba(37,99,235,0.08), 0 4px 16px rgba(37,99,235,0.05)`

---

## Typography
- **Display/Hero:** Syne 800, tracking -0.02em, line-height 1.1
- **Headings H2:** Syne 700, tracking -0.01em, line-height 1.2
- **Headings H3:** Syne 700, line-height 1.3
- **Body:** DM Sans 400, 16px, line-height 1.6
- **Body medium:** DM Sans 500
- **Labels/Tags:** DM Sans 600, 11-12px, uppercase, tracking 0.08em
- **Max body width:** 680px per line
- **NEVER use:** Inter, Roboto, Arial, system-ui as primary fonts

---

## Spacing System (8px base unit)
- Hero section padding: 128px top, 96px bottom
- Section padding: 96px vertical (standard), 80px vertical (compact)
- Card padding: 28px
- Grid gap: 24px
- Component gap: 16px
- Micro gap: 8px

---

## Custom SVG Language
- **Brand mark:** Two concentric circles with three horizontal lines (like a survey/list icon) + a small filled circle accent (data dot) in bottom-right
- **Stroke weight:** 1.5px
- **Linecap/join:** round
- **Icon color:** `#2563eb` on light surfaces, `#ffffff` on dark
- **Icon backgrounds:** `#eff6ff` rounded square (10px radius)
- **Data visualization icons:** Bar charts with variable heights, not equal columns

---

## Buttons

### Primary (dark navy filled)
- Background: `#0a2540`
- Text: white, DM Sans 600, 14px
- Padding: 12px 24px
- Radius: 4px (sharp, not rounded)
- Hover: `#1a3d5c`, translateY -1px
- Active: translateY 0
- Transition: 150ms ease

### Secondary (blue filled)
- Background: `#2563eb`
- Text: white, DM Sans 600
- Same sizing as primary
- Hover: `#1d4ed8`

### Outline
- Border: 1px `#e2e8f0`
- Text: `#0f172a`
- Hover: border becomes `#0a2540`

### NEVER: fully rounded pill buttons, gradient buttons, shadow-heavy buttons

---

## Cards
- Background: `#ffffff`
- Border: 1px `#e2e8f0`
- Radius: 8px
- Shadow: none by default
- Hover shadow: `0 4px 16px rgba(10,37,64,0.08)`
- Hover border: `#2563eb` at 30% opacity
- Hover transform: translateY(-2px)
- Padding: 28px
- Transition: 200ms ease

---

## Navigation
- Fixed/sticky, white background with 95% opacity + backdrop-blur on scroll
- Shows `border-bottom: 1px #e2e8f0` when scrolled
- Logo left, links center, CTAs right
- Links: DM Sans 500, 14px, `#64748b`, hover `#0f172a`
- Primary CTA: navy filled button
- Secondary CTA: plain text link

---

## Layout
- Max content width: 1200px, centered
- Grid: 12-column, 24px gap
- Features: 3-col on desktop, 2-col on tablet, 1-col on mobile. Large feature cards span 2 cols.
- Pricing: 4-col on desktop, 2-col on tablet, 1-col on mobile
- Hero: Content left-aligned, max 60% width on desktop
- Footer: 4-column, dark navy background, rounded-top optional

---

## Background Textures
- Hero: Subtle CSS grid overlay — `linear-gradient(#e2e8f0 1px, transparent 1px)` at 40-48px intervals, 35-40% opacity
- Hero: Soft blue radial gradient top-right, `rgba(37,99,235,0.06)` only
- NEVER: gradient blobs, particle effects, animated gradients

---

## Section Rhythm
1. Hero — `#f8fafc` bg + grid texture
2. Social proof strip — `#0a2540` bg, single horizontal row
3. Features — `#f8fafc` bg
4. How It Works — `#ffffff` bg (alternates with above)
5. Pricing — `#f8fafc` bg
6. Footer — `#0a2540` bg

---

## Anti-Slop Rules
- NEVER three identical feature cards
- NEVER generic CTA ("Get Started" → "Start collecting feedback free")
- NEVER pure white background (use `#f8fafc`)
- NEVER pure black text (use `#0f172a`)
- Stats must be specific numbers: "500+ businesses", "10M+ responses", "4.8/5 rating"
- Every section must have one dominant element that is 2-3x larger than surrounding elements
- Pricing highlight: Popular plan gets dark navy card treatment, NOT a colored border

---

# STITCH PROMPTS

## Prompt 1: Homepage Hero Section

```
A crisp, precise SaaS landing page hero for "FeedbackPro" — an all-in-one feedback
collection platform by S-Tech Pakistan that helps businesses collect customer and employee
feedback via web, Android tablets (even offline), SMS, and email.

Target users: Business owners and operations managers at Pakistani restaurants, banks,
hospitals, and retail stores who want real-time feedback from customers.

Hero section (full viewport, no extra padding below fold):
- Fixed navigation bar: white/transparent background, FeedbackPro logo (dark navy text +
  small square icon with horizontal lines), center links "Features · How It Works · Pricing",
  right side "Sign in" text + "Start free trial" dark navy button (4px radius, sharp).
- Background: off-white #f8fafc. Overlay: CSS grid lines (thin #e2e8f0 lines every 48px,
  35% opacity). Soft blue radial gradient glow at top-right (rgba 37,99,235 at 6% opacity).
- Small badge pill: "● ALL-IN-ONE FEEDBACK PLATFORM" in #eff6ff with #bfdbfe border,
  #1d4ed8 text, uppercase 11px tracking-wide.
- Headline (Syne 800, 72px, #0a2540, tracking -0.02em, line-height 1.05):
  "Collect feedback" (line 1)
  "everywhere." (line 2, in #2563eb)
  "Act on it anywhere." (line 3)
- Subheadline (DM Sans 400, 20px, #64748b, max-width 560px, line-height 1.6):
  "Design beautiful surveys in minutes. Collect responses on web, Android tablets — even
  offline. Get actionable insights that help your business grow."
- Email capture form: input field (#ffffff bg, 1px #e2e8f0 border, 4px radius, 48px height,
  placeholder "Enter your work email") + "Start free trial →" dark navy button inline.
- Microcopy below form: "Free for 1 month · No credit card required · 100 responses included"
  in 12px #94a3b8.
- 4-column stats row below a thin #e2e8f0 divider:
  "500+" / "Businesses using FeedbackPro"
  "10M+" / "Responses collected"
  "99.9%" / "Uptime guarantee"
  "4.8/5" / "Average customer rating"
  (Syne 700, 36px for numbers, DM Sans 400, 14px #64748b for labels)

Style: Stripe Minimal. White/off-white surfaces. Deep navy #0a2540 text. Blue #2563eb accent.
Syne 700/800 headings, DM Sans 400 body. Sharp corners (4px max radius). No gradients,
no blobs, no animations. Generous whitespace. Inspired by Stripe and Intercom.
```

---

## Prompt 2: Features Section

```
Continue the FeedbackPro Precision design system. Features section below the social proof strip.

Section header:
- "FEATURES" label in #2563eb, DM Sans 600, 12px, uppercase, tracking-widest
- "Everything you need to collect better feedback" in Syne 700, 48px, #0a2540, max-width 520px

Feature cards grid (3-column on desktop, asymmetric — cards 1 and 5 span 2 columns):
Background #f8fafc. Cards: white #ffffff, 1px #e2e8f0 border, 8px radius, 28px padding.

Card 1 (2-col span): "Customizable Surveys" — icon: horizontal lines in a rectangle (survey
form SVG, stroke #2563eb on #eff6ff background). Tag: "DESIGN" badge. Description: full
custom branding, multiple question types.

Card 2: "Works Offline" — icon: wifi signal with checkmark. Tag: "RELIABILITY". Sync description.

Card 3: "Android Tablet Support" — icon: tablet device. Tag: "DEVICES". Kiosk mode description.

Card 4: "SMS & Email Distribution" — icon: envelope. Tag: "DISTRIBUTION". Bulk send description.

Card 5 (2-col span): "Advanced Reporting" — icon: bar chart SVG with 3 bars at different
heights (not equal — 40%, 70%, 100%). Tag: "ANALYTICS". Dashboard/export description.

Card 6: "Transaction Integration" — icon: lightning bolt. Tag: "INTEGRATION". Description.

Hover state: cards get subtle shadow `0 4px 16px rgba(10,37,64,0.08)` and border becomes
`#2563eb` at 30% opacity. translateY -2px.

Same style: #f8fafc background, Syne headings, DM Sans body, #2563eb accent, 4px buttons.
Inspired by Stripe's feature pages. NO generic 3-equal-cards layout.
```

---

## Prompt 3: Pricing Section

```
Continue the FeedbackPro Precision design system. Pricing section with 4 tiers.

Section header (centered):
- "PRICING" label in #2563eb, uppercase, tracking-widest
- "Simple, honest pricing" in Syne 700, 48px, #0a2540
- Subtitle: "Start free for a month. Upgrade when you are ready. No contracts." in #64748b

4-column pricing grid on desktop:

Column 1 — Free Trial:
- "FREE TRIAL" label in #2563eb
- Price: "Free" large Syne 700, "/" "1 month" in #64748b
- Description: "Test the full platform before you commit"
- Features list (green checkmarks): 100 responses, 1 device, up to 2 surveys, basic reporting
- CTA: "Start free trial" outline button

Column 2 — Standard:
- "STANDARD" label
- Price: "PKR 10,000" Syne 700 large, "/ per month" in #64748b
- 7 features including unlimited responses, SMS & email, offline mode, data export
- CTA: "Get Standard" outline button

Column 3 — Popular (HIGHLIGHTED — dark navy card):
- "BEST VALUE" badge above the card in #2563eb pill
- Card: background #0a2540, ALL text white
- "POPULAR" label in #93c5fd (light blue)
- Price: "PKR 6,000" large white Syne 700, "/ per month" in white/60%
- Subtitle: "Billed annually" in #93c5fd
- Description: "Best value — save 40% by paying annually" in white/70%
- 9 features with green checkmarks on dark bg
- CTA: "Get Popular" — #2563eb filled button

Column 4 — Enterprise:
- "ENTERPRISE" label in #2563eb
- Price: "Custom" large, "pricing" in muted
- 8 features including 10+ devices, custom dashboards, dedicated account manager
- CTA: "Contact us" outline button

Footer note: "All prices in Pakistani Rupees (PKR). Annual plan billed upfront. Cancel anytime."

Background: #f8fafc. Same style: Syne headings, DM Sans body, sharp 4px radius corners.
```

---

## Follow-Up Prompts

### Follow-up 1: Refine nav
`Make the navigation bar pill-shaped and centered, floating above the content with a subtle border and backdrop blur. Similar to Linear's floating nav.`

### Follow-up 2: Add product screenshot to hero
`Add a product mockup to the hero section — a floating card showing a survey dashboard with bar charts and response counts. Position it to the right of the headline text on desktop (50/50 split layout). The mockup should have a subtle shadow and slight perspective tilt (-3deg on Y axis).`

### Follow-up 3: Add testimonial section
`Add a testimonials section between "How It Works" and Pricing. 3 testimonials in card layout, each with a business name, industry type, and a specific quote about feedback collection. Cards have 1px border, 8px radius. Use a dark navy background for this section to create contrast.`
