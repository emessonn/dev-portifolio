import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['React.js + Vite', 'Nest.js', 'PostgreSQL', 'ASAAS'],
      image: '🛍️',
      link: 'https://github.com/developer-agillizai/agillizai-web-v2',
    },
    {
      title: 'Habilita Facil App',
      description:
        'An app that connects driving instructors with students who want to take lessons.',
      tech: ['Expo', 'Node.js'],
      image: '✅',
      link: 'https://github.com/emessonn/habilita-facil-app',
    },
    // {
    //   title: 'Weather Dashboard',
    //   description:
    //     'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
    //   tech: ['React.js + Vite', 'OpenWeather API', 'Chart.js'],
    //   image: '🌤️',
    //   link: '#',
    // },
    // {
    //   title: 'Social Media Analytics',
    //   description:
    //     'Analytics platform for tracking social media performance across multiple channels with detailed insights.',
    //   tech: ['Vue.js', 'Express', 'PostgreSQL'],
    //   image: '📊',
    //   link: '#',
    // },
    // {
    //   title: 'Portfolio CMS',
    //   description:
    //     'Content management system for creative professionals to showcase their work with customizable templates.',
    //   tech: ['Next.js', 'Sanity.io', 'Tailwind'],
    //   image: '🎨',
    //   link: '#',
    // },
    // {
    //   title: 'Fitness Tracker',
    //   description:
    //     'Mobile-responsive fitness tracking app with workout plans, progress tracking, and nutrition logging.',
    //   tech: ['React Native', 'Redux', 'Node.js'],
    //   image: '💪',
    //   link: '#',
    // },
  ]

  return (
    <section id='projects' className='projects'>
      <div className='container'>
        <h2 className='section-title'>Projects</h2>
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <div key={index} className='project-card'>
              <div className='project-icon'>{project.image}</div>
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              <div className='project-tech'>
                {project.tech.map((tech, i) => (
                  <span key={i} className='tech-tag'>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className='project-link'>
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
