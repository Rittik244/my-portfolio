import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import SkillsCom from '../Components/SkillsCom';

const Skills = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="<My" colorText="Skills/>" text="Lorem Ipsum is simply dummy text of the printing" />
      <SkillsCom content="Skills" />
      <Footer />
    </div>
  )
}

export default Skills;
