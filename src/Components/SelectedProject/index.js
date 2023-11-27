import React from 'react'
import "./styles.css"
import Dialog from '@mui/material/Dialog';

function ProjectDetails(props) {


    const { onClose, open, project } = props;

    const handleClose = () => {
        onClose();
    };



    return (
        <Dialog sx={{
            width: 1000,
            height: 1000,
        }} onClose={handleClose} open={open}>

            <div className="selected-project-container">
                <iframe src={project.deployed} ></iframe>
                <div className='selected-project-desc'>
                    <h2 className='selected-project-desc-title'>{project.name}</h2>
                    <div className='selected-project-techstack'>
                        {project.techstack.map((techstack, idx) => (
                            <span key={idx}>{techstack}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Dialog>
    );

}

export default ProjectDetails