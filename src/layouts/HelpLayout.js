import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
    return (
        <div className='help-layout'>

            <h2>Website Help</h2>
            <p>In traditional websites,
                the browser requests a document
                from a web server, </p>

            <nav>
                <NavLink to='faq'>view the FAQ</NavLink>
                <NavLink to='contact'>contact Us</NavLink>
            </nav>

            <Outlet />

        </div>
    )
}

export default HelpLayout
