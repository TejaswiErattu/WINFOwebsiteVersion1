/* ===================================================================
   Flagship events — the three largest WINFO events, shown at the top
   of the Events page.

   RULES FOR EDITING
   • Public, verified information only. Leave a field OUT (don't use an
     empty string) when it isn't confirmed — the page hides anything missing.
   • Never add internal details: registration counts, budgets, rooms,
     schedules, school names, participant or mentor names, contact info.
   • posters: [{ src, alt, year }] — files go in public/images/events/<slug>/
     as poster-YYYY.jpg. A poster strip + lightbox appears automatically.
   • photos:  [{ src, alt, width, height }] — 1 photo = single image,
     2 = side by side, 3–5 = collage. Never repeat a photo to fill space.
   • link: { label, to } for an internal route or { label, href } for a URL.
   =================================================================== */

import { hackathonData } from './hackathonData';

/* ---- Hackathon: reuse verified copy and photos from the Hackathon page ---- */
const hackGallery = (src) => hackathonData.gallery.find((g) => g.src === src);
const hackFaq = (question) => hackathonData.faqs.find((f) => f.question === question)?.answer;
const challenge = hackathonData.challengeHeading.replace(/\.+$/, '');

export const flagshipEvents = [
  {
    slug: 'hackathon',
    name: 'WINFO Hackathon',
    tagline: hackathonData.tagline,
    description: hackathonData.aboutBody,
    mission: `${challenge.charAt(0).toUpperCase()}${challenge.slice(1)} ${hackathonData.challengeBody}`,
    audienceLabel: 'UW undergraduates',
    audience: hackFaq('Who can participate in the hackathon?'),
    /* timesHeld, firstYear, attendance: waiting for board confirmation.
       (The 266 / 67 / 45 figures on the Hackathon page are not used until
       the board confirms which year they belong to.) */
    reach: [
      'Beginner-friendly: no coding experience required',
      'Mentorship from industry professionals',
      `Prize tracks: ${hackathonData.tracks.map((t) => t.name.replace(/^Best /, '')).join(', ')}`,
      'Prototypes, slide decks and concept demos are all welcome',
    ],
    photos: [
      '/images/hackathon-participants.jpg',
      '/images/hackathon-2.jpg',
      '/images/hackathon-4.jpg',
      '/images/hackathon-food.jpg',
    ].map(hackGallery).filter(Boolean),
    link: { label: 'visit the hackathon page', to: '/hackathon' },
  },

  {
    slug: 'techx',
    name: 'TechXperience',
    tagline: 'Explore technology through teamwork, mentorship, and hands-on problem solving.',
    description:
      'TechXperience is a half-day, in-person technology experience where middle and high school students work in teams with UW mentors to explore technology through beginner-friendly challenges.',
    mission:
      'Give students an approachable introduction to technology and Informatics through collaboration, problem solving, mentorship, and exposure to college and technology pathways.',
    audienceLabel: 'Middle & high school students',
    audience:
      'Middle and high school students, including students with little or no previous technical experience.',
    timesHeld: 2,
    timesHeldAsOf: 2026,
    firstYear: 2025,
    /* attendance: intentionally omitted until there is one final public figure */
    reach: [
      'Beginner-friendly technology experience',
      'Mentorship from University of Washington students',
      'Team-based technology challenges',
      'Exposure to Informatics and college pathways',
    ],
    /* Tracks from the 2026 event specifically — not a permanent format */
    tracks: {
      year: 2026,
      items: [
        { name: 'Cyber', description: 'digital safety, privacy, and security' },
        { name: 'Data', description: 'using data to find insights and support decisions' },
        { name: 'Web', description: 'designing and building a digital experience' },
      ],
    },
    /* Existing photo already used for TechXperience on the Events page */
    photos: [
      {
        src: '/images/events/event-07.jpg',
        alt: 'Students working together at tables in a room decorated with blue and silver balloons',
        width: 1920,
        height: 2880,
      },
    ],
    /* link: no public TechXperience URL in the repo yet */
  },

  {
    slug: 'fearless',
    name: 'FearLess, Tech More',
    tagline: 'Build ideas that use technology for positive impact.',
    dates: 'October 12–16, 2026',
    description:
      'FearLess, Tech More is a week-long, online innovation challenge where middle and high school students work in teams with UW mentors to explore technology, user experience design, and real-world problem solving.',
    mission:
      'Create an accessible introduction to technology and design while helping students build confidence, collaborate with others, and explore how technology can support equity and positive social impact.',
    audienceLabel: 'Middle & high school students',
    audience:
      'Middle and high school students ages 13–18, including students with little or no prior coding or design experience.',
    howItWorks:
      'Students collaborate online throughout the week, work with UW mentors, and develop a team project using technology and user experience design.',
    reach: [
      'Beginner-friendly online innovation challenge',
      'Collaboration with UW student mentors',
      'User experience design and technology',
      'Real-world problem solving with a focus on positive impact',
      'Team project showcase at the end of the week',
      'Presented by WINFO and the Informatics Undergraduate Association (IUGA)',
    ],
    /* timesHeld, firstYear: waiting for board confirmation.
       attendance: intentionally omitted (no participant or school counts).
       photos: event-09.jpg removed until the board confirms publication
       permission (identifiable participants). The file is kept in
       public/images/events/ and can be restored here. */
  },
];
