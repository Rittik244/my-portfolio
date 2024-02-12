import React from 'react'
import { FaCss3, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa';
import './SkillsCom.css';
import SkillBox from './SkillBox';

const SkillsCom = (props) => {
  return (
    <section className='skills'>
      <div className="skills__main-container">
        <h2 className='skills__heading'>
          <span>{"<"}</span>{props.content}<span>{"/>"}</span>
        </h2>
        <div className='skills__skill-container'>
          <SkillBox
            skillName="C++"
            iconName={<h1 style={{fontSize:"3.7rem"}}>C++</h1>}
            link="https://www.w3schools.com/cpp/"
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
          <SkillBox
            skillName="HTML"
            iconName={<FaHtml5 className='icon' />}
            link="https://www.w3schools.com/html/"
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
          <SkillBox
            skillName="CSS"
            iconName={<FaCss3 className='icon' />}
            link="https://www.w3schools.com/css/"
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
          <SkillBox
            skillName="JAVASCRIPT"
            iconName={<FaJs className='icon' />}
            link="https://www.w3schools.com/js/"
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
          <SkillBox
            skillName="REACT JS"
            iconName={<FaReact className='icon' />}
            link="https://www.w3schools.com/REACT/DEFAULT.ASP"
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
          <SkillBox
            skillName="NODE JS"
            iconName={<FaNode className='icon' />}
            link="https://www.w3schools.com/nodejs/"
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
          <SkillBox
            skillName="Github"
            iconName={<FaGithub className='icon' />}
            link=""
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
          <SkillBox
            skillName="Git"
            iconName={<FaGitAlt className='icon' />}
            link=""
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
          <SkillBox
            skillName="Mongo DB"
            iconName={<FaDatabase className='icon' />}
            desc="Lorem Ipsum is simply dummy text of the printing. . ."
          />
        </div>
      </div>
    </section>
  )
}

export default SkillsCom;
