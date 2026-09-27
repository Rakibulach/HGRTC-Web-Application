import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import testimonials from '../data/testimonials';
import './TestimonialsSection.css';

const SLOT_STEP = 484; // card width (460px) + gap (24px)

function TestimonialsSection() {
  const extended = [...testimonials, ...testimonials, ...testimonials];
  const [index, setIndex] = useState(testimonials.length); // majher copy theke shuru
  const [smooth, setSmooth] = useState(true);

  function next() {
    setIndex((i) => i + 1);
  }
  function prev() {
    setIndex((i) => i - 1);
  }

  // shesh/shuru-e pouchale, invisible-vabe majher copy-te "teleport" (infinite loop illusion)
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
          className="testi-track"
          style={{
            transform: `translateX(-${index * SLOT_STEP}px)`,
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
                <img src={t.photo} alt={t.name} className="testi-avatar" />
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