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
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Forming the Future</h1>
          <p className="hero-subtitle">High-precision, customized press metal components designed to meet the exacting demands of modern industries. Accuracy, durability, and cost efficiency at every stage.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleExploreProducts}>Explore Products</button>
            <button className="btn btn-secondary" onClick={handleRequestQuote}>Request Quote</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Ton Capacity</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality Checked</span>
            </div>
            <div className="stat">
              <span className="stat-number">Global</span>
              <span className="stat-label">Market Reach</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://microtechstampings.lovable.app/assets/product-camlock-BI7DjqIE.jpg" alt="Industrial Manufacturing" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
