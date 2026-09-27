import { useEffect, useRef, useState } from 'react';
import './RevealCard.css';

function RevealCard({ children, index = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-card ${className} ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {children}
    </div>
  );
}

export default RevealCard;