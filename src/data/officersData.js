/* ===================================================================
   Officers page data
   ===================================================================
   HOW TO UPDATE
   • Edit members in each group — add `image: '/images/officers/name.jpg'`
   • To add a new group (e.g. "Ambassadors"), just push another object
     into the `groups` array
   • Bios are shown on card hover — keep them to 1-2 sentences
   =================================================================== */

export const officersData = {
  /* ---------- Hero ---------- */
  title: 'Meet the Team',
  tagline: 'Our Officers',
  heroDescription:
    'W;NFO is powered by a passionate team of student leaders. Get to know the people working behind the scenes to build events, programs, and community.',

  /* ---------- Section headings ---------- */
  rolesHeading: {
    label: 'Roles',
    title: 'How Our Officers Make an Impact',
    description: 'Every position contributes to building a stronger, more connected community.',
  },
  joinCta: {
    emoji: '🌟',
    title: 'Interested in Leading?',
    description: 'Officer applications open every spring. Step up, make your mark, and help shape the future of W;NFO!',
    btnLabel: 'Get Involved',
    btnTo: '/membership',
  },

  /* ---------- Officer groups ---------- */
  groups: [
    {
      label: 'Executive Board',
      members: [
        {
          name: 'Jessica Nguyen',
          role: 'President',
          image: '',     // TODO: '/images/officers/jessica-nguyen.jpg'
          bio: 'Informatics senior passionate about UX research and inclusive design.',
          linkedin: '#', // TODO: actual LinkedIn URL
        },
        {
          name: 'Anika Sharma',
          role: 'Vice President',
          image: '',
          bio: 'CS & Business double major who loves mentorship and community building.',
          linkedin: '#',
        },
        {
          name: 'Mia Rodriguez',
          role: 'Director of Finance',
          image: '',
          bio: 'Data science enthusiast managing budgets and sponsorship logistics.',
          linkedin: '#',
        },
      ],
    },
    {
      label: 'Directors',
      members: [
        {
          name: 'Emily Chen',
          role: 'Director of Events',
          image: '',
          bio: 'Plans workshops, panels, and socials that bring our community together.',
          linkedin: '#',
        },
        {
          name: 'Taylor Brooks',
          role: 'Director of Marketing',
          image: '',
          bio: 'Designs all our socials, merch, and brand presence across campus.',
          linkedin: '#',
        },
        {
          name: 'Sophia Lee',
          role: 'Hackathon Chair',
          image: '',
          bio: 'Leads our annual hackathon from logistics to judging to sponsor outreach.',
          linkedin: '#',
        },
        {
          name: 'Ava Johnson',
          role: 'Podcast Lead',
          image: '',
          bio: 'Hosts and produces Decoding with W;NFO, our flagship podcast.',
          linkedin: '#',
        },
        {
          name: 'Lily Tran',
          role: 'Webmaster',
          image: '',
          bio: 'Builds and maintains the W;NFO website and internal tools.',
          linkedin: '#',
        },
      ],
    },
    {
      label: 'Committee Leads',
      members: [
        {
          name: 'Priya Patel',
          role: 'Mentorship Coordinator',
          image: '',
          bio: 'Matches mentors and mentees and organizes monthly check-ins.',
          linkedin: '#',
        },
        {
          name: 'Grace Kim',
          role: 'Outreach Lead',
          image: '',
          bio: 'Connects W;NFO with other RSOs and campus partners.',
          linkedin: '#',
        },
        {
          name: 'Zara Ali',
          role: 'Social Media Manager',
          image: '',
          bio: 'Runs our Instagram, LinkedIn, and TikTok with creative content.',
          linkedin: '#',
        },
        {
          name: 'Chloe Park',
          role: 'Workshop Coordinator',
          image: '',
          bio: 'Curates hands-on technical and professional workshops each quarter.',
          linkedin: '#',
        },
      ],
    },
  ],

  /* ---------- Role highlight cards ---------- */
  roleHighlights: [
    {
      icon: '🎯',
      title: 'Leadership',
      description: 'Our exec board sets the vision, strategy, and culture for the entire organization.',
      accent: 'purple',
    },
    {
      icon: '🛠️',
      title: 'Operations',
      description: 'Directors run events, content, and programs that deliver value to every member.',
      accent: 'pink',
    },
    {
      icon: '🌱',
      title: 'Community',
      description: 'Committee leads foster connection through mentorship, outreach, and social media.',
      accent: 'blue',
    },
  ],
};
