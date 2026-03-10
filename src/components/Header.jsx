import React from 'react'
import './Header.css'

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='logo'>
          <span className='logo-text'>&lt;Dev/&gt;</span>
        </div>
        <ul className='nav-menu'>
          <li>
            <a
              href='#home'
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#skills'
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('skills')
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#contact'
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
