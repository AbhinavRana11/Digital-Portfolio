import React from 'react';

const Certificates = () => {
  const certs = [
    { 
      title: 'Foundations: Data, Data, Everywhere', 
      issuer: 'Coursera', 
      date: 'Mar 2026',
      badge: 'Coursera',
      image: '/cert-coursera.jpg',
      description: 'Comprehensive overview of data analysis practices, tools, and the data lifecycle to make data-driven decisions.',
      link: 'https://www.coursera.org/account/accomplishments/certificate/XW71OCJ4J7CZ'
    },
    { 
      title: 'Android Developer Pro', 
      issuer: 'Lovely Professional University', 
      date: 'Jul 2025',
      badge: 'LPU',
      image: '/android-certificate.jpg',
      description: 'Hands-on practical training for building Android mobile applications from scratch and publishing to the Play Store.',
      link: '/android-certificate.jpg'
    },
    { 
      title: 'Responsive Web Design', 
      issuer: 'freeCodeCamp', 
      date: 'Nov 2023',
      badge: 'freeCodeCamp',
      image: '/cert-fcc.jpg',
      description: 'Developer Certification covering HTML5, modern CSS techniques, flexbox, grid, and accessibility standards.',
      link: 'https://freecodecamp.org/certification/fcc4ff8a2d7-2d48-4d4c-9187-0df0faff4822/responsive-web-design'
    }
  ];

  return (
    <section id="certificates" className="reveal">
      <div className="container">
        <h2 className="gradient-text" style={{ marginBottom: '3rem' }}>My Certificates</h2>
        <div className="stagger-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {certs.map((c, i) => (
            <a href={c.link} target="_blank" rel="noopener noreferrer" key={i} className="cert-card" style={{ textDecoration: 'none' }}>
              <div className="cert-image-wrapper">
                <span className="cert-badge">{c.badge}</span>
                <img 
                  src={c.image} 
                  alt={c.title} 
                  onError={(e) => { e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 220"><rect width="100%" height="100%" fill="%231f2937"/><text x="50%" y="50%" fill="%236b7280" font-family="sans-serif" font-size="16" text-anchor="middle" dominant-baseline="middle">Add ' + c.image + '</text></svg>' }} 
                />
                <div className="cert-date-overlay">{c.date}</div>
              </div>
              <div className="cert-content">
                <h3>{c.title}</h3>
                <p className="cert-desc">{c.description}</p>
                <div className="cert-footer">
                  <span>{c.issuer}</span>
                  <span>{c.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
