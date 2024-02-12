import React from 'react'
import './AboutContent.css';
import { Link } from 'react-router-dom';
import Mypic from '../images/first.png';

const AboutContent = () => {
  return (
    <section id="about" className="about">
      <div className="about__main-container">
        <h2 className="about__heading">
          <span className="about__heading-sec__main">
            <span>{"<"}</span>
            About Me
            <span>{"/>"}</span>
          </span>
          <span className="about__heading-sec__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            {/* <div className='about__content-img'>
              <img src={Mypic} alt='image'/>
            </div> */}
              <div className="about__content-details">
                <p className="about__content-details-para">
                  I'm a <strong>Frontend Web Developer</strong> building the
                  Front-end of Websites and Web Applications that leads to the
                  success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                </p>
                <p className="about__content-details-para">
                  I also like sharing content related to the stuff that I have
                  learned in <strong>Web Development</strong> so it
                  can help other people of the Dev Community. Feel free to Connect
                  or Follow me on my
                  <Link rel="noreferrer" to="https://www.linkedin.com/in/ritik-raghuwanshi-18577121b" target="_blank">Linkedin</Link>
                  where I post useful content related to Web Development and
                  Programming.
                </p>
                <p className="about__content-details-para">
                  I'm open to <strong>Job</strong> opportunities where I can
                  contribute, learn and grow. If you have a good opportunity that
                  matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                </p>
              </div>
              <Link to="/contact" className="btn about-btn" >Contact</Link>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
              <div className="about__skills">
                <div className="skills__skill">C++</div>
                <div className="skills__skill">Oops Concepts</div>
                <div className="skills__skill">DSA</div>
                <div className="skills__skill">Python Basics</div>
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React JS</div>
                <div className="skills__skill">Node JS</div>
                <div className="skills__skill">Express JS</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">Github</div>
                <div className="skills__skill">Responsive Design</div>
                <div className="skills__skill">Terminal</div>
                <div className="skills__skill">SQL</div>
                <div className="skills__skill">Mongo DB</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent;
