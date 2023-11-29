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
            <Skill type={"Language"} items={[{ image: java, title: "Java" }, { image: java_script, title: "Javascript" }]} />
            <Skill type={"Frontend"} items={[{ image: reactjs, title: "React Js" }]} />
            <Skill type={"Backend"} items={[{ image: nodejs, title: "Node Js" }, { image: expressjs, title: "Express Js" }, { image: springboot, title: "Spring Boot" }]} />
            <Skill type={"Database"} items={[{ image: mysql, title: "My Sql" }, { image: mongodb, title: "MongoDB" }]} />
        </div>
    )
}

export default Skills