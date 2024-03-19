import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__main-container">
        <div className="main-footer__upper">
          {/* Left Footer Column */}
          <div className="intro">
            <h2>Ritik Raghuwanshi</h2>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="left">
            <h4>Address</h4>
            <div className="location">
              <FaHome className="address-icon" />
              <div>
                {/* <p>X X X . . .</p> */}
                <p>Bhopal, M.P.</p>
              </div>
            </div>
            <div className="phone">
              <FaPhone className="address-icon" />
              <p>+91 9691244943</p>
            </div>
            <div className="email">
              <FaMailBulk className="address-icon" />
              <p>ritik.raghuwanshi244@gmail.com</p>
            </div>
          </div>
          {/* Right Footer Column */}
          <div className="right">
            <h4>About The Page</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <div className="social">
              <NavLink
                className="icons"
                to="https://www.linkedin.com/in/ritik-raghuwanshi-18577121b/"
                target="_blank"
              >
                <FaLinkedinIn size={25} />
              </NavLink>
              <NavLink
                className="icons"
                to="https://www.instagram.com/_half_engineer_244/"
                target="_blank"
              >
                <FaInstagram size={25} />
              </NavLink>
              <NavLink
                className="icons"
                to="https://wa.me/919691244843"
                target="_blank"
              >
                <FaWhatsapp size={25} />
              </NavLink>
              <NavLink
                className="icons"
                to="https://www.facebook.com/ritik.raghuwanshi244"
                target="_blank"
              >
                <FaFacebook size={25} />
              </NavLink>
              <NavLink className="icons" to="/">
                <FaGithub size={25} />
              </NavLink>
            </div>
          </div>
        </div>
        <hr />
        <div className="main-footer__lower">
          All Rights to
          <NavLink rel="noreferrer" target="_blank" to="/">
            Ritik Raghuwanshi
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: rgba(19, 19, 19, 0.6);

  .footer__main-container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 5rem 10rem;
  }

  .main-footer__upper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    margin-bottom: 2rem;
  }

  .left,
  .intro,
  .right {
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: .4rem;
  }

  .intro h2 {
    color: #fff;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  .location,
  .phone,
  .email {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .address-icon {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  .social {
    margin-top: 1rem;
  }

  .left h4,
  .right h4 {
    font-size: 1.2rem;
    padding-bottom: 0.4rem;
    letter-spacing: 1px;
  }

  .icons {
    color: #fff;
    margin-right: 1rem;
  }

  .icons:hover {
    color: #989c9c;
  }

  .copyRight {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  .copyRight span {
    color: #fff;
    font-size: 0.7rem;
  }

  .copyRight span a {
    color: #fff;
    text-decoration: underline;
    font-weight: 600;
  }

  .main-footer__lower {
    padding: 2.5rem 0;
    color: #eee;
    font-size: 1rem;
    text-align: left;
    text-align: center;
  }

  .main-footer__lower a {
    text-decoration: underline;
    font-weight: 700;
    margin-left: 2px;
    color: #fff;
  }

  @media screen and (max-width: 996px) {
    .footer__main-container {
      padding: 5rem 4rem;
    }
    .main-footer__upper {
      grid-gap: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    .footer__main-container {
      padding: 5rem 3rem;
    }

    .main-footer__upper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2rem;
    }
  }
`;

export default Footer;
