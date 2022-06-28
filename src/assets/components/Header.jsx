import React, { useState } from 'react'
import logo from "../image/logo.png"
import "../style/Header.css"

const Header = () => {
    const [change, setChange] = useState(true)
    console.log('change', change)
    
  return (
    <div>
            {change === true &&
            <header className='header'>
                <div className='headerImage'>
                    <img src={logo} alt=""/>
                </div>
                    <div className='hamburger'>
                        <i onClick={()=>setChange(false)}  className="ri-menu-line"></i>
                    </div>
                    <div className='nav'>
                        <div className='home'>
                            <a href="`#${id.seccion}`">Home</a>
                        </div>
                        <div className='aboutMe'>
                            <a href='#about_me'>Sobre mi </a>
                        </div>
                        <div className='portfolio'>
                            <a href='#portafolio'>Portafolio</a>
                        </div>
                        <div className='contact'>
                            <a href='#cantacte_me '>Contactame</a>
                        </div>
                    </div>
            </header>
            }
             { change === false &&
                <header className='headerResponsive'>
                    <div className='headerImageResponsive'>
                        <img src={logo} alt=""/>
                    </div>
                    <div className='close'>
                        <i onClick={()=>setChange(true)}  class="ri-close-line"></i>
                    </div>
                        <div className='navResponsive'>
                            <div className='home'>
                                <a href='#home'>Home</a>
                            </div>
                            <div className='aboutMe'>
                                <a href='#about_me'>Sobre mi </a>
                            </div>
                            <div className='portfolio'>
                                <a href='#portafolio'>Portafolio</a>
                            </div>
                            <div className='contact'>
                                <a href='#cantacte_me '>Contactame</a>
                            </div>
                        </div>
                </header>
            }
    </div>
  )
}

export default Header