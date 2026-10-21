import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BlobBackground from './components/BlobBackground/BlobBackground';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import RouteMeta from './components/RouteMeta';

import Home from './pages/Home/Home';

/* All page stylesheets stay in the main CSS bundle, in the same order as
   before pages were code-split, so the cascade (and the look) is unchanged.
   Only each page's JavaScript is loaded on demand. Keep this list in sync
   when adding a page or a component with its own stylesheet. */
import './components/SectionWrapper/SectionWrapper.css';
import './components/Cards/FeatureCard.css';
import './pages/Home/Home.css';
import './components/FlagshipEvent/FlagshipEvent.css';
import './components/PhotoCarousel/PhotoCarousel.css';
import './components/EventCalendar/EventCalendar.css';
import './pages/Events/Events.css';
import './components/GalleryScroller/GalleryScroller.css';
import './pages/Hackathon/Hackathon.css';
import './pages/Podcast/Podcast.css';
import './pages/Officers/Officers.css';
import './pages/Membership/Membership.css';
import './pages/SupportUs/SupportUs.css';
import './pages/Merch/Merch.css';
import './pages/Alumni/Alumni.css';
import './pages/NotFound/NotFound.css';
import './components/AnnouncementBanner/AnnouncementBanner.css';
import './styles/global.css';

const RELOAD_FLAG = 'winfo-chunk-reload';

/* Lazy page that survives a deploy: if an old chunk file is gone, reload once
   to pick up the new build instead of leaving a blank page. */
function lazyPage(load) {
  return lazy(() =>
    load()
      .then((mod) => {
        try { sessionStorage.removeItem(RELOAD_FLAG); } catch { /* storage blocked */ }
        return mod;
      })
      .catch((err) => {
        let reloaded = true;
        try {
          reloaded = sessionStorage.getItem(RELOAD_FLAG) === '1';
          if (!reloaded) sessionStorage.setItem(RELOAD_FLAG, '1');
        } catch { /* storage blocked: don't risk a reload loop */ }
        if (!reloaded) {
          window.location.reload();
          return new Promise(() => {});
        }
        throw err;
      }),
  );
}

const loaders = {
  Events: () => import('./pages/Events/Events'),
  Hackathon: () => import('./pages/Hackathon/Hackathon'),
  Podcast: () => import('./pages/Podcast/Podcast'),
  Officers: () => import('./pages/Officers/Officers'),
  Membership: () => import('./pages/Membership/Membership'),
  SupportUs: () => import('./pages/SupportUs/SupportUs'),
  Merch: () => import('./pages/Merch/Merch'),
  Alumni: () => import('./pages/Alumni/Alumni'),
  NotFound: () => import('./pages/NotFound/NotFound'),
};

const Events = lazyPage(loaders.Events);
const Hackathon = lazyPage(loaders.Hackathon);
const Podcast = lazyPage(loaders.Podcast);
const Officers = lazyPage(loaders.Officers);
const Membership = lazyPage(loaders.Membership);
const SupportUs = lazyPage(loaders.SupportUs);
const Merch = lazyPage(loaders.Merch);
const Alumni = lazyPage(loaders.Alumni);
const NotFound = lazyPage(loaders.NotFound);

/* Fetch the other pages once the browser is idle so clicking a link is instant */
function usePrefetchPages() {
  useEffect(() => {
    const run = () => Object.values(loaders).forEach((load) => load().catch(() => {}));
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(run, 2000);
    return () => clearTimeout(t);
  }, []);
}

export default function App() {
  usePrefetchPages();

  return (
    <div className="page-wrapper">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <RouteMeta />
      <BlobBackground />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/officers" element={<Officers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/support" element={<SupportUs />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
