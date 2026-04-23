/* ===================================================================
   Podcast page data — matches Figma screenshots
   =================================================================== */

export const podcastData = {
  /* ---------- Hero ---------- */
  title: 'our podcast',
  heroBody:
    'Decoding With WINFO is our signature podcast series, where we dive into the stories of diverse and innovative leaders making waves in the world of information, technology, and innovation.',
  heroBodySecondary:
    'From filming to final cut, each episode is thoughtfully crafted by our content committee to share authentic experiences for our community to connect with and enjoy.',
  ctaLabel: '▶ watch here!',
  ctaLink: 'https://www.youtube.com/@uw_winfo',
  heroImage: '/images/podcast-hero.jpg',
  heroImageAlt: 'Decoding with WINFO podcast hosts',

  /* ---------- Who / What / Why cards ---------- */
  infoCards: [
    {
      title: 'who',
      text: 'Each episode features a new guest with a fresh story to share, from iSchool professors to local business owners and industry professionals.',
      accent: 'purple',
    },
    {
      title: 'what',
      text: 'From inspiring career journeys to cutting-edge technology trends, we decode the powerful stories that matter most to our community.',
      accent: 'pink',
    },
    {
      title: 'why',
      text: 'Our goal is to uplift diverse voices in our community while uncovering valuable insights and inspiring our fellow students, members, and beyond.',
      accent: 'blue',
    },
  ],

  /* ---------- Guest CTA ---------- */
  guestCta: {
    text: 'interested in sharing your story?',
    btnLabel: 'become a podcast guest!',
    btnTo: '/contact',
  },

  /* ---------- Episodes heading ---------- */
  episodesHeading: 'watch our past episodes:',

  /* ---------- Episodes (most recent → oldest) ---------- */
  episodes: [
    {
      id: 11,
      tag: 'episode 11:',
      title: 'decoding tech policy with Ryan Calo',
      description:
        'We sit down with UW Law Professor Ryan Calo to explore the intersection of technology, law, and public policy — from AI regulation and privacy rights to the broader societal impact of emerging tech.',
      image: 'https://img.youtube.com/vi/iARUHJ41kvQ/hqdefault.jpg',
      imageAlt: 'Decoding Tech Policy with Ryan Calo thumbnail',
      guests: ['Ryan Calo'],
      watchUrl: 'https://www.youtube.com/watch?v=iARUHJ41kvQ',
    },
    {
      id: 10,
      tag: 'episode 10:',
      title: 'decoding the informatics major with Kathy Mitchell',
      description:
        'iSchool Advising Director Kathy Mitchell breaks down everything about the Informatics major — how to thrive in the program, the various specializations, career paths, and what it truly means to study information in the modern age.',
      image: 'https://img.youtube.com/vi/d7y5dvihDiA/hqdefault.jpg',
      imageAlt: 'Decoding the Informatics Major with Kathy Mitchell thumbnail',
      guests: ['Kathy Mitchell'],
      watchUrl: 'https://www.youtube.com/watch?v=d7y5dvihDiA',
    },
    {
      id: 9,
      tag: 'episode 9:',
      title: 'decoding student entrepreneurship with Angela Ly',
      description:
        'Student entrepreneur Angela Ly shares her experience building a startup while in college, the challenges and wins of navigating early-stage entrepreneurship, and her advice for students who want to turn ideas into reality.',
      image: 'https://img.youtube.com/vi/7NCBZC5uHDI/hqdefault.jpg',
      imageAlt: 'Decoding Student Entrepreneurship with Angela Ly thumbnail',
      guests: ['Angela Ly'],
      watchUrl: 'https://www.youtube.com/watch?v=7NCBZC5uHDI',
    },
    {
      id: 8,
      tag: 'episode 8:',
      title: 'decoding design & HCI',
      description:
        'In our exclusive LIVE podcast session, we sit down with iSchool professors Jason Yip and Spencer Williams alongside Oracle UX Designer Peter Corroon Jr. to discuss their unique experiences with design and human-computer interaction.',
      image: 'https://img.youtube.com/vi/A_NIC-xQVCY/hqdefault.jpg',
      imageAlt: 'Decoding Design & HCI episode thumbnail',
      guests: ['Jason Yip', 'Spencer Williams', 'Peter Corroon Jr.'],
      watchUrl: 'https://www.youtube.com/watch?v=A_NIC-xQVCY',
    },
    {
      id: 7,
      tag: 'episode 7:',
      title: "decoding success in tech: Roshni's SWE journey at Amazon",
      description:
        "Software engineer Roshni takes us through her path to landing a role at Amazon, what it's like working at one of the world's biggest tech companies, and her advice for students aiming to break into Big Tech.",
      image: 'https://img.youtube.com/vi/m7FANL3OC5E/hqdefault.jpg',
      imageAlt: "Decoding Roshni's SWE Journey at Amazon thumbnail",
      guests: ['Roshni'],
      watchUrl: 'https://www.youtube.com/watch?v=m7FANL3OC5E',
    },
    {
      id: 6,
      tag: 'episode 6:',
      title: 'decoding entrepreneurship and growth with Murat Akyuz',
      description:
        'Entrepreneur and executive Murat Akyuz shares the story behind building and scaling companies, the lessons learned from failure, and what sustainable growth really looks like in the tech ecosystem.',
      image: 'https://img.youtube.com/vi/WXrqDyk0e94/hqdefault.jpg',
      imageAlt: 'Decoding Entrepreneurship and Growth with Murat Akyuz thumbnail',
      guests: ['Murat Akyuz'],
      watchUrl: 'https://www.youtube.com/watch?v=WXrqDyk0e94',
    },
    {
      id: 5,
      tag: 'episode 5:',
      title: 'decoding informatics research with Amy Ko',
      description:
        'UW iSchool Professor Amy Ko walks us through her academic journey and research in HCI, accessibility, and computing education — and why diverse perspectives are essential to building technology that works for everyone.',
      image: 'https://img.youtube.com/vi/4FKDWIaDf-Q/hqdefault.jpg',
      imageAlt: 'Decoding Informatics Research with Amy Ko thumbnail',
      guests: ['Amy Ko'],
      watchUrl: 'https://www.youtube.com/watch?v=4FKDWIaDf-Q',
    },
    {
      id: 4,
      tag: 'episode 4:',
      title: 'decoding tech consulting internships with Kayla Tounalom',
      description:
        'Kayla Tounalom walks through her tech consulting internship experience, what makes consulting different from other tech career paths, and practical tips for students looking to land competitive consulting roles.',
      image: 'https://img.youtube.com/vi/wB8o8tLMXZM/hqdefault.jpg',
      imageAlt: 'Decoding Tech Consulting Internships with Kayla Tounalom thumbnail',
      guests: ['Kayla Tounalom'],
      watchUrl: 'https://www.youtube.com/watch?v=wB8o8tLMXZM',
    },
    {
      id: 3,
      tag: 'episode 3:',
      title: "decoding success in tech: Arielle, Chloe, & Tania's journey at AT&T",
      description:
        'Three professionals share their diverse paths at AT&T, highlighting what it means to thrive in telecommunications tech, the power of mentorship, and how to build community and belonging in a large corporation.',
      image: 'https://img.youtube.com/vi/IiERjQ5Xzck/hqdefault.jpg',
      imageAlt: "Decoding Arielle, Chloe & Tania's Journey at AT&T thumbnail",
      guests: ['Arielle', 'Chloe', 'Tania'],
      watchUrl: 'https://www.youtube.com/watch?v=IiERjQ5Xzck',
    },
    {
      id: 2,
      tag: 'episode 2:',
      title: 'decoding product management with Kateryna Tymofeieva',
      description:
        'Product manager Kateryna Tymofeieva demystifies the PM role — from how she transitioned into product management, what her day-to-day looks like, and the skills students should start building now to break into the field.',
      image: 'https://img.youtube.com/vi/JZElJk0HJMc/hqdefault.jpg',
      imageAlt: 'Decoding Product Management with Kateryna Tymofeieva thumbnail',
      guests: ['Kateryna Tymofeieva'],
      watchUrl: 'https://www.youtube.com/watch?v=JZElJk0HJMc',
    },
    {
      id: 1,
      tag: 'episode 1:',
      title: 'decoding informatics with Hannah Yi',
      description:
        'The very first episode of Decoding with WINFO! Hannah Yi shares her Informatics journey, how she carved out her career in tech, and the advice she wishes she had as a student just starting out.',
      image: 'https://img.youtube.com/vi/U6Dmh5N6E7c/hqdefault.jpg',
      imageAlt: 'Decoding Informatics with Hannah Yi thumbnail',
      guests: ['Hannah Yi'],
      watchUrl: 'https://www.youtube.com/watch?v=U6Dmh5N6E7c',
    },
  ],
};