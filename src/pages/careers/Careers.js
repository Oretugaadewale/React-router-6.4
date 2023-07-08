import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()

    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

// data loader function 
export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')

    //setting error element
    if (!res.ok) {
        throw Error('could not fetch the careers')
    }

    return res.json()
}