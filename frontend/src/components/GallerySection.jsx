import { useState, useEffect } from 'react';
import { FaMagnifyingGlass, FaXmark, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import './GallerySection.css';

const modules = import.meta.glob('../assets/images/gallery/*.{jpg,jpeg,png,webp}', { eager: true });
const galleryImages = Object.keys(modules)
  .sort()
  .map((key) => modules[key].default);

function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const extended = [...galleryImages, ...galleryImages]; // seamless loop-er jonno duibar

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeIndex]);

  function showPrev(e) {
    e.stopPropagation();
    setActiveIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  }
  function showNext(e) {
    e.stopPropagation();
    setActiveIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="gallery-section">
      <span className="gallery-eyebrow">Gallery</span>
      <h2>Training Moments</h2>
      <p className="gallery-subtitle">
        Placeholder subtitle — real intro text HGRTC theke asle boshanor.
      </p>

      <div className="gallery-viewport">
        <div className="gallery-track">
          {extended.map((src, i) => (
            <div
              className="gallery-item"
              key={i}
              onClick={() => setActiveIndex(i % galleryImages.length)}
            >
              <img src={src} alt={`Gallery photo ${(i % galleryImages.length) + 1}`} />
              <div className="gallery-hover">
                <FaMagnifyingGlass />
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="gallery-lightbox" onClick={() => setActiveIndex(null)}>
          <button className="lightbox-close" onClick={() => setActiveIndex(null)}><FaXmark /></button>
          <button className="lightbox-arrow lightbox-prev" onClick={showPrev}><FaArrowLeft /></button>
          <img
            src={galleryImages[activeIndex]}
            alt={`Gallery photo ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-arrow lightbox-next" onClick={showNext}><FaArrowRight /></button>
        </div>
      )}
    </section>
  );
}

export default GallerySection;