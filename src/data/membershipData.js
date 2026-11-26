/* ===================================================================
   Membership page data — matches Figma HiFi screenshots
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

export const membershipData = {
  /* ---------- Hero ---------- */
  title: 'membership',
  heroBody:
    'Interested in joining our beautiful community of powerful individuals? Become an official member of WINFO!',
  heroBodySecondary:
    'At WINFO, we believe that every student deserves a space where they feel seen and supported. Becoming a member means more than joining an RSO\u2014it means joining a community that empowers you to thrive in tech and beyond. With innovative opportunities to grow your skills, connect with peers, and build your confidence, WINFO is your home.',
  heroBodyTertiary:
    'Whether you\u2019re exploring tech for the first time or already on your journey, WINFO always welcomes all majors, genders, and identities.',
  ctaLabel: 'Join Us!',
  ctaLink: MEMBERSHIP_SIGNUP_URL,
  heroImage: '/images/hackathon-1.jpg',
  heroImageAlt: 'WINFO members smiling together',

  /* ---------- Perks ---------- */
  perksHeading: 'membership perks',
  perksSubtitle:
    'Although membership is not required, official members enjoy these extra benefits:',
  /* Polaroids on either side of the perks heading (14th hackathon album) */
  perksPhotos: [
    { src: '/images/community/members-peace-signs.jpg', alt: 'Two WINFO volunteers smiling and holding up peace signs at the hackathon' },
    { src: '/images/community/winfo-balloons.jpg', alt: 'Four students posing with gold WINFO balloon letters in front of the hackathon photo wall' },
  ],

  /* Row of polaroids at the end of the page (14th hackathon album) */
  stripTitle: 'Moments from WINFO',
  stripPhotos: [
    { src: '/images/community/friends-at-a-table.jpg', alt: 'Four friends smiling together at their table during the WINFO hackathon' },
    { src: '/images/community/pizza-volunteers.jpg', alt: 'Two WINFO volunteers laughing and holding up slices of pizza' },
    { src: '/images/community/board-group-photo.jpg', alt: 'The WINFO team posing together in matching black shirts in front of the jellyfish backdrop' },
    { src: '/images/community/participants-laughing.jpg', alt: 'Hackathon participants laughing at their table under pink and purple balloons' },
  ],

  perks: [
    {
      icon: 'mail',
      title: 'Newsletter',
      text: 'Stay in the loop with the **WINFO Weekly**\u2014our signature newsletter which delivers events and opportunities to your inbox.',
      accent: 'purple',
    },
    {
      icon: 'check',
      title: 'Early Registration',
      text: 'Enjoy **exclusive** early registration to company tours at major tech companies to discover industry insights!',
      accent: 'pink',
    },
    {
      icon: 'people',
      title: 'Opportunities',
      text: 'Be the first to know about exciting **internship, career, and community involvement** opportunities!',
      accent: 'blue',
    },
  ],

};
