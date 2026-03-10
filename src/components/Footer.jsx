import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-text'>
            <p>© 2026 Emesson. All rights reserved.</p>
            <p>Built with React + Vite</p>
          </div>
          <div className='footer-links'>
            <a href='#home'>Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
