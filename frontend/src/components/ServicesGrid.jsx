import RevealCard from './RevealCard';
import { FaDna, FaChalkboardUser, FaMicroscope, FaHandHoldingMedical } from 'react-icons/fa6';
import labPhoto from '../assets/images/lab-photo.png';
import './ServicesGrid.css';

const services = [
  { icon: <FaDna />, title: "Research", desc: "Human genetics, genomics and molecular biology research." },
  { icon: <FaChalkboardUser />, title: "Professional Training", desc: "Hands-on training in PCR, sequencing, karyotyping and more." },
  { icon: <FaMicroscope />, title: "Molecular Diagnostics", desc: "Diagnostic testing and molecular analysis services." },
  { icon: <FaHandHoldingMedical />, title: "Genetic Counseling", desc: "Guidance and counseling on genetic conditions and testing." },
];

function ServicesGrid() {
  return (
    <section className="services">
      <h2>What HGRTC Does</h2>
      <div className="services-layout">
        {services.map((item, i) => (
  <RevealCard key={item.title} index={i} className={`area-c${i + 1}`}>
    <div className="service-card">
      <span className="service-icon">{item.icon}</span>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  </RevealCard>
))}
        <div
          className="services-photo"
          style={{ backgroundImage: `url(${labPhoto})` }}
        ></div>
      </div>
    </section>
  );
}

export default ServicesGrid;