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
                            <Link spy={true} to="home" activeClass="activeClass" smooth={true} >
                            <li>Home</li>
                            </Link>
                        </div>
                        <Link spy={true} to="sobre_mi"  smooth={true} >
                            <div className='aboutMe'>
                                <li>Sobre mi </li>
                            </div>
                        </Link>
                        <Link spy={true} to="portfolio"  smooth={true} >
                            <div className='portfolio'>
                                <li>Portafolio</li>
                            </div>
                        </Link>
                        <Link spy={true} to="contact"  smooth={true} >
                            <div className='contact'>
                                <li>Contactame</li>
                            </div>
                        </Link>
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