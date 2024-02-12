import React from 'react';
import './Footer.css';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__main-container'>
                <div className='main-footer__upper'>
                    {/* Left Footer Column */}
                    <div className='intro'>
                        <h2>Ritik Raghuwanshi</h2>
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <div className='left'>
                        <h4>Address</h4>
                        <div className='location'>
                            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <div>
                                {/* <p>X X X . . .</p> */}
                                <p>Bhopal, M.P.</p>
                            </div>
                        </div>
                        <div className='phone'>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <p>
                                +91 9691244943
                            </p>
                        </div>
                        <div className='email'>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <p>
                                ritik.raghuwanshi244@gmail.com
                            </p>
                        </div>
                    </div>
                    {/* Right Footer Column */}
                    <div className='right'>
                        <h4>About The Page</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <div className='social'>
                            <Link className='icons' to="https://www.linkedin.com/in/ritik-raghuwanshi-18577121b/" target='_blank'>
                                <FaLinkedinIn
                                    size={25}
                                />
                            </Link>
                            <Link className='icons' to="https://www.instagram.com/_half_engineer_244/" target='_blank'>
                                <FaInstagram
                                    size={25}
                                />
                            </Link>
                            <Link className='icons' to="https://wa.me/919691244843" target='_blank'>
                                <FaWhatsapp
                                    size={25}
                                />
                            </Link>
                            <Link className='icons' to="https://www.facebook.com/ritik.raghuwanshi244" target='_blank'>
                                <FaFacebook
                                    size={25}
                                />
                            </Link>
                            <Link className='icons' to="/">
                                <FaGithub
                                    size={25}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="main-footer__lower">
                    © Copyright
                    <script>document.write(new Date().getFullYear())</script>2023. Made by
                    <Link rel="noreferrer" target="_blank" to="/">Ritik Raghuwanshi</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
