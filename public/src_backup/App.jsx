import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Custom Cursor Logic
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Reveal Logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target); // Once revealed, stay visible
        }
      });
    }, observerOptions);

    // Use a small timeout to ensure React has painted the DOM
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 500);

    // Failsafe: Reveal everything after 2 seconds if observer fails
    const failsafeTimer = setTimeout(() => {
      document.body.classList.add('reveal-all');
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
      clearTimeout(failsafeTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Premium Cursor Glow */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }} 
      />

      {/* Dynamic Data Particles Background */}
      <div className="data-bg">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="data-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <footer style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border)',
        color: 'var(--text-secondary)',
        fontSize: '0.875rem'
      }}>
        © {new Date().getFullYear()} Abhinav. Built with React & Vite.
      </footer>
    </div>
    </>
  );
}

export default App;
