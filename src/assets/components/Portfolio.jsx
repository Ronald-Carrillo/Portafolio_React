import React from 'react'
import { ContainerProf } from '../../data'
import "../style/Portfolio.css"

const Portfolio = () => {
  return (
    <div style={{position: "relative"}} id="portfolio">
        <h1 className='titleSection'>Portafolio</h1>
         
         <div className='containerSection'>
                {ContainerProf.map((d, index)=>
                        <div className='containerProfile' key={index+1}>
                            <div className='imageProyect'><img  src={d.image} alt="" /></div>
                            <div className='containerinfo'>
                                <h1>{d.title}</h1>
                                <h2>{d.description}</h2>
                            <button class="cssbuttons-io" >
                                <a href={d.href}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"></path></svg> Code</a>
                            </button>
                            </div>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Portfolio