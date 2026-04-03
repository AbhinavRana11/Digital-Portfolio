import React from 'react';

const Projects = () => {
  const projectList = [
    { 
      title: 'Food Ordering Website', 
      tag: 'Full-Stack',
      desc: 'A premium, responsive digital marketplace for food ordering with real-time tracking and seamless UI.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: { demo: '#', code: '#' }
    },
    { 
      title: 'Road Accident Analyzer', 
      tag: 'Featured',
      desc: 'A data-driven solution to analyze road accidents and identify patterns to improve safety.',
      tech: ['Python', 'Data Analysis'],
      links: { demo: '#', code: '#' }
    },
    { 
      title: 'Hospital Management System', 
      tag: 'Desktop App',
      desc: 'A comprehensive system for managing hospital operations, patient records, and billing.',
      tech: ['Java', 'Swing', 'MySQL'],
      links: { demo: '#', code: '#' }
    }
  ];

  return (
    <section id="projects" className="projects-section reveal">
      <div className="container">
        <h2 className="gradient-text" style={{ fontSize: '3rem' }}>Featured Projects</h2>
        <div className="projects-grid stagger-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
          {projectList.map((p, i) => (
            <div key={i} className="bg-glass project-card" style={{ padding: '2.5rem', borderRadius: '16px', position: 'relative' }}>
              <span className="project-tag">{p.tag}</span>
              <h3 style={{ margin: '1rem 0', fontSize: '1.5rem' }}>{p.title}</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {p.tech.map((t, ti) => (
                  <span key={ti} className="tech-badge">{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href={p.links.demo} className="text-accent" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Live Demo ↗</a>
                <a href={p.links.code} className="text-accent" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Source Code ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
