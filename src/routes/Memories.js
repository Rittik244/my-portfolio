import React from 'react';
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'
import Footer from '../Components/Footer'
import bg from '../images/m-bg.jpg'

const Memories = () => {

  const myStyle = {
    backgroundImage : `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <>
      <Navbar />
      <div style={myStyle}>
        <Heroimg2 heading="<My" colorText="Memories/>" text="Lorem Ipsum is simply dummy text of the printing" />
      </div>
      <Footer />
    </>

  )
}

export default Memories;
