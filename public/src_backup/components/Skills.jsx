import React from 'react';

const Skills = () => {
  const treeData = [
    {
      name: 'Programming Languages',
      children: [
        { name: 'C++' },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'JavaScript' },
        { name: 'SQL' }
      ]
    },
    {
      name: 'Data Analytics',
      children: [
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'Matplotlib', children: [{ name: 'Power BI' }] },
        { name: 'Seaborn' },
        { name: 'Scikit-Learn' }
      ]
    },
    {
      name: 'Web Development',
      children: [
        { name: 'React.js' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' }
      ]
    },
    {
      name: 'DevOps & Tools',
      children: [
        { name: 'Docker' },
        { name: 'Git & GitHub', children: [{ name: 'JWT Authentication' }] },
        { name: 'Linux' },
        { name: 'REST APIs' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section reveal">
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ width: '100%', marginBottom: '3rem' }}>
          <h2 className="gradient-text" style={{ fontSize: '3.5rem', margin: 0 }}>My Skills</h2>
        </div>
        
        <div className="tech-root-node stagger-reveal">Tech</div>
        
        <div className="skills-grid-container stagger-reveal">
          {treeData.map((category, index) => (
            <div className="tree category-tree" key={index}>
              <ul>
                <li>
                  <div className="tree-node category-node">
                    <div className="title">{category.name}</div>
                  </div>
                  <ul>
                    {category.children.map((skill, sIndex) => (
                      <li key={sIndex}>
                        <div className="tree-node skill-node">
                          <div className="title">{skill.name}</div>
                        </div>
                        {skill.children && (
                          <ul>
                            {skill.children.map((subSkill, subIndex) => (
                              <li key={subIndex}>
                                <div className="tree-node skill-node sub-skill-node">
                                  <div className="title">{subSkill.name}</div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

