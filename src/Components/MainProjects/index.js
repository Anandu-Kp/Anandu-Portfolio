import React from 'react'
import crypto from "../../Assets/crypto-tracker.png"
import "./styles.css"

function MainProjects({ project, idx, setSelectedProject }) {
    return (
        <div key={idx} className='main-project' onClick={() => setSelectedProject(project)}>
            <img src={project.image}></img>
        </div>
    )
}

export default MainProjects