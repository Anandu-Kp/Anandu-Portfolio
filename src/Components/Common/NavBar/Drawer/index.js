import "./styles.css"

import React from 'react'





import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function TemporaryDrawer({ handleSections }) {
    const [open, setOpen] = React.useState(false)

    return (
        <div>

            <Button className='link' onClick={() => setOpen(true)}><MenuRoundedIcon style={{ color: "black" }} /></Button>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='drawer-nav'>
                    <li onClick={() => handleSections("about")}>About</li>
                    <li onClick={() => handleSections("skills")}>Skills</li>
                    <li onClick={() => handleSections("projects")}>Projects</li>
                    <li onClick={() => handleSections("socials")}>Socials</li>
                </div>
            </Drawer>

        </div>
    );
}