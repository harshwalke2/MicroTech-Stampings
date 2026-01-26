import React, { useState } from 'react';
import '../styles/Navbar.css';
import logoImg from '../assets/photo2.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoImg} alt="MicrotechStampings Logo" className="logo-img" />
          <span className="logo-text">MicrotechStampings</span>
        </div>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#products" onClick={handleNavClick}>Products</a></li>
          <li><a href="#capabilities" onClick={handleNavClick}>Capabilities</a></li>
          <li><a href="#values" onClick={handleNavClick}>Values</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
