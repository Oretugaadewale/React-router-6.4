import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>Fatherland Foundation is a non-profit organization created to
                advance African culture, faith, tourism, and traditional
                values in the U.S. and worldwide.
                Fatherland Foundation was created by Fatherland Global Corporation and
                operated independently under the governance of its own Board Of Directors</p>

            <p>Go to the <Link to='/'>Homepage</Link>.</p>
        </div>
    )
}

export default NotFound
