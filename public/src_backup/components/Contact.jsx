import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <h2>Let's <span className="text-accent">Connect</span></h2>
      <p style={{ margin: '0 auto 2.5rem' }}>
        I'm always open to discussing new projects, creative ideas, or 
        opportunities to be part of your vision.
      </p>
      <div className="bg-glass" style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '3rem', 
        borderRadius: '24px' 
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Interested in working together?</h3>
        <p style={{ marginBottom: '2rem' }}>Drop me an email or find me on social media.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="mailto:hello@example.com" className="btn btn-primary">Send Email</a>
          <a href="#" className="btn btn-outline">LinkedIn</a>
          <a href="#" className="btn btn-outline">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
