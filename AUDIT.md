# WINFO Site Audit

**Date:** 2026-10-05 · **Stack:** React 19 + Vite + React Router · **Branch:** `main` @ 30d71b9
Paths are relative to the repo root. `>500 KB` marks an image over the size threshold.

## 1. Route map
Defined in `src/App.jsx`, wrapped in `BrowserRouter` in `src/main.jsx`. There is no catch-all or 404 route.

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

Every route also renders: `ScrollToTop`, `BlobBackground`, `Navbar`, `<main>`, `Footer`.

## 2. Component tree per page (one level)
| Page | Sections, in order | Child components |
|---|---|---|
| Home | Hero, Who We Are, Our Story, What We Do, What Is Informatics | `SectionWrapper`, `Button`, `FeatureCard`, `WinfoLogo`, `CircuitSVG` |
| Events | Hero, Event Category Rows, Bottom CTA | `SectionWrapper`, `Button`, `CircuitSVG` |
| Hackathon | see §8 | `SectionWrapper`, `Button`, `CircuitSVG` |
| Podcast | Hero, Who/What/Why, Guest CTA, Past Episodes Carousel | `SectionWrapper`, `Button`, `CircuitSVG` |
| Officers | Hero, Officers, Committees | `SectionWrapper`, `TeamCard`, `CommitteeCard`, `LinkedInIcon` (local), `CircuitSVG` |
| Membership | Hero, Membership Perks, Bottom CTA | `SectionWrapper`, `Button`, `CircuitSVG` |
| SupportUs | Hero, Why Support Us, Get Involved | `SectionWrapper`, `CircuitSVG` |
| Merch | Hero, Details, CTA Banner | plain JSX only |

Components in `src/components/` that no page renders: `PageHero`, `SectionHeading`, `FAQAccordion`, `Cards/AccentCard`, `CTABanner`, `Card`, `EpisodeCard`, `ImageCard`, `JoinCTACard`, `OfficerCard`, `SponsorLogoGrid`, `WinnerCard`.

## 3. Data files (`src/data/`)
| File | Exports and shape | Consumer |
|---|---|---|
| `eventsData.js` | `eventsData` `{title, subtitle, categories[{label, events[{name, image}]}], bottomCta{heading, body, btnLabel, btnTo}}` | Events |
| `externalLinks.js` | `MEMBERSHIP_SIGNUP_URL` (string) | other data files |
| `faqData.js` | `faqData` (array) | **unused** |
| `hackathonData.js` | `hackathonData` `{title, heroPhotos[], tagline, aboutBody, …, stats[{number, label}], winners[{category, image, link}], registerCta, faqs[{question, answer}], sponsorBenefits[], pastSponsors[{name, logo}], pastHackathons[{theme, year}]}` | Hackathon |
| `homeData.js` | `heroData`, `missionData`, `storyData`, `whatWeDoHeading`, `whatWeDoData[]`, `informaticsHeading`, `informaticsQuotes[]`, `homeCta` | Home |
| `membershipData.js` | `membershipData` `{title, heroBody…, ctaLink, heroImage, perksHeading, perks[], bottomCta}` | Membership |
| `navLinks.js` | `navLinks[]`, `footerLinks[]`, `socialLinks[]`, `siteInfo{brandName, brandTagline, email, address[], copyright, navCtaLabel, navCtaHref}` | Navbar, Footer |
| `officersData.js` | `officersData` `{title, heroBody…, heroImage, coPresidents[], directors[], committees[]}` | Officers |
| `pastSponsorsAuto.js` | default `sponsorsAuto` `[{name, logo}]`, built by Vite glob over `src/assets/sponsors` | **unused** |
| `podcastData.js` | `podcastData` `{title, heroBody…, ctaLink, infoCards[], guestCta, episodes[]}` | Podcast |
| `sponsorsData.js` | `sponsorsData` `[{name, logo, url, tier}]`; every `logo` is `''` | **unused** |
| `supportData.js` | `supportData` `{title, heroText[], whyText[], involvedCards[], ctaLink}` | SupportUs |
| `winnersData.js` | `winnersData` `{heading:'14th Hackathon Winners', cards[{placement, emoji, image…}]}` | **unused** |

Merch keeps its order-form URL inline in `Merch.jsx:4` instead of in a data file.

## 4. Styling
**Tokens:** all are declared in `src/styles/variables.css` under `:root`.

| Group | Tokens |
|---|---|
| Color | `--color-primary` `#9E80BD` (light `#B7A3DF`, dark `#7A5C9E`, hover `#8A6DB0`); `--color-accent` `#FEB0BA` (light `#FEE6EA`, dark `#E8919E`); `--color-info` `#948DD1`; success / warning; `--color-bg` / `--color-cream` `#FBF8F2`; `--color-bg-alt` / `--color-cream-deep` `#F4EFE5`; `--color-surface` `#fff`; text `#1F1D1E` / `#4E4749` / `#857E80`; border `#E7DFD1` / `#F0E9DD`; `--color-overlay` |
| Gradients | `--gradient-hero`, `-primary`, `-accent`, `-blue`; `--gradient-card-*` are all aliases of `--color-surface` |
| Fonts | `--font-heading` and `--font-cursive` (both Chakra Petch), `--font-body` (Inter), `--font-mono` (Space Mono) |
| Type scale | `--text-xs` … `--text-5xl` (clamp-based), `--leading-*`, `--tracking-*`, `--weight-*` |
| Spacing / layout | `--space-0` … `--space-24`, `--section-padding(-sm)`, `--container-max` 1200px, `-narrow` 800px, `-wide` 1400px, `--container-padding` |
| Other | `--radius-*`, `--border-width*`, `--shadow-*`, `--transition-*`, `--z-*` |

Breakpoints exist only as comments; they aren't tokens. There is a commented-out dark-mode block. `global.css:634,667-668` overrides `--section-padding` and `--container-padding` inside media queries.

**Inline styles:**
- `Officers.jsx:111`, `:132`: `{textAlign:'center', marginBottom:'2.5rem'}`
- `Hackathon.jsx:179`: `{textAlign:'center', marginTop:'2rem'}`
- `Membership.jsx:84`: `{textAlign:'center', marginBottom:'1rem'}`

**Hex literals outside the token file (count per file):**

| File | Count |
|---|---|
| `WinnerCard.css` | 22 |
| `SupportUs.css` | 20 |
| `Membership.css` | 15 |
| `AccentCard.css` | 14 |
| `OfficerCard.css` | 13 |
| `Officers.css` | 10 |
| `PageHero.css` | 6 |
| `Card.css` | 6 |
| `Merch.css` | 5 |
| `Navbar.css` | 5 |
| `CTABanner.css` | 4 |
| `EpisodeCard.css` | 3 |
| `BlobBackground.css` | 3 |
| `Podcast.css`, `Hackathon.css`, `Buttons.css` | 2 each |
| `global.css`, `Events.css`, `Footer.css` | 1 each |

Off-token colors in these files include `#DABAF0`, `#FCC1C3` and `#F9EEFA`.

**Fixed pixel widths:** `PageHero.css:64,73,82` (360 / 280 / 200px), `BlobBackground.css:22,30,39` (500 / 400 / 350px), `CTABanner.css:20` (300px).

## 5. Images (`public/`)
Dimensions come from `sips`, sizes from `stat`. `>500 KB` marks files over the threshold.

| File | px | Size | |
|---|---|---|---|
| favicon.svg | 48×46 | 9 KB | |
| images/winfo-logo-color.png | 1050×319 | 15 KB | |
| images/winfo-logo-white.png | 1050×319 | 15 KB | |
| images/hackathon-food.jpg | 2976×1984 | 2.5 MB | >500 KB |
| images/hackathon-participants.jpg | 2976×1984 | 2.4 MB | >500 KB |
| images/hackathon-1.jpg | 1200×900 | 326 KB | |
| images/hackathon-2…5.jpg | 1200×800 | 200–226 KB | |
| images/hackathon-group.png | 1500×1463 | 1.0 MB | >500 KB |
| images/best-overall-winner.jpg | 6000×4000 | 6.5 MB | >500 KB |
| images/best-impact-winner.jpg | 6000×4000 | 6.9 MB | >500 KB |
| images/best-coding-winner.jpg | 6000×4000 | 7.1 MB | >500 KB |
| images/best-design-winner.jpg | 6000×4000 | 7.2 MB | >500 KB |
| images/hero-photo-1.png | 1249×1068 | 1.0 MB | >500 KB |
| images/hero-photo-2.png | 1457×1076 | 241 KB | |
| images/merchpic.png | 410×538 | 230 KB | |
| images/hoodie1.png | 1122×1402 | 1.6 MB | >500 KB |
| images/Hoodie2.png | 1122×1402 | 1.8 MB | >500 KB |
| images/hoodie3.png | 1122×1402 | 1.6 MB | >500 KB |
| images/hoodie4.png | 1122×1402 | 1.5 MB | >500 KB |
| images/comingsoon.png | 1536×1024 | 1.1 MB | >500 KB |
| images/stickfigures.png | 1672×941 | 943 KB | >500 KB |
| images/support-group.jpg | 1200×800 | 195 KB | |
| images/winfo-community-1.jpg | 1200×683 | 202 KB | |
| images/winfo-community-2.jpg | 1200×900 | 245 KB | |
| images/winfo-community-3.jpg | 1200×800 | 244 KB | |
| images/podcast-hero.jpg | 4096×2731 | 7.0 MB | >500 KB |
| images/podcast-s3e2.png | 4096×2304 | 6.0 MB | >500 KB |
| images/events/event-01.jpg | 4032×3024 | 3.3 MB | >500 KB |
| images/events/event-02.jpg | 4096×2731 | 7.1 MB | >500 KB |
| images/events/event-03.jpg | 4032×3024 | 4.8 MB | >500 KB |
| images/events/event-04.png | 762×741 | 965 KB | >500 KB |
| images/events/event-05.png | 765×808 | 1.2 MB | >500 KB |
| images/events/event-06.png | 4032×3024 | **15.9 MB** | >500 KB |
| images/events/event-07.jpg | 2731×4096 | 9.0 MB | >500 KB |
| images/events/event-08.jpg | 4096×2731 | 7.0 MB | >500 KB |
| images/events/event-09.png | 1185×1096 | 1.3 MB | >500 KB |
| images/events/event-10.jpg | 4096×2731 | 8.7 MB | >500 KB |
| images/events/event-11.png | 3774×2150 | 8.7 MB | >500 KB |
| images/team/tanya_headshot.PNG | 2250×3000 | **10.7 MB** | >500 KB |
| images/team/fay_headshot.PNG | 3000×2000 | **10.7 MB** | >500 KB |
| images/team/tejaswi_headshot.JPG | 5616×3744 | 1.9 MB | >500 KB |
| images/team/stephanie_headshot.JPG | 1242×2208 | 917 KB | >500 KB |
| images/team/chloe_headshot.jpg | 1536×2048 | 900 KB | >500 KB |
| images/team/jasnoor_headshot.JPG | 1491×1988 | 412 KB | |
| images/team/sophia_headshot.JPG | 1536×2048 | 374 KB | |
| images/team/maryory_headshot.jpeg | 1223×1223 | 293 KB | |
| images/team/hana_headshot.JPG | 901×1585 | 127 KB | |
| images/team/tiffany_headshot.JPG | 1440×1267 | 112 KB | |
| images/icons/*.png (8 files) | 17–58 px | <2 KB each | |
| images/sponsors/accenture.png | 48×48 | 1 KB | |
| images/sponsors/test-google.svg | 24×24 | 0.5 KB | test file |
| figma-ref/High Fidelity.png | 14710×13029 | **17.7 MB** | >500 KB |
| figma-ref/page1–7.png, Hackathon.png, Home Page HiFi(-1).png | 1500 wide | 1.1–3.8 MB each | >500 KB |
| figma-ref/Ellipse 22.png, Group 51.png | — | ~1.0 MB each | >500 KB (duplicates of hero-photo-1 / hackathon-group) |
| figma-ref/Ellipse 25.png, Frame 61.png, winfo-logo-white.png | — | 12–241 KB | |

`public/figma-ref/` (about 40 MB in total) is design reference material. Because it sits in `public/`, Vite copies it into every deploy.

## 6. Sponsor logos
- **Rendered:** `src/assets/sponsors/` (27 files: 25 SVG, 1 JPEG, 1 PNG). They are imported in `hackathonData.js` and shown in Hackathon §7 Past Sponsors. Seven of the 34 sponsors have `logo: ''` and render their name as text instead.
- **Unused:**
  - `public/images/sponsors/` holds only `accenture.png` and `test-google.svg`.
  - `SponsorLogoGrid`, `sponsorsData.js` and `pastSponsorsAuto.js` exist but are never used.
- **Grayscale: none.** Both rules say so explicitly:
  - `src/pages/Hackathon/Hackathon.css:437`, inside `.hack-past-sponsor__logo`: `/* Logos are shown in their original colours — no grayscale filter */ opacity: 1;`
  - `src/components/Cards/SponsorLogoGrid.css:17`, inside `.sponsor-grid__item`: same comment, `opacity: 1;`
- The only `grayscale` in the CSS is `-moz-osx-font-smoothing: grayscale` (`global.css:52`), which controls font smoothing, not images.

## 7. Membership link
The membership URL is defined once, in `src/data/externalLinks.js:6`, as `https://tinyurl.com/winfomembership`. It is referenced from:
- `homeData.js:22` (Who We Are CTA) and `:103` (`homeCta`, which Home doesn't render)
- `hackathonData.js:55` (`ctaLink`, used by the Register CTA)
- `membershipData.js:17` (hero) and `:51` (bottom CTA)
- `navLinks.js:72` (navbar "join us!")
- `eventsData.js:48` (bottom CTA)

No component hardcodes the URL. The Google Form at `Merch.jsx:4` is the merch order form, not the membership form.

## 8. Hackathon page (`src/pages/Hackathon/Hackathon.jsx`)
Sections in order:
1. Hero: photo strip, tagline "COLLABORATE. NETWORK. SOLVE.", about text
2. Stats: 266 / 67 / 45
3. Previous Winners
4. Register CTA
5. FAQ (an inline accordion; it doesn't use the `FAQAccordion` component)
6. Sponsor the Hackathon
7. Past Sponsors
8. Past Hackathons

**The "Previous Winners" Learn More button points nowhere.** Every `winners[].link` in `hackathonData.js` is `'#'`, and `Hackathon.jsx:103` renders the link only when `w.link && w.link !== '#'`, so no Learn More link appears at all. The category-to-image mapping is also crossed:

| Category | Image used |
|---|---|
| Best Overall | `best-impact-winner.jpg` |
| Best Design | `best-overall-winner.jpg` |
| Best Impact | `best-design-winner.jpg` |
| Best Coding | `best-coding-winner.jpg` (the only match) |

## 9. Events page (`src/pages/Events/Events.jsx`)
- **Structure:** a hero (title, subtitle, a fixed image `/images/winfo-community-2.jpg` set in the JSX), then category rows, then a bottom CTA.
- **Subtitle:** "Workshops, socials, and company visits happening all year long." `eventsData.js:12` marks it `/* TODO: replace with final copy */`.
- **Data:** `categories[]`, three rows. Each row has a lowercase lead-in `label` and an `events[]` list of `{name, image}`. Events have no description, date, link or type field. "Fearless, TechMore" is a single entry.
  - Row 1 ("whether you're looking for hackathon & design experience..."): Annual Hackathon, TechXperience, "Fearless, TechMore"
  - Row 2 ("fun with new friends..."): Vision Boards, Frost & Frosting, Paint & Sip, Galentine's Floral Arrangement
  - Row 3 ("or professional insights..."): Microsoft Company Tour, Adobe Company Tour, Hot Cocoa Table Talk, Decoding HCI
- Event cards aren't clickable.

## 10. Placeholder text
- **lorem / TBD / XXX:** no matches.
- **TODO:**
  - `eventsData.js:11`: Events subtitle
  - `sponsorsData.js:11-18`: eight logo TODOs. The list includes Meta, Figma, Boeing and Expedia, which aren't in the Hackathon past-sponsor list.
  - `winnersData.js:20` and nearby lines: image TODOs
- **"placeholder":** these are CSS class names for empty-image fallbacks, plus the comments in `sponsorsData.js:7` and `winnersData.js:8`.
- **2025:** `hackathonData.js:176` (past theme), `officersData.js:2` (comment "2025–2026 board")
- **2024:** `hackathonData.js:177` (past theme)

## 11. Emoji (Windows rendering)
Rendered on the live site:
- `navLinks.js:21`: `merch 🛍️`, the nav label. It is in the navbar on every page, so it is the most likely source of the reported issue.
- `podcastData.js:12`: `▶ watch here!` (U+25B6, which renders as an emoji on some systems)
- `Merch.jsx:36,92`: `🛒 order now`; `:59` 👕; `:64` 💸; `:69` 📦
- Fallback images, shown only when a page has no image: `Home.jsx:53` 🤝, `:66` 📖; `Officers.jsx:103` 👩‍💻; `Membership.jsx:76` 👩‍💻; `Podcast.jsx:56,102` 🎙️

In components or data that never render: `winnersData.js` 🥇🥈🥉✨🏆🌿📚🎨; `WinnerCard.jsx:19` 🏆; `ImageCard.jsx:18` 📸; `OfficerCard.jsx:25` 👤.

Non-emoji symbols in rendered output: `FeatureCard.jsx:31` →; `Hackathon.jsx` FAQ chevrons ∧ ∨.

## Risks
- **Image weight:** about 30 files are over 500 KB. Several pages load images of 7–16 MB with no resizing, `srcset` or WebP. Only the sponsor logos use `loading="lazy"`.
- **`public/figma-ref/` (about 40 MB) ships to production.** `test-google.svg` and `accenture.png` are also deployed but unused.
- **Wrong winner images:** three of the four Previous Winners categories show another category's photo, and Learn More never renders.
- **No 404 route:** unknown paths render an empty `<main>`. SPA rewrites on Vercel are unverified.
- **Dead code:** 12 unused components and 4 unused data files. `sponsorsData.js` lists sponsors that conflict with the real list.
- **Token bypass:** about 135 hex literals in component CSS and 4 inline-style blocks.
- **Fixed pixel widths** in `PageHero`, `BlobBackground` and `CTABanner` may overflow narrow screens. Of these, only `PageHero` has media-query overrides.
- **Alt text:** every `<img>` has an alt attribute. Events cards and winners reuse the event or category name as alt text, which tells screen-reader users nothing about the image. `officersData.heroImageAlt` says "WINFO team group photo", but the image is `stickfigures.png`.
- **Case-sensitive filenames:** `Hoodie2.png` and `.JPG`/`.PNG` extensions can break on case-sensitive hosts if a reference uses different casing.
- **Emoji in UI labels:** the navbar `🛍️` and the Merch buttons depend on how each OS renders emoji.
- **Placeholder copy:** the Events subtitle is still marked TODO.
