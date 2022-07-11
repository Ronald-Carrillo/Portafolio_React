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
          image:Twitter,
          url:"https://twitter.com/ronaldc82890728"
        },
        {
          media: "Linkedin",
          image:linkedin,
          url:"https://www.linkedin.com/in/ronald-carrillo/"
        },
        {
          media: "GitHub",
          image:github,
          url:"https://github.com/Ronald-Carrillo"
        },
        {
          media: "Facebook",
          image:facebook,
          url:"https://www.facebook.com/ronald.carrilloaz/"
        },
    ]
  return (
    <div id='home'>
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
                <div  className='containerIcons' key={index}>
                    <a href={d.url} className="iconItem">
                        <figure>
                            <img src={d.image} alt="" />
                        </figure>
                </a>
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