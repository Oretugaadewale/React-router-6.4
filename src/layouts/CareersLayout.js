import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
    return (
        <div className='careers-layout'>
            <h2>Careers</h2>
            <p>Fatherland Foundation
                is a non-profit organization created to advance</p>
            <Outlet />
        </div>
    )
}

export default CareersLayout
