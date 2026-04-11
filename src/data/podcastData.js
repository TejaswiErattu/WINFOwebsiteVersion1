/* ===================================================================
   Podcast page data
   ===================================================================
   HOW TO UPDATE
   • Add new episodes to the `episodes` array (newest first)
   • Move the latest episode into `featured`
   • Replace `image: ''` with actual thumbnails
   • Update `ctaLink` with your real Spotify / Apple Podcasts URL
   =================================================================== */

export const podcastData = {
  /* ---------- Hero ---------- */
  title: 'Decoding with W;NFO',
  tagline: 'Our Podcast',
  heroDescription:
    'Real conversations with women in tech — from first internships to founding startups. Hear the stories behind the careers and the lessons they learned along the way.',
  ctaLabel: 'Listen on Spotify',
  ctaLink: '#',                    // TODO: replace with Spotify link
  secondaryCtaLabel: 'Be a Guest',
  secondaryCtaLink: '/support',
  coverImage: '',                  // TODO: '/images/podcast/cover-art.jpg'
  coverImageAlt: 'Decoding with WINFO podcast cover art',

  /* ---------- Section headings ---------- */
  featuredHeading: {
    label: 'Latest Episode',
    title: 'Watch our past episodes',
    description: 'Tune in to hear powerful conversations with women in tech, informatics, and beyond.',
  },
  archiveHeading: {
    label: 'Episode Archive',
    title: 'More episodes to explore',
    description: 'Catch up on previous conversations and discover new perspectives.',
  },
  ctaBanner: {
    title: 'Have a story to share?',
    text: 'We\'re always looking for inspiring guests. Reach out if you\'d like to be featured on the W;NFO Podcast.',
    btnLabel: 'Contact Us',
    btnTo: '/support',
  },

  /* ---------- Highlight stat cards ---------- */
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

  /* ---------- Featured / latest episode ---------- */
  featured: {
    id: 1,
    tag: 'Latest Episode',
    title: 'Breaking into UX Research',
    guest: 'Sarah Kim',
    description:
      'Sarah shares her path from informatics to leading UX research at a major tech company. Learn how she navigated ambiguity, built her portfolio, and landed her dream role — plus her top advice for students.',
    image: '',       // TODO: '/images/podcast/ep-25.jpg'
    imageAlt: 'Sarah Kim headshot',
    listenUrl: '#',  // TODO: direct episode link
  },

  /* ---------- Past episode gallery ---------- */
  episodes: [
    {
      id: 2,
      tag: 'Episode 24',
      title: 'From Intern to PM',
      guest: 'Priya Patel',
      description:
        'Priya talks about navigating product management, finding your voice in meetings, and the power of asking "why?"',
      image: '',
      imageAlt: 'Priya Patel headshot',
      listenUrl: '#',
    },
    {
      id: 3,
      tag: 'Episode 23',
      title: 'Data Science & Social Impact',
      guest: 'Maria Gonzalez',
      description:
        'How Maria uses data science to tackle public-health challenges and why informatics is uniquely suited for social good.',
      image: '',
      imageAlt: 'Maria Gonzalez headshot',
      listenUrl: '#',
    },
    {
      id: 4,
      tag: 'Episode 22',
      title: 'Designing Accessible Experiences',
      guest: 'Taylor Chen',
      description:
        'Taylor discusses building inclusive products, accessibility best practices, and why empathy is a designer\'s superpower.',
      image: '',
      imageAlt: 'Taylor Chen headshot',
      listenUrl: '#',
    },
    {
      id: 5,
      tag: 'Episode 21',
      title: 'Startup Life After Graduation',
      guest: 'Jasmine Okafor',
      description:
        'Jasmine shares the highs and lows of co-founding a startup right out of college, fundraising tips, and staying resilient.',
      image: '',
      imageAlt: 'Jasmine Okafor headshot',
      listenUrl: '#',
    },
  ],
};
