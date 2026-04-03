import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="education-section reveal" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="institute-name" style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '1px' }}>Academic Journey</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            A concise view of my academic background, learning foundation, and consistent performance over the years.
          </p>
        </div>

        <div className="center-timeline-container reveal-active">

          <div className="center-timeline-item">
            <div className="center-timeline-icon">
              <GraduationCap size={20} />
            </div>
            <div className="center-timeline-content">
              <span className="timeline-date-top">Since August 2023</span>
              <h3 className="institute-name">Lovely Professional University</h3>
              <p className="course-degree">Bachelor of Technology - Computer Science and Engineering</p>
              <div className="badge-container">
                <div className="info-badge">📍 Punjab, India</div>
                <div className="info-badge"><span>CGPA:</span> 6.3</div>
              </div>
            </div>
          </div>

          <div className="center-timeline-item" style={{ marginTop: '-4rem' }}>
            <div className="center-timeline-icon">
              <GraduationCap size={20} />
            </div>
            <div className="center-timeline-content">
              <span className="timeline-date-top">April 2021 - March 2022</span>
              <h3 className="institute-name">Himalayan Public Ser. Sec. School</h3>
              <p className="course-degree">Intermediate</p>
              <div className="badge-container">
                <div className="info-badge">📍 Himachal Pradesh</div>
                <div className="info-badge"><span>Percentage:</span> 85.30%</div>
              </div>
            </div>
          </div>

          <div className="center-timeline-item" style={{ marginTop: '-4rem' }}>
            <div className="center-timeline-icon">
              <GraduationCap size={20} />
            </div>
            <div className="center-timeline-content">
              <span className="timeline-date-top">April 2019 - March 2020</span>
              <h3 className="institute-name">Himalayan Public Ser. Sec. School</h3>
              <p className="course-degree">Matriculation</p>
              <div className="badge-container">
                <div className="info-badge">📍 Himachal Pradesh</div>
                <div className="info-badge"><span>Percentage:</span> 78.60%</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
