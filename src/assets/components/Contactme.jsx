import React from 'react'
import "../style/Contactme.css"

const Contactme = () => {
  return (
    <div className='ContainerCatactme' id='contact' >
        <div className='InformationContact'>
            <h1>Contacta me</h1>
            <div>Soy desarrollador web y servicios de desarrollo
                para clientes de todo los tamaños trabaja conmigo</div>
        </div>
        <div className='Icons'>
            <a  className='icon  icon--telegtram' href="https://t.me/Ronald_carrillo"><i className="ri-telegram-line"></i></a>
            <a className='icon icon--linkedin'  href="https://www.linkedin.com/in/ronald-anderson-carrillo-parra-5514a1208/"><i className="ri-linkedin-line"></i></a>
            <a className='icon icon--gmail'  href="mailto:rcarrilloparra2016@gmail.com"><i className="ri-mail-line"></i></a>
            <a className='icon icon--github'  href="https://github.com/Ronald-Carrillo"><i className="ri-github-fill"></i></a>
        </div>
    </div>
  )
}

export default Contactme