import React from 'react';
import '../styles/Products.css';
import { products } from '../data/productsData';

function Products() {
  const handleGetQuote = (productTitle) => {
    const element = document.getElementById('contact');
    if (element) {
      // Set the product in the form
      const requirementsField = document.querySelector('textarea[name="requirements"]');
      if (requirementsField) {
        requirementsField.value = `Product Inquiry: ${productTitle}\n\nPlease provide a quote for: `;
        requirementsField.focus();
      }
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactScroll = () => {
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
          <h3 className="section-subtitle">Premium Precision Metal Components for Every Industry</h3>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image-wrapper">
                <img src={product.image} alt={product.title} />
                <div className="card-overlay">
                  <button className="card-btn" onClick={handleContactScroll}>
                    Learn More
                  </button>
                </div>
              </div>
              <div className="card-content">
                <span className="card-category">{product.category}</span>
                <h4 className="card-title">{product.title}</h4>
                <p className="card-description">{product.description}</p>

                {(product.stampingTypes || product.materials) && (
                  <div className="features-two-column">
                    {product.stampingTypes && (
                      <div className="card-features">
                        <h5 className="feature-header">Features</h5>
                        <ul className="feature-list">
                          {product.stampingTypes.map((type, idx) => (
                            <li key={idx}>{type}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.materials && (
                      <div className="card-features">
                        <h5 className="feature-header">Materials</h5>
                        <ul className="feature-list">
                          {product.materials.map((material, idx) => (
                            <li key={idx}>{material}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {product.capabilities && (
                  <div className="card-features">
                    <h5 className="feature-header">Capabilities</h5>
                    <ul className="feature-list">
                      {product.capabilities.map((capability, idx) => (
                        <li key={idx}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="btn btn-secondary" onClick={() => handleGetQuote(product.title)}>
                  <span>Get Quote</span>
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
