/* ===================================================================
   Hackathon page data
   ===================================================================
   Related data files (imported separately):
     faqData.js       → FAQ accordion items
     winnersData.js   → Winner cards
     sponsorsData.js  → Sponsor logo grid
   =================================================================== */

export const hackathonData = {
  /* ---------- Hero ---------- */
  title: 'Hackathon',
  tagline: 'W;NFO Annual Hackathon',
  heroDescription:
    'Every year W;NFO brings together 200+ students for a weekend of creativity, collaboration, and code. Whether you\'re a first-time hacker or a seasoned builder, there\'s a place for you.',
  date: 'May 30 – June 1, 2026',
  ctaLabel: 'Register Now',
  ctaLink: '#',
  heroImage: '',         // TODO: '/images/hackathon/hero.jpg'
  heroImageAlt: 'Students collaborating at WINFO Hackathon',

  /* Side-nav metadata links */
  sideLinks: [
    { label: 'About', anchor: '#about' },
    { label: 'Date', anchor: '#about' },
    { label: 'Registration', anchor: '#register-cta' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Past Hackathons', anchor: '#past' },
  ],

  /* ---------- Section headings ---------- */
  missionHeading: {
    label: 'About',
    title: 'Innovate for Social Good',
    description: '',
  },
  galleryHeading: {
    label: 'Moments',
    title: 'Hackathon Gallery',
    description: 'A snapshot of the energy, creativity, and community at our hackathons.',
  },
  winnersHeading: {
    label: 'Winners',
    description: 'Celebrating the teams that made an impact.',
  },
  registerCta: {
    title: 'Learn More & Register',
    description: 'Spots fill up fast — secure yours today and join 200+ students for a weekend of building, learning, and fun.',
  },
  faqHeading: {
    label: 'FAQ',
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know before the hackathon.',
  },
  sponsorsHeading: {
    label: 'Thank You',
    title: 'Our Sponsors',
    description: 'The hackathon is made possible by the generous support of our partners.',
  },
  pastHeading: {
    label: 'Archive',
    title: 'Past Hackathons',
    description: 'Look back at the themes and impact of previous years.',
  },

  /* ---------- Mission / about paragraph ---------- */
  mission:
    'The W;NFO Hackathon is designed to create a welcoming and inclusive space where students of all backgrounds can explore technology, develop new skills, and build meaningful projects. Our theme each year focuses on social good — because we believe technology should serve everyone.',

  /* ---------- Gallery items ---------- */
  gallery: [
    { id: 'g1', emoji: '💻', label: 'Hacking',        image: '' },
    { id: 'g2', emoji: '🎤', label: 'Presentations',   image: '' },
    { id: 'g3', emoji: '🍕', label: 'Food & Fun',      image: '' },
    { id: 'g4', emoji: '🤝', label: 'Teamwork',        image: '' },
    { id: 'g5', emoji: '🏆', label: 'Awards',          image: '' },
    { id: 'g6', emoji: '🎓', label: 'Workshops',       image: '' },
  ],

  /* ---------- Past hackathons ---------- */
  pastHackathons: [
    {
      id: 'ph1',
      title: '13th Hackathon — 2025',
      excerpt: '180 participants, "Tech for Wellness" theme.',
      emoji: '🧘',
      image: '',   // TODO: '/images/hackathon/2025.jpg'
    },
    {
      id: 'ph2',
      title: '12th Hackathon — 2024',
      excerpt: '150 participants, "Civic Tech" theme.',
      emoji: '🏛️',
      image: '',
    },
    {
      id: 'ph3',
      title: '11th Hackathon — 2023',
      excerpt: '120 participants, "EdTech for All" theme.',
      emoji: '📖',
      image: '',
    },
  ],
};
