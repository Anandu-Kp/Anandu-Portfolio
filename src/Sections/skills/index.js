import "./styles.css"
import React from 'react'


import nodejs from "../../Assets/techstacks/nodejs.png"
import reactjs from "../../Assets/techstacks/reactjs.png"
import expressjs from "../../Assets/techstacks/expressjs.png"
import springboot from "../../Assets/techstacks/springboot.png"
import mysql from "../../Assets/techstacks/mysql.png"
import mongodb from "../../Assets/techstacks/mongodb.png"
import java from "../../Assets/techstacks/java.png"
import java_script from "../../Assets/techstacks/javascript.png"
import Skill from "../../Components/skill"


function Skills() {
    return (
        <div className="skill-container" id="skills">
            <h1>Skills <span className='dot'>.</span></h1>
            <Skill type={"Language"} items={[java, java_script]} />
            <Skill type={"Frontend"} items={[reactjs]} />
            <Skill type={"Backend"} items={[nodejs, expressjs, springboot]} />
            <Skill type={"Database"} items={[mysql, mongodb]} />
        </div>
    )
}

export default Skills