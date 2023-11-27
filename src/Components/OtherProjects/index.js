import React from 'react'
import "./styles.css"
import github from "../../Assets/github-logo.png"

function otherProjects({ project, idx }) {

    return (

        <div key={idx} className='other-project'>
            <div className='other-project-cover'>
                <span >{project.name}</span>
            </div>
            <div className='other-project-main'>
                <div className='other-project-header'>
                    <span className='other-project-main-title'>{project.name}</span>
                    <a href={project.link}><img src={github}></img></a>
                </div>
                <div className='other-project-desc'>{project.details.map((ele) => <li>{ele}</li>)}</div>
                <div className='other-project-footer'>
                    <span className='tech-stack'>{project.techStack.join("  ")}</span>
                </div>
            </div>
        </div>
    )
}

export default otherProjects