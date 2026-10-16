/* ===================================================================
   Home page data — matches Figma screenshots
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

/* ---------- Hero ---------- */
export const heroData = {
  heading: 'Women in Informatics',
  /* Slogan adapted from WINFO's mission line. Swap here if the board picks another. */
  slogan: 'Nurturing a blossoming community of fearless technology leaders.',
  tagline: 'A student-led community at the University of Washington Information School.',
};

/* ---------- Who We Are ---------- */
export const missionData = {
  title: 'who we are',
  body: 'Women in Informatics (WINFO) is a **student-led organization at the University of Washington\'s Information School** dedicated to **uplifting women and underrepresented voices in technology**.',
  bodySecondary:
    'We believe that **diversity drives innovation**, and that every student deserves the tools, community, and confidence to shape the future of technology. By hosting professional workshops, social events, and hackathons, our mission is to **nurture a blossoming community of fearless technology leaders**.',
  bodyTertiary:
    'We welcome **all majors, genders, and identities** united by a shared passion for creating a more equitable tech industry.',
  ctaLabel: 'join us!',
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
    title: 'Hackathons',
    text: 'WINFO\'s annual hackathon invites students of all experience levels to collaborate, innovate, and solve real-world problems through tech.',
    linkLabel: 'Learn more',
    linkTo: '/hackathon',
    accent: 'purple',
  },
  {
    title: 'Events',
    text: 'We host a diverse range of social and professional events throughout the year to help you meet new people and grow your skill set.',
    linkLabel: 'Get involved',
    linkTo: '/events',
    accent: 'pink',
  },
  {
    title: 'Podcast',
    text: 'Decoding With WINFO is our signature podcast featuring guests within the tech field and the Informatics community.',
    linkLabel: 'Tune in',
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

/* ---------- Our Community (scrolling photo strip) ----------
   Real WINFO moments. width/height are each file's pixel size.
   `alt` describes the photo for screen readers. */
export const communityHeading = 'our community';
export const communityPhotos = [
  { src: '/images/events/event-06.jpg', width: 1452, height: 1089, alt: 'Four students holding decorated cookies beside gingerbread houses on a table' },
  { src: '/images/hackathon-2.jpg', width: 1200, height: 800, alt: 'A full ballroom of students working on laptops at round tables, decorated with white balloons' },
  { src: '/images/events/event-05.jpg', width: 765, height: 808, alt: 'Students sitting on a blanket on the grass painting on paper plates' },
  { src: '/images/winfo-community-3.jpg', width: 1200, height: 800, alt: 'WINFO volunteers smiling behind a Women in Informatics table with laptops' },
  { src: '/images/events/event-11.jpg', width: 1920, height: 1094, alt: 'Students working on vision boards with magazine cutouts at long classroom tables' },
  { src: '/images/hackathon-4.jpg', width: 1200, height: 800, alt: 'A mentor talks with a team of participants during the hackathon' },
  { src: '/images/events/event-02.jpg', width: 1920, height: 1280, alt: 'A panel of speakers seated at a table in front of a presentation screen' },
  { src: '/images/hackathon-5.jpg', width: 1200, height: 800, alt: 'WINFO officers posing in front of gold WINFO balloons' },
  { src: '/images/events/event-08.jpg', width: 1920, height: 1280, alt: 'Two people smiling in front of a Decoding with WINFO title slide' },
  { src: '/images/winfo-community-2.jpg', width: 1200, height: 900, alt: 'A WINFO officer with a microphone presenting judging criteria to a room of students' },
];
