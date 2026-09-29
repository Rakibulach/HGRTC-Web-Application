import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import logo from '../assets/images/logo.png';
import LoginModal from './LoginModal';
import './Navbar.css';

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Training", path: "/training" },
  { label: "Diagnostics", path: "/diagnostics" },
  { label: "Events", path: "/events" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

function WaveText({ text, baseDelay = 0 }) {
  const words = text.split(" ");
  let letterCount = 0;
  return (
    <>
      {words.map((word, wi) => (
        <span className="wave-word" key={wi}>
          {word.split("").map((char, ci) => {
            const delay = baseDelay + letterCount * 0.035;
            letterCount++;
            return (
              <span className="wave-letter" style={{ animationDelay: `${delay}s` }} key={ci}>
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}

function Navbar({ transparent = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <nav className={`navbar ${transparent ? "navbar-transparent" : ""}`}>
        <Link to="/" className="nav-logo">
          <img src={logo} alt="HGRTC logo" className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="nav-logo-title">
              <WaveText text="Human Genetics Research & Training Center Ltd." baseDelay={0.5} />
            </span>
            <span className="nav-logo-tagline">
              <WaveText text="A blended hub for quality Education, Research & Training." baseDelay={0.5} />
            </span>
          </div>
        </Link>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>

        <div className="nav-links-box">
          <ul className={`nav-links ${isOpen ? "nav-links-open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {transparent ? (
          <div className="nav-actions-overlay">
            <button className="overlay-login" onClick={() => setLoginOpen(true)}>Login</button>
            <button className="overlay-icon-btn" onClick={() => setLoginOpen(true)}><FaArrowRight /></button>
          </div>
        ) : (
          <div className="nav-actions">
            <button className="btn-ghost" onClick={() => setLoginOpen(true)}>Login</button>
            <button className="btn-primary">Explore Training</button>
          </div>
        )}
      </nav>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default Navbar;