import "./styles.css"

import React from 'react'

function Skill({ type, items }) {
  return (
    <div className="skill" >
      <span className="skill-type">{type} : </span>
      <div className="skills">
        {
          items.map((item, idx) =>
          (
            <img

              src={item}></img>
          ))
        }
      </div>

    </div>
  )
}

export default Skill