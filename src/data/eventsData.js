/* ===================================================================
   Events page data
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

export const eventsData = {
  /* ---------- Hero ---------- */
  title: 'events',

  /* ---------- Event categories (rows) ---------- */
  categories: [
    {
      label: 'whether you\'re looking for hackathon & design experience...',
      events: [
        { name: 'Annual Hackathon', image: '/images/events/event-10.jpg' },
        { name: 'TechXperience', image: '/images/events/event-07.jpg' },
        { name: 'Fearless', image: '/images/events/event-09.png' },
      ],
    },
    {
      label: 'fun with new friends...',
      events: [
        { name: 'Vision Boards', image: '/images/events/event-11.png' },
        { name: 'Frost & Frosting', image: '/images/events/event-06.png' },
        { name: 'Paint & Sip', image: '/images/events/event-05.png' },
        { name: 'Galentine\'s Floral Arrangement', image: '/images/events/event-04.png' },
      ],
    },
    {
      label: 'or professional insights...',
      events: [
        { name: 'Microsoft Company Tour', image: '/images/events/event-01.jpg' },
        { name: 'Adobe Company Tour', image: '/images/events/event-03.jpg' },
        { name: 'Hot Cocoa Table Talk', image: '/images/events/event-02.jpg' },
        { name: 'Decoding HCI', image: '/images/events/event-08.jpg' },
      ],
    },
  ],

  /* ---------- Bottom CTA ---------- */
  bottomCta: {
    heading: 'We\'ve got you covered!',
    body: 'want to stay in the loop?\nfollow @uwwinfo or register below:',
    btnLabel: 'become a member!',
    btnTo: MEMBERSHIP_SIGNUP_URL,
  },
};
