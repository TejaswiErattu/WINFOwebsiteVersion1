import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Per-page <title>, description, canonical URL and social tags.
   Renders nothing. Descriptions reuse copy that already appears on each page. */
const SITE = 'WINFO — Women in Informatics';

const PAGES = {
  '/': {
    title: SITE,
    description:
      "Women in Informatics (WINFO) is a student-led organization at the University of Washington's Information School dedicated to uplifting women and underrepresented voices in technology.",
  },
  '/events': {
    title: 'Events',
    description:
      'WINFO brings students together through technical, professional, and community-focused events designed to make technology more welcoming and accessible.',
  },
  '/hackathon': {
    title: 'Hackathon',
    description:
      "WINFO's Hackathon is an annual, 12-hour hackathon that brings together UW students with diverse skill sets to develop solutions that address a wide array of issues.",
  },
  '/podcast': {
    title: 'Podcast',
    description:
      'Decoding With WINFO is our signature podcast series, where we dive into the stories of diverse and innovative leaders making waves in the world of information, technology, and innovation.',
  },
  '/officers': {
    title: 'Our Team',
    description:
      'Our team is a passionate group of students dedicated to fostering an inclusive, supportive, and empowering community for students in the field of information science.',
  },
  '/membership': {
    title: 'Membership',
    description:
      'Interested in joining our beautiful community of powerful individuals? Become an official member of WINFO!',
  },
  '/support': {
    title: 'Support Us',
    description:
      "Whether you're a student, sponsor, or mentor, we welcome you to join WINFO in building a more diverse and equitable future in tech.",
  },
  '/merch': {
    title: 'Merch',
    description: 'Rep your community — grab a cozy WINFO crewneck before they sell out.',
  },
  '/alumni': {
    title: 'Alumni',
    description:
      "Graduating shouldn't mean drifting away. The WINFO Alumni Board is a formal alumni network that keeps WINFO grads connected and involved after graduation.",
  },
};

function setMeta(selector, attr, key, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(selector.startsWith('link') ? 'href' : 'content', value);
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const page = PAGES[path];
    const title = page ? (path === '/' ? page.title : `${page.title} | ${SITE}`) : `Page not found | ${SITE}`;
    const description = (page || PAGES['/']).description;
    const url = window.location.origin + path;

    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('link[rel="canonical"]', 'rel', 'canonical', url);
    /* Unknown URLs render the "page not found" page: keep them out of search results */
    setMeta('meta[name="robots"]', 'name', 'robots', page ? 'index, follow' : 'noindex, follow');
  }, [pathname]);

  return null;
}
