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
            <div className="capability-icon">
              <span role="img" aria-label="gear" style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 8px #3b82f633)' }}>⚙️</span>
            </div>
            <div className="capability-content">
              <h4 className="capability-title">C Type Duplex Mechanical Power Press</h4>
              <p className="capability-desc">High-precision pressing for complex metal forming operations with advanced control systems ensuring consistent quality across production runs.</p>
            </div>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <span role="img" aria-label="scissors" style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 8px #3b82f633)' }}>✂️</span>
            </div>
            <div className="capability-content">
              <h4 className="capability-title">Mechanical Shearing Machine</h4>
              <p className="capability-desc">Precise cutting capability for various sheet thicknesses with remarkable accuracy, handling diverse materials for custom component requirements.</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default Capabilities;
