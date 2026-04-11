/* ===================================================================
   Home page data
   ===================================================================
   HOW TO UPDATE
   • Swap placeholder text with real copy
   • Replace `image: ''` fields with actual image paths:
       image: '/images/hero-group.jpg'
   • All sections are rendered from this data — the Home component
     reads these exports and maps them to JSX, so you only need to
     edit here.
   =================================================================== */

/* ---------- Hero Section ---------- */
export const heroData = {
  badge: '✨ University of Washington',
  headline: 'Women in Informatics',
  subheadline:
    'Building a supportive community for women and non-binary students in the Information School at the University of Washington.',
  ctaLabel: 'About Our Story',
  ctaLink: '/about',
  secondaryCtaLabel: 'Upcoming Events',
  secondaryCtaLink: '/events',
  image: '',             // TODO: replace with e.g. '/images/hero-group.jpg'
  imageAlt: 'WINFO members at a community event',
};

/* ---------- Who We Are / Mission ---------- */
export const missionData = {
  label: 'Who We Are',
  title: 'Who We Are',
  body: 'W;NFO is the largest student organization in the Information School at the University of Washington. We create a supportive and inclusive community for women, non-binary, and underrepresented students in informatics through mentorship, professional development, social events, and real-world experiences that prepare our members for meaningful careers in technology.',
  bodySecondary:
    'Founded with the belief that everyone deserves a seat at the table, W;NFO has grown into a vibrant network of 500+ members who lift each other up, share knowledge, and build lasting connections.',
  ctaLabel: 'Our Story →',
  ctaLink: '/about',
  image: '',             // TODO: replace with e.g. '/images/who-we-are.jpg'
  imageAlt: 'WINFO community gathering',
};

/* ---------- What We Do (feature cards) ---------- */
export const whatWeDoHeading = {
  label: 'What We Do',
  title: 'Building Skills, Community & Opportunity',
  description: 'Everything we do is designed to empower our members and create lasting impact.',
};

export const whatWeDoData = [
  {
    icon: '💻',
    title: 'Hackathon',
    text: 'Our annual hackathon brings together 200+ students for a weekend of building innovative projects, learning new skills, and connecting with industry mentors.',
    linkLabel: 'Learn More',
    linkTo: '/hackathon',
    accent: 'purple',
  },
  {
    icon: '🎤',
    title: 'Events & Workshops',
    text: 'From resume reviews and mock interviews to speaker panels and socials, our events help you grow professionally and personally.',
    linkLabel: 'See Events',
    linkTo: '/events',
    accent: 'pink',
  },
  {
    icon: '🎙️',
    title: 'Podcast',
    text: 'Hear inspiring stories from women in tech as they share their career journeys, advice, and behind-the-scenes insights.',
    linkLabel: 'Listen Now',
    linkTo: '/podcast',
    accent: 'blue',
  },
];

/* ---------- What is Informatics (bubbles) ---------- */
export const informaticsHeading = {
  label: 'Learn',
  title: 'What is Informatics?',
  description: 'A modern discipline at the intersection of people, data, and technology.',
};

export const informaticsBubbles = [
  {
    text: 'Informatics is the study of how people interact with information and technology to solve real-world problems.',
    emoji: '🌐',
  },
  {
    text: 'It blends design, data, coding, and human behavior into one powerful discipline.',
    emoji: '🎨',
  },
  {
    text: 'Think UX research, data science, product management, software engineering, and more.',
    emoji: '💡',
  },
  {
    text: 'Informatics students learn to build technology that is inclusive, ethical, and impactful.',
    emoji: '🤝',
  },
  {
    text: 'It\'s not just about code — it\'s about understanding people and using tech for good.',
    emoji: '❤️',
  },
];

/* ---------- Bottom Org Info ---------- */
export const bottomInfoData = {
  title: 'More Than a Club — A Community',
  paragraphs: [
    'W;NFO is dedicated to creating space where students can explore their interests, develop professional skills, and find their people. Whether you\'re a freshman exploring informatics or a senior heading into industry, there\'s a place for you here.',
    'We partner with leading tech companies, host career-focused workshops, and maintain an active mentorship program that pairs students with industry professionals and upperclassmen.',
  ],
  links: [
    { label: 'Become a Member →', to: '/membership' },
    { label: 'Support Our Mission →', to: '/support' },
  ],
  sidebarTitle: 'Explore W;NFO',
  sidebarLinks: [
    { emoji: '📅', label: 'Upcoming Events', to: '/events' },
    { emoji: '💻', label: 'Annual Hackathon', to: '/hackathon' },
    { emoji: '🎙️', label: 'W;NFO Podcast', to: '/podcast' },
    { emoji: '👥', label: 'Meet the Team', to: '/officers' },
    { emoji: '💜', label: 'Join W;NFO', to: '/membership' },
    { emoji: '🤝', label: 'Sponsor Us', to: '/support' },
  ],
};

/* ---------- Final CTA Banner ---------- */
export const homeCta = {
  title: 'Ready to join our community?',
  text: 'Become a W;NFO member and unlock access to mentorship, events, and a supportive network of peers.',
  btnLabel: 'Become a Member',
  btnTo: '/membership',
};
