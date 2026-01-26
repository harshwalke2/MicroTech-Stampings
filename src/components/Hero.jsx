import React from 'react';
import '../styles/Hero.css';

function Hero() {
  const handleExploreProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestQuote = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">Welcome to Innovation</div>
            <h1 className="hero-title">Forming the Future</h1>
            <p className="hero-subtitle">High-precision, customized press metal components designed to meet the exacting demands of modern industries. Accuracy, durability, and cost efficiency at every stage.</p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleExploreProducts}>
                <span className="btn-icon">→</span>
                Explore Products
              </button>
              <button className="btn btn-secondary" onClick={handleRequestQuote}>
                <span className="btn-icon">✉</span>
                Request Quote
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">⚙️</div>
                <div className="stat-content">
                  <span className="stat-number">30</span>
                  <span className="stat-label">Ton Capacity</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">✓</div>
                <div className="stat-content">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Quality Checked</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">🌍</div>
                <div className="stat-content">
                  <span className="stat-number">Global</span>
                  <span className="stat-label">Market Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
