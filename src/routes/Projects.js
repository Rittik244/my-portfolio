import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import ProjectCom from '../Components/ProjectCom';

const Projects = () => {

  document.title = "Projects | Ritik Portfolio"

  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="<My" colorText="Projects/>" text="Some of my recent works" />
      <ProjectCom/>
      <Footer/>
    </div>
  )
}

export default Projects;
