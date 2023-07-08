import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareersDetails = () => {
    //The id is what will also be in the name in your route
    const { id } = useParams()
    const career = useLoaderData()

    return (
        <div className='career-details'>
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>location: {career.location}</p>
            <div className='details'>
                <p>Fatherland Foundation is a non-profit
                    organization created to advance
                    African culture, faith, tourism, and
                    traditional values in the</p>
            </div>
        </div>

    )
}

export default CareersDetails


//loader function
// to fetch a single career or id
export const CareerDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`http://localhost:4000/careers/${id}`)

    //setting error element
    if (!res.ok) {
        throw Error('could not find that career')
    }

    return res.json()

}