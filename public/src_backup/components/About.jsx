import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section reveal">
      <div className="container">
        <h2 className="gradient-text" style={{ marginBottom: '4rem' }}>About Me</h2>
        
        <div className="about-premium-grid stagger-reveal">
          {/* Left Column: Sidecards */}
          <div className="about-side-column">
            <div className="side-card bg-glass">
              <h3 className="side-card-title">Quick Facts</h3>
              <div className="fact-item">
                <div className="fact-icon">📍</div>
                <div className="fact-info">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">Punjab, India</span>
                </div>
              </div>
              <div className="fact-item">
                <div className="fact-icon">🎓</div>
                <div className="fact-info">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">Pursuing B.Tech in CSE</span>
                </div>
              </div>
              <div className="fact-item">
                <div className="fact-icon">💼</div>
                <div className="fact-info">
                  <span className="fact-label">Experience</span>
                  <span className="fact-value">Final Year Student</span>
                </div>
              </div>
            </div>

            <div className="side-card bg-glass" style={{ marginTop: '2rem' }}>
              <h3 className="side-card-title">When I'm Not Coding</h3>
              <div className="hobby-item">
                <span className="hobby-icon">💻</span>
                <span className="hobby-name">Surfing Web</span>
              </div>
              <div className="hobby-item">
                <span className="hobby-icon">📚</span>
                <span className="hobby-name">Reading</span>
              </div>
              <div className="hobby-item">
                <span className="hobby-icon">🎵</span>
                <span className="hobby-name">Music</span>
              </div>
            </div>

          </div>

          {/* Right Column: Main Content */}
          <div className="about-main-column">
            <div className="about-card bg-glass">
              <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>My Journey</h3>
              <p>
                Hello! I'm <strong className="text-accent">Abhinav Rana</strong>, a Computer Science student at Lovely Professional University with a strong interest in technology and data-driven solutions.
              </p>
              <p>
                My journey into programming started in my first year of college, where curiosity pushed me to explore different programming languages and development tools. Since then, I’ve been learning and building projects using <strong>React, Node.js, JavaScript, and modern cloud infrastructure</strong>.
              </p>
              <p>
                What drives me is the intersection of technology and creativity—finding that perfect balance between functional code and intuitive design. I'm constantly expanding my skills through hands-on projects and keeping up with emerging technologies.
              </p>
              
              <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center' }}>
                <a 
                  href="/resume.jpg" 
                  className="btn btn-primary" 
                  download 
                  style={{ 
                    padding: '1rem 2.5rem',
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 10px 30px rgba(0, 210, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>📄</span> 
                  Download Resume
                </a>
              </div>
            </div>

            <div className="about-card bg-glass" style={{ marginTop: '2rem' }}>
              <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>My Approach</h3>
              <p>
                I believe in creating technology that's not just functional but <strong className="text-accent">meaningful</strong>. Every line of code I write aims to solve real problems and deliver seamless user experiences.
              </p>
              <p>
                I am passionate about continuous learning, problem solving, and exploring new technologies, which motivates me to grow as a developer every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
