import React, { useEffect, useState } from 'react'
import "./styles.css"


function Home() {
    const [role, setRole] = useState(0)
    const roleArr = ["Developer", "Student", "Tech Enthusiast"];
    const changeRole = () => {
        setRole((prev) => (prev + 1) % 3)
    }
    useEffect(() => {
        setTimeout(changeRole, 1000)
    }, [role])
    return (
        <div className='home'>
            <h1 className='home-title'>Hi, I’m Anandu</h1>
            <h2 className='home-description'>I’m a
                <span className='role'> {roleArr[role]}</span>
                <span className='dot'>.</span>
            </h2>
        </div>
    )
}

export default Home