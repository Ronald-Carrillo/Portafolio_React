import React from 'react'
import "../style/AboutMe.css"

const MenuProfile = ({title,setAboutMenu,AboutMenu}) => {
  return (
    <div>
      <div
        className={`menuLine${AboutMenu === title?"--selected":""}`}
        onClick={() => setAboutMenu(title)}
      >
        {title}
      </div>
     
    </div>
  )
}

export default MenuProfile