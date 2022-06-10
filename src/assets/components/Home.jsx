import React from 'react'
import logo from "../image/twiter.png"
import perfil from "../image/perfil.jpg"
import "../style/Home.css"



const Home = () => {
    const socialMedia = [
        {
          media: "twitter",
          image:logo
        },
        {
          media: "twitter",
          image:logo
        },
        {
          media: "twitter",
          image:logo
        }
    ]
  return (
    <div>
        <div className='information'>
                <div>
                    <div className="titleName">Ronald Carrillo Parra</div>
                    <div className="descriptionSkill">Mechatronic Engineer | Web developer | front-end developer</div>
                </div>
                <div className="imagePerfil">
                    <img src={perfil} alt="" />
                </div>
        </div>
        {/* {socialMedia.map(d =>
            <div className='containerIcons'>
                <div className="iconItem">
                    <figure>
                        <img src={d.image} alt="" />
                    </figure>
                </div>
                <div className="media">
                    <h2>{d.media}</h2>
                </div>
            </div> 
        )} */}
    </div>
    
  )
}

export default Home