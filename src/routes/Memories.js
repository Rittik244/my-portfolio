import React from "react";
import Navbar from "../Components/Navbar";
import Heroimg2 from "../Components/Heroimg2";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Memories = () => {
  document.title = "Memories | Ritik Portfolio";

  return (
    <Wrapper>
      <Navbar />
      <div>
        <Heroimg2
          heading="<My"
          colorText="Memories/>"
          text="Lorem Ipsum is simply dummy text of the printing"
        />
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`

div{
  background-image: url("images/m-bg.jpg");
  background-size: cover;
  background-position: center;
}
`;

export default Memories;
