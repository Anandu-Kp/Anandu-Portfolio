import React from 'react'
import "./styles.css"
import Dialog from '@mui/material/Dialog';

function ProjectDetails(props) {


    const { onClose, open, project } = props;

    const handleClose = () => {
        onClose();
    };
const handleFullscreen= () => {
    let link = document.createElement("a");
    link.href=project.deployed;
    link.click();
}


    return (
        <Dialog sx={{
            width: 1000,
            height: 1000,
        }} onClose={handleClose} open={open}>

            <div className="" style={{ marginLeft: "auto", marginRight: "auto", width: "100%", display: "flex", flexDirection: "column", marginTop: 0, border: "0px solid lightgrey", borderRadius: 0 }}>
                <div style={{ marginTop: -25, padding: 5, width: "100%", backgroundColor: "#f0f0f0", fontSize: "150%", borderBottom: "1px solid lightgrey", height: 30, borderTopLeftRadius: 10, borderTopRightRadius: 10, display: "flex", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <h1 onClick={handleClose} style={{ zIndex: 50, marginTop: 30, cursor: "pointer" }}><strong style={{ color: "#FE5E58" }}> .</strong></h1>
                        <h1 style={{ marginTop: 30 }}><strong style={{ color: "#FEBD2C" }}>.</strong></h1>
                        <h1 onClick={handleFullscreen} style={{ marginTop: 30,cursor: "pointer" }}><strong style={{ color: "rgb(2, 141, 2)" }}>.</strong></h1>
                    </div>

                </div>
                <div style={{ display: "flex", flexDirection: 'column', borderRadius: 0 }}>
                    <div className="iframeDiv">
                        <iframe style={{ width: "100%", height: "75vh" }} allowFullScreen src={project.deployed} className="iframeFrame" />
                    </div>
                    <div className="instaTag" style={{ padding: 20, fontSize: "80%" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
                            <div className='selected-project-desc'>
                                <h2 className='selected-project-desc-title'>{project.name}</h2>
                                <div className='selected-project-techstack'>
                                    {project.techstack.map((techstack, idx) => (
                                        <span key={idx}>{techstack}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Dialog>
    );

}

export default ProjectDetails