import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Data Scientist';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const tags = ['C++', 'Java', 'C', 'Python', 'HTML', 'CSS', 'JavaScript'];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="gradient-text hero-name" style={{ marginBottom: '1rem', fontSize: '4.5rem' }}>
            Abhinav Rana
          </h1>
          <h2 className="typing-container" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>
            {text}<span className="cursor">|</span>
          </h2>
          <p className="hero-description" style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            Computer Science student at Lovely Professional University with a strong interest in technology and data-driven solutions.
          </p>
          
          <div className="hero-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {tags.map((tag, i) => (
              <span key={i} className="hero-tag">{tag}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/resume.jpg" target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-btn">View CV</a>
            <a href="/resume.jpg" download className="btn btn-outline hero-btn">Download CV</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-img-container">
            <img src="/profile.jpg" alt="Abhinav Profile" className="profile-img" />
            <div className="profile-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
