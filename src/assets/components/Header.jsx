import React, { useState, useEffect } from 'react'
import logo from "../image/logo.png"
import "../style/Header.css"

const Header = () => {
    const [activeLink, setactiveLink] = useState("home")
    const [scolled, setScolled] = useState(false)
    const [change, setChange] = useState(true)
    console.log('change', change)
    
    useEffect(() => {
     const onScroll = () => {
        if(window.scrollY > 50 ){
            setScolled(true)
        } else{
            setScolled(false)
        }
     } 

      window.addEventListener("scroll", onScroll)    
      return () => window.removeEventListener("scroll", onScroll) 
    }, [])
    
    
    const onUpdateActiveLink = (value) =>{
         setactiveLink(value)
    }

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
                        </div>
                            <a href="#home" className={activeLink === "home" ? "active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink("home")}>Home</a>
                        <div className='aboutMe'>
                            <a href='#about_me' className={activeLink === "about_me" ? "active navbar-link": "navbar-link"}  onClick={()=>onUpdateActiveLink("about_me")}>Sobre mi </a>
                        </div>
                        <div className='portfolio'>
                            <a href='#portafolio' className={activeLink === "portafolio" ? "active navbar-link": "navbar-link"}  onClick={()=>onUpdateActiveLink("portafolio")}>Portafolio</a>
                        </div>
                        <div className='contact'>
                            <a href='#cantacte_me' className={activeLink === "cantacte_me" ? "active navbar-link": "navbar-link"}  onClick={()=>onUpdateActiveLink("cantacte_me")}>Contactame</a>
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
                        <i onClick={()=>setChange(false)}  className="ri-menu-line"></i>
                    </div>
                    <div className='nav'>
                        <div className='home'>
                        </div>
                            <a href="#home" className={activeLink === "home" ? "active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink("home")}>Home</a>
                        <div className='aboutMe'>
                            <a href='#about_me' className={activeLink === "about_me" ? "active navbar-link": "navbar-link"}  onClick={()=>onUpdateActiveLink("about_me")}>Sobre mi </a>
                        </div>
                        <div className='portfolio'>
                            <a href='#portafolio' className={activeLink === "portafolio" ? "active navbar-link": "navbar-link"}  onClick={()=>onUpdateActiveLink("portafolio")}>Portafolio</a>
                        </div>
                        <div className='contact'>
                            <a href='#cantacte_me' className={activeLink === "cantacte_me" ? "active navbar-link": "navbar-link"}  onClick={()=>onUpdateActiveLink("cantacte_me")}>Contactame</a>
                        </div>
                    </div>
            </header>
            }
    </div>
  )
}

export default Header