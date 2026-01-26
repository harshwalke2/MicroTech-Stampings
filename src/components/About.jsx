import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ABOUT US</h2>
          <h3 className="section-subtitle">Precision Engineering Excellence</h3>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Incorporated in 2025 and located in Pune, India, Microtech Stampings specializes in manufacturing high-precision, customized press metal components designed to meet the exacting demands of modern industries. With state-of-the-art technology and a commitment to excellence, we deliver solutions that drive innovation across diverse industries worldwide.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <span style={{
                display: 'inline-block',
                background: '#eaf1ff',
                color: '#2966e3',
                padding: '0.5rem 1.2rem',
                borderRadius: '12px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                fontSize: '1.1rem',
                marginBottom: '0.7rem',
              }}>
                MANUFACTURING UNIT:
              </span>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0a1026', margin: '0.7rem 0' }}>
                Pune, Maharashtra, India
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Pune,+Maharashtra,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="get-direction-btn"
              >
                Get Direction
              </a>
            </div>
          </div>
        </div>

        <div className="vision-mission">
          <div className="vision-card">
            <div className="card-icon modern-emoji" style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              color: '#fff',
              borderRadius: '50%',
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              boxShadow: '0 4px 16px rgba(59,130,246,0.12)',
              margin: '0 auto 20px auto',
            }}>
              <span role="img" aria-label="target" style={{fontSize: '2.2rem'}}>🎯</span>
            </div>
            <h4 className="card-title">Our Vision</h4>
            <p className="card-description">
              To be a globally trusted partner in precision metal press components, driving innovation, reliability, and engineering excellence across industries worldwide.
            </p>
          </div>

          <div className="mission-card">
            <div className="card-icon modern-emoji" style={{
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              color: '#fff',
              borderRadius: '50%',
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              boxShadow: '0 4px 16px rgba(16,185,129,0.12)',
              margin: '0 auto 20px auto',
            }}>
              <span role="img" aria-label="lightning" style={{fontSize: '2.2rem'}}>💡</span>
            </div>
            <h4 className="card-title">Our Mission</h4>
            <ul className="mission-list">
              <li>Manufacture high-quality customized components with unwavering precision</li>
              <li>Embrace advanced technologies for efficiency and cost-effectiveness</li>
              <li>Deliver on-time, consistent performance for lasting partnerships</li>
              <li>Uphold sustainable practices and strive for continuous improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
