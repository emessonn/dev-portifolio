import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend & Mobile',
      skills: [
        { name: 'React.js', level: 94 },
        { name: 'React Native', level: 91 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 87 },
        { name: 'Expo', level: 86 },
        { name: 'React Query', level: 88 },
        { name: 'Vite', level: 90 },
        { name: 'React Hook Form', level: 80 },
        { name: 'Zustand', level: 92 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Nest.js', level: 87 },
        { name: 'Prisma', level: 86 },
        { name: 'Django', level: 79 },
        { name: 'PHP', level: 76 },
        { name: 'Python', level: 82 },
        { name: 'C++', level: 85 },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 86 },
        { name: 'SQLite', level: 81 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      category: 'Tools & Languages',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Linux', level: 89 },
      ],
    },
  ]

  return (
    <section id='skills' className='skills'>
      <div className='container'>
        <h2 className='section-title'>Skills & Technologies</h2>
        <div className='skills-grid'>
          {skillCategories.map((category, index) => (
            <div key={index} className='skill-category'>
              <h3 className='category-title'>{category.category}</h3>
              <div className='skills-list'>
                {category.skills.map((skill, i) => (
                  <div key={i} className='skill-item'>
                    <div className='skill-header'>
                      <span className='skill-name'>{skill.name}</span>
                      <span className='skill-percentage'>{skill.level}%</span>
                    </div>
                    <div className='skill-bar'>
                      <div
                        className='skill-progress'
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
