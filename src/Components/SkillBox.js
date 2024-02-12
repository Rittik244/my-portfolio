import React from 'react';
import { Link } from 'react-router-dom';
import './SkillsCom.css';


const Skill_Box = (props) => {
  return (
    <div className='skill-icon'>
      <h2>{props.skillName}</h2>
      <hr />
      {props.iconName}
      <p>{props.desc}</p>
      <button className='btn'>
        <Link to={props.link} target="_blank">
          Know More
        </Link>
      </button>
    </div>
  )
}

export default Skill_Box;
