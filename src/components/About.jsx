import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>
        <div className='about-content'>
          <div className='about-text'>
            <p>
              I am a technical specialist with over 5 years of experience in web
              and mobile development, working across the full application
              lifecycle, from conception and implementation to maintenance and
              continuous evolution.
            </p>
            <p>
              I have hands-on experience in code reviews, performance
              optimization, and translating business requirements into robust,
              scalable technical solutions.
            </p>
            <p>
              My focus is to deliver scalable solutions, improve engineering
              quality, and build reliable products with speed and consistency.
            </p>
          </div>
          <div className='about-stats'>
            <div className='stat-card'>
              <div className='stat-number'>5+</div>
              <div className='stat-label'>Years Experience</div>
            </div>
            <div className='stat-card'>
              <div className='stat-number'>100%</div>
              <div className='stat-label'>Full Lifecycle Delivery</div>
            </div>
            <div className='stat-card'>
              <div className='stat-number'>Intermediate</div>
              <div className='stat-label'>Architecture & Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
