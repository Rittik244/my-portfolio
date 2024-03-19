import React from "react";
import { NavLink } from "react-router-dom";
import { SiMongodb } from "react-icons/si";
import styled from "styled-components";
import {
  FaArrowRight,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const ProjectCom = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="heading__container">
          <span className="main__heading">
            <span>{"<"}</span>
            Projects
            <span>{"/>"}</span>
          </span>
          <span className="sub__heading">
            Some of the personal projects that I created
          </span>
        </h2>
        <div className="project__content">
          <h3 className="project__row-content-title">1. Portfolio</h3>
          <div className="project__row">
            <div className="project__row-img-cont">
              <img
                src="images/project/port-project.png"
                alt="Project ScreenShot"
                className="project__row-img"
              />
            </div>
            <div className="project__row-content">
              <div className="project-icon-cont">
                <span className="project-icon-heading">Tech Used</span>
                <FaArrowRight className="project-icons arrow-icon" />
                <FaHtml5 className="project-icons" />
                <FaCss3 className="project-icons" />
                <FaJs className="project-icons" />
                <FaReact className="project-icons" />
              </div>
              <p className="project__row-content-desc">
                This is a personal portfolio website project created using{" "}
                <strong>HTML, CSS, JavaScript,</strong> and{" "}
                <strong>React JS</strong>. The purpose of this project is to
                showcase my skills, projects, and experiences in a visually
                appealing and user-friendly manner. Also Integration of
                FormsFree services to provide a user-friendly contact form.
              </p>
              <NavLink className="btn project-btn" to="#" target="_blank">
                More Info...
              </NavLink>
            </div>
          </div>
          <hr />

          <h3 className="project__row-content-title">
            2. Online Shopping Website
          </h3>
          <div className="project__row">
            <div className="project__row-img-cont">
              <img
                src="images/project/shop-project.png"
                alt="Project ScreenShot"
                className="project__row-img"
              />
            </div>
            <div className="project__row-content">
              <div className="project-icon-cont">
                <span className="project-icon-heading">Tech Used</span>
                <FaArrowRight className="project-icons arrow-icon" />
                <FaHtml5 className="project-icons" />
                <FaCss3 className="project-icons" />
                <FaJs className="project-icons" />
                <FaReact className="project-icons" />
              </div>
              <p className="project__row-content-desc">
                This Shopping website built using{" "}
                <strong>HTML, CSS, JavaScript,</strong> and{" "}
                <strong> React JS</strong>. The primary goal of this project is
                to create a user-friendly and visually appealing e-commerce
                platform where users can browse products, add items to their
                cart, and complete the checkout process.
              </p>
              <NavLink className="btn project-btn" to="#" target="_blank">
                More Info...
              </NavLink>
            </div>
          </div>
          <hr />

          <h3 className="project__row-content-title">3. React Ecom Site</h3>
          <div className="project__row">
            <div className="project__row-img-cont">
              <img
                src="images/project/ecom-project.png"
                alt="Project ScreenShot"
                className="project__row-img"
              />
            </div>
            <div className="project__row-content">
              <div className="project-icon-cont">
                <span className="project-icon-heading">Tech Used</span>
                <FaArrowRight className="project-icons arrow-icon" />
                <FaHtml5 className="project-icons" />
                <FaCss3 className="project-icons" />
                <FaJs className="project-icons" />
                <FaReact className="project-icons" />
                <FaNodeJs className="project-icons" />
                <SiMongodb className="project-icons" />
              </div>
              <p className="project__row-content-desc">Project Description</p>
              <NavLink className="btn project-btn" to="#" target="_blank">
                More Info...
              </NavLink>
            </div>
          </div>
          <hr />

          <h3 className="project__row-content-title">4. User Authentication</h3>
          <div className="project__row">
            <div className="project__row-img-cont">
              <img
                src="images/project/web-project.png"
                alt="Project ScreenShot"
                className="project__row-img"
              />
            </div>
            <div className="project__row-content">
              <div className="project-icon-cont">
                <span className="project-icon-heading">Tech Used</span>
                <FaArrowRight className="project-icons arrow-icon" />
                <FaHtml5 className="project-icons" />
                <FaCss3 className="project-icons" />
                <FaJs className="project-icons" />
                <FaReact className="project-icons" />
                <FaNodeJs className="project-icons" />
                <SiMongodb className="project-icons" />
              </div>
              <p className="project__row-content-desc">Project Description</p>
              <NavLink className="btn project-btn" to="#" target="_blank">
                More Info...
              </NavLink>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>
            More On...{" "}
            <NavLink style={{ color: "steelBlue" }} to="">
              Github
            </NavLink>
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: rgba(255, 255, 255, 1);

  .project__row {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    margin-bottom: 1rem;
    align-items: center;
  }

  .project__row-img-cont {
    overflow: hidden;
  }

  .project__row-img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .project__row-content {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .project__row-content-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 3rem;
    color: #666;
  }

  .project__row-content-desc {
    color: #666;
    font-size: 1.1rem;
    max-width: 50rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-btn {
    font-size: 0.9rem;
  }

  .project-icon-heading {
    text-transform: uppercase;
    font-weight: 700;
    color: steelblue;
  }

  .project-icon-cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
  }

  .project-icons {
    width: 20px;
    height: 20px;
    color: steelblue;
  }

  .arrow-icon {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }

  @media screen and (max-width: 996px) {
    .project__main-container {
      padding: 5rem 4rem;
    }
  }

  @media screen and (max-width: 768px) {
    .project__main-container {
      padding: 5rem 3rem;
    }

    .project__row {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .project__row-content {
      padding: 0;
      margin-bottom: 2rem;
    }

    .project-btn {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: 610px) {
    .project__main-container {
      padding: 5rem 2rem;
    }

    .project__heading-sec__sub {
      text-align: justify;
    }
  }

  @media screen and (max-width: 420px) {
    .project__heading-sec__main {
      font-size: 2.2rem;
    }
  }
`;

export default ProjectCom;
