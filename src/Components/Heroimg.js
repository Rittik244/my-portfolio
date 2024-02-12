import React, { useEffect, useRef } from 'react';
import './Heroimg.css';
import img4 from '../images/img4.jpg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Typed from 'typed.js';

const Heroimg = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Professional Coder.", "Front-End React Developer.", "Full Stack Web Developer."],
      startDelay: 300,
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "!"
    });

    return () => {
      typed.destroy();
    };

  }, []);

  return (
    <section className='hero'>
      <div className='mask'>
        <img className='intro-img' src={img4} alt='img4' />
      </div>
      <div className='content'>

        <p className='p'>Hi, Welcome to My <span style={{ color: "#00E8F8" }}>Page</span></p>
        <h1>I'm <h1 style={{ display: "inline", color: "#00E8F8" }}>Ritik Raghuwanshi</h1></h1>
        <h2>a <span ref={el} className='text'></span></h2>

        <p>"I am passionate MERN Stack Developer and Machine Learning enthusiast.</p>
        <p>With a strong foundation in web development and a keep eye for data."</p>

        <div className='before-social'>

          <h4>Find Me On . . .</h4>

          <div className='socials'>
            <Link
              to="https://github.com/Rittik244"
              target="_blank" >
              <FaGithub className='social-icon' />
            </Link>
            <Link
              to="https://www.facebook.com/ritik.raghuwanshi244"
              target='_blank'>
              <FaFacebook className='social-icon' />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ritik-raghuwanshi-18577121b/"
              target='_blank'>
              <FaLinkedin className='social-icon' />
            </Link>
            <Link
              to="https://www.instagram.com/_half_engineer_244/"
              target='_blank'>
              <FaInstagram className='social-icon' />
            </Link>
            <Link
              to="https://wa.me/919691244843"
              target='_blank'>
              <FaWhatsapp className='social-icon' />
            </Link>
          </div>
        </div>
      </div>
      <div className="hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Heroimg;
