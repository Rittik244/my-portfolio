// import { useState } from "react";
import styled from "styled-components";

const Contact_Form = () => {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // let name, value;
  // const getUserData = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };

  // const sendData = async (e) => {
  //   e.preventDefault();

  //   const { name, email, message } = user;

  //   const res = await fetch(
  //     "https://my-portfolio-6084c-default-rtdb.firebaseio.com/portfolioMessages.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message,
  //       }),
  //     }
  //   );
  //   if (res) {
  //     setUser({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });

  //     alert("Message Send");
  //   }
  // };

  return (
    <Wrapper id="contact" className="contact">
      <div className="container">
        <h2 className="heading__container">
          <span className="main__heading">
            <span>{"<"}</span>
            Contact
            <span>{"/>"}</span>
          </span>
          <span className="sub__heading">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </span>
        </h2>
        <div className="contact__form-container">
          <form
            // action="https://formspree.io/f/xnqepewe"
            action="https://formspree.io/f/xnqepewe"
            className="contact__form"
            method="POST"
            // onSubmit={sendData}
          >
            <div className="contact__form-field">
              <label htmlFor="name" className="contact__form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                // value={user.name}
                placeholder="Enter Your Name"
                className="contact__form-input"
                autoComplete="off"
                required
                // onChange={getUserData}
              />
            </div>
            <div className="contact__form-field">
              <label htmlFor="email" className="contact__form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                // value={user.email}
                placeholder="Enter Your Email"
                className="contact__form-input"
                autoComplete="off"
                required
                // onChange={getUserData}
              />
            </div>
            <div className="contact__form-field">
              <label htmlFor="message" className="contact__form-label">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                name="message"
                // value={user.message}
                className="contact__form-input"
                placeholder="Enter Your Message"
                cols="30"
                rows="7"
                autoComplete="off"
                required
                // onChange={getUserData}
              ></textarea>
            </div>
            <button type="submit" className="btn contact-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(
      to right,
      rgba(245, 245, 245, 0.8),
      rgba(245, 245, 245, 0.5)
    ),
    url("https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg");
  background-position: center;
  background-size: cover;

  .contact__form-container {
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
    background: #fff;
    padding: 3rem 2rem;
    text-align: right;
    width: 70%;
    border-radius: 5px;
    margin: auto;
  }

  .contact__form-field {
    margin-bottom: 2rem;
  }

  .contact__form-label {
    color: #666;
    font-size: 0.9rem;
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 0.5rem;
    display: block;
    text-align: left;
  }

  .contact__form-input {
    color: #333;
    padding: 1rem;
    width: 100%;
    border: 1px solid #ebebeb;
    font-size: 1rem;
    letter-spacing: 0;
    background: #f0f0f0;
    border-radius: 5px;
    outline: none;
  }

  .contact__form-input::placeholder {
    color: #a6a4a4;
  }

  .contact__form-field textarea {
    resize: none;
  }

  @media screen and (max-width: 996px) {
    .contact__form-container {
      width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    .contact__form-container {
      width: 100%;
    }

    .contact__form-container{
      padding: 2rem 1rem;
    }
    
    .contact-btn{
      width: 100%;
    }
  }
`;

export default Contact_Form;
