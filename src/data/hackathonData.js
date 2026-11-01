/* ===================================================================
   Hackathon page data — evergreen overview of WINFO's annual hackathon
   =================================================================== */

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

/* Placeholder — replace with the real registration link when it opens.
   While this value is unchanged, the Register button renders disabled. */
export const REGISTRATION_URL_TBD = 'REGISTRATION_URL_TBD';

export const hackathonData = {
  /* ---------- Hero ---------- */
  title: 'hackathon',
  heroLede: 'Our annual flagship event, where hundreds of students spend two days building technology for social good.',
  /* Photos in /images/hackathon/ are from the 14th hackathon album (Hackathon Day) */
  heroImage: '/images/hackathon/crowd-ballroom.jpg',
  heroImageAlt: 'A packed ballroom of hackathon teams working at round tables decorated with purple balloons',

  /* ---------- 1 · Overview (evergreen: history, scale, mission) ---------- */
  overviewHeading: 'WINFO\u2019s annual hackathon',
  overviewBody: [
    'For about 15 years, WINFO has hosted one of the largest student hackathons at the University of Washington. What started as a small gathering of Informatics students has grown into a two-day event that fills the HUB ballroom.',
    'Participants form teams, design and build projects that tackle real-world problems, get feedback from industry mentors, and meet the sponsors who support the next generation of tech talent.',
    'It\u2019s beginner-friendly and open to all current UW undergraduates: no coding experience required. Teams of 3\u20134 can submit working builds, prototypes, slide decks or concept demos, and lunch and dinner are on us.',
  ],
  /* Figures from the 14th hackathon (January 2026) */
  statsHeading: 'at our latest hackathon\u2026',
  stats: [
    { number: '266', label: 'student participants' },
    { number: '67', label: 'projects submitted' },
    { number: '45', label: 'industry mentors' },
    { number: '2', label: 'days of hacking & judging' },
  ],

  /* ---------- 2 · Collaborate. Network. Solve. ---------- */
  tagline: 'COLLABORATE. NETWORK. SOLVE.',
  aboutBody:
    "WINFO\u2019s Hackathon brings together UW students with diverse skill sets to develop solutions that address a wide array of issues. Here at the iSchool, we believe in designing and developing technology-based solutions that positively impact the world.",
  challengeHeading: 'We challenge you...',
  challengeBody:
    'to venture into a new problem space, develop thoughtful solutions, and empower those around you to promote equity!',
  beginnerHeading: 'We are a beginner-friendly environment!',
  beginnerBody:
    "This is a great experience for college students to network, get hands-on experience coding or designing, and work in teams to problem solve. Whether you\u2019re new to tech, a seasoned hacker, or looking for more experience, WINFO\u2019s hackathon is for you!",
  aboutImage: '/images/hackathon/mentor-team.jpg',
  aboutImageAlt: 'An industry mentor talks through ideas with a hackathon team gathered around their table',

  /* ---------- 3 · This year's theme ----------
     Source: winfohackathon2027.web.app */
  currentHackathon: {
    label: 'This year: the 15th hackathon',
    theme: 'Peaks of Possibility',
    dates: 'January 30\u201331, 2027',
    location: 'HUB North Ballroom',
    locationDetail: 'University of Washington Husky Union Building',
    registrationUrl: REGISTRATION_URL_TBD,
    /* The hackathon's own site (schedule, rules, FAQ) */
    websiteUrl: 'https://winfohackathon2027.web.app/',
    websiteLabel: 'Visit the hackathon website',
    /* Pop-up announcement at the top of the page (shows once per visit) */
    banner: 'WINFO\u2019s 15th Hackathon is January 30\u201331, 2027 \u2014 registration opens soon!',
    bannerLinkLabel: 'Learn more',
    themeBody: [
      'Inspired by the winding trails, towering mountains, and the natural beauty of the Pacific Northwest, our theme reflects the journey of discovery in technology. We believe ingenuity emerges when participants venture beyond familiar ground and pursue bold, creative ideas.',
      'Just as every trail leads to a new perspective, every project has the potential to guide us toward bold new possibilities.',
    ],
    photos: [
      { src: '/images/hackathon/teams-at-work.jpg', width: 1600, height: 1067, alt: 'Rows of hackathon teams working on laptops under purple balloons' },
      { src: '/images/hackathon/participants-table.jpg', width: 1600, height: 1067, alt: 'Hackathon participants smiling at their table with laptops open' },
    ],
  },

  /* ---------- 4 · Photos & impact ---------- */
  impactHeading: 'the energy in the room',
  impactBody: 'Hundreds of students, mentors, judges, volunteers and sponsors, all in one room.',
  impactPhotos: [
    { src: '/images/hackathon-1.jpg', width: 1200, height: 900, alt: 'The WINFO hackathon team in black shirts posing in front of gold WINFO balloons' },
    { src: '/images/hackathon/ballroom-wide.jpg', width: 1600, height: 1067, alt: 'A wide view of the ballroom full of hackathon teams' },
    { src: '/images/hackathon-3.jpg', width: 1200, height: 800, alt: 'Two Costco IT Recruiting representatives at their sponsor table' },
    { src: '/images/hackathon/mentor-visit.jpg', width: 1600, height: 2400, alt: 'A mentor stops by a table to check in with participants' },
  ],

  /* ---------- Previous Winners ---------- */
  winnersHeading: '14th hackathon winners',
  winners: [
    /* Source: iSchool news, January 2026. NewFuse photo matched by elimination; confirm with the board.
       Image filenames do not match categories (see commit e1d655e). projectDescription is optional and hidden when empty. */
    { category: 'Best Product', image: '/images/best-impact-winner.jpg', projectName: 'NewFuse', projectDescription: '' },
    { category: 'Best Impact', image: '/images/best-design-winner.jpg', projectName: 'Canario', projectDescription: '' },
    { category: 'Best Design', image: '/images/best-overall-winner.jpg', projectName: 'Fantasy WNBA app', projectDescription: '' },
    { category: 'Best Implementation', image: '/images/best-coding-winner.jpg', projectName: 'Nudge', projectDescription: '' },
  ],

  /* ---------- 6 · Official hackathon website ---------- */
  websiteHeading: 'looking for the details?',
  websiteBody: 'Schedules, prize tracks, rules and FAQs for this year\u2019s hackathon live on the official hackathon website.',

  /* ---------- Sponsor the hackathon ---------- */
  sponsorHeading: 'support our hackathon',
  sponsorBody:
    "By sponsoring the **WINFO Hackathon**, you\u2019ll gain **exclusive access** to inspire the next generation of tech talent. Mentor passionate students, judge groundbreaking projects, and spotlight your brand on both digital and in-person stages.",
  sponsorBenefits: [
    {
      title: 'Targeted recruitment access',
      text: 'Connect with top talent in Informatics, Computer Science, UX Design, and Data Science through real-time collaboration and mentorship.',
    },
    {
      title: 'Brand visibility',
      text: 'Gain exposure through social media promotion, on-site tabling, branded swag distribution, and logo placement on all marketing materials.',
    },
    {
      title: 'Early engagement in innovation',
      text: "Evaluate and guide student projects aligned with emerging technologies, tools, or themes tied to your company\u2019s mission.",
    },
  ],
  sponsorCtaLabel: 'email us!',
  sponsorCtaLink: 'mailto:winfo@uw.edu',

  /* ---------- Past Sponsors ---------- */
  pastSponsorsHeading: 'past sponsors',
  /* dark: true = white-only logo, shown on a charcoal tile so it stays visible */
  pastSponsors: [
    { name: 'Accenture',              logo: logoAccenture },
    { name: 'Adobe',                  logo: logoAdobe },
    { name: 'Alaska Airlines',        logo: logoAlaska, dark: true },
    { name: 'Amazon Catalyst',        logo: logoAmazon, dark: true },
    { name: 'ASUW',                   logo: '' },
    { name: 'AT&T',                   logo: '' },
    { name: 'Avanade',                logo: logoAvanade },
    { name: 'Best Buy',               logo: logoBestBuy, dark: true },
    { name: 'Deloitte',               logo: logoDeloitte, dark: true },
    { name: 'The Walt Disney Company', logo: logoDisney },
    { name: 'ExtraHop',               logo: logoExtrahop, dark: true },
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
    { name: 'Okta',                   logo: logoOkta, dark: true },
    { name: 'Oracle',                 logo: logoOracle },
    { name: 'PwC',                    logo: '' },
    { name: 'Sage Bionetworks',       logo: logoSageBio },
    { name: 'Student Activities Office', logo: '' },
    { name: 'Smartsheet',             logo: logoSmartsheet },
    { name: 'Ticketmaster',           logo: logoTicketmaster, dark: true },
    { name: 'TUNE',                   logo: logoTUNE },
    { name: 'UW Alumni Association',  logo: logoUW },
    { name: 'Visa',                   logo: logoVisa },
    { name: 'Wells Fargo',            logo: logoWellsFargo },
    { name: 'West Monroe',            logo: logoWestMonroe },
  ],

};
