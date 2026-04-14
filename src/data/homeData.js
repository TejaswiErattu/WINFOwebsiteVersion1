/* ===================================================================
   Home page data — matches Figma screenshots
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

/* ---------- Who We Are ---------- */
export const missionData = {
  title: 'who we are',
  body: 'Women in Informatics (WINFO) is a student-led organization at the University of Washington\'s Information School dedicated to uplifting women and underrepresented voices in technology.',
  bodySecondary:
    'We believe that diversity drives innovation, and that every student deserves the tools, community, and confidence to shape the future of technology. By hosting professional workshops, social events, and hackathons, our mission is to nurture a blossoming community of fearless technology leaders.',
  bodyTertiary:
    'We welcome all majors, genders, and identities united by a shared passion for creating a more equitable tech industry.',
  ctaLabel: 'join us!',
  ctaLink: MEMBERSHIP_SIGNUP_URL,
  image: '/images/hackathon-1.jpg',
  imageAlt: 'WINFO members at a community event',
};

/* ---------- Our Story ---------- */
export const storyData = {
  title: 'our story',
  body: 'WINFO began in 2012 with a simple mission: to connect women in the Informatics program and help them feel supported. Back then, only 28% of students in the Informatics major were women.',
  bodySecondary:
    'As of 2023, 53% of Informatics students are women, and our blossoming community is stronger than ever.',
  bodyTertiary:
    'Through everything we do, we stay rooted in the same values: connection, courage, and care.',
  ctaLabel: 'meet our team',
  ctaLink: '/officers',
  image: '/images/support-group.jpg',
  imageAlt: 'WINFO community gathering',
};

/* ---------- What We Do (feature cards) ---------- */
export const whatWeDoHeading = {
  title: 'what we do',
};

export const whatWeDoData = [
  {
    icon: '�',
    title: 'hackathons',
    text: 'WINFO\'s annual hackathon invites students of all experience levels to collaborate, innovate, and solve real-world problems through tech.',
    linkLabel: '🏆 learn more',
    linkTo: '/hackathon',
    accent: 'purple',
  },
  {
    icon: '😊',
    title: 'events',
    text: 'We host a diverse range of social and professional events throughout the year to help you meet new people and grow your skill set!',
    linkLabel: '😊 get involved',
    linkTo: '/events',
    accent: 'pink',
  },
  {
    icon: '🎙️',
    title: 'podcast',
    text: 'Decoding With WINFO is our signature podcast featuring guests within the tech field and the informatics community.',
    linkLabel: '🎙️ tune in',
    linkTo: '/podcast',
    accent: 'blue',
  },
];

/* ---------- What is Informatics (officer quotes) ---------- */
export const informaticsHeading = {
  title: 'what is informatics?',
};

export const informaticsQuotes = [
  {
    quote: '"It\'s about asking thoughtful questions, noticing everyday frustrations, and creating solutions that feel intuitive and human."',
    name: 'Mia McDunnah',
    role: 'Diversity Director',
  },
  {
    quote: '"Informatics is all about leveraging information to build technology that works for real people."',
    name: 'Renee Singh',
    role: 'Hackathon Director',
  },
  {
    quote: '"It\'s about being thoughtful with design and intentional with the way we build things."',
    name: 'Dawn Nguyen',
    role: 'Finance Director',
  },
  {
    quote: '"Informatics uplifts voices that are marginalized to make meaningful changes in technological solutions."',
    name: 'Jenny Speelmon',
    role: 'Community Efforts Director',
  },
];

/* ---------- CTA ---------- */
export const homeCta = {
  btnLabel: 'join us!',
  btnTo: MEMBERSHIP_SIGNUP_URL,
};
