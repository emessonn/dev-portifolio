import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['React.js + Vite', 'Nest.js', 'PostgreSQL', 'Prisma'],
      image: '🛍️',
      link: 'https://agillizai-web-v2.onrender.com',
      githubs: [
        {
          label: 'Frontend',
          url: 'https://github.com/developer-agillizai/agillizai-web-v2',
        },
        {
          label: 'Backend',
          url: 'https://github.com/developer-agillizai/agillizai-api-v2',
        },
      ],
    },
    {
      title: 'Fintrack',
      description:
        'Web application for personal financial control with Google authentication, dashboard with spending and income indicators, customizable categories with spending limits, and accounts payable flow.',
      tech: [
        'React + Vite',
        'TypeScript',
        'Nest.js',
        'PostgreSQL',
        'Google OAuth',
        'Prisma',
      ],
      image: './payments-transactions.svg',
      link: 'https://fintrack-web-nsoo.onrender.com',
      githubs: [
        { label: 'Frontend', url: 'https://github.com/emessonn/fintrack-web' },
        { label: 'Backend', url: 'https://github.com/emessonn/fintrack-api' },
      ],
    },
    {
      title: 'Habilita Fácil App',
      description:
        'An app that connects driving instructors with students who want to take lessons.',
      tech: ['Expo', 'Node.js'],
      image: '✅',
      link: 'https://github.com/emessonn/habilita-facil-app',
      githubs: [
        { label: 'App', url: 'https://github.com/emessonn/habilita-facil-app' },
        {
          label: 'Backend',
          url: 'https://github.com/emessonn/habilita-facil-service',
        },
      ],
    },
  ]

  return (
    <section id='projects' className='projects'>
      <div className='container'>
        <h2 className='section-title'>Projects</h2>
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <div key={index} className='project-card'>
              {project.image.includes('.svg') ? (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '120px', height: 'auto' }}
                />
              ) : (
                <div className='project-icon'>{project.image}</div>
              )}
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              <div className='project-tech'>
                {project.tech.map((tech, i) => (
                  <span key={i} className='tech-tag'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='project-links'>
                <a
                  href={project.link}
                  className='project-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Production
                </a>
                {project.githubs &&
                  project.githubs.map((repo, idx) => (
                    <a
                      key={idx}
                      href={repo.url}
                      className='github-link'
                      target='_blank'
                      rel='noopener noreferrer'
                      title={`GitHub Repository: ${repo.label}`}
                      style={{ marginLeft: '10px', display: 'inline-block' }}
                    >
                      <svg
                        height='24'
                        width='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        style={{ verticalAlign: 'middle' }}
                      >
                        <path d='M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5 0-1.1.38-2 .99-2.71-.1-.25-.43-1.28.09-2.67 0 0 .82-.27 2.7 1.03A9.18 9.18 0 0 1 12 7.5c.83.004 1.67.11 2.45.32 1.88-1.3 2.7-1.03 2.7-1.03.52 1.39.19 2.42.09 2.67.61.71.99 1.61.99 2.71 0 3.88-2.34 4.74-4.57 5 .36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z' />
                      </svg>
                      <span
                        style={{
                          fontSize: '0.9rem',
                          marginLeft: '4px',
                          verticalAlign: 'middle',
                        }}
                      >
                        {repo.label}
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
