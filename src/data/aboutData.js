/* ===================================================================
   About WINFO — "who we are" and "our story" (shown on the Our Team page)
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

/* ---------- Who We Are ---------- */
export const missionData = {
  title: 'who we are',
  body: 'Women in Informatics (WINFO) is a **student-led organization at the University of Washington\'s Information School** dedicated to **uplifting women and underrepresented voices in technology**.',
  bodySecondary:
    'We believe that **diversity drives innovation**, and that every student deserves the tools, community, and confidence to shape the future of technology. By hosting professional workshops, social events, and hackathons, our mission is to **nurture a blossoming community of fearless technology leaders**.',
  bodyTertiary:
    'We welcome **all majors, genders, and identities** united by a shared passion for creating a more equitable tech industry.',
  ctaLabel: 'Join Us!',
  ctaLink: MEMBERSHIP_SIGNUP_URL,
  image: '/images/hackathon-1.jpg',
  imageAlt: 'WINFO members at a community event',
};

/* ---------- Our Story ---------- */
export const storyData = {
  title: 'our story',
  body: 'WINFO began in **2012** with a simple mission: to **connect women in the Informatics program and help them feel supported**.',
  /* Featured impact statistic — rendered larger, as a pull-quote */
  statHighlight: 'Back then, only **28%** of students in the Informatics major were women.',
  bodySecondary:
    'As of 2023, **53% of Informatics students are women**, and our blossoming community is stronger than ever.',
  bodyTertiary:
    'Through everything we do, we stay rooted in the same values: **connection, courage, and care**.',
  image: '/images/support-group.jpg',
  imageAlt: 'WINFO community gathering',
};
