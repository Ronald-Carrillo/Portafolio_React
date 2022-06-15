import React from 'react'
import logo from "../image/logo.png"
import "../style/Header.css"

const Header = () => {
    
  return (
    <div>
        <header className='header'>
            <div className='headerImage'>
                <img src={logo} alt=""/>
            </div>
                <div className='nav'>
                    <div className='home'>
                        <a>Home</a>
                    </div>
                    <div className='aboutMe'>
                        <a>Sobre mi </a>
                    </div>
                    <div className='portfolio'>
                        <a>Portafolio</a>
                    </div>
                    <div className='contact'>
                        <a>Contactame</a>
                    </div>
                </div>
        </header>
    </div>
  )
}

export default Header