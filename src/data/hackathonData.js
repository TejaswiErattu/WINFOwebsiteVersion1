/* ===================================================================
   Hackathon page data — matches Figma HiFi screenshots
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

export const hackathonData = {
  /* ---------- Hero ---------- */
  title: 'hackathon',
  heroPhotos: [
    { src: '/images/hackathon-2.jpg', alt: 'Hackathon audience' },
    { src: '/images/hackathon-3.jpg', alt: 'Sponsor booth at hackathon' },
    { src: '/images/hackathon-4.jpg', alt: 'WINFO hackathon group photo' },
  ],

  /* ---------- About blurbs ---------- */
  tagline: 'COLLABORATE. NETWORK. SOLVE.',
  aboutBody:
    "WINFO\u2019s Hackathon is an annual, 12-hour hackathon that brings together UW students with diverse skill sets to develop solutions that address a wide array of issues. Here at the iSchool, we believe in designing and developing technology-based solutions that positively impact the world.",
  challengeHeading: 'we challenge you...',
  challengeBody:
    'to venture into a new problem space, develop thoughtful solutions, and empower those around you to promote equity!',
  beginnerHeading: 'we are a beginner-friendly environment!',
  beginnerBody:
    "This is a great experience for college students to network, get hands-on experience coding or designing, and work in teams to problem solve. Whether you\u2019re new to tech, a seasoned hacker, or looking for more experience, WINFO\u2019s hackathon is for you!",
  ctaLabel: 'register now!',
  ctaLink: MEMBERSHIP_SIGNUP_URL,

  /* ---------- Stats ---------- */
  statsHeading: 'at our latest hackathon\u2026',
  stats: [
    { number: '266', label: 'student participants' },
    { number: '67', label: 'projects submitted' },
    { number: '45', label: 'industry mentors' },
  ],

  /* ---------- Previous Winners ---------- */
  winnersHeading: 'previous winners',
  winners: [
    { category: 'Best Overall', image: '/images/hackathon-5.jpg', link: '#' },
    { category: 'Best Design', image: '/images/hackathon-1.jpg', link: '#' },
    { category: 'Best Impact', image: '/images/hackathon-2.jpg', link: '#' },
    { category: 'Best Coding', image: '/images/hackathon-3.jpg', link: '#' },
  ],

  /* ---------- Register CTA ---------- */
  registerCta: {
    heading: 'Registration opens late fall!',
    cardText: 'sign up for early priority notifications!',
    inputPlaceholder: 'email',
  },

  /* ---------- FAQ ---------- */
  faqHeading: 'frequently asked questions',
  faqs: [
    {
      question: 'Do I need to know how to code?',
      answer: 'No! Our hackathon welcomes participants of all skill levels. You can contribute through design, ideation, research, and presentation skills.',
    },
    {
      question: 'Does my solution have to be coded?',
      answer: 'Not necessarily. You can submit prototypes, wireframes, pitch decks, or coded solutions. We encourage creativity in all forms.',
    },
    {
      question: 'How big are the teams?',
      answer: 'Teams consist of 3\u20135 members. You can form your own team or be matched with others during the team formation event.',
    },
    {
      question: 'Do I need to have a team before the event?',
      answer: 'No, we host a team-formation mixer before the hackathon so you can meet fellow participants and find a group.',
    },
    {
      question: 'Do I need to have an idea in mind before the event?',
      answer: 'Not at all! The hackathon theme and problem statements are revealed at the start of the event.',
    },
    {
      question: 'Can we network with the mentors and sponsors?',
      answer: "Yes! Mentors are here to assist you with your project and give any advice. Sponsors would love to get to know you and hear what you\u2019re working on. Large companies love sponsoring WINFO\u2019s Hackathon because of talented and passionate students like yourself!",
    },
    {
      question: "My question isn\u2019t here!",
      answer: 'Feel free to reach out to us via email at winfo@uw.edu or DM us on Instagram @uwwinfo. We\u2019re happy to help!',
    },
  ],

  /* ---------- Sponsor the hackathon ---------- */
  sponsorHeading: 'sponsor the hackathon!',
  sponsorBody:
    "By sponsoring the **WINFO Hackathon**, you\u2019ll gain **exclusive access** to inspire the next generation of tech talent. Mentor passionate students, judge groundbreaking projects, and spotlight your brand on both digital and in-person stages.",
  sponsorBenefits: [
    {
      title: 'targeted recruitment access',
      text: 'Connect with top talent in Informatics, Computer Science, UX Design, and Data Science through real-time collaboration and mentorship.',
    },
    {
      title: 'brand visibility',
      text: 'Gain exposure through social media promotion, on-site tabling, branded swag distribution, and logo placement on all marketing materials.',
    },
    {
      title: 'early engagement in innovation',
      text: "Evaluate and guide student projects aligned with emerging technologies, tools, or themes tied to your company\u2019s mission.",
    },
  ],
  sponsorCtaLabel: 'email us!',
  sponsorCtaLink: 'mailto:winfo@uw.edu',

  /* ---------- Past Sponsors ---------- */
  pastSponsorsHeading: 'past sponsors',
  pastSponsors: [
    { name: 'Accenture',              logo: 'https://logo.clearbit.com/accenture.com' },
    { name: 'Adobe',                  logo: 'https://logo.clearbit.com/adobe.com' },
    { name: 'Alaska Airlines',        logo: 'https://logo.clearbit.com/alaskaair.com' },
    { name: 'Amazon Catalyst',        logo: 'https://logo.clearbit.com/amazon.com' },
    { name: 'ASUW',                   logo: 'https://logo.clearbit.com/asuw.org' },
    { name: 'AT&T',                   logo: 'https://logo.clearbit.com/att.com' },
    { name: 'Avanade',                logo: 'https://logo.clearbit.com/avanade.com' },
    { name: 'Best Buy',               logo: 'https://logo.clearbit.com/bestbuy.com' },
    { name: 'Deloitte',               logo: 'https://logo.clearbit.com/deloitte.com' },
    { name: 'The Walt Disney Company', logo: 'https://logo.clearbit.com/disney.com' },
    { name: 'ExtraHop',               logo: 'https://logo.clearbit.com/extrahop.com' },
    { name: 'GE Digital',             logo: 'https://logo.clearbit.com/ge.com' },
    { name: 'Google',                 logo: 'https://logo.clearbit.com/google.com' },
    { name: 'GPSS',                   logo: '' },
    { name: 'HBO',                    logo: 'https://logo.clearbit.com/hbo.com' },
    { name: 'The HUB',                logo: '' },
    { name: 'Hulu',                   logo: 'https://logo.clearbit.com/hulu.com' },
    { name: 'Information School',     logo: 'https://logo.clearbit.com/ischool.uw.edu' },
    { name: 'KPMG',                   logo: 'https://logo.clearbit.com/kpmg.com' },
    { name: 'Liberty Mutual',         logo: 'https://logo.clearbit.com/libertymutual.com' },
    { name: 'Microsoft',              logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Nordstrom',              logo: 'https://logo.clearbit.com/nordstrom.com' },
    { name: 'Okta',                   logo: 'https://logo.clearbit.com/okta.com' },
    { name: 'Oracle',                 logo: 'https://logo.clearbit.com/oracle.com' },
    { name: 'PwC',                    logo: 'https://logo.clearbit.com/pwc.com' },
    { name: 'Sage Bionetworks',       logo: 'https://logo.clearbit.com/sagebionetworks.org' },
    { name: 'Student Activities Office', logo: '' },
    { name: 'Smartsheet',             logo: 'https://logo.clearbit.com/smartsheet.com' },
    { name: 'Ticketmaster',           logo: 'https://logo.clearbit.com/ticketmaster.com' },
    { name: 'TUNE',                   logo: 'https://logo.clearbit.com/tune.com' },
    { name: 'UW Alumni Association',  logo: 'https://logo.clearbit.com/uw.edu' },
    { name: 'Visa',                   logo: 'https://logo.clearbit.com/visa.com' },
    { name: 'Wells Fargo',            logo: 'https://logo.clearbit.com/wellsfargo.com' },
    { name: 'West Monroe',            logo: 'https://logo.clearbit.com/westmonroe.com' },
  ],

  /* ---------- Past Hackathons ---------- */
  pastHackathonsHeading: 'past hackathons',
  pastHackathons: [
    { theme: 'Breaking Grounds, Discovering Solutions', year: '2025' },
    { theme: 'Infinite Possibilities, Infinite Solutions', year: '2024' },
    { theme: 'Reframe, Build, Innovate Onwards', year: '2023' },
    { theme: 'Embracing the New', year: '2022' },
    { theme: 'Hacking Forward, Together', year: '2021' },
    { theme: 'Driven By Difference', year: '2020' },
    { theme: 'A World of Difference', year: '2019' },
    { theme: 'What Does Diversity Mean to You?', year: '2018' },
  ],
};
