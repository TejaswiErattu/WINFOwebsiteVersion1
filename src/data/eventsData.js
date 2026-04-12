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
        { name: 'Annual Hackathon', image: '' },
        { name: 'TechXperience', image: '' },
        { name: 'Fearless', image: '' },
      ],
    },
    {
      label: 'fun with new friends...',
      events: [
        { name: 'Vision Boards', image: '' },
        { name: 'Frost & Frosting', image: '' },
        { name: 'Paint & Sip', image: '' },
        { name: 'Galentine\'s Floral Arrangement', image: '' },
      ],
    },
    {
      label: 'or professional insights...',
      events: [
        { name: 'Microsoft Company Tour', image: '' },
        { name: 'Adobe Company Tour', image: '' },
        { name: 'Hot Cocoa Table Talk', image: '' },
        { name: 'Decoding HCI', image: '' },
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
