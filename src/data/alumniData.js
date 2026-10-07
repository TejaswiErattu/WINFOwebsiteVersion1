/* ===================================================================
   Alumni page data
   Source: WINFO Alumni Board proposal (Fall 2026) and Past Board List.
   Do NOT add interest-form responses here: they contain personal contact info.
   =================================================================== */

import { ALUMNI_INTEREST_FORM_URL } from './externalLinks';

export const alumniData = {
  title: 'alumni',
  eyebrow: 'WINFO Alumni Board · launching Fall 2026',
  heroBody:
    'Graduating shouldn\'t mean drifting away. The **WINFO Alumni Board** is a formal alumni network that keeps WINFO grads **connected and involved** after graduation.',
  heroBodySecondary:
    'Alumni want to stay close, and students want access to people a few steps ahead. The board connects the two.',
  ctaLabel: 'join the alumni network',
  ctaLink: ALUMNI_INTEREST_FORM_URL,
  heroImage: '/images/winfo-community-3.jpg',
  heroImageAlt: 'WINFO volunteers smiling behind a Women in Informatics table with laptops',

  /* The WINFO cycle */
  cycleHeading: 'the WINFO cycle',
  cycle: [
    { step: '01', title: 'Student joins WINFO', text: 'Finds community, mentors, and confidence in tech.' },
    { step: '02', title: 'Alum starts a career', text: 'Takes WINFO into internships, jobs, and grad school.' },
    { step: '03', title: 'Mentor gives back', text: 'Returns to mentor, speak, refer, and sponsor.' },
    { step: '04', title: 'Next gen gets a head start', text: 'Current students learn from people a few steps ahead.' },
  ],

  whyHeading: 'why an alumni board?',
  why: [
    'Connect alumni with **current students**',
    'Build **mentorship and career** opportunities',
    'Keep alumni **engaged with WINFO**',
    'Create a stronger **professional network**',
    'Give alumni real ways to **give back**',
  ],

  doesHeading: 'what the board does',
  pillars: [
    {
      label: 'Careers',
      title: 'Opening doors',
      accent: 'purple',
      items: ['Alumni mentorship', 'Career panels & networking events', 'Jobs, internships & referrals', 'Interview prep'],
    },
    {
      label: 'Community',
      title: 'Staying close',
      accent: 'pink',
      items: ['Alumni socials & community building', 'Alumni newsletter & communications'],
    },
    {
      label: 'Support',
      title: 'Giving back',
      accent: 'blue',
      items: ['Fundraising & sponsorship opportunities for WINFO', 'Hackathon mentors & support'],
    },
  ],

  structureHeading: 'who\'s on the board',
  chair: 'Chair',
  leads: [
    { role: 'Programming Lead', text: 'Panels, socials & events' },
    { role: 'Mentorship Lead', text: 'Mentor matches & interview prep' },
    { role: 'Community / Engagement Lead', text: 'Keeping alumni involved' },
    { role: 'Communications Lead', text: 'Newsletter & socials' },
  ],
  reps: '+ Alumni representatives from different graduating classes',

  vision:
    'WINFO doesn\'t end when students graduate. It becomes a **lifelong community**. Alumni support current students, and together we build something for future generations of WINFO.',

  pastBoardHeading: 'past boards',
  pastBoardIntro:
    'WINFO has been led by students since 2012. Here are the officers who built it. Know a name that\'s missing? Let us know at winfo@uw.edu.',

  bottomCta: {
    text: 'help us build the first alumni board!',
    btnLabel: 'fill out the interest form',
    btnLink: ALUMNI_INTEREST_FORM_URL,
  },
};

/* Past officer boards, newest first. */
export const pastBoards = [
  {
    year: '2024–2025',
    members: [
      { name: 'Hannah Yi', role: 'Co-President' },
      { name: 'Daphne Suen', role: 'Co-President' },
      { name: 'Angela Qi', role: 'Director of Finance' },
      { name: 'Nila Ragu', role: 'Director of Public Relations' },
      { name: 'Samrutha Babu', role: 'Creative Director' },
      { name: 'Maryory Ajpop', role: 'Director of Outreach' },
      { name: 'Theophila Abigail Setiawan', role: 'Director of Diversity Efforts' },
      { name: 'Anushka Verma', role: 'Director of Community Efforts' },
      { name: 'Pournami Varma', role: 'Hackathon Director' },
      { name: 'June Mi Hong', role: 'Creative Events Director' },
    ],
  },
  {
    year: '2023–2024',
    members: [
      { name: 'Lucy Lin', role: 'Co-President' },
      { name: 'Roshni Srikanth', role: 'Co-President' },
      { name: 'Annie Tu', role: 'Director of Finance' },
      { name: 'Brianna Pak', role: 'Director of Outreach' },
      { name: 'Kelly Wang', role: 'Creative Director' },
      { name: 'Daphne He', role: 'Director of Public Relations' },
      { name: 'Kayla Tounalom', role: 'Director of Diversity Efforts' },
      { name: 'Hannah Yi', role: 'Director of Community Efforts' },
      { name: 'Sloane Shea', role: 'Hackathon Director' },
    ],
  },
  {
    year: '2022–2023',
    members: [
      { name: 'Melina Perraut', role: 'Co-President' },
      { name: 'Roshni Srikanth', role: 'Co-President' },
      { name: 'Bhavya Garlapati', role: 'Director of Finance' },
      { name: 'Lucy Lin', role: 'Director of Outreach' },
      { name: 'Kelly Wang', role: 'Creative Director' },
      { name: 'Alyssa Vo', role: 'Director of Public Relations' },
      { name: 'Bandhna Bedi', role: 'Director of Diversity Efforts' },
      { name: 'Kayla Tounalom', role: 'Director of Community Efforts' },
      { name: 'Emiri Nishizawa', role: 'Hackathon Director' },
    ],
  },
  {
    year: '2021–2022',
    members: [
      { name: 'Allison Geary', role: 'Co-President' },
      { name: 'Kayla Chea', role: 'Co-President' },
      { name: 'Rachel Kinkley', role: 'Director of Finance' },
      { name: 'Melina Perraut', role: 'Director of Outreach' },
      { name: 'Dana Rin', role: 'Creative Director' },
      { name: 'Sam Rondini', role: 'Director of Public Relations' },
      { name: 'Roshni Srikanth', role: 'Director of Diversity Efforts' },
      { name: 'Gisele Fox', role: 'Director of Community Efforts' },
      { name: 'Sharon Lin', role: 'Hackathon Director' },
    ],
  },
  {
    year: '2020–2021',
    members: [
      { name: 'Allison Geary', role: 'Co-President' },
      { name: 'Akoly Vongdala', role: 'Co-President' },
      { name: 'Lynzley Kolakowski', role: 'Director of Finance' },
      { name: 'Julia Shull', role: 'Director of Outreach' },
      { name: 'Kayla Chea', role: 'Creative Director' },
      { name: 'Shareen Chang', role: 'Director of Public Relations' },
      { name: 'Harkiran Saluja', role: 'Director of Diversity Efforts' },
      { name: 'Rachel Kinkley', role: 'Director of Community Efforts' },
      { name: 'Locksley Kolakowski', role: 'Hackathon Director' },
    ],
  },
  {
    year: '2019–2020',
    members: [
      { name: 'Hayley Younghusband', role: 'Co-President' },
      { name: 'Autumn Derr', role: 'Co-President' },
      { name: 'Rhea Chen', role: 'Director of Finance' },
      { name: 'Jeongvin Yeom', role: 'Director of Outreach' },
      { name: 'Harkiran Saluja', role: 'Creative Director' },
      { name: 'Allison Geary', role: 'Director of Public Relations' },
      { name: 'Eva Perez', role: 'Director of Diversity' },
      { name: 'Akoly Vongdala', role: 'Hackathon Project Manager' },
    ],
  },
  {
    year: '2018–2019',
    members: [
      { name: 'Stephanie Burd', role: 'Co-President' },
      { name: 'August Carow', role: 'Co-President' },
      { name: 'ZK Lin', role: 'Director of Finance' },
      { name: 'Alexis Choi', role: 'Director of Outreach' },
      { name: 'Echo Zhang', role: 'Creative Director' },
      { name: 'Mary Huibregtse', role: 'Director of Public Relations' },
      { name: 'Harshitha Akkaraju', role: 'Director of Diversity' },
    ],
  },
  {
    year: '2017–2018',
    members: [
      { name: 'Tiffany Chen', role: 'Co-President' },
      { name: 'Joycie Yu', role: 'Co-President' },
      { name: 'Zhanna Voloshina', role: 'Director of Finance' },
      { name: 'Jenny Lee', role: 'Director of Outreach' },
      { name: 'Leanne Hwa', role: 'Creative Director' },
      { name: 'Andrea Chen', role: 'Director of Public Relations' },
      { name: 'Anushree Shukla', role: 'Director of Diversity' },
    ],
  },
  {
    year: '2016–2017',
    members: [
      { name: 'Brittney Hoy', role: 'President' },
      { name: 'Sanjana Galgalikar', role: 'Vice President' },
      { name: 'Fan Yang', role: 'Director of Finance' },
      { name: 'Isabella Spaletta', role: 'Director of Outreach' },
      { name: 'Sophie Song', role: 'Creative Director' },
      { name: 'Adriana Vining', role: 'Director of Public Relations' },
      { name: 'Jessie Zhang', role: 'Director of Diversity' },
    ],
  },
];
