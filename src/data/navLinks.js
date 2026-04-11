/* ===================================================================
   Navigation, footer, and site-wide brand data
   ===================================================================
   HOW TO UPDATE
   • Add / reorder pages in `navLinks` and `footerLinks`
   • Update social URLs in `socialLinks`
   • Change brand text, contact info, and the navbar CTA in `siteInfo`
   =================================================================== */

/* ---------- Navbar links ---------- */
export const navLinks = [
  { label: 'hackathon', path: '/hackathon' },
  { label: 'events', path: '/events' },
  { label: 'podcast', path: '/podcast' },
  { label: 'team', path: '/officers' },
  { label: 'support us', path: '/support' },
];

/* ---------- Footer quick-links ---------- */
export const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Hackathon', path: '/hackathon' },
  { label: 'Podcast', path: '/podcast' },
  { label: 'Membership', path: '/membership' },
  { label: 'Support Us', path: '/support' },
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

/* ---------- Site-wide brand & contact info ---------- */
export const siteInfo = {
  brandName: 'w;nfo',
  brandTagline:
    'Women in Informatics at the University of Washington. Empowering students through community, mentorship, and opportunity.',
  email: 'winfo@uw.edu',
  address: [
    'University of Washington',
    'Mary Gates Hall',
    'Seattle, WA 98195',
  ],
  copyright: 'W;NFO — Women in Informatics',
  navCtaLabel: 'join us!',
  navCtaTo: '/membership',
};
