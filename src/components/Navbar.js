import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar bg-glass">
      <div className="logo">
        ABHINAV<span className="text-accent">.</span>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links-desktop">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#education" className="nav-link">Education</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#certificates" className="nav-link">Certificates</a></li>
        <li><a href="#achievements" className="nav-link">Achievements</a></li>
        <li><a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', marginLeft: '1rem' }}>Let's Talk</a></li>
      </ul>

      {/* Mobile Toggle */}
      <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      
      <div className={`mobile-menu-content ${isOpen ? 'active' : ''}`}>
        <ul className="nav-links-mobile">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
          <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
          <li><a href="#contact" className="btn btn-primary" onClick={closeMenu} style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>Let's Talk</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
