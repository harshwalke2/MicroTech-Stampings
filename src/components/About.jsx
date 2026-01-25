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
              Incorporated in 2025 and located in Pune, India, Microtech Stampings specializes in manufacturing high-precision, customized press metal components designed to meet the exacting demands of modern industries.
            </p>
          </div>
          <div className="about-image">
            <img src="https://microtechstampings.lovable.app/assets/product-camlock-BI7DjqIE.jpg" alt="Manufacturing Facility" />
          </div>
        </div>

        <div className="vision-mission">
          <div className="vision-card">
            <h4 className="card-title">Our Vision</h4>
            <p className="card-description">
              To be a globally trusted partner in precision metal press components, driving innovation, reliability, and engineering excellence across industries worldwide.
            </p>
            <div className="card-image">
              <img src="https://microtechstampings.lovable.app/assets/product-sheetmetal-80owJ07a.jpg" alt="Our Vision" />
            </div>
          </div>

          <div className="mission-card">
            <h4 className="card-title">Our Mission</h4>
            <ul className="mission-list">
              <li>Manufacture high-quality customized components with unwavering precision</li>
              <li>Embrace advanced technologies for efficiency and cost-effectiveness</li>
              <li>Deliver on-time, consistent performance for lasting partnerships</li>
              <li>Uphold sustainable practices and strive for continuous improvement</li>
            </ul>
            <div className="card-image">
              <img src="https://microtechstampings.lovable.app/assets/product-camlock-BI7DjqIE.jpg" alt="Our Mission" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
