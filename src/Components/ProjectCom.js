import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCom.css';
import { FaArrowRight, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";


import image1 from '../images/project/port-project.png';
import image2 from '../images/project/shop-project.png';
import img1 from '../images/project/ecom-project.png';
import img2 from '../images/project/web-project.png';

const ProjectCom = () => {
    return (
        <section className='project' id='projects'>
            <div className="project__main-container">
                <h2 className="project__heading">
                    <span className="project__heading-sec__main">
                        <span>{"<"}</span>
                        Projects
                        <span>{"/>"}</span>
                    </span>
                    <span className="project__heading-sec__sub">Some of the personal projects that I created</span>
                </h2>
                <div className="project__content">
                    <div className="project__row">
                        <div className="project__row-img-cont">
                            <img src={image1} alt="Project ScreenShot" className="project__row-img" />
                        </div>
                        <div className="project__row-content">
                            <h3 className="project__row-content-title">1. Portfolio</h3>
                            <div className='project-icon-cont'>
                            <span className='project-icon-heading'>Tech Used</span>
                                <FaArrowRight className='project-icons arrow-icon'/>
                                <FaHtml5 className='project-icons'/>
                                <FaCss3 className='project-icons'/>
                                <FaJs className='project-icons'/>
                                <FaReact className='project-icons'/>
                            </div>
                            <p className="project__row-content-desc">
                            This is a personal portfolio website project created using <strong>HTML, CSS, JavaScript,</strong> and <strong>React JS</strong>. The purpose of this project is to showcase your skills, projects, and experiences in a visually appealing and user-friendly manner.
                            </p>
                            <Link className="btn project-btn" to="#" target='_blank'>Case Study</Link>
                        </div>
                    </div>
                    <div className="project__row">
                        <div className="project__row-img-cont">
                            <img src={image2} alt="Project ScreenShot" className="project__row-img" />
                        </div>
                        <div className="project__row-content">
                            <h3 className="project__row-content-title">2. Online Shopping Website</h3>
                            <div className="project-icon-cont">
                                <span className='project-icon-heading'>Tech Used</span>
                                <FaArrowRight className='project-icons arrow-icon'/>
                                <FaHtml5 className='project-icons' />
                                <FaCss3 className='project-icons' />
                                <FaJs className='project-icons' />
                                <FaReact className='project-icons' />
                            </div>
                            <p className="project__row-content-desc">
                            This Shopping website built using <strong>HTML, CSS, JavaScript,</strong> and <strong> React JS</strong>. The primary goal of this project is to create a user-friendly and visually appealing e-commerce platform where users can browse products, add items to their cart, and complete the checkout process.
                            </p>
                            <Link className="btn project-btn" to="#" target='_blank'>Case Study</Link>
                        </div>
                    </div>
                    <div className="project__row">
                        <div className="project__row-img-cont">
                            <img src={img1} alt="Project ScreenShot" className="project__row-img" />
                        </div>
                        <div className="project__row-content">
                            <h3 className="project__row-content-title">3. React Ecom Site</h3>
                            <div className="project-icon-cont">
                                <span className='project-icon-heading'>Tech Used</span>
                                <FaArrowRight className='project-icons arrow-icon'/>
                                <FaHtml5 className='project-icons' />
                                <FaCss3 className='project-icons' />
                                <FaJs className='project-icons' />
                                <FaReact className='project-icons' />
                                <FaNodeJs className='project-icons' />
                                <SiMongodb className='project-icons' />
                            </div>
                            <p className="project__row-content-desc">
                                Project Description
                            </p>
                            <Link className="btn project-btn" to="#" target='_blank'>Case Study</Link>
                        </div>
                    </div>
                    <div className="project__row">
                        <div className="project__row-img-cont">
                            <img src={img2} alt="Project ScreenShot" className="project__row-img" />
                        </div>
                        <div className="project__row-content">
                            <h3 className="project__row-content-title">4. User Authentication</h3>
                            <div className="project-icon-cont">
                                <span className='project-icon-heading'>Tech Used</span>
                                <FaArrowRight className='project-icons arrow-icon'/>
                                <FaHtml5 className='project-icons' />
                                <FaCss3 className='project-icons' />
                                <FaJs className='project-icons' />
                                <FaReact className='project-icons' />
                                <FaNodeJs className='project-icons' />
                                <SiMongodb className='project-icons' />
                            </div>
                            <p className="project__row-content-desc">
                                Project Description
                            </p>
                            <Link className="btn project-btn" to="#" target='_blank'>Case Study</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <h2>More Project On... <Link style={{color: "steelBlue"}} to="">Github</Link></h2> 
            </div>
        </section>
    )
}

export default ProjectCom;
