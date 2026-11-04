/* ===================================================================
   Home page data — matches Figma screenshots
   =================================================================== */

/* ---------- Hero ---------- */
export const heroData = {
  /* Headline: each array item is its own line on wide screens */
  heading: ['Empowering Women', 'in Technology.'],
  slogan: 'Where our community meets to build, learn, and connect.',
  tagline: 'Women in Informatics (WINFO) is a student-led community at the University of Washington Information School.',
};

/* ---------- What is Informatics (definition + officer quotes) ---------- */
export const informaticsHeading = {
  title: 'what is informatics?',
};

/* Definition from the WINFO intro presentation (WINFO/INFO slides, 2026) */
export const informaticsDefinition = [
  'Informatics is the **study, design, and development of information technology for the good of people, organizations, and society.** It\u2019s interested in the relationship between information, technology, and people.',
  'Informatics students aim to create equitable information technologies and systems by addressing challenges in people\u2019s daily lives, guided by the idea that **technology has value when it genuinely serves people.**',
];

/* Areas Informatics spans (from the intro presentation).
   Tap or hover a bubble on the home page to show its description. */
export const informaticsAreas = [
  { name: 'Human-Computer Interaction', desc: 'Designing technology around the people who use it: research, prototyping, and usability testing.' },
  { name: 'Data Science', desc: 'Collecting, cleaning, and analyzing data to find patterns and answer real questions.' },
  { name: 'Information Assurance & Cybersecurity', desc: 'Keeping systems and information safe, private, and trustworthy.' },
  { name: 'Software Development', desc: 'Building apps, websites, and tools, from planning through code and testing.' },
  { name: 'Information Architecture', desc: 'Organizing and labeling information so people can find what they need.' },
  { name: 'Information Management', desc: 'Planning how organizations store, share, and govern their information and systems.' },
  { name: 'Information & Society', desc: 'How technology shapes communities, equity, policy, and ethics.' },
  { name: 'Health & Well-Being', desc: 'Using information and technology to improve health care and everyday well-being.' },
];

export const informaticsQuotes = [
  {
    quote: '"It\'s about asking thoughtful questions, noticing everyday frustrations, and creating solutions that feel intuitive and human."',
    name: 'Mia McDunnah',
    role: 'Past Diversity Efforts Director',
  },
  {
    quote: '"Informatics is all about leveraging information to build technology that works for real people."',
    name: 'Renee Singh',
    role: 'Past Hackathon Director',
  },
];

/* ---------- Our Community (scrolling photo strip) ----------
   Real WINFO moments. width/height are each file's pixel size.
   `alt` describes the photo for screen readers. */
export const communityHeading = 'our community';
export const communityPhotos = [
  { src: '/images/events/event-06.jpg', width: 1452, height: 1089, alt: 'Four students holding decorated cookies beside gingerbread houses on a table' },
  { src: '/images/hackathon-2.jpg', width: 1200, height: 800, alt: 'A full ballroom of students working on laptops at round tables, decorated with white balloons' },
  { src: '/images/events/event-05.jpg', width: 765, height: 808, alt: 'Students sitting on a blanket on the grass painting on paper plates' },
  { src: '/images/winfo-community-3.jpg', width: 1200, height: 800, alt: 'WINFO volunteers smiling behind a Women in Informatics table with laptops' },
  { src: '/images/events/event-11.jpg', width: 1920, height: 1094, alt: 'Students working on vision boards with magazine cutouts at long classroom tables' },
  { src: '/images/hackathon-4.jpg', width: 1200, height: 800, alt: 'A mentor talks with a team of participants during the hackathon' },
  { src: '/images/events/event-02.jpg', width: 1920, height: 1280, alt: 'A panel of speakers seated at a table in front of a presentation screen' },
  { src: '/images/hackathon-5.jpg', width: 1200, height: 800, alt: 'WINFO officers posing in front of gold WINFO balloons' },
  { src: '/images/events/event-08.jpg', width: 1920, height: 1280, alt: 'Two people smiling in front of a Decoding with WINFO title slide' },
  { src: '/images/winfo-community-2.jpg', width: 1200, height: 900, alt: 'A WINFO officer with a microphone presenting judging criteria to a room of students' },
];
