import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import RevealCard from '../components/RevealCard';
import services from '../data/services';
import './AllServices.css';

function AllServices() {
  return (
    <>
      <section className="allsvc-hero">
        <div className="allsvc-breadcrumb">
          <Link to="/">Home</Link> / All Services
        </div>
        <h1>All Services</h1>
        <p>Placeholder intro — real description HGRTC theke asle boshanor.</p>
      </section>

      <section className="allsvc-section">
        <div className="allsvc-grid">
          {services.map((s, i) => (
            <RevealCard key={s.id} index={i % 3}>
              <CourseCard image={s.image} icon={<s.Icon />} title={s.title} desc={s.desc} />
            </RevealCard>
          ))}
        </div>
      </section>
    </>
  );
}

export default AllServices;