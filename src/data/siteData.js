/* ===================================================================
   Centralised data for WINFO website
   =================================================================== */

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Hackathon', path: '/hackathon' },
  { label: 'Podcast', path: '/podcast' },
  { label: 'Officers', path: '/officers' },
  { label: 'Support Us', path: '/support' },
];

export const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Hackathon', path: '/hackathon' },
  { label: 'Podcast', path: '/podcast' },
  { label: 'Membership', path: '/membership' },
  { label: 'Support Us', path: '/support' },
];

export const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/uwwinfo',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/company/winfo-uw',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    url: 'https://facebook.com/uwwinfo',
    icon: 'facebook',
  },
  {
    label: 'Email',
    url: 'mailto:winfo@uw.edu',
    icon: 'email',
  },
];

export const heroData = {
  headline: 'Women in Informatics',
  subheadline:
    'Building a supportive community for women and non-binary students in the information school at the University of Washington.',
  ctaLabel: 'About Our Story',
  ctaLink: '/about',
};

export const missionData = {
  title: 'Who We Are',
  body: 'WINFO is the largest student organization in the Information School at the University of Washington. We create a supportive and inclusive community for women, non-binary, and underrepresented students in informatics through mentorship, professional development, social events, and real-world experiences that prepare our members for meaningful careers in technology.',
  bodySecondary:
    'Founded with the belief that everyone deserves a seat at the table, WINFO has grown into a vibrant network of 500+ members who lift each other up, share knowledge, and build lasting connections.',
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

export const eventsData = {
  title: 'Events',
  tagline: 'What We\'ve Been Up To',
  heroDescription:
    'From technical workshops to community socials, WINFO hosts events that help you grow, connect, and have fun. Here\'s a look at what we\'ve been up to.',

  /* Past events gallery — each has an image placeholder, title, label, category */
  pastEvents: [
    { id: 1, title: 'Resume Workshop', label: 'Spring 2026', category: 'workshop', image: '' },
    { id: 2, title: 'Mock Interview Night', label: 'Spring 2026', category: 'workshop', image: '' },
    { id: 3, title: 'Spring Social', label: 'May 2026', category: 'social', image: '' },
    { id: 4, title: 'Industry Panel: Women in PM', label: 'Winter 2026', category: 'panel', image: '' },
    { id: 5, title: 'WINFO × ACM Game Night', label: 'Winter 2026', category: 'social', image: '' },
    { id: 6, title: 'Intro to Figma', label: 'Fall 2025', category: 'workshop', image: '' },
    { id: 7, title: 'Annual Kick-off', label: 'Fall 2025', category: 'social', image: '' },
    { id: 8, title: 'Hackathon 2025', label: 'Spring 2025', category: 'hackathon', image: '' },
  ],

  /* Featured category badges */
  categories: [
    { label: 'All', key: 'all' },
    { label: '🛠️ Workshops', key: 'workshop' },
    { label: '🎉 Socials', key: 'social' },
    { label: '💬 Panels', key: 'panel' },
    { label: '🏆 Hackathons', key: 'hackathon' },
  ],

  /* Upcoming events — compact list */
  upcoming: [
    { id: 'u1', title: 'Resume Workshop', date: 'April 20, 2026', tag: 'Workshop' },
    { id: 'u2', title: 'Mock Interview Night', date: 'May 5, 2026', tag: 'Professional Dev' },
    { id: 'u3', title: 'Spring Social', date: 'May 18, 2026', tag: 'Social' },
  ],
};

export const hackathonData = {
  title: 'WINFO Hackathon 2026',
  tagline: 'Innovate for Social Good',
  description:
    'Join 200+ participants for a weekend of building, learning, and networking. Open to all skill levels.',
  date: 'May 30 – June 1, 2026',
  ctaLabel: 'Register Now',
  ctaLink: '#',
  highlights: [
    '24-hour hackathon',
    'Workshops & mentors',
    'Prizes & swag',
    'Free food & drinks',
  ],
};

export const podcastData = {
  title: 'Decoding with WINFO',
  tagline: 'Our Podcast',
  heroDescription:
    'Real conversations with women in tech — from first internships to founding startups. Hear the stories behind the careers and the lessons they learned along the way.',
  ctaLabel: 'Listen on Spotify',
  ctaLink: '#',

  /* Three highlight stats for the info cards */
  highlights: [
    {
      icon: '🎧',
      number: '25+',
      label: 'Episodes',
      description: 'Candid conversations covering career growth, technical deep-dives, and everything in between.',
      accent: 'purple',
    },
    {
      icon: '🌟',
      number: '30+',
      label: 'Featured Guests',
      description: 'Industry leaders from companies like Google, Microsoft, Amazon, and exciting startups.',
      accent: 'pink',
    },
    {
      icon: '💬',
      number: '10+',
      label: 'Topics Covered',
      description: 'UX, data science, product management, software engineering, career pivots, and more.',
      accent: 'blue',
    },
  ],

  /* Featured / latest episode */
  featured: {
    id: 1,
    tag: 'Latest Episode',
    title: 'Breaking into UX Research',
    guest: 'Sarah Kim',
    description:
      'Sarah shares her path from informatics to leading UX research at a major tech company. Learn how she navigated ambiguity, built her portfolio, and landed her dream role — plus her top advice for students.',
    image: '',
  },

  /* Past episode gallery */
  episodes: [
    {
      id: 2,
      tag: 'Episode 24',
      title: 'From Intern to PM',
      guest: 'Priya Patel',
      description:
        'Priya talks about navigating product management, finding your voice in meetings, and the power of asking "why?"',
      image: '',
    },
    {
      id: 3,
      tag: 'Episode 23',
      title: 'Data Science & Social Impact',
      guest: 'Maria Gonzalez',
      description:
        'How Maria uses data science to tackle public-health challenges and why informatics is uniquely suited for social good.',
      image: '',
    },
    {
      id: 4,
      tag: 'Episode 22',
      title: 'Designing Accessible Experiences',
      guest: 'Taylor Chen',
      description:
        'Taylor discusses building inclusive products, accessibility best practices, and why empathy is a designer\'s superpower.',
      image: '',
    },
    {
      id: 5,
      tag: 'Episode 21',
      title: 'Startup Life After Graduation',
      guest: 'Jasmine Okafor',
      description:
        'Jasmine shares the highs and lows of co-founding a startup right out of college, fundraising tips, and staying resilient.',
      image: '',
    },
  ],
};

export const officersData = [
  { name: 'Jessica Nguyen', role: 'President', image: '' },
  { name: 'Anika Sharma', role: 'Vice President', image: '' },
  { name: 'Emily Chen', role: 'Director of Events', image: '' },
  { name: 'Taylor Brooks', role: 'Director of Marketing', image: '' },
  { name: 'Mia Rodriguez', role: 'Director of Finance', image: '' },
  { name: 'Sophia Lee', role: 'Hackathon Chair', image: '' },
  { name: 'Ava Johnson', role: 'Podcast Lead', image: '' },
  { name: 'Lily Tran', role: 'Webmaster', image: '' },
];

export const membershipData = {
  title: 'Membership',
  tagline: 'Join Our Community',
  heroDescription:
    'WINFO is a welcoming space for students passionate about technology, informatics, and making an impact. Become a member to unlock exclusive events, mentorship, and a supportive network of peers who share your goals.',
  ctaLabel: 'Become a Member',
  ctaLink: '#',
  midCta: {
    line1: 'Whether you\'re',
    highlight: 'becoming a member',
    line2: 'or',
    highlight2: 'searching for your people',
    line3: '— WINFO is here for you.',
  },
  benefits: [
    {
      icon: '🤝',
      title: 'Community & Connection',
      description:
        'Join a vibrant network of students, alumni, and industry professionals who champion diversity in tech.',
      accent: 'purple',
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description:
        'Get access to exclusive workshops, resume reviews, mock interviews, and direct connections with top tech companies.',
      accent: 'pink',
    },
    {
      icon: '💡',
      title: 'Learning & Mentorship',
      description:
        'Participate in our mentorship program, hands-on projects, and speaker events that broaden your skills and perspective.',
      accent: 'blue',
    },
  ],
  lowerInfo: {
    heading: 'What it means to be a WINFO member',
    paragraphs: [
      'As a WINFO member you become part of a tight-knit community that celebrates curiosity and collaboration. From study sessions to industry mixers, every event is designed to help you thrive.',
      'Membership is free and open to all students regardless of major, year, or background. All you need is an interest in technology and a willingness to learn alongside others.',
    ],
    links: [
      { label: 'Our Events', to: '/events' },
      { label: 'Meet the Officers', to: '/officers' },
      { label: 'Support WINFO', to: '/support' },
    ],
  },
};

export const supportData = {
  title: 'Support Us',
  tagline: 'Partner With WINFO',
  heroDescription:
    'Your support fuels workshops, mentorship programs, and events that empower the next generation of women in tech. Whether you\'re a company, alumnus, or community member — there\'s a place for you.',
  ctaLabel: 'Sponsor Us',
  ctaLink: 'mailto:winfo@uw.edu',
  whySupport: [
    {
      icon: '🌱',
      title: 'Grow the Community',
      description:
        'Your investment directly funds scholarships, resources, and programming that make WINFO accessible to every student.',
      accent: 'purple',
    },
    {
      icon: '🎯',
      title: 'Reach Top Talent',
      description:
        'Connect your brand with hundreds of driven informatics and tech students actively seeking internships and careers.',
      accent: 'pink',
    },
    {
      icon: '💛',
      title: 'Make a Lasting Impact',
      description:
        'Sponsors have helped us host 10+ events per year and launch mentorship programs that change career trajectories.',
      accent: 'blue',
    },
  ],
  hackathon: {
    title: 'Support Our Hackathon',
    description:
      'Our annual hackathon brings together 200+ participants for a weekend of innovation, learning, and community building. Sponsors get premium visibility and direct access to talented students.',
    highlights: [
      { icon: '👩‍💻', text: '200+ participants' },
      { icon: '🏆', text: 'Branded prize tracks' },
      { icon: '📣', text: 'Logo on all materials' },
      { icon: '🤝', text: 'Mentorship & judging roles' },
    ],
  },
  otherWays: [
    {
      icon: '📰',
      title: 'Newsletter Spotlight',
      description: 'Feature your company or opportunity in our monthly newsletter reaching 500+ subscribers.',
    },
    {
      icon: '🧑‍🏫',
      title: 'Become a Mentor',
      description: 'Share your industry experience by mentoring students one-on-one through our mentorship program.',
    },
    {
      icon: '🛠️',
      title: 'Workshop Collaboration',
      description: 'Partner with us to host a branded technical workshop, info session, or panel discussion.',
    },
    {
      icon: '🎪',
      title: 'Event Sponsorship',
      description: 'Sponsor individual events like networking nights, career panels, or study sessions.',
    },
    {
      icon: '🎁',
      title: 'In-Kind Donations',
      description: 'Contribute swag, software licenses, cloud credits, or other resources our members can use.',
    },
    {
      icon: '📢',
      title: 'Social Media Partner',
      description: 'Cross-promote with WINFO on social media to amplify your reach within the student community.',
    },
  ],
};
