import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaPhone,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div>
          <h2>Stay Informed with Our Research!</h2>
          <p>
            Be the first to know about our latest discoveries &amp; training
            updates.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-columns">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/training">Training</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/training">Professional Training</Link>
            </li>
            <li>
              <Link to="/diagnostics">Molecular Diagnostics</Link>
            </li>
            <li>
              <Link to="/contact">Genetic Counseling</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <FaLocationDot /> Green Super Market, Farmgate, Dhaka-1215
            </li>
            <li>
              <FaPhone /> +880 1817 643833
            </li>
          </ul>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <Link to="/" className="footer-brand">
          <img src={logo} alt="HGRTC logo" />
          <div className="footer-brand-text">
            <span className="footer-brand-title">
              Human Genetics Research &amp; Training Center Ltd.
            </span>
            <span className="footer-brand-tagline">
              A blended hub for quality Education, Research &amp; Training.
            </span>
          </div>
        </Link>
        <p>Copyright © {year} HGRTC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
