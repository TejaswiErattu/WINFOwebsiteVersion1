/* ===================================================================
   Events page data
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

export const eventsData = {
  /* ---------- Page header ---------- */
  title: 'Events',
  subtitle: 'Building community through technology, connection, and hands-on experiences.',
  intro:
    'WINFO brings students together through technical, professional, and community-focused events designed to make technology more welcoming and accessible.',
  goals:
    'From large annual programs to workshops, company visits, and social events, our events create opportunities to learn, build, connect, and explore different paths in technology.',
  /* Small photo strip above the heading. Distinct photos only (not used
     elsewhere on this page); the strip is hidden if fewer than 3 exist. */
  headerPhotos: [
    { src: '/images/winfo-community-1.jpg', alt: 'Students making vision boards at long tables in a classroom', width: 1200, height: 683 },
    { src: '/images/winfo-community-2.jpg', alt: 'A WINFO officer with a microphone presenting judging criteria to a room of students', width: 1200, height: 900 },
    { src: '/images/winfo-community-3.jpg', alt: 'WINFO volunteers smiling behind a Women in Informatics table with laptops', width: 1200, height: 800 },
  ],

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

  /* ---------- More events (one grid, below the flagships) ---------- */
  moreEvents: {
    heading: 'More events we host',
    intro:
      'Beyond our flagship programs, WINFO hosts social, career, and community events throughout the year.',
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
    btnLabel: 'become a member!',
    btnTo: MEMBERSHIP_SIGNUP_URL,
  },
};
