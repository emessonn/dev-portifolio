import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2 className='section-title'>Get In Touch</h2>
        <div className='contact-content'>
          <div className='contact-info'>
            <h3>Let's Connect</h3>
            <p>
              I am open to discussing new projects, product challenges, and
              technical leadership opportunities. Feel free to reach out.
            </p>
            <div className='contact-methods'>
              <div className='contact-method'>
                <span className='icon'>📧</span>
                <div>
                  <div className='method-label'>Email</div>
                  <div className='method-value'>emessonbsilva@gmail.com</div>
                </div>
              </div>
              <div className='contact-method'>
                <span className='icon'>📱</span>
                <div>
                  <div className='method-label'>Phone</div>
                  <div className='method-value'>(85) 9 9150-2075</div>
                </div>
              </div>
              <div className='contact-method'>
                <span className='icon'>📍</span>
                <div>
                  <div className='method-label'>Location</div>
                  <div className='method-value'>
                    501 Aveledo Street, Messejana, Fortaleza, Ceara
                  </div>
                </div>
              </div>
            </div>
            <div className='social-links'>
              <a
                href='https://github.com/emessonn'
                target='_blank'
                rel='noopener noreferrer'
                className='social-link'
              >
                GitHub
              </a>
              <a
                href='https://linkedin.com/in/emesson-silva-a4b7b6184'
                target='_blank'
                rel='noopener noreferrer'
                className='social-link'
              >
                LinkedIn
              </a>
            </div>
          </div>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='your.email@mail.com'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='5'
                placeholder='Your message here...'
              ></textarea>
            </div>
            <button type='submit' className='submit-btn'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
