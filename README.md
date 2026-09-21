# Dubai, October to December 2026

A season brief for visitors and investors: what is actually on in Dubai this
quarter, what it costs, and which version of the city each kind of traveller gets.

**Live site:** https://varjane94-a11y.github.io/dubai-season-2026/

## What is here

A single static page. No build step, no dependencies — open `index.html` and it runs.

| File | Purpose |
|---|---|
| `index.html` | The whole page |
| `styles.css` | Design tokens and layout |
| `script.js` | The sticky nav and the audience tabs |

## Design

The palette comes from two things that are genuinely Dubai's own rather than
from the usual gold-on-black: the **mashrabiya**, the geometric screen that
filters light in Gulf architecture, and the **pearling trade** the city lived on
before oil. So: indigo night, pearl, and the verdigris of creek water. The
eight-point Khatem star repeats as a structural device, not as decoration.

Type is [Fraunces](https://fonts.google.com/specimen/Fraunces) for display and
[Archivo](https://fonts.google.com/specimen/Archivo) for everything else.

Motion is one orchestrated sequence on the opening screen. After that the page
moves only in response to something you do. `prefers-reduced-motion` is respected
throughout.

## Data

Every date and price was retrieved on **21 September 2026**. Three caveats travel
with it, and they are stated on the page itself:

- **Global Village Season 31** has no announced opening date. Mid-October is
  inferred from Season 30, which opened 15 October 2025.
- **All New Year pricing** is republished repeatedly through the autumn.
  Reconfirm before quoting any of it.
- **The Museum of the Future** is temporarily closed and is deliberately absent.

Figures in the investment section are sourced market data, not investment advice.

Sources: Dubai Department of Economy and Tourism, UAE Government Media Office,
gitex.com, dubaifitnesschallenge.com, Gulf News, Khaleej Times, Time Out Dubai,
WhatsOn.ae.

## Photography

Images are served from the [Unsplash](https://unsplash.com) CDN under the
[Unsplash License](https://unsplash.com/license), which permits commercial use.
Resolution is selected per breakpoint through the CDN's own width parameter.
