import React from "react";
import "./SkillsCom.css";
import styled from "styled-components";

const SkillsCom = ({ content }) => {
  return (
    <Wrapper>
      <div className="container skills">
        {/* <h2 className="heading__container">
          <span className="main__heading">
            <span>{"<"}</span>
            {content}
            <span>{"/>"}</span>
          </span>
        </h2> */}
        <div className="skills__skill-container">
          <div>
            <img className="icon" src="images/icons/c++.svg" alt="" />
            <img className="icon" src="images/icons/html.svg" alt="" />
            <img className="icon" src="images/icons/css.svg" alt="" />
            <img className="icon" src="images/icons/js.svg" alt="" />
            <img className="icon" src="images/icons/react.svg" alt="" />
            <img className="icon" src="images/icons/node-js.svg" alt="" />
            <img className="icon" src="images/icons/express-js.svg" alt="" />
            <img className="icon" src="images/icons/github.svg" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #fff;

  .skills__skill-container {
    box-shadow: rgba(142, 142, 150, 0.2) 0 7px 29px 0;
    /* background: rgba(14, 13, 13, 0.2); */
    padding: 2rem 1rem;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 5px;

    div {
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .icon {
    z-index: 999;
    margin: 5px;
    width: 150px;
    height: 150px;
    /* color: #fff; */
  }

  @media screen and (max-width: 768px) {
    .icon{
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: 420px) {
    .skills__skill-container div{
      gap: 1.5rem;
    }
  }
`;

export default SkillsCom;
