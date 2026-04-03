import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <h2 style={{ marginBottom: '3rem' }}>My <span className="text-accent">Resume</span></h2>
        
        <div className="resume-container bg-glass" style={{
          padding: '4rem 2rem',
          borderRadius: '24px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          border: '1px solid var(--border)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📄</div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interested in my work?</h3>
          <p style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Download my full resume to see my detailed experience, 
            skills, and academic achievements.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="/resume.jpg" className="btn btn-primary" download style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Download CV
            </a>
            <a href="/resume.jpg" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              View Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
