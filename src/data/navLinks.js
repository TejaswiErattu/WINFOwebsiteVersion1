/* ===================================================================
   Navigation, footer, and site-wide brand data
   ===================================================================
   HOW TO UPDATE
   • Add / reorder pages in `navLinks` and `footerLinks`
   • Update social URLs in `socialLinks`
   • Change brand text, contact info, and the navbar CTA in `siteInfo`
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

/* ---------- Navbar links ----------
   A link is { label, path }. A dropdown group is { label, children: [links] }. */
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Hackathon', path: '/hackathon' },
  { label: 'Events', path: '/events' },
  { label: 'Podcast', path: '/podcast' },
  {
    label: 'Our Team',
    children: [
      { label: 'Current Team', path: '/officers', description: 'Meet our officers and committees' },
      { label: 'Alumni', path: '/alumni', description: 'The WINFO Alumni Board and past boards' },
    ],
  },
  {
    label: 'Get Involved',
    children: [
      { label: 'Membership', path: '/membership', description: 'Become an official WINFO member' },
      { label: 'Support Us', path: '/support', description: 'Sponsor, mentor, or collaborate with us' },
      { label: 'Merch', path: '/merch', description: 'Grab a cozy WINFO crewneck' },
    ],
  },
];

/* ---------- Footer quick-links ---------- */
export const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Hackathon', path: '/hackathon' },
  { label: 'Events', path: '/events' },
  { label: 'Podcast', path: '/podcast' },
  { label: 'Our Team', path: '/officers' },
  { label: 'Alumni', path: '/alumni' },
  { label: 'Membership', path: '/membership' },
  { label: 'Support Us', path: '/support' },
  { label: 'Merch', path: '/merch' },
];

/* ---------- Social links ---------- */
export const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/uwwinfo',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/women-in-informatics/posts/?feedView=all',
    icon: 'linkedin',
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@uw_winfo',
    icon: 'youtube',
  },
  {
    label: 'Email',
    url: 'mailto:winfo@uw.edu',
    icon: 'email',
  },
];

/* ---------- Site-wide brand & contact info ---------- */
export const siteInfo = {
  brandName: 'winfo',
  brandTagline:
    'Women in Informatics at the University of Washington. Empowering students through community, mentorship, and opportunity.',
  email: 'winfo@uw.edu',
  address: [
    'University of Washington',
    'Mary Gates Hall',
    'Seattle, WA 98195',
  ],
  copyright: 'WINFO — Women in Informatics',
  navCtaLabel: 'Join Us!',
  navCtaHref: MEMBERSHIP_SIGNUP_URL,
};
