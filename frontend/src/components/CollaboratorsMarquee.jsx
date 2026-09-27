import { useState, useEffect } from 'react';
import collab1 from '../assets/images/collab-1.png';
import collab2 from '../assets/images/collab-2.png';
import collab3 from '../assets/images/collab-3.png';
import collab4 from '../assets/images/collab-4.png';
import collab5 from '../assets/images/collab-5.png';
import collab6 from '../assets/images/collab-4.png';
import collab7 from '../assets/images/collab-2.png';
import './CollaboratorsMarquee.css';

const logos = [collab1, collab2, collab3, collab4, collab5, collab6, collab7];

const SLOT_STEP = 200;     // slot width (160px) + gap (40px) — CSS-er shathe match thakte hobe
const CENTER_OFFSET = 2;   // 5ta slot dekhabe (0,1,2,3,4), majher slot = index 2

function CollaboratorsMarquee() {
  // shurute-sheshe extra copy rakhlam, jate wrap-around-e kokhono khali jaygay na dekhay
  const extended = [...logos, ...logos, ...logos];
  const [index, setIndex] = useState(logos.length); // 2nd (majher) copy theke shuru
  const [smooth, setSmooth] = useState(true);

  // Protি 2 second por ekta step
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2000);
    return () => clearInterval(timer); // component chole gele interval bondho
  }, []);

  // 3rd copy-te pouche gele, invisible-vabe shurur copy-te "teleport"
  useEffect(() => {
    if (index >= logos.length * 2) {
      const resetTimer = setTimeout(() => {
        setSmooth(false);
        setIndex(index - logos.length);
      }, 600); // slide animation-er shomoy shesh hoya porjonto wait
      return () => clearTimeout(resetTimer);
    }
  }, [index]);

  // transition abar "on" kori, kintu ekta paint hoya-r por (nahole ulta animation dekhabe)
  useEffect(() => {
    if (!smooth) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSmooth(true));
      });
    }
  }, [smooth]);

  return (
    <section className="collab-marquee">
      <h2>Our Collaborators</h2>
      <div className="marquee-viewport">
        <div
          className="marquee-track"
          style={{
            transform: `translateX(-${index * SLOT_STEP}px)`,
            transition: smooth ? "transform 0.6s ease" : "none",
          }}
        >
          {extended.map((src, i) => (
            <div className={`marquee-slot ${i === index + CENTER_OFFSET ? "active" : ""}`} key={i}>
              <img src={src} alt="Collaborator logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollaboratorsMarquee;