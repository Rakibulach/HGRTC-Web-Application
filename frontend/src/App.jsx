import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import TopBar from './components/TopBar';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Training from './pages/Training';
import Diagnostics from './pages/Diagnostics';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';

function App() {
  useEffect(() => {
    document.title = "HGRTC — Human Genetics Research & Training Center";
  }, []);

  return (
    <>
      {/* <TopBar />
      <Navbar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/training" element={<Training />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;