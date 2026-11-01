/* ===================================================================
   Events page data
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

export const eventsData = {
  /* ---------- Page hero (title over a background photo) ---------- */
  title: 'events',
  heroImage: '/images/winfo-community-1.jpg',
  intro:
    'WINFO hosts events to build community, grow professional skills, make connections, and open doors to opportunities in technology, for UW students and for the middle and high school students who will come after them.',

  /* ---------- Event categories (cards under the hero) ----------
     `to` is a route or an in-page anchor on this page. */
  categories: [
    {
      name: 'WINFO Annual Hackathon',
      text: 'Our flagship two-day hackathon, where hundreds of students build technology for social good.',
      to: '/hackathon',
      linkLabel: 'Visit the hackathon page',
      accent: 'purple',
    },
    {
      name: 'On-Campus Events',
      text: 'Socials, crafting nights, professional development workshops, panels, company tours and networking for UW students.',
      to: '#on-campus',
      linkLabel: 'See this quarter',
      accent: 'pink',
    },
    {
      name: 'Middle & High School Events',
      text: 'TechXperience and Fearless, TechMore introduce younger students to technology with UW mentors.',
      to: '#youth',
      linkLabel: 'Learn about our programs',
      accent: 'blue',
    },
  ],

  /* ---------- On-campus section ---------- */
  onCampus: {
    heading: 'on-campus events',
    intro:
      'Every quarter we host social, creative, and career-focused events for UW students. Check the calendar for what\u2019s coming up.',
  },

  /* ---------- Middle & high school section ---------- */
  youth: {
    heading: 'middle & high school events',
    intro:
      'For students, teachers, and school administrators: our youth programs give middle and high school students a beginner-friendly, mentor-led first look at technology and Informatics. No prior experience is needed.',
  },

  /* ---------- Flagship events: content lives in flagshipEvents.js ---------- */
  flagshipLabels: {
    mission: 'Mission',
    audience: 'Who it\'s for',
    howItWorks: 'How it works',
    reach: 'Reach',
    tracks: 'tracks',               // shown as "<year> tracks"
    timesHeld: 'events held',       // shown with "as of <year>" when given
    asOf: 'as of',
    firstYear: 'first held',
    attendance: 'attendees',
    posters: 'Past posters',
    openPoster: 'Open poster',      // + poster year
    closePoster: 'Close poster viewer',
    prevPoster: 'Previous poster',
    nextPoster: 'Next poster',
    posterCount: 'of',              // "2 of 5"
  },

  /* ---------- Past on-campus events (masonry gallery) ---------- */
  moreEvents: {
    heading: 'from past quarters',
    boardHint: 'Psst: drag the photos and stickers around the board.',
    resetLabel: 'Tidy up',
    /* alt describes what's in each photo (the event name is already the caption).
       Use alt: '' only for a purely decorative image. */
    events: [
      { name: 'Vision Boards', image: '/images/events/event-11.jpg',
        alt: 'Students working on vision boards with magazine cutouts at long classroom tables' },
      { name: 'Frost & Frosting', image: '/images/events/event-06.jpg',
        alt: 'Four students holding decorated cookies beside gingerbread houses on a table' },
      { name: 'Paint & Sip', image: '/images/events/event-05.jpg',
        alt: 'Students sitting on a blanket on the grass painting on paper plates' },
      { name: 'Galentine\'s Floral Arrangement', image: '/images/events/event-04.jpg',
        alt: 'Bouquets of roses, carnations and baby’s breath wrapped in newspaper' },
      { name: 'Microsoft Company Tour', image: '/images/events/event-01.jpg',
        alt: 'Minecraft-themed plush toys and storage cubes in an office lounge' },
      { name: 'Adobe Company Tour', image: '/images/events/event-03.jpg',
        alt: 'An accessibility workstation with a high-visibility yellow keyboard and a large monitor' },
      { name: 'Hot Cocoa Table Talk', image: '/images/events/event-02.jpg',
        alt: 'A panel of speakers seated at a table in front of a presentation screen' },
      { name: 'Decoding HCI', image: '/images/events/event-08.jpg',
        alt: 'Two people smiling in front of a Decoding with WINFO title slide' },
    ],
  },

  /* ---------- Bottom CTA ---------- */
  bottomCta: {
    heading: 'We\'ve got you covered!',
    body: 'want to stay in the loop?\nfollow @uwwinfo or register below:',
    btnLabel: 'Join Us!',
    btnTo: MEMBERSHIP_SIGNUP_URL,
  },
};
