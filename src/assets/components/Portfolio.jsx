import React from 'react'
import { ContainerProf } from '../../data'
import "../style/Portfolio.css"

const Portfolio = () => {
  return (
    <div>
        <div className='titleSection'>Portafolio</div>
        
         <div className='containerSection'>
                {ContainerProf.map((d)=>
                    <div className='containerProfile'>
                        <div className='imageProyect'><img  src={d.image} alt="" /></div>
                        <div className='containerinfo'>
                            <h1>{d.title}</h1>
                            <h2>{d.description}</h2>
                        </div>
                        <button className='button '>web site</button>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Portfolio