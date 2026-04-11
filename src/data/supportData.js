/* ===================================================================
   Support Us page data
   ===================================================================
   HOW TO UPDATE
   • Change `ctaLink` to your real sponsorship contact email or form
   • Add/remove items in `whySupport`, `otherWays` as needed
   • Update `hackathon.highlights` with current year stats
   =================================================================== */

export const supportData = {
  /* ---------- Hero ---------- */
  title: 'Support Us',
  tagline: 'Partner With W;NFO',
  heroDescription:
    'Your support fuels workshops, mentorship programs, and events that empower the next generation of women in tech. Whether you\'re a company, alumnus, or community member — there\'s a place for you.',
  ctaLabel: 'Sponsor Us',
  ctaLink: 'mailto:winfo@uw.edu', // TODO: replace with form link if applicable
  secondaryCtaLabel: 'Become a Member',
  secondaryCtaLink: '/membership',
  heroImage: '',                   // TODO: '/images/support/hero.jpg'
  heroImageAlt: 'WINFO community supported by sponsors',

  /* ---------- Section headings ---------- */
  whySupportHeading: {
    label: 'Why Support Us?',
    title: 'Your Impact Matters',
    description: 'Every contribution helps us build a stronger, more inclusive tech community at UW.',
  },
  otherWaysHeading: {
    label: 'More Ways to Help',
    title: 'Support us in other ways',
    description: 'Not every contribution is monetary — here are more ways to make a difference.',
  },
  bottomCta: {
    emoji: '💌',
    title: 'Ready to Partner?',
    description:
      'We\'d love to discuss how we can work together. Reach out and our sponsorship team will get back to you within 48 hours.',
    btnLabel: 'Get in Touch',
  },

  /* ---------- Why support cards ---------- */
  whySupport: [
    {
      icon: '🌱',
      title: 'Grow the Community',
      description:
        'Your investment directly funds scholarships, resources, and programming that make W;NFO accessible to every student.',
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

  /* ---------- Hackathon sponsorship ---------- */
  hackathon: {
    label: '🎪 Hackathon Sponsorship',
    title: 'Support Our Hackathon',
    description:
      'Our annual hackathon brings together 200+ participants for a weekend of innovation, learning, and community building. Sponsors get premium visibility and direct access to talented students.',
    image: '',               // TODO: '/images/support/hackathon-sponsor.jpg'
    imageAlt: 'WINFO Hackathon in action',
    btnLabel: 'Sponsor the Hackathon',
    highlights: [
      { icon: '👩‍💻', text: '200+ participants' },
      { icon: '🏆', text: 'Branded prize tracks' },
      { icon: '📣', text: 'Logo on all materials' },
      { icon: '🤝', text: 'Mentorship & judging roles' },
    ],
  },

  /* ---------- Other ways to support ---------- */
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
      description: 'Cross-promote with W;NFO on social media to amplify your reach within the student community.',
    },
  ],
};
