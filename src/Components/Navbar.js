import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Header>
      <div className={color ? "header header-bg" : "header"}>
        <div className="header__logo-container">
          <figure className="header__logo-img-cont">
            <NavLink to="/">
              <img src="images/first.png" alt="" className="header__logo-img" />
            </NavLink>
          </figure>
          <span className="header__logo-sub">Ritik Raghuwanshi</span>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/memories">Memories</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </Header>
  );
};

const Header = styled.header`
  .header {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    position: fixed;
    width: 100%;
    z-index: 1000;
    transition: 0.5s;
  }

  .header-bg {
    background: rgba(0, 0, 0, 0.7);
    transition: 0.5s;
  }

  .header__logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #333;
    transition: color 0.3s;
  }

  .header__logo-img-cont {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50px;
    overflow: hidden;
    background-color: rgb(99, 184, 218);
    border: 2px solid rgb(11, 102, 248);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }
  }

  .header__logo-sub {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .nav-menu li {
    position: relative;
  }

  a {
    text-decoration: none;
  }

  .nav-menu li a {
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
    transition: 0.2s ease;
  }

  .nav-menu li a:hover,
  .nav-menu li a.active {
    color: #09b9ad;
  }

  .nav-menu li a.active::after,
  .nav-menu li a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background-color: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;
    animation: line 0.3s linear 1;
  }

  @keyframes line {
    0% {
      width: 0%;
    }

    100% {
      width: 30%;
    }
  }

  .hamburger {
    display: none;
  }

  @media screen and (max-width: 996px) {
    .header {
      padding: 0 1.2rem;
    }

    .nav-menu {
      gap: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .nav-menu {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      position: absolute;
      top: 0;
      left: -100%;
      z-index: -3;
      transition: 0.3s;
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-menu li {
      padding: 1rem 0;
    }

    .nav-menu li a {
      font-size: 2rem;
    }

    .hamburger {
      display: initial;
    }
  }

  @media screen and (max-width: 320px) {
    .header {
      padding: 0 0.6rem;
    }

    .header__logo-container {
      gap: 0.4rem;
    }

    .header__logo-img-cont {
      width: 2.8rem;
      height: 2.8rem;
    }

    .header__logo-sub {
      font-size: 1rem;
    }
  }
`;

export default Navbar;
