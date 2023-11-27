import React from 'react'
import "./styles.css"
import MenuIcon from '@mui/icons-material/Menu';

import TemporaryDrawer from './Drawer';

function NavBar({ handleSections }) {
    return (
        <div className='nav-bar'>
            <div className='left-nav'>
                <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='nav-title'>Portfolio<span>.</span></p>
            </div>
            <div className='right-nav'>
                <li onClick={() => handleSections("about")}>About</li>
                <li onClick={() => handleSections("skills")}>Skills</li>
                <li onClick={() => handleSections("projects")}>Projects</li>
                <li onClick={() => handleSections("socials")}>Socials</li>
            </div>
            <div className='drawer'><TemporaryDrawer handleSections={handleSections} /></div>

        </div>
    )
}

export default NavBar