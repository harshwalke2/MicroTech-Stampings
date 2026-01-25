import React from 'react';
import '../styles/Products.css';

function Products() {
  const handleInquireNow = () => {
    const element = document.getElementById('contact');
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
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR PRODUCTS</h2>
          <h3 className="section-subtitle">Precision Metal Components</h3>
        </div>

        <div className="featured-product">
          <div className="product-image">
            <img src="https://microtechstampings.lovable.app/assets/product-camlock-BI7DjqIE.jpg" alt="Metal Cam Lock" />
          </div>
          <div className="product-details">
            <h4 className="product-title">Metal Cam Lock for Cold Room Panels</h4>
            <p className="product-description">
              Microtech's Camlock ensures airtight panel locking to prevent thermal leakage, maintaining uniform temperature inside cold rooms and reducing cooling costs.
            </p>
            <div className="product-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">High Quality, Strength and Durability</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Designed for Easy Installation & Disassembly</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Excellence Insulation Performance</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Precise Locking Mechanism</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Corrosion-resistant GI Material</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Strict Quality Checks</span>
              </div>
            </div>
            <button className="btn btn-primary" onClick={handleInquireNow}>Inquire Now</button>
          </div>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <div className="card-image-wrapper">
              <img src="https://microtechstampings.lovable.app/assets/product-sheetmetal-80owJ07a.jpg" alt="Sheet Metal Components" />
            </div>
            <div className="card-content">
              <h4 className="card-title">Sheet Metal Components</h4>
              <p className="card-description">
                Engineered with precision for consistent performance across diverse industrial applications.
              </p>
              <div className="features-list">
                <div className="feature-group">
                  <h5 className="feature-header">Stamping Types</h5>
                  <ul className="feature-list">
                    <li>Precision Metal Stampings</li>
                    <li>Custom Metal Stamping</li>
                    <li>Deep Drawn Stamping</li>
                    <li>Metal Forming & Bending</li>
                    <li>Small Metal Parts</li>
                  </ul>
                </div>
                <div className="feature-group">
                  <h5 className="feature-header">Materials</h5>
                  <ul className="feature-list">
                    <li>GI Metal Sheet</li>
                    <li>Stainless Steel</li>
                    <li>Aluminium</li>
                    <li>Copper</li>
                    <li>Carbon Steel</li>
                  </ul>
                </div>
              </div>
              <button className="btn btn-primary" onClick={handleRequestQuote}>Request Custom Quote</button>
            </div>
          </div>

          <div className="product-card">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1581092917318-cc6d42b8c900?w=400&h=300&fit=crop" alt="Manufacturing" />
            </div>
            <div className="card-content">
              <h5 className="card-header">MANUFACTURING</h5>
              <h4 className="card-title">Our Manufacturing Capabilities</h4>
              <p className="card-description">
                From cold room cam locks to custom sheet metal stampings, we deliver components that combine accuracy, durability, and cost efficiency.
              </p>
              <div className="capability-highlights">
                <div className="highlight-item">
                  <span className="highlight-label">Precision Accuracy</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">High-Speed Production</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Cost-Efficient Solutions</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Custom Design Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
