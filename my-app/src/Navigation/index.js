import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

// https://stackoverflow.com/questions/42253277/react-router-v4-how-to-get-current-route
// https://getbootstrap.com/docs/4.0/components/navbar/
const Navigation = () => {
    const pathName = useLocation().pathname;

    const usersData = useSelector(state => state.usersData)

    return (
        <nav className={"navbar-dark py-3"}>
            <Link className={"nav-link"} to={"/profile"}><img
                src={usersData.currentUser.pfp}
                className={"img-thumbnail rounded-circle float-end"} width={55} height={55}/></Link>

                <ul className={"nav nav-pills "}>
                    {/*REFERECE: https://www.pluralsight.com/guides/applying-classes-conditionally-react*/}
                    <li className={"nav-item"}><Link className={`nav-link ${pathName === "/" ? "active" : ""}`}
                                                     to={"/"}>Home</Link></li>
                    {/*<li className={"nav-item"}><Link className={`nav-link ${pathName === "/details" ? "active" : ""}`}*/}
                    {/*                                 to={"/details"}>Details</Link></li>*/}
                    <li className={"nav-item"}><Link className={`nav-link ${pathName === "/login" ? "active" : ""}`}
                                                     to={"/login"}>Login</Link></li>
                    <li className={"nav-item"}><Link className={`nav-link ${pathName === "/profile" ? "active" : ""}`}
                                                     to={"/profile"}>Profile</Link></li>
                    <li className={"nav-item"}><Link className={`nav-link ${(pathName.includes("/search") || pathName.includes("/results") || pathName.includes("/details")) ? "active" : ""}`}
                                                     to={"/search"}>Search</Link></li>
                </ul>
        </nav>
    )
}
export default Navigation