import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlobBackground from './components/BlobBackground/BlobBackground';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Board from './pages/Board/Board';
import Contact from './pages/Contact/Contact';

/**
 * Root application component with routing, shared layout (Navbar + Footer),
 * and decorative blob background.
 */
function App() {
  return (
    <>
      <BlobBackground />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/board" element={<Board />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
