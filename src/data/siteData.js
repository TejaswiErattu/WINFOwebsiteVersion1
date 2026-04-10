/**
 * Static data for the WINFO website.
 * Easy to update — just edit arrays below.
 */

export const navLinks = [
  { label: 'Home',    path: '/' },
  { label: 'About',   path: '/about' },
  { label: 'Events',  path: '/events' },
  { label: 'Board',   path: '/board' },
  { label: 'Contact', path: '/contact' },
];

export const heroData = {
  headline: 'Empowering Women in Informatics',
  subheadline:
    'Building a supportive community for women and non-binary students in tech at the University of Washington.',
  ctaText: 'Get Involved',
  ctaLink: '/contact',
};

export const missionData = {
  title: 'Who We Are',
  description:
    'Women in Informatics (WINFO) is a student organization dedicated to building an inclusive and supportive community for women and non-binary students in the field of informatics. We host workshops, networking events, and mentorship programs to help our members thrive in tech.',
};

export const valuesData = [
  {
    id: 1,
    icon: '🤝',
    title: 'Community',
    description:
      'We create a welcoming space where members connect, support each other, and grow together through shared experiences.',
  },
  {
    id: 2,
    icon: '💡',
    title: 'Empowerment',
    description:
      'We equip members with skills, confidence, and resources to succeed in informatics and the broader tech industry.',
  },
  {
    id: 3,
    icon: '🌱',
    title: 'Growth',
    description:
      'We foster professional and personal development through mentorship, workshops, hackathons, and career events.',
  },
];

export const eventsData = [
  {
    id: 1,
    title: 'WINFO Hackathon 2026',
    date: 'April 26, 2026',
    time: '9:00 AM – 9:00 PM',
    location: 'HUB Ballroom, UW Campus',
    description:
      'Our flagship annual hackathon! Teams of 4 will build projects focused on social good. Mentors, workshops, and prizes included.',
    category: 'upcoming',
    tags: ['Hackathon', 'Flagship'],
  },
  {
    id: 2,
    title: 'Resume & Portfolio Workshop',
    date: 'April 18, 2026',
    time: '5:00 PM – 7:00 PM',
    location: 'MGH 058',
    description:
      'Get your resume and portfolio reviewed by industry professionals. Bring your laptop and a printed copy of your resume.',
    category: 'upcoming',
    tags: ['Workshop', 'Career'],
  },
  {
    id: 3,
    title: 'Networking Night with Amazon',
    date: 'May 8, 2026',
    time: '6:00 PM – 8:00 PM',
    location: 'Founders Hall, UW',
    description:
      'An evening of networking with engineers and recruiters from Amazon. Light refreshments provided.',
    category: 'upcoming',
    tags: ['Networking', 'Industry'],
  },
  {
    id: 4,
    title: 'Intro to UX Design',
    date: 'March 12, 2026',
    time: '4:00 PM – 5:30 PM',
    location: 'Mary Gates Hall 271',
    description:
      'A beginner-friendly workshop covering design thinking, Figma basics, and building your first prototype.',
    category: 'past',
    tags: ['Workshop', 'Design'],
  },
  {
    id: 5,
    title: 'Winter Social & Game Night',
    date: 'February 20, 2026',
    time: '6:00 PM – 9:00 PM',
    location: 'HUB 332',
    description:
      'A cozy evening of board games, snacks, and community bonding to kick off the quarter.',
    category: 'past',
    tags: ['Social'],
  },
  {
    id: 6,
    title: 'Panel: Women in Tech Leadership',
    date: 'January 28, 2026',
    time: '5:30 PM – 7:00 PM',
    location: 'Kane Hall 120',
    description:
      'Hear from women leaders at Microsoft, Meta, and startups about their career journeys and advice for students.',
    category: 'past',
    tags: ['Panel', 'Career'],
  },
];

export const boardMembers = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'President',
    bio: 'Senior in Informatics passionate about HCI and community building.',
    photo: null,
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    role: 'Vice President',
    bio: 'Junior studying data science and loves mentoring first-year students.',
    photo: null,
  },
  {
    id: 3,
    name: 'Maya Chen',
    role: 'Director of Events',
    bio: 'Sophomore who enjoys planning hackathons and bringing people together.',
    photo: null,
  },
  {
    id: 4,
    name: 'Aisha Okafor',
    role: 'Director of Outreach',
    bio: "Junior focused on expanding WINFO's reach to underrepresented communities.",
    photo: null,
  },
  {
    id: 5,
    name: 'Sophie Kim',
    role: 'Director of Marketing',
    bio: 'Senior with a love for graphic design and social media strategy.',
    photo: null,
  },
  {
    id: 6,
    name: 'Jordan Lee',
    role: 'Treasurer',
    bio: 'Junior in Informatics who keeps the org running smoothly behind the scenes.',
    photo: null,
  },
];

export const socialLinks = [
  { label: 'Instagram', url: 'https://instagram.com', icon: '📸' },
  { label: 'LinkedIn',  url: 'https://linkedin.com',  icon: '💼' },
  { label: 'Discord',   url: 'https://discord.com',   icon: '💬' },
  { label: 'Email',     url: 'mailto:winfo@uw.edu',   icon: '✉️' },
];
