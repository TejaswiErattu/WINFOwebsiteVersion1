/* ===================================================================
   Alumni page data
   Source: WINFO Alumni Board proposal (Fall 2026) and Past Board List.
   Do NOT add interest-form responses here: they contain personal contact info.
   =================================================================== */

import { ALUMNI_INTEREST_FORM_URL } from './externalLinks';

export const alumniData = {
  title: 'alumni board',
  /* Pop-up announcement at the top of the page (shows once per visit) */
  banner: 'The WINFO Alumni Board is launching Fall 2026!',
  bannerLinkLabel: 'Join the network',
  heroBody:
    'Graduating shouldn\'t mean drifting away. The **WINFO Alumni Board** is a formal alumni network that keeps WINFO grads **connected and involved** after graduation.',
  heroBodySecondary:
    'Alumni want to stay close, and students want access to people a few steps ahead. The board connects the two.',
  ctaLabel: 'join the alumni network',
  ctaLink: ALUMNI_INTEREST_FORM_URL,
  heroImage: '/images/winfo-community-1.jpg',
  heroImageAlt: 'Students making vision boards at long tables in a classroom',

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
  chairText: 'Leads the alumni board',
  leads: [
    { role: 'Programming Lead', text: 'Panels, socials & events' },
    { role: 'Mentorship Lead', text: 'Mentor matches & interview prep' },
    { role: 'Community / Engagement Lead', text: 'Keeping alumni involved' },
    { role: 'Communications Lead', text: 'Newsletter & socials' },
  ],
  reps: '+ Alumni representatives from different graduating classes',


  bottomCta: {
    text: 'help us build the first alumni board!',
    btnLabel: 'fill out the interest form',
    btnLink: ALUMNI_INTEREST_FORM_URL,
  },
};
