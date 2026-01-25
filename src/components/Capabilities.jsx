import React from 'react';
import '../styles/Capabilities.css';

function Capabilities() {
  return (
    <section id="capabilities" className="capabilities">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR CAPABILITIES</h2>
          <h3 className="section-subtitle">State-of-the-art machinery enabling precision manufacturing at scale</h3>
        </div>

        <div className="capabilities-grid">
          <div className="capability-card">
            <div className="capability-image">
              <img src="https://microtechstampings.lovable.app/assets/product-sheetmetal-80owJ07a.jpg" alt="C Type Duplex Mechanical Power Press" />
            </div>
            <div className="capability-content">
              <h4 className="capability-title">C Type Duplex Mechanical Power Press</h4>
              <p className="capability-desc">High-precision pressing for complex metal forming operations</p>
              <div className="machine-specs">
                <div className="spec-item">
                  <span className="spec-label">Capacity</span>
                  <span className="spec-value">30 Ton</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Units Available</span>
                  <span className="spec-value">2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="capability-card">
            <div className="capability-image">
              <img src="https://microtechstampings.lovable.app/assets/product-camlock-BI7DjqIE.jpg" alt="Mechanical Shearing Machine" />
            </div>
            <div className="capability-content">
              <h4 className="capability-title">Mechanical Shearing Machine</h4>
              <p className="capability-desc">Precise cutting capability for various sheet thicknesses</p>
              <div className="machine-specs">
                <div className="spec-item">
                  <span className="spec-label">Capacity</span>
                  <span className="spec-value">1250 x 2mm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Units Available</span>
                  <span className="spec-value">2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="capability-card">
            <div className="capability-image">
              <img src="https://microtechstampings.lovable.app/assets/product-sheetmetal-80owJ07a.jpg" alt="Air Compressor" />
            </div>
            <div className="capability-content">
              <h4 className="capability-title">Air Compressor</h4>
              <p className="capability-desc">Reliable pneumatic power for automated operations</p>
              <div className="machine-specs">
                <div className="spec-item">
                  <span className="spec-label">Capacity</span>
                  <span className="spec-value">2 HP</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Units Available</span>
                  <span className="spec-value">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="manufacturing-info">
          <div className="info-label">Manufacturing Unit:</div>
          <div className="info-value">Pune, Maharashtra, India</div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
