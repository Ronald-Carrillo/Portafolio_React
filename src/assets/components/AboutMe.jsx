import React, { useState } from 'react'
import image from "../image/perfil.jpg"
import "../style/AboutMe.css"
import MenuProfile from './MenuProfile'
import  Profile  from './Profile'
import  Skill  from './Skill'
import  Service  from './Service'


const AboutMe = () => {
    const [AboutMenu, setAboutMenu] = useState("Perfil")
  return (
    <div className='ContainerAboutMe' id='sobre_mi'>
        <div className='AboutImage'>
            <img src={image} alt="" />
        </div>
        <div className='AboutNav'>
            <h1> Sobre mi</h1>
                <div className='ContainerNav'>
                    <MenuProfile title="Perfil" setAboutMenu={setAboutMenu} AboutMenu={AboutMenu}></MenuProfile>
                    <MenuProfile title="Skills" setAboutMenu={setAboutMenu} AboutMenu={AboutMenu}></MenuProfile>
                    <MenuProfile title="Service" setAboutMenu={setAboutMenu} AboutMenu={AboutMenu} ></MenuProfile>
                </div>

                 {AboutMenu === "Perfil" && <Profile/>}
                 {AboutMenu === "Skills" && <Skill/>}
                 {AboutMenu === "Service" && <Service/>} 
        </div>
    </div>
  )
}

export default AboutMe