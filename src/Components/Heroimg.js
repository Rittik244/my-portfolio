import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Typed from "typed.js";
import styled from "styled-components";

const Heroimg = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Professional Coder.",
        "Front-End React Developer.",
        "Full Stack Web Developer.",
      ],
      startDelay: 300,
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "!",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Wrapper className="hero">
      <div className="mask">
        <figure>
          <img className="intro-img" src="images/img4.jpg" alt="img4" />
        </figure>
      </div>
      <div className="content">
        <p className="p">
          Hi, Welcome to My <span style={{ color: "#00E8F8" }}>Page</span>
        </p>
        <h1>
          I'm{" "}
          <span style={{ display: "inline", color: "#00E8F8" }}>
            Ritik Raghuwanshi
          </span>
        </h1>
        <h2>
          a <span ref={el} className="text"></span>
        </h2>

        <p>
          "I am passionate MERN Stack Developer and Machine Learning enthusiast.
        </p>
        <p>
          With a strong foundation in web development and a keep eye for data."
        </p>

        <div className="before-social">
          <h4>Find Me On . . .</h4>

          <div className="socials">
            <Link to="https://github.com/Rittik244" target="_blank">
              <FaGithub className="social-icon" />
            </Link>
            <Link
              to="https://www.facebook.com/ritik.raghuwanshi244"
              target="_blank"
            >
              <FaFacebook className="social-icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ritik-raghuwanshi-18577121b/"
              target="_blank"
            >
              <FaLinkedin className="social-icon" />
            </Link>
            <Link
              to="https://www.instagram.com/_half_engineer_244/"
              target="_blank"
            >
              <FaInstagram className="social-icon" />
            </Link>
            <Link to="https://wa.me/919691244843" target="_blank">
              <FaWhatsapp className="social-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .mask {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .intro-img {
    width: 100%;
    height: 100vh;
    background-size: cover;
    object-fit: cover;
    background-position: left;
  }

  .mask::after {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.6;
  }

  .content {
    max-width: 600px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 35%;
    transition: 0.5s;
  }

  .content h1 {
    margin: 15px 0;
    line-height: 100%;
    font-size: 3rem;
  }

  .content h2 {
    line-height: 100%;
    color: #fff;
    font-size: 2rem;
    padding-bottom: 15px;
  }

  .content .p {
    line-height: 120%;
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    color: #ff014f;
  }

  .content p {
    font-size: 1.1rem !important;
    font-weight: 500 !important;
  }

  .content h2 span {
    color: #00e8f8;
  }

  .hero__mouse-scroll-cont {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
  }

  .mouse {
    width: 25px;
    height: 40px;
    border: 2px solid steelblue;
    /* border: 2px solid #8f8c8c; */
    border-radius: 60px;
    overflow: hidden;
    position: relative;
  }

  .mouse::before {
    content: "";
    width: 5px;
    height: 5px;
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    /* background-color: #8f8c8c; */
    background-color: steelblue;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 1.3s infinite;
    -webkit-animation: wheel 1.3s infinite;
  }

  @keyframes wheel {
    0% {
      top: 5px;
      opacity: 1;
      transition: ease-in-out;
    }

    100% {
      top: 26px;
      opacity: 0;
      transition: ease-out;
    }
  }

  .before-social {
    color: #fff;
    margin-top: 20px;
  }

  .before-social h4 {
    margin-bottom: 0.5rem;
  }

  .socials {
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    /* margin-top: 30px;    */
  }

  .socials a {
    color: #00e8f8;
    width: 45px;
    height: 45px;
    margin: 0 10px 0 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid #00e8f8;
  }

  .social-icon {
    width: 30px;
    height: 30px;
    margin: 1px 1px 0;
    padding: 0.2rem;
  }

  .socials a:hover {
    color: #081b29;
    background-color: #00e8f8;
    box-shadow: 0 0 20px #0ef;
  }

  @media screen and (max-width: 996px) {
    .content {
      left: 40%;
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      width: 100%;
      padding-left: 4rem;

      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      .p {
        font-size: 1.2rem !important;
      }
    }
  }
`;

export default Heroimg;
