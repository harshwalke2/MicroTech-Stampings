import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">MicrotechStampings</h3>
            <p className="footer-description">
              Forming the Future with precision metal press components since 2025.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#values">Values</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Our Products</h4>
            <ul className="footer-links">
              <li><a href="#products">Metal Cam Locks</a></li>
              <li><a href="#products">Sheet Metal Components</a></li>
              <li><a href="#products">Precision Stampings</a></li>
              <li><a href="#products">Custom Metal Parts</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <a href="tel:9404123171">9404123171</a>
              </li>
              <li>
                <a href="mailto:microstampings@gmail.com">microstampings@gmail.com</a>
              </li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Microtech Stampings. All rights reserved. | Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
