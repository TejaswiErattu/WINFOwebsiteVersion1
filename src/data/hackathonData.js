/* ===================================================================
   Hackathon page data — matches Figma HiFi screenshots
   =================================================================== */

import { MEMBERSHIP_SIGNUP_URL } from './externalLinks';

/* —— Local sponsor logos (from src/assets/sponsors) —— */
import logoAccenture     from '../assets/sponsors/accenture.svg';
import logoAdobe         from '../assets/sponsors/adobe.svg';
import logoAlaska        from '../assets/sponsors/alaska-airlines.svg';
import logoAmazon        from '../assets/sponsors/amazon.svg';
import logoAvanade       from '../assets/sponsors/avanade.svg';
import logoBestBuy       from '../assets/sponsors/best-buy.svg';
import logoDeloitte      from '../assets/sponsors/deloitte.svg';
import logoDisney        from '../assets/sponsors/disney.svg';
import logoExtrahop      from '../assets/sponsors/extrahop.svg';
import logoGE            from '../assets/sponsors/ge.svg';
import logoGoogle        from '../assets/sponsors/google.svg';
import logoHBO           from '../assets/sponsors/hbo.svg';
import logoHulu          from '../assets/sponsors/hulu.svg';
import logoKPMG          from '../assets/sponsors/kpmg.svg';
import logoLibertyMutual from '../assets/sponsors/liberty-mutual.svg';
import logoMicrosoft     from '../assets/sponsors/microsoft.svg';
import logoNordstrom     from '../assets/sponsors/nordstrom.svg';
import logoOkta          from '../assets/sponsors/okta.svg';
import logoOracle        from '../assets/sponsors/oracle.svg';
import logoSageBio       from '../assets/sponsors/sage-bionetworks.svg';
import logoSmartsheet    from '../assets/sponsors/smartsheet.svg';
import logoTicketmaster  from '../assets/sponsors/ticketmaster.svg';
import logoTUNE          from '../assets/sponsors/tune.svg';
import logoUW            from '../assets/sponsors/university-of-washington.jpeg';
import logoVisa          from '../assets/sponsors/visa-inc.svg';
import logoWellsFargo    from '../assets/sponsors/wells-fargo.svg';
import logoWestMonroe    from '../assets/sponsors/west-monroe.png';

export const hackathonData = {
  /* ---------- Hero ---------- */
  title: 'hackathon',
  heroPhotos: [
    { src: '/images/hackathon-participants.jpg', alt: 'Hackathon participants working together' },
    { src: '/images/hackathon-food.jpg', alt: 'Food being served at hackathon' },
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
    { category: 'Best Overall', image: '/images/best-impact-winner.jpg', link: '#' },
    { category: 'Best Design', image: '/images/best-overall-winner.jpg', link: '#' },
    { category: 'Best Impact', image: '/images/best-design-winner.jpg', link: '#' },
    { category: 'Best Coding', image: '/images/best-coding-winner.jpg', link: '#' },
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
    { name: 'Accenture',              logo: logoAccenture },
    { name: 'Adobe',                  logo: logoAdobe },
    { name: 'Alaska Airlines',        logo: logoAlaska },
    { name: 'Amazon Catalyst',        logo: logoAmazon },
    { name: 'ASUW',                   logo: '' },
    { name: 'AT&T',                   logo: '' },
    { name: 'Avanade',                logo: logoAvanade },
    { name: 'Best Buy',               logo: logoBestBuy },
    { name: 'Deloitte',               logo: logoDeloitte },
    { name: 'The Walt Disney Company', logo: logoDisney },
    { name: 'ExtraHop',               logo: logoExtrahop },
    { name: 'GE Digital',             logo: logoGE },
    { name: 'Google',                 logo: logoGoogle },
    { name: 'GPSS',                   logo: '' },
    { name: 'HBO',                    logo: logoHBO },
    { name: 'The HUB',                logo: '' },
    { name: 'Hulu',                   logo: logoHulu },
    { name: 'Information School',     logo: logoUW },
    { name: 'KPMG',                   logo: logoKPMG },
    { name: 'Liberty Mutual',         logo: logoLibertyMutual },
    { name: 'Microsoft',              logo: logoMicrosoft },
    { name: 'Nordstrom',              logo: logoNordstrom },
    { name: 'Okta',                   logo: logoOkta },
    { name: 'Oracle',                 logo: logoOracle },
    { name: 'PwC',                    logo: '' },
    { name: 'Sage Bionetworks',       logo: logoSageBio },
    { name: 'Student Activities Office', logo: '' },
    { name: 'Smartsheet',             logo: logoSmartsheet },
    { name: 'Ticketmaster',           logo: logoTicketmaster },
    { name: 'TUNE',                   logo: logoTUNE },
    { name: 'UW Alumni Association',  logo: logoUW },
    { name: 'Visa',                   logo: logoVisa },
    { name: 'Wells Fargo',            logo: logoWellsFargo },
    { name: 'West Monroe',            logo: logoWestMonroe },
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
