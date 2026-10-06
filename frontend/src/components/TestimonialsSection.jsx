import { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import testimonials from '../data/testimonials';
import './TestimonialsSection.css';

function TestimonialsSection() {
  const extended = [...testimonials, ...testimonials, ...testimonials];
  const [index, setIndex] = useState(testimonials.length);
  const [smooth, setSmooth] = useState(true);
  const trackRef = useRef(null);
  const [slotStep, setSlotStep] = useState(484);

  // Card-er actual width (+gap) measure kori browser theke — hardcoded number na,
  // tai CSS-e card choto/boro hole (mobile/desktop) JS nijei thik hoye jay
  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      if (!track || track.children.length < 2) return;
      const first = track.children[0].getBoundingClientRect();
      const second = track.children[1].getBoundingClientRect();
      setSlotStep(second.left - first.left);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  function next() {
    setIndex((i) => i + 1);
  }
  function prev() {
    setIndex((i) => i - 1);
  }

  useEffect(() => {
    if (index >= testimonials.length * 2 || index < testimonials.length) {
      const resetTimer = setTimeout(() => {
        setSmooth(false);
        setIndex(testimonials.length + (index % testimonials.length));
      }, 500);
      return () => clearTimeout(resetTimer);
    }
  }, [index]);

  useEffect(() => {
    if (!smooth) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSmooth(true));
      });
    }
  }, [smooth]);

  return (
    <section className="testimonials">
      <span className="testi-eyebrow">Testimonials</span>
      <h2>What Our Trainees Say</h2>

      <div className="testi-viewport">
        <div
          ref={trackRef}
          className="testi-track"
          style={{
            transform: `translateX(-${index * slotStep}px)`,
            transition: smooth ? "transform 0.5s ease" : "none",
          }}
        >
          {extended.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-card-top">
                <span className="testi-quote-icon"><FaQuoteLeft /></span>
                <p>{t.quote}</p>
              </div>
              <div className="testi-card-bottom">
                <img src={t.photo} alt={t.name} className="testi-avatar" loading="lazy" />
                <h3>{t.name}</h3>
                <span className="testi-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testi-nav">
        <button className="testi-arrow" onClick={prev}><FaArrowLeft /></button>
        <button className="testi-arrow" onClick={next}><FaArrowRight /></button>
      </div>
    </section>
  );
}

export default TestimonialsSection;