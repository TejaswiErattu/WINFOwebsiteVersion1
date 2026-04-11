/* ===================================================================
   Membership page data
   ===================================================================
   HOW TO UPDATE
   • Change `ctaLink` to your actual sign-up form URL
   • Edit benefits, add more, or change accent colours
   • Update `lowerInfo.paragraphs` with real copy about membership
   =================================================================== */

export const membershipData = {
  /* ---------- Hero ---------- */
  title: 'Membership',
  tagline: 'Join Our Community',
  heroDescription:
    'W;NFO is a welcoming space for students passionate about technology, informatics, and making an impact. Become a member to unlock exclusive events, mentorship, and a supportive network of peers who share your goals.',
  ctaLabel: 'Become a Member',
  ctaLink: '#',                    // TODO: replace with real sign-up link
  secondaryCtaLabel: 'See Events',
  secondaryCtaLink: '/events',
  heroImage: '',                   // TODO: '/images/membership/hero.jpg'
  heroImageAlt: 'WINFO members at a community event',

  /* ---------- Section headings ---------- */
  benefitsHeading: {
    label: 'Why Join?',
    title: 'Member Benefits',
    description: 'Everything you need to grow, connect, and thrive in the tech community.',
  },

  /* ---------- Mid-CTA band ---------- */
  midCta: {
    line1: 'Whether you\'re',
    highlight: 'becoming a member',
    line2: 'or',
    highlight2: 'searching for your people',
    line3: '— W;NFO is here for you.',
  },

  /* ---------- Benefits cards ---------- */
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

  /* ---------- Ready to join CTA ---------- */
  joinCta: {
    emoji: '🎉',
    title: 'Ready to Join?',
    description:
      'Membership is free and open to all students. Sign up in seconds and start exploring everything W;NFO has to offer.',
  },

  /* ---------- Lower info section ---------- */
  lowerInfo: {
    heading: 'What it means to be a W;NFO member',
    paragraphs: [
      'As a W;NFO member you become part of a tight-knit community that celebrates curiosity and collaboration. From study sessions to industry mixers, every event is designed to help you thrive.',
      'Membership is free and open to all students regardless of major, year, or background. All you need is an interest in technology and a willingness to learn alongside others.',
    ],
    links: [
      { label: 'Our Events', to: '/events' },
      { label: 'Meet the Officers', to: '/officers' },
      { label: 'Support W;NFO', to: '/support' },
    ],
  },

  /* ---------- Bottom CTA banner ---------- */
  bottomCta: {
    title: 'Questions about membership?',
    text: 'We\'d love to hear from you — reach out anytime.',
    btnLabel: 'Contact Us',
    btnTo: '/support',
  },
};
