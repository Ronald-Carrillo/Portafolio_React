import React, { useState, useEffect } from 'react'
import logo from "../image/logo.png"
import { Link } from 'react-scroll'
import "../style/Header.css"

const Header = () => {
    // const [change, setChange] = useState(true)
  return (
    <div>
            <header className='header'>
                <div className='headerImage'>
                    <img src={logo} alt=""/>
                </div>
                    <div className='hamburger'>
                        <i  className="ri-menu-line"></i>
                    </div>
                    <div className='nav'>
                        <div className='home'>
                            <link spy={true} to="home" activeClass="activeClass" smooth={true} >
                            <a>Home</a>
                            </link>
                        </div>
                        <link spy={true} to="sobre_mi" activeClass="activeClass" smooth={true} >
                            <div className='aboutMe'>
                                <a>Sobre mi </a>
                            </div>
                        </link>
                        <link spy={true} to="portfolio"  smooth={true} >
                            <div className='portfolio'>
                                <a>Portafolio</a>
                            </div>
                        </link>
                        <link spy={true} to="contact"  smooth={true} >
                            <div className='contact'>
                                <a>Contactame</a>
                            </div>
                        </link>
                    </div>
            </header>
            
             {/* { change === false &&
                       <header className='header'>
                <div className='headerImage'>
                    <img src={logo} alt=""/>
                </div>
                    <div className='hamburger'>
                        <i   className="ri-close-line"></i>
                    </div>
                    <div className='navResponsive'>
                        <div className='home'>
                            <a href="#home">Home</a>
                        </div>
                        <div className='aboutMe'>
                            <a href='#about_me'>Sobre mi</a>
                        </div>
                        <div className='portfolio'>
                            <a href='#portafolio'>Portafolio</a>
                        </div>
                        <div className='contact'>
                            <a href='#cantacteme'>Contactame</a>
                        </div>
                    </div>
            </header>
            } */}
    </div>
  )
}

export default Header