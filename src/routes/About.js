import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Heroimg2 from '../Components/Heroimg2';
import AboutContent from '../Components/AboutContent';
// import Rotate from '../Components/Rotate';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 
        heading="<About" 
        colorText="Me/>" 
        text="I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product."
      />
      {/* <Rotate/> */}
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;
