import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education-section reveal">
      <div className="container">
        <h2 className="gradient-text" style={{ marginBottom: '3rem' }}>My Education</h2>
        
        <div className="timeline-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="education-timeline stagger-reveal">
            <div className="timeline-item bg-glass">
              <h4>Lovely Professional University</h4>
              <p className="timeline-date">Since August 2022 | Punjab, India</p>
              <p className="education-degree">Bachelor of Technology - Computer Science and Engineering</p>
              <p className="timeline-highlight">CGPA: 5.8</p>
            </div>

            <div className="timeline-item bg-glass">
              <h4>Himalayan Public Ser. Sec. School</h4>
              <p className="timeline-date">April 2021 - March 2022 | Himachal Pradesh</p>
              <p className="education-degree">Intermediate</p>
              <p className="timeline-highlight">Percentage: 85.30%</p>
            </div>

            <div className="timeline-item bg-glass">
              <h4>Himalayan Public Ser. Sec. School</h4>
              <p className="timeline-date">April 2019 - March 2020 | Himachal Pradesh</p>
              <p className="education-degree">Matriculation</p>
              <p className="timeline-highlight">Percentage: 78.60%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
