import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <span className='greeting'>Hi, I'm</span>
          <h1 className='name'>Emesson Silva</h1>
          <h2 className='title'>
            <span className='title-label'>
              Technical Specialist | Full-Stack
            </span>
          </h2>
          <p className='description'>
            I engineer scalable web and mobile systems with React, React Native,
            Node.js, and TypeScript, focusing on clean architecture, performance
            tuning, maintainable codebases, and high-quality end-to-end
            implementation.
          </p>
          <div className='hero-buttons'>
            <a href='#projects' className='btn btn-primary'>
              View My Work
            </a>
            <a href='#contact' className='btn btn-secondary'>
              Get In Touch
            </a>
          </div>
        </div>
        <div className='hero-visual'>
          <div className='code-block'>
            <div className='code-line'>
              <span className='keyword'>const</span>{' '}
              <span className='variable'>developer</span> = {'{'}
            </div>
            <div className='code-line indent'>
              <span className='property'>name</span>:{' '}
              <span className='string'>'Emesson Silva'</span>,
            </div>
            <div className='code-line indent'>
              <span className='property'>skills</span>: [
              <span className='string'>'React'</span>,{' '}
              <span className='string'>'React Native'</span>,{' '}
              <span className='string'>'NestJS'</span>],
            </div>
            <div className='code-line indent'>
              <span className='property'>passion</span>:{' '}
              <span className='string'>
                'Technical excellence, architecture, and performance'
              </span>
            </div>
            <div className='code-line'>{'}'}</div>
          </div>
        </div>
      </div>
      <div className='scroll-indicator'>
        <div className='mouse'></div>
      </div>
    </section>
  )
}

export default Hero
