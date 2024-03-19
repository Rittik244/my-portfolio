import React from "react";
import { NavLink } from "react-router-dom";
// import Mypic from "../images/first.png";
import styled from "styled-components";

const AboutContent = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="heading__container">
          <span className="main__heading">
            <span>{"<"}</span>
            About Me
            <span>{"/>"}</span>
          </span>
          <span className="sub__heading">
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
                success of the overall product. Check out some of my work in the{" "}
                <strong>Projects</strong> section.
              </p>
              <p className="about__content-details-para">
                I also like sharing content related to the stuff that I have
                learned in <strong>Web Development</strong> so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my
                <NavLink
                  rel="noreferrer"
                  to="https://www.linkedin.com/in/ritik-raghuwanshi-18577121b"
                  target="_blank"
                >
                  Linkedin
                </NavLink>
                where I post useful content related to Web Development and
                Programming.
              </p>
              <p className="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to{" "}
                <strong>contact</strong> me.
              </p>
            </div>
            <NavLink to="/contact" className="btn about-btn">
              Contact
            </NavLink>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="about__skills">
              <div className="skills__skill">C++</div>
              <div className="skills__skill">Oops Concepts</div>
              <div className="skills__skill">DSA</div>
              {/* <div className="skills__skill">Java</div> */}
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fafafa;

  .about__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8rem;
  }

  .about__content-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2.2rem;
  }

  .about__content-img {
    text-align: center;
  }

  .about__content-img img {
    height: 170px;
    width: 170px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0.4rem;
    background-color: steelblue;
    border: 2px solid #28313a;
  }

  .about__content-details-para {
    color: #666;
    font-size: 1.1rem;
    max-width: 60rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    text-align: justify;
  }
  .about__content-details-para:last-child {
    margin-bottom: 3rem;
  }

  .about__content-details-para a {
    text-decoration: underline;
    font-weight: 700;
    color: #7843e9;
    margin: 0 3px;
  }

  /* btn import form App.css */

  .about__skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .skills__skill {
    padding: 0.8rem 1.3rem;
    font-size: 0.89rem;
    background: rgba(153, 153, 153, 0.2);
    border-radius: 5px;
    font-weight: 600;
    color: #666;
  }

  @media screen and (max-width: 996px) {
    .about__content {
      gap: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .about__content {
      gap: 5rem;
    }
  }

  @media screen and (max-width: 610px) {
    .about__content {
      grid-template-columns: 1fr;
    }

    .about__heading-sec__sub {
      text-align: justify;
    }
  }

  @media screen and (max-width: 420px) {
    .about__skills {
      gap: 0.6rem;
    }
  }
`;

export default AboutContent;
