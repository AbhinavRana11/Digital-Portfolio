import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>
        ABHINAV<span className="text-accent">.</span>
      </div>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', fontSize: '0.8rem', flexWrap: 'wrap' }}>
        <li><a href="#hero" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#education" className="nav-link">Education</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#certificates" className="nav-link">Certificates</a></li>
        <li><a href="#achievements" className="nav-link">Achievements</a></li>
        <li><a href="#resume" className="nav-link">Resume</a></li>
      </ul>
      <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Let's Talk</a>
    </nav>
  );
};

export default Navbar;
