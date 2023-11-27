import React, { useState } from 'react'
import OtherProjects from '../../Components/OtherProjects'
import "./styles.css"
import MainProjects from '../../Components/MainProjects'
import ProjectDetails from '../../Components/SelectedProject'
import crypto from "../../Assets/crypto-tracker.png"
import blogger from "../../Assets/blogger.png"


function Projects() {



    const otherProjectList = [
        {
            name: "Book My Show",
            details: ["Backend replica of book my show application", "we can select particular theater,cinema,show and book preferred seats."],
            link: "https://github.com/Anandu-Kp/BookMyShow",
            techStack: ["Spring Boot", "Jpa", "Hibernate", "MySql"]

        },
        {
            name: "Chat App",
            details: ["Globally availible Chat Room", "User can send message and recieve message from anonimous Users from the entire world"],
            link: "https://github.com/Anandu-Kp/Chat-App",
            techStack: ["Javascript", "ExpressJs", "HTML", "CSS"]

        },
        {
            name: "Rent To Fit",
            details: ["Back end of a sports items renting platform ",
                "Api's to add user, add product, get searched products,book products ",
                "using Java ,Spring Boot,Hibernate, Jpa, Mysql"],
            link: "https://github.com/Anandu-Kp/Rent-To-Fit",
            techStack: ["Spring Boot", "Jpa", "Hibernate", "MySql"]


        },
        {
            name: "Text editor",
            details: ["In this there is a panel that contain a text area and a menu bar. ",
                "• Menu bar contain two menus file and edit. file menu contain menu items that are new file,open file save file.edit menu contains menu items that are select all,copy,cut,paste close. "],
            link: "https://github.com/Anandu-Kp/AccioTextEditor",
            techStack: ["java Swing"]


        },
        {
            name: "Snake Game",
            details: ["Snake player is one the popular game of all time. ",
                "In this project ,there is a panel that contain a snake and apple that the snake can move to any direction ,the user will be out of the game if the snake touches itself  or at any of the end of the panel."],
            link: "https://github.com/Anandu-Kp/Snake-Game",
            techStack: ["java Swing"]
        },
        {
            name: "Search Engine",
            details: ["Website that gives specific website links based on the entered keyword.",
                "It has home page,search result page a history page."],
            link: "https://github.com/Anandu-Kp/Search-Engine",
            techStack: [" Java Servlets", "JSP", "HTML", "CSS"]

        }
    ]
    // add image 
    const mainprojects = [
        {
            id: 1,
            name: "Crypto Tracker",
            github: "https://github.com/Anandu-Kp/Crypto-Tracker",
            deployed: "https://anandu-kp-crypto-tracker.netlify.app/",
            image: crypto,
            techstack: ["ReactJs", "HTML", "CSS", "ChartJS"],
        },
        {
            id: 2,
            name: "Blogger",
            github: "https://github.com/Anandu-Kp/Blogger-Frontend",
            deployed: "https://blogger-navy.vercel.app",
            image: blogger,
            techstack: ["NodeJs", "ReactJs", "ExpressJs", "MongoDB"]
        },


    ]

    const [selectedProject, setSelectedProject] = useState(mainprojects[0]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div className='projects' id='projects'>
            <><h1>Projects <span className='dot'>.</span></h1>

                <div className='main-project-container'>
                    {mainprojects.map((project, idx) =>
                    (
                        <div onClick={handleClickOpen}>
                            <MainProjects project={project} idx={idx} setSelectedProject={setSelectedProject} />
                        </div>
                    )
                    )}

                </div>
                <ProjectDetails
                    open={open}
                    onClose={handleClose}
                    project={selectedProject} />
                <div className='other-projects'>
                    {otherProjectList.map((project, idx) =>
                    (
                        <OtherProjects project={project} idx={idx} />
                    )
                    )}
                </div></>




        </div>
    )
}

export default Projects