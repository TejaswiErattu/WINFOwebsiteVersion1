# WINFO Website

The official website for **WINFO (Women in Informatics)** at the University of Washington — a student organization dedicated to building a more diverse and equitable future in tech.

## Tech Stack

- **React 19** + **Vite** — fast dev server & optimised builds
- **React Router DOM** — client-side routing
- **CSS Custom Properties** — design tokens in `src/styles/variables.css`
- **Google Fonts** — Chakra Petch (headings), Inter (body), Space Mono (labels)

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/hackathon` | Hackathon |
| `/events` | Events |
| `/podcast` | Podcast |
| `/officers` | Team / Officers |
| `/membership` | Membership (Join Us) |
| `/support` | Support Us |
| `/merch` | Merch |
| `*` | 404 Not Found |

## Project Structure

```
public/
  images/             # Logo files & event photos
design-ref/           # Figma reference screenshots (not deployed)
src/
  components/         # Reusable UI components (Navbar, Footer, WinfoLogo, Button, Cards, etc.)
  data/               # Page-specific data files (homeData.js, hackathonData.js, etc.)
  pages/              # Route-level page components
  styles/             # Global CSS & design tokens
  App.jsx             # Router & layout
  main.jsx            # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Updating Content

All page content lives in `src/data/` — edit the data files to update text, events, officers, Hackathon FAQs, etc. without touching JSX.

Replace placeholder images by adding files to `public/images/` and updating the corresponding `image: ''` fields in the data files.

## Design

- Figma HiFi designs in `design-ref/` (kept out of `public/` so they don't ship to production)
- Colour palette: soft violet (`#9E80BD`), blush pink (`#FEB0BA`), lavender (`#B7A3DF`)
- Fonts: Chakra Petch (headings and titles), Inter (body), Space Mono (monospace labels)
