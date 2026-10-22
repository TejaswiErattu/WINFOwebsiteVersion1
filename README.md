# WINFO Website

The official website for **WINFO (Women in Informatics)** at the University of Washington — a student organization dedicated to building a more diverse and equitable future in tech.

## Tech Stack

- **React 19** + **Vite** — fast dev server & optimised builds
- **React Router DOM** — client-side routing
- **CSS Custom Properties** — design tokens in `src/styles/variables.css`
- **Google Fonts** — Outfit (headings) + Manrope (body)

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/hackathon` | Hackathon |
| `/events` | Events |
| `/podcast` | Podcast |
| `/officers` | Our Team |
| `/alumni` | Alumni |
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

| To update… | Edit |
|---|---|
| Events calendar (each quarter) | `src/data/calendarEvents.js` — steps are at the top of the file |
| Team, committees | `src/data/officersData.js` |
| Hackathon (dates, theme, FAQ, sponsors, top banner) | `src/data/hackathonData.js` |
| Alumni page and past boards | `src/data/alumniData.js` |
| Navbar, footer links, socials | `src/data/navLinks.js` |
| Membership / merch / alumni form links | `src/data/externalLinks.js` |

Replace placeholder images by adding files to `public/images/` and updating the corresponding `image: ''` fields in the data files.

Every push to `main` runs lint, the build, an image-reference check and `npm audit` (`.github/workflows/ci.yml`); Vercel then deploys automatically.

## Design

- Figma HiFi designs in `design-ref/` (kept out of `public/` so they don't ship to production)
- Colour palette: soft violet (`#9E80BD`), blush pink (`#FEB0BA`), lavender (`#B7A3DF`)
- Fonts: Outfit (headings) + Manrope (body)
