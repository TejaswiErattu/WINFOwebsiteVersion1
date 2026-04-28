import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BlobBackground from './components/BlobBackground/BlobBackground';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Hackathon from './pages/Hackathon/Hackathon';
import Podcast from './pages/Podcast/Podcast';
import Officers from './pages/Officers/Officers';
import Membership from './pages/Membership/Membership';
import SupportUs from './pages/SupportUs/SupportUs';
import Merch from './pages/Merch/Merch';

import './styles/global.css';

export default function App() {
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <BlobBackground />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/support" element={<SupportUs />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
