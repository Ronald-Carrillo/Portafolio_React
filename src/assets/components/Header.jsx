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
                        <div>Home</div>
                    </div>
                    <div className='aboutMe'>
                        <div>Acerca de mi </div>
                    </div>
                    <div className='services'>
                        <div>Servicios</div>
                    </div>
                    <div className='portfolio'>
                        <div>Portafolio</div>
                    </div>
                    <div className='contact'>
                        <div>Contactame</div>
                    </div>
                </div>
        </header>
    </div>
  )
}

export default Header