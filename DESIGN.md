# Design System

Committed visual world for the portfolio. Source of truth for tokens is `app/globals.css`; primitives live in `components/hud/`.

## World

Clean Jarvis HUD: a near-black instrument panel with cyan phosphor accents, hairline borders, and restrained motion. Futuristic through precision and legibility, not noise. Dark-only.

This is a **Persuade / Experience** surface — the work leads, the interface recedes.

## Palette

| Token | Value | Role |
|---|---|---|
| `void` | `#05070a` | Page base, scrollbar track |
| `surface` | `#0a0f14` | Panels and raised content |
| `surface-raised` | `#0d151b` | Nested or emphasised panels |
| `line` | `#17303a` | Hairline borders, dividers |
| `line-strong` | `#215666` | Scrollbar thumb, active edges |
| `accent` | `#22d3ee` | Cyan phosphor: focus, links, key marks |
| `accent-bright` | `#67e8f9` | Hover / active accent |
| `accent-deep` | `#0e7490` | Accent on light or dense areas |
| `text` | `#e7f6f9` | Primary copy |
| `text-muted` | `#8fa9b1` | Secondary copy (cyan-tinted, never neutral gray) |
| `text-faint` | `#6b858e` | Metadata, disabled (5.1:1 on `void`) |

## Type

| Token | Family | Use |
|---|---|---|
| `font-display` | Space Grotesk | Headings, project titles, identity |
| `font-sans` | Geist | Body copy and UI |
| `font-mono` | Geist Mono | HUD labels, stats, project metadata, code |

- Body measure 65–75ch; display caps at 6rem.
- Tracking floor `-0.04em` on display; mono labels use `tracking-hud` (`0.18em`) and uppercase.
- Headings are balanced (`text-balance`).

## Shape & Depth

- `rounded-hud` `2px`, `rounded-panel` `4px` — instrument-panel corners, not pill cards.
- `shadow-panel` is a soft drop shadow with offset and blur.
- `shadow-glow` is a 1px cyan ring plus a soft halo; reserved for hover / focus on interactive surfaces. Never a zero-offset halo on static decoration.
- `Panel` corner ticks are 10px L-brackets at `accent/45`.

## Motion

- Easing token `ease-hud` = `cubic-bezier(0.16, 1, 0.3, 1)` (exponential ease-out).
- Hero: CSS-stepped boot sequence, blinking caret, and an 18s radar sweep.
- Scroll reveals (`components/motion/Reveal.tsx`) use `motion/react` with three variants — `up`, `left`, `fade` — fired once per element. Server-rendered content stays visible without JS.
- Cursor glow (`components/motion/CursorGlow.tsx`) is a 480px cyan radial that follows fine pointers only.
- Everything is disabled or reduced inside `prefers-reduced-motion: reduce`.

## Primitives

| Component | File | Contract |
|---|---|---|
| `Panel` | `components/hud/Panel.tsx` | Static bordered surface; `corners` and `tone` props |
| `GlowBorder` | `components/hud/GlowBorder.tsx` | Interactive surface; cyan border + glow on hover / focus-within |
| `Scanline` | `components/hud/Scanline.tsx` | Non-interactive scanline overlay; `fixed` prop for viewport-wide |
| `MonoLabel` | `components/hud/MonoLabel.tsx` | Uppercase mono metadata label |
| `Reveal` | `components/motion/Reveal.tsx` | Scroll-reveal wrapper; `variant`, `delay`, `amount` |
| `CursorGlow` | `components/motion/CursorGlow.tsx` | Pointer-follow cyan glow; fine pointers only |

## Browser Surfaces

Selection, caret, focus ring, scrollbars, and underline offsets are themed from the palette in `globals.css`. Focus ring is a 2px `accent` outline with a 3px offset.

## Rules

- No gradient text; emphasis comes from weight and size.
- No glass or blur as decoration.
- No kicker / eyebrow above a heading.
- No same-size card grids as page structure; cards must carry real content.
- No section numbers unless the sequence carries information.
- Mono is for code, data, and measurement — not a costume for "technical".
- Icons are authored SVG in one stroke weight; no emoji or Unicode glyph icons.

## Accessibility Floor

- Body and placeholder text ≥ 4.5:1; large text ≥ 3:1.
- Visible keyboard focus on every interactive element.
- Motion honours `prefers-reduced-motion`.
- Semantic landmarks, one `h1`, ordered headings.
