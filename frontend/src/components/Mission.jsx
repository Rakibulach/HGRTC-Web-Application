import { Link } from 'react-router-dom';
// import { FaCertificate, FaPeopleGroup } from 'react-icons/fa6';
import { FaDna, FaChalkboardUser } from 'react-icons/fa6';
import aboutPhoto from '../assets/images/about-photo.jpg';
import './Mission.css';

function Mission() {
  return (
    <section className="about">
      <div className="about-photo" style={{ backgroundImage: `url(${aboutPhoto})` }}></div>

     <div className="about-content">
  <h2>Bridging Medicine and Science in Human Genetics</h2>
  <p className="about-lead">
    HGRTC is actively involved in the advancement of human genetics and genomics,
    particularly in the context of human disease, through advanced research,
    education, and specialized training. Our scientists work on basic and
    translational research projects aimed at decoding the molecular causes of
    diseases such as cancer, diabetes, skin conditions, and heart disease — with
    most current work focused on more effective treatment and diagnostic approaches.
  </p>

  <div className="about-badges">
    <div className="about-badge">
      <span className="badge-icon"><FaDna /></span>
      <span className="badge-text">Translational<br />Research</span>
    </div>
    <div className="about-badge">
      <span className="badge-icon"><FaChalkboardUser /></span>
      <span className="badge-text">Specialized<br />Training</span>
    </div>
  </div>

  <hr className="about-divider" />

  <p className="about-extra">
    This unique blend of expertise lets scientists and clinicians address
    common-interest problems within a single institution — a rare model in
    Bangladesh, where medicine and science have traditionally stood apart.
    HGRTC believes the emerging field of genetics can serve as that unifying
    factor, and provides short-term technical training in cytogenetics and
    molecular biology, spanning both fundamental and clinical domains.
  </p>
  <Link to="/about" className="about-more">More About Us →</Link>
</div>
    </section>
  );
}

export default Mission;