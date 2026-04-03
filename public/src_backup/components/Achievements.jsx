import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      icon: '🔥',
      title: '50-Day Streak on LeetCode',
      date: 'April 2025',
      desc: 'Maintained a 50-day daily problem-solving streak on LeetCode, showcasing consistency and dedication.'
    },
    {
      icon: '💡',
      title: '150 LeetCode Questions Solved',
      date: 'April 2025',
      desc: 'Solved 150 coding questions on LeetCode in April 2025, strengthening problem-solving and algorithmic thinking.'
    },
    {
      icon: '🌱',
      title: '100+ GeeksForGeeks Problems',
      date: '2025',
      desc: 'Successfully solved over 100 data structures and algorithms problems on the GeeksForGeeks platform, building strong foundational skills.'
    }
  ];

  return (
    <section id="achievements">
      <div className="container">
        <h2 className="gradient-text" style={{ marginBottom: '3rem' }}>Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card bg-glass">
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3>{item.title}</h3>
                  <span className="achievement-date">{item.date}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
