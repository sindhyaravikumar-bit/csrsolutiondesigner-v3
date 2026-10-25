# Coinbase Design System

A faithful recreation of Coinbase's **marketing** brand surface — an institutional financial brand that happens to trade crypto. Quiet, white-canvas, editorially-spaced, near-monochromatic, with a single brand voltage: **Coinbase Blue (#0052ff)**, used scarcely.

> **Scope.** This system covers Coinbase's *marketing* surfaces only. In-product trading surfaces (order books, charts, order forms) live behind login walls and are out of scope. Animation timings and validation states beyond focus are not documented.

> **Sources.** Built from a written design-system brief (colors, type, spacing, component inventory, do/don'ts). No Coinbase codebase or Figma file was attached — if you have access to either, point me at it and I'll tighten the recreation against the real source.

---

## Substitutions & caveats (please review)
- **Fonts.** CoinbaseDisplay / CoinbaseSans / CoinbaseMono are licensed Coinbase typefaces. This system substitutes **Inter** (display + sans) and **JetBrains Mono** (numerics), the brief's documented fallbacks, loaded from Google Fonts. Swap in the real `.woff2` files and update `tokens/fonts.css` with `@font-face` rules if you have a license.
- **Wordmark / logo.** The licensed Coinbase wordmark is **not** reproduced. A neutral text + blue-dot placeholder stands in. Drop the official SVG into `assets/` and swap the `TopNav` glyph.
- **Iconography.** No Coinbase icon font was available — see ICONOGRAPHY below.

---

## CONTENT FUNDAMENTALS

**Voice — institutional calm, not fintech urgency.** Copy reads closer to the Financial Times than a trading dashboard. Confident, plain, declarative.

- **Person.** Second person, gently imperative: "Take control of your money," "Buy, sell and manage." The brand addresses *you*; it rarely says "we."
- **Casing.** Sentence case everywhere except `badge-pill` eyebrows, which are ALL CAPS ("INSTITUTIONAL", "REGULATED"). Headlines never use title case.
- **Tone.** Reassuring and trust-forward — leans on scale ("Trusted by 110M+") and security ("vault protection," "the most trusted name in crypto") rather than hype or FOMO.
- **Length.** Hero headlines are short (4–7 words). Subheads are one plain sentence. Feature blurbs are a single sentence of benefit.
- **Numbers.** Always concrete and mono-set: "$64,210.00", "+2.41%", "5.2% APY". Percentages and prices carry semantic color but never exclamation.
- **No emoji.** None. Not in headlines, not in body, not in nav.
- **Examples.** "The future of money is here" · "Everything you need to get started" · "Take control of your money today" · "Buy, sell and manage hundreds of cryptocurrencies on the most trusted crypto platform."

---

## VISUAL FOUNDATIONS

**Palette.** White canvas + ink (#0a0b0d) + soft-gray elevation bands + a deep near-black editorial canvas for full-bleed dark heroes. **One** accent — Coinbase Blue — on every primary CTA pill, the wordmark, and inline brand links, and nowhere else. Trading **green (#05b169)** and **red (#cf202f)** are semantic, **text-color only**, never a fill. Accent yellow (#f4b000) appears only inside Bitcoin/asset glyph illustrations.

**Type.** CoinbaseDisplay (sub: Inter) for hero headlines **at weight 400** — the single most distinctive choice, signaling editorial calm. CoinbaseSans for everything else (400/600/700). Negative letter-spacing (-1 to -2px) on display only; body stays at 0. CoinbaseMono (sub: JetBrains Mono) on every number. Never bold display copy; never mix display + sans inside one headline.

**Spacing & layout.** 4px base unit. **96px section rhythm** between editorial bands; cards 24px apart inside a band; 32px internal card padding. Content caps at ~1200px centered; hero imagery goes full-bleed. 12-column editorial grid; 3-up benefit grids, 2-up hero splits, 6-column footer.

**Backgrounds.** No gradients on marketing surfaces (the one gradient used is a faux sparkline fill inside mockups). No textures, no patterns. The page is built from flat color bands that rotate **white → soft-gray → dark**. The dark hero with floating product-UI mockup cards is the strongest signature.

**Depth & elevation.** Mostly flat — ~80% of surfaces carry no shadow or border. Feature cards on white get a 1px hairline (#dee1e6). **One** shadow tier only: `0 4px 12px rgba(0,0,0,.04)`, on hovered cards. Decorative depth comes from layered product-UI cards (2–3 stacked at slight rotation) inside dark heroes — not from shadow stacks.

**Corners.** Pill (100px) for everything interactive — CTAs, search bars, badges. 24px for containers (feature cards, product-UI mockups, pricing tiers). 12px for form inputs. Full circle for asset glyphs and avatars. Sharp 0px corners are essentially absent.

**Cards.** White fill, 24px radius, 32px padding, 1px hairline (light) or elevated near-black surface with no border (dark). Hover lifts the single soft shadow.

**Borders.** 1px hairlines (#dee1e6 default, #eef0f3 soft) for dividers and card outlines. Inputs use a 1px hairline that thickens to **2px Coinbase Blue** on focus.

**Motion & states.** Hover state is intentionally undocumented in the brief — keep it restrained (subtle shadow lift on cards, slight opacity on links). Press/active is a color darken only (primary → #003ecc); no scale-bounce. No decorative looping animation.

**Transparency / blur.** Not part of the marketing vocabulary — surfaces are opaque flat color.

---

## ICONOGRAPHY

No Coinbase icon font or SVG sprite was available from a source, so this system **does not ship branded icons**. Approach:
- **Inline SVG, single stroke.** The few glyphs present (search magnifier, checklist ticks) are drawn as minimal 2px-stroke inline SVG using `currentColor`, matching the brand's plain, low-ornament feel.
- **Asset glyphs** render as text symbols on a circular `AssetIcon` plate (e.g. ₿, E, S) — swap for real asset logos by passing an image `src`.
- **No emoji, no unicode-as-icon** in UI chrome.
- **To use a real icon set:** Coinbase's marketing leans on a thin-stroke line style; the closest CDN match is **Lucide** (lucide.dev) at default 2px stroke. If you adopt it, link it from CDN and document it here. Flagged as a substitution — replace with the official set if you have it.

Copy real logos / brand illustrations into `assets/` when available; nothing branded was provided to copy in.

---

## INDEX

**Root**
- `styles.css` — global entry point (consumers link this). `@import` lines only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `fonts.css`.
- `SKILL.md` — portable Agent-Skill wrapper.

**Components** (`window.CoinbaseDesignSystem_6f4408.*`)
- `components/core/` — `Button`, `Badge`, `Card`, `Input`, `SearchInput`
- `components/trading/` — `AssetIcon`, `PriceCell`, `AssetRow`
- `components/marketing/` — `PricingTier`

**UI kits**
- `ui_kits/marketing/` — full marketing homepage recreation (`index.html` + section JSX).

**Foundation cards** (Design System tab) — `guidelines/*.card.html`: Colors (brand, surfaces, text/semantics), Type (display, body, mono), Spacing (scale, radius/elevation), Brand (wordmark, signature dark hero).

**Generated, do not edit:** `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.
