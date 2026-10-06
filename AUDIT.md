# WINFO Site Audit

Stack: React 19 + Vite + React Router. Last rewritten after the "chunk-a-fixes" cleanup (2026-10-06).
Later prompts read this file first, so keep it accurate when the repo changes.

## 1. Routes (`src/App.jsx`)
| Path | Component |
|---|---|
| `/` | `pages/Home/Home` |
| `/events` | `pages/Events/Events` |
| `/hackathon` | `pages/Hackathon/Hackathon` |
| `/podcast` | `pages/Podcast/Podcast` |
| `/officers` | `pages/Officers/Officers` |
| `/membership` | `pages/Membership/Membership` |
| `/support` | `pages/SupportUs/SupportUs` |
| `/merch` | `pages/Merch/Merch` |
| `*` | `pages/NotFound/NotFound` |

Every route also renders `ScrollToTop`, `BlobBackground`, `Navbar`, `<main>`, `Footer`.
`vercel.json` rewrites every path to `/index.html`, so refreshing a deep link works on Vercel.

## 2. Components (`src/components/`)
`BlobBackground`, `Buttons` (`Button`), `Cards` (only `FeatureCard`), `CircuitSVG`, `Footer`,
`Icons` (`CartIcon`, `ShirtIcon`, `MoneyIcon`, `BoxIcon`, `ClockIcon`, `PlayIcon`; inline SVG, `currentColor`),
`Navbar`, `ScrollToTop`, `SectionWrapper`, `WinfoLogo`.
- `Button`: `to` renders a router `Link`; `href` renders `<a target="_blank" rel="noopener noreferrer">`; `mailto:` hrefs skip both attributes.
- No unused components remain. `PageHero`, `SectionHeading`, `FAQAccordion` and the other `Cards/*` were deleted.

## 3. Pages and sections
| Page | Sections / children |
|---|---|
| Home | Hero (photo + overlay + fallback gradient), Who We Are, Our Story, What We Do (`FeatureCard`), What Is Informatics? |
| Events | Hero (title, subtitle, image), category rows ("hackathon & design", "fun with new friends", "professional insights"), bottom CTA |
| Hackathon | Header, sticky sub-nav, Gallery marquee (`#gallery`), This Year (`#this-year`), About + stats (`#about`), Prize Tracks (`#tracks`), Schedule (`#schedule`), Previous Winners + past themes (`#winners`), Sponsors + past sponsors (`#sponsors`), FAQ (`#faq`) |
| Podcast | Hero, Who/What/Why, guest CTA (mailto), past-episodes carousel |
| Officers | Hero, officers (`TeamCard`), committees (`CommitteeCard`) |
| Membership | Hero, perks, bottom CTA |
| SupportUs | Hero, Why Support Us, Get Involved |
| Merch | Hero, details (SVG icons), CTA banner |
| NotFound | 404 heading, one sentence, button to `/` |

Hackathon sub-nav: `IntersectionObserver` highlights the active section; sections use `scroll-margin-top` for the two sticky bars; mobile shows a scrollable pill row.

## 4. Data files (`src/data/`)
| File | Exports | Consumer |
|---|---|---|
| `eventsData.js` | `eventsData` {title, subtitle, categories[{label, events[{name, image}]}], bottomCta} | Events |
| `externalLinks.js` | `MEMBERSHIP_SIGNUP_URL` = `https://tinyurl.com/winfomembership` | other data files |
| `hackathonData.js` | `hackathonData`, `REGISTRATION_URL_TBD` | Hackathon |
| `homeData.js` | `heroData`, `missionData`, `storyData`, `whatWeDoHeading`, `whatWeDoData`, `informaticsHeading`, `informaticsQuotes`, `homeCta` | Home |
| `membershipData.js` | `membershipData` | Membership |
| `navLinks.js` | `navLinks`, `footerLinks`, `socialLinks`, `siteInfo` | Navbar, Footer |
| `officersData.js` | `officersData` {coPresidents, directors, committees…} (2026-2027 board) | Officers |
| `podcastData.js` | `podcastData` (guest CTA uses `btnHref` mailto) | Podcast |
| `supportData.js` | `supportData` | SupportUs |

`hackathonData` fields: `gallery[{src,width,height,alt}]`, `currentHackathon` (15th edition), `tracks`, `schedule`,
`stats`, `winners[{category,image,projectName,projectDescription}]`, `faqs` (from the 15th site), `sponsorBenefits`, `pastSponsors`, `pastHackathons`.
The membership URL reaches Home, Membership, Events and the navbar via `externalLinks.js`.
`Merch.jsx` keeps its Google Form order URL inline (`ORDER_URL`).

## 5. Styling
Tokens live in `src/styles/variables.css` (`:root`): colour (primary `#9E80BD`, accent `#FEB0BA`, bg `#FBF8F2`, text `#1F1D1E`),
gradients, fonts (Chakra Petch headings, Inter body, Space Mono), type scale, spacing, layout, radius, shadows, transitions, z-index.
Scoped tokens added for the redesign: `--gradient-home-hero-fallback` (neutral dark, from `--color-text` tones),
`--color-home-hero-overlay` (plum 60%), `--color-home-hero-text(-muted)`, `--color-nav-bg(-scrolled)`, `--shadow-nav-scrolled`.
The Hackathon page defines its own `--hack-*` accents (sky `#BEE9F7`, teal `#206173`, red `#98493E`, from the 14th poster) on `.hack-page`.
Fonts load from Google Fonts in `index.html` (Chakra Petch, Inter, Space Mono).

Bypasses of the tokens:
- Inline styles: `Officers.jsx:111,132`, `Membership.jsx:84` (centred headings).
- About 8 CSS files hard-code hex colours (`SupportUs`, `Membership`, `Officers`, `Merch`, `Navbar`, `Hackathon`, and others).
- Fixed pixel widths in `CircuitSVG` containers, `BlobBackground`, and a few CTA blocks.

## 6. Public assets
- `public/` is about 146 MB. 32 files are over 500 KB, mostly unresized photos: `images/events/*` (up to 16 MB), `images/team/*` headshots (two PNGs about 10 MB each), `best-*-winner.jpg` (about 7 MB each), `podcast-*.jpg/png`, `hoodie*.png`.
- Home hero expects `public/hero-bg.jpg` (not present yet; the fallback gradient shows).
- Hackathon expects the 15th poster at `public/hackathon/` (not present; `posterSrc` is empty).
- Sponsor logos live in `src/assets/sponsors/` (imported by `hackathonData.js`); no grayscale filter is applied.
- Figma references moved to top-level `design-ref/` (not deployed).

## 7. Open content gaps (all intentional placeholders)
| Item | Where |
|---|---|
| Registration URL (`REGISTRATION_URL_TBD`); page shows "Registration opening soon" | `hackathonData.js` |
| 15th Hackathon poster (`currentHackathon.posterSrc` empty) | `hackathonData.js` |
| Winner `projectDescription` (empty, hidden); NewFuse photo matched by elimination, confirm with board | `hackathonData.js` |
| Stats 266 / 67 / 45: year unverified | `hackathonData.js` |
| Past-theme year labels (calendar vs academic year) | `hackathonData.js` |
| Events subtitle marked `TODO: replace with final copy`; no TechXperience or FearLess, Tech More descriptions yet | `eventsData.js` |
| `hero-bg.jpg` photo | `public/` |
| Officer titles for Jasnoor and Sophia (role "officer"); empty `year` for Tiffany and Fay; mixed year wording ("freshman" / "first-year", "sophomore" / "second-year") | `officersData.js` |
| Membership form is a Microsoft Form; the 2026-27 copy is not made yet, so the URL is unchanged | `externalLinks.js` |
| What Is Informatics? quotes are from past board members | `homeData.js` |
| Merch form open/deadline status | `Merch.jsx` |

Board replies are tracked in `winfo-assets/board-reply-tracker.md`; research is in `winfo-assets/events-draft.md`.

## 8. Known risks
- Image weight (section 6) hurts load time; resize and convert before launch.
- `Hackathon.css` and others still contain hard-coded colours; palette changes will miss them.
- Hackathon winners' images are not named after their categories (commit `e1d655e`); the mapping lives in `winners[]`.
- Hackathon schedule and FAQ come from `winfohackathon2027.web.app`; update both places when that site changes.
- The Merch page says "Orders close soon" with no date.
- Navbar tablet widths (768 to 1024px) rely on tightened spacing; recheck when adding links.
