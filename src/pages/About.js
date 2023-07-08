import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
    const [user, setUser] = useState('mario')
    
    if (!user) {
        return <Navigate to='/' replace={true} />
    }
    return (
        <div className='home'>
            <h2>About Us</h2>
            <p>
                I am pleased to invite you to be a speaker at the upcoming TEDxTASUED event.
                Attached to this email is a document
                detailing how you can share your insights and expertise with our audience.
                Thank you in advance for considering our invitation.Best regards,
                Omolade Gbemisola adewale oretuga
            </p>

            <button onClick={()=> setUser(null)}>logout</button>
        </div>
    )
}

export default About
