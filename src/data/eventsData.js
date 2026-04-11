/* ===================================================================
   Events page data
   ===================================================================
   HOW TO UPDATE
   • Add / remove events in `pastEvents` — each needs a unique `id`
   • Replace `image: ''` with an actual path like '/images/events/resume-workshop.jpg'
   • Add new categories to `categories` and use the key in event objects
   • For upcoming events, just update the `upcoming` array each quarter
   =================================================================== */

export const eventsData = {
  /* ---------- Hero ---------- */
  title: 'Events',
  tagline: 'What We\'ve Been Up To',
  heroDescription:
    'From technical workshops to community socials, W;NFO hosts events that help you grow, connect, and have fun. Here\'s a look at what we\'ve been up to.',

  /* ---------- Section headings ---------- */
  galleryHeading: {
    label: 'Gallery',
    title: 'Past Events',
    description: 'A look back at workshops, socials, panels, and more.',
  },
  upcomingHeading: {
    label: 'Coming Soon',
    title: 'Upcoming Events',
    description: 'Mark your calendar — these are just around the corner.',
  },

  /* ---------- Past events gallery ---------- */
  pastEvents: [
    {
      id: 1,
      title: 'Resume Workshop',
      label: 'Spring 2026',
      category: 'workshop',
      description: 'Hands-on session refining resumes with recruiters from top tech companies.',
      location: 'Mary Gates Hall, Room 154',
      image: '',   // TODO: '/images/events/resume-workshop.jpg'
    },
    {
      id: 2,
      title: 'Mock Interview Night',
      label: 'Spring 2026',
      category: 'workshop',
      description: 'Practice behavioral and technical interviews with industry volunteers.',
      location: 'HUB, Room 332',
      image: '',
    },
    {
      id: 3,
      title: 'Spring Social',
      label: 'May 2026',
      category: 'social',
      description: 'End-of-quarter celebration with snacks, games, and community bonding.',
      location: 'Sylvan Grove',
      image: '',
    },
    {
      id: 4,
      title: 'Industry Panel: Women in PM',
      label: 'Winter 2026',
      category: 'panel',
      description: 'Panelists from Google, Amazon, and Figma shared their PM career paths.',
      location: 'Kane Hall, Room 225',
      image: '',
    },
    {
      id: 5,
      title: 'W;NFO × ACM Game Night',
      label: 'Winter 2026',
      category: 'social',
      description: 'Cross-org social featuring board games, snacks, and friendly competitions.',
      location: 'CSE Atrium',
      image: '',
    },
    {
      id: 6,
      title: 'Intro to Figma',
      label: 'Fall 2025',
      category: 'workshop',
      description: 'Beginner-friendly workshop covering auto-layout, components, and prototyping.',
      location: 'Mary Gates Hall, Room 154',
      image: '',
    },
    {
      id: 7,
      title: 'Annual Kick-off',
      label: 'Fall 2025',
      category: 'social',
      description: 'Welcome event introducing new members to W;NFO programs and officers.',
      location: 'HUB Ballroom',
      image: '',
    },
    {
      id: 8,
      title: 'Hackathon 2025',
      label: 'Spring 2025',
      category: 'hackathon',
      description: '180 participants hacked for 24 hours around the "Tech for Wellness" theme.',
      location: 'Founders Hall',
      image: '',
    },
  ],

  /* ---------- Category filter badges ---------- */
  categories: [
    { label: 'All', key: 'all' },
    { label: '🛠️ Workshops', key: 'workshop' },
    { label: '🎉 Socials', key: 'social' },
    { label: '💬 Panels', key: 'panel' },
    { label: '🏆 Hackathons', key: 'hackathon' },
  ],

  /* ---------- Upcoming events ---------- */
  upcoming: [
    {
      id: 'u1',
      title: 'Resume Workshop',
      date: 'April 20, 2026',
      time: '5:00 – 7:00 PM',
      tag: 'Workshop',
      location: 'Mary Gates Hall, Room 154',
      description: 'Bring your laptop and a draft resume — you\'ll leave with an employer-ready version.',
    },
    {
      id: 'u2',
      title: 'Mock Interview Night',
      date: 'May 5, 2026',
      time: '6:00 – 8:30 PM',
      tag: 'Professional Dev',
      location: 'HUB, Room 332',
      description: 'One-on-one practice rounds with engineers, PMs, and designers from the industry.',
    },
    {
      id: 'u3',
      title: 'Spring Social',
      date: 'May 18, 2026',
      time: '4:00 – 6:00 PM',
      tag: 'Social',
      location: 'Sylvan Grove',
      description: 'Celebrate the end of the quarter with food, lawn games, and good vibes.',
    },
  ],

  /* ---------- Join CTA at page bottom ---------- */
  joinCta: {
    emoji: '✨',
    title: 'Interested?',
    description:
      'Become a W;NFO member to get early access to event registration, exclusive workshops, and a welcoming community.',
    btnLabel: 'Become a Member',
    btnTo: '/membership',
  },
};
