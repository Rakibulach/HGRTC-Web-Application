import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-image"></div>
        <div className="hero-bg-image"></div>
        <div className="hero-bg-image"></div>
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Advancing Human Genetics, Genomics & Biomedical Research</h1>
        <p>A modern platform connecting education, research, training and scientific innovation.</p>
        <div className="hero-actions">
          <button className="btn-primary">Explore Training</button>
          <button className="btn-secondary">Discover Our Research</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;