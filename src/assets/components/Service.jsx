import React from 'react'
import icon1 from "../image/icon1.png"
import icon2 from "../image/icon2.png"
import icon3 from "../image/icon3.png"


const Services = [
    {
        image:icon1,
        title: "Diseñador web",
        description:"aplicar y combinar de manera dinámica los diferentes elementos que forman parte de un sitio web colores, tipografías, menú, botones, etc"
    },
    {
        image:icon2,
        title:"Front-end DEveloper",
        description:"aplicación que interactúa con los usuarios, es conocida como el lado del cliente Un desarrollador front end debe conocer lenguajes de programación."
    },
    {
        image:icon3,
        title:"Internet Of Things (IoT)",
        description:"la agrupación e interconexión de dispositivos y objetos a través de una red bien sea privada o Internet, la red de redes, dónde todos ellos podrían ser visibles e interaccionar"
    },
]

const Service = () => {
  return (
    <div className="container">
 		 <div className="content">
              {Services.map((d)=>
                <div className="box">
                    <div className="inner">
                        <div className="icon">
                                <img  style={{width: "20%", color: "blue" }} src={d.image} alt="" />
                            </div>
                        <h3>{d.title}</h3>
                        <p>{d.description}</p>
                    </div>
                </div>
               )}
 		 </div>
 	 </div>
  )
}

export default Service;