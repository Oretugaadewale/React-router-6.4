import { Link, useLocation } from "react-router-dom"

export default function Breadcrumbs() {
    const location = useLocation()
    console.log(location)
    // /help/contact --> help | contact

    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink = + `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })



    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}
