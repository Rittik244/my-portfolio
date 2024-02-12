import React from 'react';
import './ContactForm.css';

const Contact_Form = () => {
//   const submit = (e)=>{
//     e.preventDefault();
//   }

  return (
    <section id='contact' className='contact'>
      <div className="contact__main-container">
        <h2 className="contact__heading">
          <span className="contact__heading-sec__main">
            <span>{"<"}</span>
            Contact
            <span>{"/>"}</span>
          </span>
          <span className="contact__heading-sec__sub"> 
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible.
          </span>
        </h2>
        <div className="contact__form-container">
          <form action="https://formspree.io/f/xnqepewe" className="contact__form" method='post' /* onSubmit={submit} */>
            <div className="contact__form-field">
              <label htmlFor="name" className='contact__form-label'>Name</label>
              <input type="text" required placeholder='Enter Your Name' className='contact__form-input' name='Username' id='name' autoComplete='off' />
            </div>
            <div className="contact__form-field">
              <label htmlFor="email" className='contact__form-label'>Email</label>
              <input type="email" required placeholder='Enter Your Email' className='contact__form-input' name='Email' id='email' autoComplete='off' />
            </div>
            <div className="contact__form-field">
              <label htmlFor="message" className='contact__form-label'>Message</label>
              <textarea required cols="30" rows="7" className='contact__form-input' placeholder='Enter Your Message' name='Message' id='message' autoComplete='off' ></textarea>
            </div>
            <button type='submit' className='btn contact-btn'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact_Form;