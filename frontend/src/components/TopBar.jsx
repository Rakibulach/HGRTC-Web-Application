import { FaRegClock, FaRegEnvelope } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span><FaRegClock /> Sunday to Thursday 09:00 – 17:00</span>
        <span><FaRegEnvelope /> info@hgrtc.com</span>
      </div>
      <div className="topbar-right">
        <a href="#"><FaFacebookF /> Facebook</a>
        <a href="#"><FaInstagram /> Instagram</a>
        <a href="#"><FaXTwitter /> Twitter</a>
        <a href="#"><FaYoutube /> Youtube</a>
      </div>
    </div>
  );
}

export default TopBar;