import { Link } from 'react-router-dom';
import avatarImg from '../assets/images/consultant.png';
import './ConsultBar.css';

function ConsultBar() {
  return (
    <section className="consult-bar">
      <Link to="/services" className="consult-btn">All Services</Link>

      <p className="consult-text">
        Consectetur adipiscing elit sed do eiusmod tempor
        inciet dolore magna aliqua dolore magna aliqua.
      </p>

      <div className="consult-contact">
        <img src={avatarImg} alt="Consultant" className="consult-avatar" />
        <div className="consult-contact-text">
          <span className="consult-label">Get Consultation</span>
          <span className="consult-phone">+880 1817 643833</span>
        </div>
      </div>
    </section>
  );
}

export default ConsultBar;