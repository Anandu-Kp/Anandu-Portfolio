import React from 'react'
import "./styles.css"
import twitter from "../../Assets/twitter_qr.png"
import dots from "../../Assets/mac-dots-removebg-preview.png"

function About() {
    return (
        <div className='about-container' id='about'>
            <div className='about'>
                <h2 className='about-title section-title'>About Me <span className='dot'>.</span></h2>
                <p className='about-description'>
                    <span >Hello,</span><br></br>
                    I am a 22 year old software developer who's skilled in java and javascript.
                    I have hands on experience in building projects using ReactJS and Spring Boot.
                </p>
            </div>
            <div className='twitter-card'>
                <div className='twitter-card-header'>
                    <img src={dots}></img>
                </div>
                <div className='twitter-card-main'>
                    <img className='twitter-qr' src={twitter} ></img>
                    <div>
                        <span>@anandukp01</span>
                        <span>Scan my X QR Code</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About