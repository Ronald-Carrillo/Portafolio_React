import React, { useState, useEffect } from 'react'
import logo from "../image/logo.png"
import "../style/Header.css"

const Header = () => {
    const [change, setChange] = useState(false)
  return (
    <div>
            {change === true &&
            <header className='header'>
                <div className='headerImage'>
                    <img src={logo} alt=""/>
                </div>
                    <div className='hamburger'>
                        <i  className="ri-menu-line"></i>
                    </div>
                    <div className='nav'>
                        <div className='home'>
                        </div>
                            <a href="#home">Home</a>
                        <div className='aboutMe'>
                            <a href='#about_me'>Sobre mi </a>
                        </div>
                        <div className='portfolio'>
                            <a href='#portafolio'>Portafolio</a>
                        </div>
                        <div className='contact'>
                            <a href='#cantacte_me'>Contactame</a>
                        </div>
                    </div>
            </header>
            }
             { change === false &&
                       <header className='header'>
                <div className='headerImage'>
                    <img src={logo} alt=""/>
                </div>
                    <div className='hamburger'>
                        <i   className="ri-menu-line"></i>
                    </div>
                    <div className='nav'>
                        <div className='home'>
                        </div>
                            <a href="#home">Home</a>
                        <div className='aboutMe'>
                            <a href='#about_me'>Sobre mi </a>
                        </div>
                        <div className='portfolio'>
                            <a href='#portafolio'>Portafolio</a>
                        </div>
                        <div className='contact'>
                            <a href='#cantacte_me'>Contactame</a>
                        </div>
                    </div>
            </header>
            }
    </div>
  )
}

export default Header