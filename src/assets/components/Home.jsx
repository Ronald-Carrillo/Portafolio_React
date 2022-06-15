import React from 'react'
import Twitter from "../image/twitter.png"
import linkedin from "../image/linkedin.png"
import github from "../image/github.jpg"
import facebook from "../image/facebook.jpg"
import perfil from "../image/perfil.jpg"
import "../style/Home.css"



const Home = () => {
    const socialMedia = [
        {
          media: "Twitter",
          image:Twitter
        },
        {
          media: "Linkedin",
          image:linkedin
        },
        {
          media: "GitHub",
          image:github
        },
        {
          media: "Facebook",
          image:facebook
        },
    ]
  return (
    <div>
        <div className='information'>
                <div className='containerInformation'>
                    <div className="titleName">Ronald Carrillo Parra</div>
                    <div className="descriptionSkill">Mechatronic Engineer | Web developer | front-end developer</div>
                </div>
                <div className="imagePerfil">
                    <img src={perfil} alt="" />
                </div>
        </div>
        <div className='containerMedia'>
            {socialMedia.map((d, index)=>
                <div className='containerIcons' key={index}>
                    <div className="iconItem">
                        <figure>
                            <img src={d.image} alt="" />
                        </figure>
                </div>
                    <div className="media">
                        <h2>{d.media}</h2>
                    </div>
                  </div>
            )}
        </div>
    </div>
    
  )
}

export default Home