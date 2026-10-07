/* ===================================================================
   Hackathon page data — matches Figma HiFi screenshots
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

  /* ---------- Gallery marquee (top of page) ----------
     Edit captions here; `alt` is read by screen readers.
     width/height are the file's pixel size (keeps the strip from shifting
     while lazy images load). The first `galleryEagerCount` load immediately. */
  galleryEagerCount: 3,
  gallery: [
    { src: '/images/hackathon-participants.jpg', width: 1920, height: 1280, alt: 'Hackathon participants smiling at their table with laptops open' },
    { src: '/images/hackathon-2.jpg', width: 1200, height: 800, alt: 'A full ballroom of students working on laptops at round tables, decorated with white balloons' },
    { src: '/images/hackathon-4.jpg', width: 1200, height: 800, alt: 'A mentor talks with a team of participants during the hackathon' },
    { src: '/images/hackathon-food.jpg', width: 1920, height: 1280, alt: 'WINFO volunteers serving food to participants' },
    { src: '/images/hackathon-3.jpg', width: 1200, height: 800, alt: 'Two Costco IT Recruiting representatives at their sponsor table' },
    { src: '/images/hackathon-1.jpg', width: 1200, height: 900, alt: 'The WINFO hackathon team in black shirts posing in front of gold WINFO balloons' },
    { src: '/images/hackathon-5.jpg', width: 1200, height: 800, alt: 'WINFO officers posing in front of gold WINFO balloons' },
  ],

  /* ---------- This Year's Hackathon (featured block) ----------
     Source: winfohackathon2027.web.app */
  currentHackathon: {
    edition: 15,
    theme: 'Peaks of Possibility, Paths of Progress',
    dates: 'January 30–31, 2027',
    location: 'HUB North Ballroom',
    locationDetail: 'University of Washington Husky Union Building',
    registrationUrl: REGISTRATION_URL_TBD,
    /* Poster — add the file to public/hackathon/ and set the path here,
       e.g. '/hackathon/poster-15.png'. Empty hides the poster column. */
    posterSrc: '',
    posterAlt: 'Poster for the 15th WINFO Hackathon, Peaks of Possibility, Paths of Progress',
    intro:
      'Women in Informatics is excited to invite you to our 15th Annual Hackathon, \u201cPeaks of Possibility\u201d. Join us for a day of developing technology solutions for social good and celebrating equity and inclusion in the technology field.',
    themeBody: [
      'Inspired by the winding trails, towering mountains, and the natural beauty of the Pacific Northwest, our theme reflects the journey of discovery in technology. We believe ingenuity emerges when participants venture beyond familiar ground and pursue bold, creative ideas.',
      'Just as every trail leads to a new perspective, every project has the potential to guide us toward bold new possibilities.',
    ],
  },

  /* ---------- Prize tracks (15th hackathon) ---------- */
  tracksHeading: 'prize tracks',
  tracks: [
    {
      name: 'Best Product',
      description: 'This team brings it all: functionality, appeal, innovation, a working demo, and most of all, the potential to scale.',
      focus: ['Venture potential', 'Solution originality', 'Scalability & marketability'],
    },
    {
      name: 'Best Impact',
      description: 'This team has built a product that has the greatest potential to influence lives and bring about a positive change to a community.',
      focus: ['Real-world impact', 'Public value', 'Accessibility & inclusion'],
    },
    {
      name: 'Best Design',
      description: 'This team crafts a compelling narrative of its own, complemented by breathtaking visuals and intuitive user experiences.',
      focus: ['Intentional design', 'Visual creativity', 'User Interface/User Experience'],
    },
    {
      name: 'Best Implementation',
      description: 'This team excels in technical execution, showing exceptional software development and coding skills.',
      focus: ['Code readability', 'Stability & functionality', 'Integrated components'],
    },
  ],

  /* ---------- Schedule (15th hackathon) ---------- */
  scheduleHeading: 'schedule',
  scheduleNote: 'The exact schedule will be sent out closer to the hackathon date.',
  schedule: [
    {
      day: 'Hackathon Day',
      date: 'Saturday, January 30, 2027',
      location: 'University of Washington HUB, North Ballroom',
      items: [
        { time: '8:30 – 9:30 AM', label: 'Participants & Sponsors Check-In' },
        { time: '9:30 – 9:50 AM', label: 'Opening Ceremonies' },
        { time: '9:50 AM', label: 'Hacking Begins!' },
        { time: '10:00 AM', label: 'Mentors Check-In' },
        { time: '10:50 – 11:50 AM', label: 'Mentoring Round 1' },
        { time: '11:50 AM', label: 'Lunch — Complimentary Catering by WINFO' },
        { time: '1:20 – 2:20 PM', label: 'Mentoring Round 2' },
        { time: '2:50 – 3:50 PM', label: 'Mentoring Round 3' },
        { time: '4:00 PM', label: 'Dinner — Complimentary Catering by WINFO' },
        { time: '5:00 – 6:00 PM', label: 'Mentoring Round 4' },
        { time: '7:00 PM', label: 'Final Project Submissions Due' },
        { time: '7:00 – 8:15 PM', label: 'Pitching' },
        { time: '8:15 – 9:00 PM', label: 'Closing Ceremonies' },
      ],
    },
    {
      day: 'Judging Day',
      date: 'Sunday, January 31, 2027',
      location: 'University of Washington Maple Great Room',
      items: [
        { time: '11:30 AM', label: 'Judges Sign-In' },
        { time: '12:00 PM', label: 'Finalists Sign-In' },
        { time: '12:30 PM', label: 'Welcome Presentation' },
        { time: '1:00 PM', label: 'Best Product Presentations' },
        { time: '1:30 PM', label: 'Best Impact Presentations' },
        { time: '2:00 PM', label: 'Best Implementation Presentations' },
        { time: '2:30 PM', label: 'Best Design Presentations' },
        { time: '3:30 PM', label: 'Buffer Time' },
        { time: '4:00 PM', label: 'Winners Announced' },
      ],
    },
  ],

  /* ---------- About blurbs ---------- */
  tagline: 'COLLABORATE. NETWORK. SOLVE.',
  aboutBody:
    "WINFO\u2019s Hackathon is an annual, 12-hour hackathon that brings together UW students with diverse skill sets to develop solutions that address a wide array of issues. Here at the iSchool, we believe in designing and developing technology-based solutions that positively impact the world.",
  challengeHeading: 'We challenge you...',
  challengeBody:
    'to venture into a new problem space, develop thoughtful solutions, and empower those around you to promote equity!',
  beginnerHeading: 'We are a beginner-friendly environment!',
  beginnerBody:
    "This is a great experience for college students to network, get hands-on experience coding or designing, and work in teams to problem solve. Whether you\u2019re new to tech, a seasoned hacker, or looking for more experience, WINFO\u2019s hackathon is for you!",

  /* ---------- Stats ---------- */
  statsHeading: 'at our latest hackathon\u2026',
  stats: [
    { number: '266', label: 'student participants' },
    { number: '67', label: 'projects submitted' },
    { number: '45', label: 'industry mentors' },
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

  /* ---------- FAQ ---------- */
  faqHeading: 'frequently asked questions',
  /* Source: winfohackathon2027.web.app (15th hackathon) */
  faqs: [
    {
      question: 'Is this hackathon right for me?',
      answer: 'This is a beginner-friendly, high-level hackathon built to welcome participants from all backgrounds with no required coding experience. If you\'re interested in tech, design, problem-solving, or simply want to try something new, this is a great space for you to explore your ideas and grow your skills.',
    },
    {
      question: 'Are there any prerequisites or required skills?',
      answer: 'While no prerequisites are required, it helps to have a team where each member brings something different — design, coding, presentation, or research. Curiosity is all you really need.',
    },
    {
      question: 'How big are the teams?',
      answer: 'Teams can include 3-4 individuals.',
    },
    {
      question: 'Do I need to have an idea before the event?',
      answer: 'Nope. Use the time before kickoff to brainstorm with your team. We ask that you don\'t start building until hacking officially begins, but prep those brainstorms early!',
    },
    {
      question: 'Can we network with the mentors or sponsors?',
      answer: 'Absolutely. Mentors and sponsors are excited to learn about your project, offer feedback, and share advice. It\'s a fantastic opportunity to build connections.',
    },
    {
      question: 'Can I join remotely?',
      answer: 'This year\'s hackathon is in-person only so we can foster community and collaboration.',
    },
    {
      question: 'What do I need to prepare?',
      answer: 'Bring your laptop, charger, water bottle, and creative energy. Optional: headphones, sketchbook, or anything that supports your workflow.',
    },
    {
      question: 'How does mentorship work?',
      answer: 'Throughout the hackathon, we\'ll host two shifts of industry professionals aligned with your track. Mentors stop by to share feedback and suggestions as you work. When you\'re ready, signal your team\'s flag and they\'ll dive in.',
    },
    {
      question: 'Does my solution have to be coded?',
      answer: 'No! This hackathon welcomes prototypes, slide decks, and concept demos just as much as polished builds. Show your idea in the format that best highlights its impact.',
    },
    {
      question: 'Do I need to have a team before the event?',
      answer: 'Not at all. You\'ll have chances to meet collaborators before and during the hackathon. Join our Team Formation event to connect with other participants.',
    },
    {
      question: 'Who can participate in the hackathon?',
      answer: 'Any current undergraduate UW student is welcome to participate. Come as you are — we can\'t wait to see what you build.',
    },
    {
      question: 'How long will the hackathon be?',
      answer: 'The hackathon runs a full day (roughly 8:30 AM – 8:30 PM), with judging and presentations for finalists happening the following afternoon from 12:00 PM – 4:00 PM.',
    },
    {
      question: 'Will there be training prior to the hackathon?',
      answer: 'Yes! We\'re hosting two workshops before the event, plus sharing guides on Figma and GitHub to help you get started. Watch our socials for details.',
    },
    {
      question: 'Will food be provided?',
      answer: 'Lunch and dinner are provided, with several dietary options available. Snacks and hydration stations will be stocked all day.',
    },
    {
      question: 'My question isn\'t here!',
      answer: 'Reach out to winfo@uw.edu — we\'re happy to help.',
    },
  ],

  /* ---------- Sponsor the hackathon ---------- */
  sponsorHeading: 'sponsor the hackathon!',
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

  /* ---------- Past Hackathons ---------- */
  pastHackathonsHeading: 'past hackathons',
  pastHackathons: [
    { theme: 'Depths of Discovery, Currents of Creation', year: '2026' },
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
