import React from 'react';
import Navbar from '../Components/Navbar';
import Heroimg from '../Components/Heroimg';
import Footer from '../Components/Footer';
import SkillsCom from '../Components/SkillsCom';
import ContactForm from '../Components/ContactForm';
import ProjectCom from '../Components/ProjectCom';
import AboutContent from '../Components/AboutContent';

const Home = () => {

  document.title = "Home | Ritik Portfolio"

  return (
    <div>
      <Navbar />
      <Heroimg />
      <AboutContent/>
      <ProjectCom/>
      <ContactForm />
      <SkillsCom content="Skills" />
      <Footer />
    </div>
  )
}

export default Home;