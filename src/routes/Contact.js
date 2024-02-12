import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 
        heading="<Contact"
        colorText="Me/>"
        text="Let's have a talk"
      />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default Contact;