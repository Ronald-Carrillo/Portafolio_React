import React from 'react'
import javascript from "../image/javascript.png"
import html from "../image/htm.png"
import css from "../image/css.png"
import git from "../image/git.png"
import react from "../image/React.png"
import webpack from "../image/webpack.png"
import node from "../image/node.jpg"

const Skills = [
    {
        image: javascript,
        technology:"Javascript" 
    },
    {
        image:html,
        technology:"Html"
    },
    {
        image:css,
        technology:"Css"
    },
    {
        image:git,
        technology:"Git & GitHub"
    },
    {
        image:react,
        technology: "React"
    },
    {
        image:webpack,
        technology: "Webpack"
    },
    {
        image:node,
        technology: "Node"
    },
]

const Skill = () => {
  return (
    <div className='SkillProfile'>
        {Skills.map((d)=>
            <div className='containerSkills'>
                <div className="SkillImage">
                    <img src={d.image} alt="" style={{width: "100%"}} />
                </div>
                <div className="Skill">
                  {d.technology}
                </div>
            </div>
        )}
    </div>
  )
}

export default Skill;