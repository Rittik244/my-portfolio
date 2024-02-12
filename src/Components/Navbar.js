import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import MyPic from '../images/first.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY >= 100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <header className={color ? "header header-bg" : "header"}>
      <div className="header__logo-container">
        <div className="header__logo-img-cont">
          <Link to="/"><img src={MyPic} alt="" className="header__logo-img" /></Link>
        </div>
        <span className='header__logo-sub'>
          Ritik Raghuwanshi
        </span>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/memories'>Memories</NavLink>
        </li>
        <li>
          <NavLink to='/skills'>Skills</NavLink>
        </li>
        <li>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
      </div>
    </header>
  )
}

export default Navbar
