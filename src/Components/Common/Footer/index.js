import React from 'react'
import "./styles.css"

import gmail from "../../../Assets/gmail-logo.png"
import instagram from "../../../Assets/instagram-logo.png"
import linkedin from "../../../Assets/linkedin-logo.png"
import github from "../../../Assets/github-logo.png"


function Footer() {

    return (
        <div className='footer' id='socials'>
            <div className='footer-header'>
                <span className='footer-title'>Anandu K P<span>.</span></span>
                <div className='footer-icons'>
                    <a href='mailto:anandukp06@gmail.com'> <img src={gmail}></img></a>

                    <a href='mailto:anandukp06@gmail.com'> <img src={instagram}></img></a>
                    <a href='https://www.linkedin.com/in/anandu-kp/'><img src={linkedin}></img></a>
                    <a href='https://github.com/Anandu-Kp'><img src={github}></img></a>
                </div>
            </div>
            <div className='footer-main'>
                <span className='footer-msg'>Thanks for visiting , Hope you liked it <span className='smiley'>:)</span></span>
                <span className='footer-credit'>Designed and developer by Me Ⓒ 2023</span>
            </div>
        </div>
    )
}

export default Footer